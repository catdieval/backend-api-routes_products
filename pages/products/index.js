import useSWR from "swr";

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
            {name} {description} {price} {currency} {category}
          </li>
        ))}
      </ul>
    </>
  );
}