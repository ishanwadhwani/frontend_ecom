'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';


const RelatedProducts = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 2,
        }
      };
      const products = [ 
            'https://lp2.hm.com/hmgoepprod?set=source[/11/08/11087b20b467c8d3c426355c70fb27d7723314af.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]', 
            'https://lp2.hm.com/hmgoepprod?set=source[/90/67/9067d44075375b2292ed1c06a7eddba3b9329685.jpg],origin[dam],category[men_tshirtstanks_printed],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]', 
            'https://lp2.hm.com/hmgoepprod?set=source[/12/86/12863ffb711b2ab147c0cb73946946c3ac69a0de.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
            'https://lp2.hm.com/hmgoepprod?set=source[/f8/a6/f8a695663a53c7eddd6a38d9d47695e85a5d7645.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]', 
    ]
      return (
        <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
            <div className='text-2xl font-bold mb-5'>Others also bought</div>
            <Carousel 
                responsive={responsive}
                containerClass='-mx-[10px]'
                itemClass='px-[2px]'
                swipeable
                autoPlay
                autoPlaySpeed={2000}
                infinite
                >
                {products.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Product Image ${index + 1}`} />
                    </div>
            ))}
            </Carousel>
        </div>
        )
    }

export default RelatedProducts