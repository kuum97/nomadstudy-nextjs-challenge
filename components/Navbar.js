import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 400px;
          height: 100px;
        }
      `}</style>
    </>
  );
}
