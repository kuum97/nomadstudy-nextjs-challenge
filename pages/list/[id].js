import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Detail() {
  const [books, setBooks] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const { results } = await (
        await fetch(
          `https://books-api.nomadcoders.workers.dev/list?name=${router.query.id}`
        )
      ).json();
      setBooks(results.books);
    };
    fetchData();
  }, [router.query.id]);
  return (
    <>
      <div>
        <ul>
          {books?.map((book) => (
            <li key={book.rank}>
              <img src={book.book_image} />
              {book.title}
              <br />
              {book.author}
              <Link href={book.amazon_product_url}>&rarr;buy now</Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
        ul {
          width: 500px;
        }
        img {
          width: 150px;
          height: 200px;
        }
      `}</style>
    </>
  );
}
