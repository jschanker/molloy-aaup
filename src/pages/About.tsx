export default function About() {
  const positions = {
    President: 'Christine Barrow',
    'Vice President': 'Cheryl Camenzulli',
    Secretary: 'Jason Schanker',
    Treasurer: 'John Eterno',
    'Committee A': 'Dean Hey',
    Membership: 'Deniese Kennedy-Kollar',
    'Tenured Representative': 'Frieda Pemberton',
    'Untenured Representative': 'Warren Whitaker',
    'Adjunct Representative': 'Juliet Ferman',
    'Immediate Past President': 'Mark James',
  };
  return (
    <div className="container-fluid">
      <h1>About Us</h1>
      <h2 style={{ color: 'rgb(102, 102, 102)' }}>
        Executive Committee Members
      </h2>
      <ul>
        {Object.entries(positions).map(([position, fullName]) => (
          <li>
            {position}: {fullName}
          </li>
        ))}
      </ul>
    </div>
  );
}
