import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.data?.map((product) => (
          <ProductCard key={product?.id} data={product} />
      ))}
    </div>
  );
};

export default ProductList;