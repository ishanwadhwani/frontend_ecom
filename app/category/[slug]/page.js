import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

const Category = ({ params }) => {
    // const router = useRouter()
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                    <Link href={`/category/${params.slug}`}>tshirts</Link>
                    </div>
                </div>
                <ProductCard/>
            </ Wrapper>
        </div>
    )
}

export default Category