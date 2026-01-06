import "./ProductInList.css";

function ProductInList({ title, onSelect }) {
  return (
    <div className="product-preview-card" onClick={onSelect}>
      <p>Name: {title}</p>
    </div>
  );
}

export default ProductInList;
