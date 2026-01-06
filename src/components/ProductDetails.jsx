import "./ProductDetails.css";

function ProductDetails({ product }) {
  if (!product) {
    return <div>Please select a product</div>;
  }

  return (
    <div className="productDetails">
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ProductDetails;
