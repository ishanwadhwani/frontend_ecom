'use client';
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Wrapper from "@/components/Wrapper";
// import { fetchDataFromApi } from "@/utils/api";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home({ products }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:1337/api/products?populate=*");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <main>
      <Hero />
      <Wrapper>
        {/* headings start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Rent Your Style, Preserve Our Planet
          </div>
          <div className="text-md md:text-xl">
            Step into a world where fashion meets responsibility. With our rental service, 
            you can indulge in the latest trends, express your unique style, and make a positive 
            impact on the environment.
          </div>
        </div>
        {/* headings end */}
        {data && <ProductList products={data} />}
        {/* {products?.data?.map((product) => (
          <ProductCard key={product?.id} data={product} />
      ))} */}
      </Wrapper>
    </main>
  )
}

// export async function getStaticProps() {
//   const products = await fetchDataFromApi("/api/products?populate=*");

//   return { props: { products } };
// }