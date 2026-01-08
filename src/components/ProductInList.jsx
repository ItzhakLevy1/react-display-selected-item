// The component accepts title and onSelect as prop parameter
// and creates with them the callback function that would run once a product is selected
// and a title for the yet to be selected products

import "./ProductInList.css";

function ProductInList({ title, onSelect }) {
  return (
    <div className="product-preview-card" onClick={onSelect}>
      {title}
    </div>
  );
}

export default ProductInList;
