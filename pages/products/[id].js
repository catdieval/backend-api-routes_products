import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DisplaySingleProduct() {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

    if (!data || isLoading) {
      return "Loading...";
    }

    const { name, description, price, currency, category } = data;

    return (
        <>
          <p>
            {name}, {category}, {description}, {price} {currency} 
          </p>
          <br/>
          <Link href="/products">Go back to all products</Link>
        </>
    );
}