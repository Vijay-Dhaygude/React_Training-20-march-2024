// import React from "react";
// import { useParams } from "react-router-dom";
// import { products } from "./products";

// export default function ProductDetail() {
//   let { prodid } = useParams();
//   let product = products.find((item) => item.id == prodid);
//   return (
//     <div>
//       <h1>Product Detail</h1>
//       <h3>Product id: {prodid}</h3>
//       <h3>Title: {product.title}</h3>
//       <h3>Price: Rs. {product.price}</h3>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  let { prodid } = useParams();
  let [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + prodid)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Product Detail</h1>
      <h3>Product id: {prodid}</h3>
      <h3>Title: {product.title}</h3>
      <h3>Price: Rs. {product.price}</h3>
    </div>
  );
}
