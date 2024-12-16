import { useRouter } from "next/router";
import useSWR from "swr";

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
          <p>
            {name} {description} {price} {currency} {category}
          </p>
    );
}