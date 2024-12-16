import { getProductById } from "/services/productServices.js";

  export default function handler(request, response) {
    if (request.method === "GET") {
      const {id} = request.query;
      const product = getProductById(id);
      response.status(200).json(product);
      return;
    }
  }