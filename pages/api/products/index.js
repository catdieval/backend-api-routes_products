import { getAllProducts } from "/services/productServices.js";

const products = getAllProducts();

export default function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json(products);
    return;
  }
}