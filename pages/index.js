import { useEffect, useState } from "react";
import Link from "next/link";

export default function IndexPage() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { results } = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/lists
    `)
      ).json();
      setCategory(results);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {category?.map((item) => (
        <li key={item.list_name}>
          <Link
            href={{
              pathname: `/list/[list_name]`,
              query: { list_name: item.list_name_encoded },
            }}
          >
            {item.display_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
