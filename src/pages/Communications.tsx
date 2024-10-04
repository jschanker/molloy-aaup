import articles from '../assets/communications.json';
// import articleCategories from '../assets/article-categories.json';
// import { ButtonGroup, Button, Form, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

async function aesDecrypt(ciphertext: string, key: string) {
  const keyUint8 = new TextEncoder().encode(key);
  const ciphertextUint8Arr = Array.from(atob(ciphertext)).map((x) =>
    x.charCodeAt(0)
  );
  const ciphertextUint8 = new Uint8Array(ciphertextUint8Arr).buffer;

  const decryptionKey = await window.crypto.subtle.importKey(
    'raw',
    keyUint8,
    'AES-CBC',
    false,
    ['decrypt']
  );

  const iv = new Uint8Array(ciphertextUint8Arr.slice(0, 16)).buffer;
  try {
    const decrypted = await window.crypto.subtle.decrypt(
      {
        name: 'AES-CBC',
        iv,
      },
      decryptionKey,
      ciphertextUint8.slice(16)
    );

    return new TextDecoder().decode(decrypted);
  } catch (e) {
    // console.log("ERROR", e);
    return null;
  }
}

async function decryptArticles(
  articleKey: string,
  allowedToAccessPhrase: string
) {
  const articlesContent = [];
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].protect) {
      const decryptedPassPhrase = await aesDecrypt(
        articles[i].encryptedPassPhrase || '',
        articleKey
      );
      if (decryptedPassPhrase === allowedToAccessPhrase) {
        articlesContent.push(
          atob((await aesDecrypt(articles[i].content, articleKey)) || '')
        );
      } else {
        articlesContent.push(null);
      }
    } else {
      articlesContent.push(
        decodeURIComponent(escape(atob(articles[i].content)))
      );
    }
  }
  return articlesContent;
}

const allowedToAccessPhrase = 'ACCESS GRANTED';

export default function Communications() {
  const [keys, setKeys] = useState(['']);
  const [key, setKey] = useState('');
  const [allowedToAccessArr, setAllowedToAccessArr] = useState(
    articles.map((x: { protect: boolean }) => !x.protect)
  );
  const [articleContent, setArticleContent] = useState(
    new Array(allowedToAccessArr.length)
  );
  // const [selectedCategories, setSelectedCategories] = useState([1]);
  // const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const decryptKey = (keys.length > 0 ? keys[keys.length - 1] : '')
      .substring(0, 32)
      .padEnd(32, ' ');
    decryptArticles(decryptKey, allowedToAccessPhrase).then((result) => {
      setAllowedToAccessArr(
        allowedToAccessArr.map(
          (canAccess: boolean, i: number) => canAccess || result[i] !== null
        )
      );
      setArticleContent(result);
    });
  }, [keys]);

  return (
    <div className="container-fluid">
      <h1>Communications</h1>
      <a href="/assets/aaup_local_6741_aft_7-17-24_mtg.pdf" target="_blank">
        AAUP Local 6741 All Member Meeting Notes from 7/17/24
      </a>
      <form>
        {/*<label htmlFor="filter-categories">Filter articles by:&nbsp;</label>
        <ButtonGroup id="filter-categories">
          {articleCategories.map((category: { id: number; title: string }) => (
            <Button
              key={category.id}
              variant={
                selectedCategories.includes(category.id)
                  ? 'primary'
                  : 'secondary'
              }
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.title}
            </Button>
          ))}
        </ButtonGroup>
        <br />
        <br />*/}
        {/*<InputGroup style={{ width: '100%' }}>*/}
        <label htmlFor="password-input">
          Password to access Protected Articles:&nbsp;
        </label>
        <input
          type="text"
          id="password-input"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          maxLength={32}
        ></input>
        <button
          onClick={(e) => {
            setKeys([...keys, key.substring(0, 32).padEnd(32, ' ')]);
            setKey('');
            /*
		  decryptArticles(key.substring(0, 32).padEnd(32, " "), allowedToAccessPhrase).then((result) => {
		    setAllowedToAccessArr(allowedToAccessArr.map((canAccess, i) => canAccess || result[i] !== null));
			setArticleContent(result);
		  });
		  */
            e.preventDefault();
          }}
        >
          Submit
        </button>
        &nbsp;&nbsp;
        {/*<InputGroup.Text id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>*/}
        {/*<span className="input-group-text" id="basic-addon1">
            <label htmlFor="search-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
              </svg>
            </label>
          </span>
          <Form.Control
            type="text"
            placeholder="Search..."
            aria-label="Search"
            id="search-bar"
            aria-describedby="basic-addon1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />*/}
        {/*<Button variant="outline-secondary">Search</Button>*/}
        {/*</InputGroup>*/}
      </form>
      {articles.map(
        (
          article: {
            title: string;
            categoryId: number;
            published: string;
            updated: string;
          },
          index: number
        ) => {
          if (
            !allowedToAccessArr[index] /* ||
            !selectedCategories.includes(article.categoryId) ||
            (searchTerm !== '' &&
              !article.title
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              !articleContent[index]
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()))*/
          )
            return '';
          else {
            return (
              <article key={article?.title || index.toString()}>
                <header className="entry-header responsive-max-width">
                  <h2 className="entry-title">{article?.title}</h2>
                </header>
                {
                  <div
                    className="entry-content"
                    dangerouslySetInnerHTML={{
                      __html: articleContent[index]
                        ?.replace(/â\x80\x99/g, "'")
                        .replace(/â\x80\x9C|â\x80\x9D/g, `"`)
                        .replace(/â\x80\x93/g, '-')
                        .replace(/â\x80¦/g, '&hellip;')
                        .replace(/â\x80\x94/g, '-')
                        .replace(/â\x97\x8F/g, '●'),
                    }}
                  />
                }
                <footer className="entry-footer responsive-max-width">
                  <span className="byline">
                    <svg
                      className="svg-icon"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <span className="screen-reader-text">Posted by</span>
                    <span className="author vcard">
                      <a
                        className="url fn n"
                        href="https://molloyaaup.wordpress.com/author/molloyaaup/"
                      >
                        molloyaaup
                      </a>
                    </span>
                  </span>
                  {/*<span className="posted-on">
                    <svg
                      className="svg-icon"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <defs>
                        <path id="a" d="M0 0h24v24H0V0z"></path>
                      </defs>
                      <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible"></use>
                      </clipPath>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
                    </svg>
                    <time
                      className="entry-date published"
                      dateTime={article?.published}
                    >
                      {' '}
                      {format(new Date(article?.published), 'MMMM d, yyyy')}
                    </time>
                    <time className="updated" dateTime={article?.updated}>
                      {format(new Date(article?.updated), 'MMMM d, yyyy')}
                    </time>
                  </span>
                  <span className="cat-links">
                    <svg
                      className="svg-icon"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <span className="screen-reader-text">Posted in</span>
                    <a
                      href="https://molloyaaup.wordpress.com/category/uncategorized/"
                      rel="category tag"
                    >
                      {articleCategories.find(
                        (c: { id: number }) => article?.categoryId === c.id
                      )?.title || 'Uncategorized'}
                    </a>
                  </span>*/}
                  <span className="comments-link">
                    <svg
                      className="svg-icon"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <a href="#respond">
                      Leave a comment
                      <span className="screen-reader-text">
                        {' '}
                        on Molloy AAUP Response to George&nbsp;Floyd
                      </span>
                    </a>
                  </span>{' '}
                </footer>
              </article>
            );
          }
        }
      )}
    </div>
  );
}
