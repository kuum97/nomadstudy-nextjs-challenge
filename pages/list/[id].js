import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    <ul>
      {books?.map((book) => (
        <li key={book.rank}>{book.title}</li>
      ))}
    </ul>
  );
}
