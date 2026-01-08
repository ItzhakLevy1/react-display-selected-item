import { useState } from "react";
import products from "../data/products";
import ProductInList from "../components/ProductInList";
import ProductDetails from "../components/ProductDetails";
import "./Home.css";

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="home-container">
      <div className="products">
        <h1>Select product</h1>
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
