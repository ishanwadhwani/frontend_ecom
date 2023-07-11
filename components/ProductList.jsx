import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div>
      {products?.data?.map((product) => (
          <ProductCard key={product?.id} data={product} />
      ))}
    </div>
  );
};

export default ProductList;