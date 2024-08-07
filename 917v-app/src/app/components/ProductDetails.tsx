import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  staticData from "@/app/data/staticData";
import { useRouter } from 'next/navigation';
import { 
    Typography,
    Box
  } from "@mui/material";

export default function ProductDetails() {
    const router = useRouter();

    const handleProductClick = (id: number) => {
      router.push(`/products/${id}`);
    };

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
      <Carousel responsive={responsive} className="flex mt-10 lg:ml-24">
        {staticData.racketAndString?.map((item) => (
          <div key={item.id} className="lg:w-96">
            <div className="lg:border lg:p-5 hover:cursor-pointer" onClick={() => handleProductClick(item.id)}> 
              <Box
                component="img"
                src={item.image}
                sx={{
                  objectFit: "cover"
                }}
              />       
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="subtitle1">{item.price}</Typography>
            </div>
          </div>
        ))}
    </Carousel>
    )
}