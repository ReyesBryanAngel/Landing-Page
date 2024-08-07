'use client'
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import staticData from '@/app/data/staticData';
import Header from '@/app/components/Header';
import { Typography, Box, Button} from '@mui/material';
import { useAppDisPatch, useAppSelector } from '@/app/store';
import { increment, decrement, setPrice, addItemToCart } from '@/app/store/productQuantitySlice';

export default function ProductDetails({ params }: {params: { productId: number }}) {
    const product = staticData.racketAndString.find((product) => product.id == params.productId);
    const dispatch = useAppDisPatch();
    const quantity = useAppSelector((state) => state.quantity.quantity);
    const basePrice = useAppSelector((state) => state.quantity.basePrice);
    const cartItems = useAppSelector((state) => state.quantity.cartItem);

    if (!product) {
        return <div>Product not found</div>;
    }

    useEffect(() => {
      if (product) {
        dispatch(setPrice(product.price));
      }
    })

    const items = {
      home: "Home",
      product: "Explore",
      shop: "Shop",
      preOrder: "Pre-Order",
      faqs: "FAQS",
      aboutUs: "About Us",
      contact: "Contact",
      myAccount: "My Account"
    }

    const totalPrice = basePrice * quantity;

    const handleCheckOut = () => {
      const cartItem = {
          image: product.image,
          title: product.title,
          quantity: quantity,
          basePrice: product.price,
          totalPrice: totalPrice,
          description: product.description
      };
      dispatch(addItemToCart(cartItem));
  
      const existingCart = JSON.parse(localStorage.getItem('cart') || '{"cartItem": []}');
      existingCart.cartItem.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(existingCart));
  };

    return (
      <div className='flex items-center justify-evenly h-screen'>
        <Header
          companyLogo="/assets/company_logo.png"
          comapnyName="Untitled UI"
          items={items}
          profile="/assets/olivia.png"
          component="ProductDetails" 
        />
        <div>
            <Box
                component="img"
                src={product.image}
                width={500}
                sx={{
                objectFit: "cover"
                }}
            />    
        </div>
        <div className='w-1/4'>
          <Typography variant='h4'>{product.title}</Typography>
          <Typography className='text-2xl'>{`P${totalPrice}`}</Typography>
          <div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col mt-5'>
                <div className='flex gap-5 items-center'>
                  <button
                    onClick={() => dispatch(decrement())}
                    className="px-3 py-1 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => dispatch(increment())}
                    className="px-3 py-1 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
            <Typography className='mt-5'>{product.description}</Typography> 
            <Button
              onClick={handleCheckOut}
              variant="contained"
              className='w-full'
              sx={{ 
                  padding:"10px",
                  marginTop:"20px",
                  backgroundColor:"black", 
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "black",
                  },
                }}>
              Check Out
            </Button> 
            <Button 
              variant="contained"
              className='w-full'
              sx={{ 
                  padding:"10px",
                  marginTop:"20px",
                  backgroundColor:"#6941C6", 
                  textTransform: "none",
                  "&:hover": {
                      bgcolor: "#6941C6",
                  },
                }}>
              Buy Now
            </Button> 
        </div>
      </div>
    )
}