async function aesEncrypt(plaintext, key) {
  const keyUint8 = new TextEncoder().encode(key);
  const plaintextUint8 = new TextEncoder().encode(plaintext);

  const encryptionKey = await window.crypto.subtle.importKey(
    'raw',
    keyUint8,
    'AES-CBC',
    true,
    ['encrypt', 'decrypt']
  );

  const iv = crypto.getRandomValues(new Uint8Array(16));
  const plaintextWithIV = new Uint8Array([...iv, ...plaintextUint8]);

  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: 'AES-CBC',
      iv,
    },
    encryptionKey,
    plaintextUint8
  );

  return btoa(
    String.fromCharCode.apply(null, [...iv, ...new Uint8Array(encrypted)])
  );
}

async function aesDecrypt(ciphertext, key) {
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

  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: 'AES-CBC',
      iv,
    },
    decryptionKey,
    ciphertextUint8.slice(16)
  );

  return new TextDecoder().decode(decrypted);
}

async function encryptArticles(
  shouldProtectArticles,
  content,
  articleKey,
  allowedToAccessPhrase
) {
  const articlesContent = [];
  const encryptedPassPhrase = await aesEncrypt(
    allowedToAccessPhrase,
    articleKey
  );
  for (let i = 0; i < content.length; i++) {
    const articleContent = btoa(unescape(encodeURIComponent(content[i])));
    if (shouldProtectArticles[i]) {
      articlesContent.push(await aesEncrypt(articleContent, articleKey));
    } else {
      articlesContent.push(articleContent);
    }
  }
  return { articles: articlesContent, encryptedPassPhrase };
}

const articles = Array.from(document.querySelectorAll('article'));
const shouldProtectArticles = articles.map((x) =>
  x.querySelector('h2').innerText.startsWith('Protected')
);
const allowedToAccessPhrase = 'ACCESS GRANTED';
const articleKey = prompt('Enter password:').padEnd(32, ' ');
const content = articles.map(
  (x) => x.querySelector('.entry-content')?.innerHTML
);
encryptArticles(
  shouldProtectArticles,
  content,
  articleKey,
  allowedToAccessPhrase
).then((results) => {
  const finalResults = articles.map((x, i) => ({
    protect: shouldProtectArticles[i],
    encryptedPassPhrase: shouldProtectArticles[i]
      ? results.encryptedPassPhrase
      : undefined,
    title: x.querySelector('h2').innerText,
    content: results.articles[i],
    published: x.querySelector('.published')?.getAttribute('datetime'),
    updated: x.querySelector('.updated')?.getAttribute('datetime'),
  }));
  console.log(finalResults);
  console.log(JSON.stringify(finalResults));
});
