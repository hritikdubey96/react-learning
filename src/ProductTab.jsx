import Product from "./Product";

function ProductTab() {
  return (
    <>
      <Product 
        title="Books"
        price={500}
      />
      <Product 
        title="Watch"
        price={5000}
      />
      <Product 
        title="Table"
        price={800}

      />
    </>
  );
}

export default ProductTab;