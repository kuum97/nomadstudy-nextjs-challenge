import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
        ul {
          display: flex;
          width: 500px;
          height: 80px;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
}
