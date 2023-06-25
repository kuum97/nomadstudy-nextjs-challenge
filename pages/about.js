export default function About() {
  return (
    <>
      <div className="box">
        <div className="p">
          <h1>About us</h1>
          <p>
            Welcome to the official explorer for The New York Times Best Seller
            list explorer.
            <br />
            We hope you enjoy your stay.
          </p>
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: larger;
        }
        .box {
          display: flex;
          justify-content: center;
        }
        .p {
          width: 500px;
        }
      `}</style>
    </>
  );
}
