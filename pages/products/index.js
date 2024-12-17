import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DisplayAllProducts() {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  if (!data || isLoading) {
    return "loading...";
  }

  return (
    <>
      <ul>
        {data.map(({ id, name, description, price, currency, category }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>, {category}, {description}, {price} {currency} 
          </li>
        ))}
      </ul>
      <br/>
      <Link href="/">Go back to startpage</Link>
    </>
  );
}