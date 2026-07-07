import "./Product.css";
function Product({title,price}) {
  let isDiscount = price > 3000;
  let styles = {backgroundColor: isDiscount? "yellow":""}
  return (
    <div className="product" style={styles}>
      <h3>{title}</h3>
      <h5>{price}</h5>
      {isDiscount && <p>Discount of 5%</p>}
    </div>
  );
}

export default Product;