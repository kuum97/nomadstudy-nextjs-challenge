import { useEffect, useState } from "react";

export default function Detail() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { results } = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction
    `)
      ).json();
      setBooks(results.books);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {books?.map((book) => {
        <li key={book.rank}>{book.title}</li>;
      })}
    </ul>
  );
}
