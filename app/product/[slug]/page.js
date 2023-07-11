import Wrapper from '@/components/Wrapper'
import React from 'react'
import Link from 'next/link'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'

const ProductDetails = ({ params }) => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
          <Link href={`/product/${params.slug}`}/>
          <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
              {/* left column */}
              <div 
                  className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                  <ProductDetailsCarousel/>
              </div>

              {/* right column */}
              <div
                  className='flex[1] py-3'>
                  <div className='md:text-[34px] font-semibold mb-2 text-[24px]'>
                      Slim Fit Turtleneck top
                  </div>
                  <div className='text-lg font-semibold mb-5'>
                      Light beige
                  </div>
                  <div className='text-lg font-semibold'>
                      MRP: Rs. 1,299.00
                  </div>
                  <div className='text-md font-medium text-black/[0.5]'>
                      incl. of all taxes
                  </div>
                  <div className='text-md font-medium text-black/[0.5] mb-20'>
                      {`(Inclusive of all taxes)`}
                  </div>
                  <div className='mb-10'>
                    <div className='flex justify-between mb-2'>
                      <div className='text-md font-semibold'>Select Size</div>
                      <div className='text-md font-medium text-black/[0.5] cursor-pointer'>Size Guide</div>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 gap-2 mb-3'>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      S
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      M
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      L
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                      XL
                    </div>
                    <div className='cursor-not-allowed bg-black/[0.1] opacity-50 border rounded-md text-center py-3 font-medium'>
                      XXL
                    </div>
                  </div>
                  <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                    Add to Cart
                  </button>
                  <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                    Whishlist
                  </button>
                  <div>
                    <div className='text-lg font-bold mb-5'>
                      Product Details
                    </div>
                    <div className='text-md mb-5'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                      Nihil, deserunt ut nam id aperiam vel, fugiat doloremque  <br />
                      eveniet tenetur, sequi cupiditate quidem totam. Soluta,  <br />
                      Excepturi, velit. Quia, et molestiae.
                    </div>
                  </div>
              </div>
          </div>
          <RelatedProducts/>
        </Wrapper>
    </div>
  )
}

export default ProductDetails