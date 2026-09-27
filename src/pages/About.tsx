export default function About() {
  const positions = {
    President: "Jason Schanker",
    "Vice President": "Warren Whitaker",
    Secretary: "Gayitri Kavita Indar",
    Treasurer: "Mark James",
    "Committee A": "Dean Hey",
    "Tenured Representative": "Frieda Pemberton",
    "Untenured Representative": "Kimberly Johnson",
    "Adjunct Representative": "Juliet Ferman",
    "Immediate Past President": "Christine Barrow",
  };
  return (
    <div className="container-fluid">
      <h1>About Us</h1>
      <h2 style={{ color: "rgb(102, 102, 102)" }}>
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
