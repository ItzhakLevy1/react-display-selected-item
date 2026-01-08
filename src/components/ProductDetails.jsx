// The component accepts a product prop parameter
// If no product has been selected - In a return display text to indicate that
// If a product has been selected - In an additional return display its information (title, price and img)

import "./ProductDetails.css";

function ProductDetails({ product }) {
  if (!product) {
    return <h2 className="product-details">Please select a product</h2>;
  }
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ProductDetails;
