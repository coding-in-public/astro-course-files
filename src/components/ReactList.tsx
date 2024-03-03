import { useEffect, useState } from "react";

const ReactList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products.json");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 &&
        products.map((data) => (
          <ul className="p-4 rounded-md border-2 max-w-fit">
            <li>
              <strong>{data.product_name}</strong>
            </li>
            <li>{data.price}</li>
            <li>In Stock: {data.in_stock}</li>
          </ul>
        ))}
    </div>
  );
};
export default ReactList;
