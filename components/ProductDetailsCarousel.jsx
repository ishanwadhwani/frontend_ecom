'use client'
import React from 'react'
import { useState } from 'react';

const ProductDetailsCarousel = () => {
    const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F93%2Fe7%2F93e7b1254cbb41f08abf83ee3f952702597aa849.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3c%2Ffc%2F3cfc49d8aceea3f08dae2cbb8523dd9adfd25831.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa3%2Fd2%2Fa3d2b2cd55d38454655b72f23462bc6f131374fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'
  ];

  const selectImage = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex md:flex-col flex-row justify-start md:mr-4">
          {productImages.map((image, index) => (
            <img
              key={index}
              className={`h-[70px] w-16 rounded cursor-pointer mb-2 m-1 ${
                index === selectedImage && 'border-2 border-blue-500'
              }`}
              src={image}
              alt={`Product Image ${index + 1}`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <img
              className="md:h-[600px] md:w-[400px] h-[400px] w-[300px] rounded-lg mr-4"
              src={productImages[selectedImage]}
              alt="Selected Product Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCarousel