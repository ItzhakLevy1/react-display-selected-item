import "./ProductDetails.css";

function ProductDetails({ product }) {
  if (!product) {
    return (
      <div className="product-details">
        <h1>Please select a product</h1>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ProductDetails;
