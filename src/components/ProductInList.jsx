import "./ProductInList.css";

function ProductInList({ title, onSelect }) {
  return (
    //  onSelect: a callback function - invoked when the product is selected 
    <div className="product-preview-card" onClick={onSelect}> 
      <p>Name: {title}</p>
    </div>
  );
}

export default ProductInList;
