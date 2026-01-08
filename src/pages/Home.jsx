// Creates state for the selected product
// Return a title and map through the products and create a product in list with a key, title, and an onSelect to update the selected product state
// And return the product details component that accepts a product prop of the selected product

import { useState } from "react";
import ProductInList from "../components/ProductInList";
import ProductDetails from "../components/ProductDetails";
import products from "../data/products";
import "./Home.css";

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="home-container">
      <div className="products">
        <h2>Products : </h2>
        {products.map((product) => (
          <ProductInList
            key={product.title}
            title={product.title}
            onSelect={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      <div>
        <ProductDetails product={selectedProduct} />
      </div>
    </div>
  );
}

export default Home;
