// src/pages/ProductList.js
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/productService';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
