'use client'
import { Typography, Button, Box } from '@mui/material';
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cart() {
    const router = useRouter();    
    const [cartItems, setCartItems] = useState(() => {
        const cartFromStorage = localStorage.getItem("cart");
        const cartObject = JSON.parse(cartFromStorage || '{"cartItem": []}');
        
        return cartObject.cartItem;
    })
    
    const updateLocalStorage = (updatedItems: any) => {
        localStorage.setItem("cart", JSON.stringify({ cartItem: updatedItems}))
    }

    const continueShopping = () => {
        router.push('/');
    };

    const handleQuantityChange = (index: number, change: any) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += change;
        
        if (newCartItems[index].quantity <= 0) {
            newCartItems.slice(index, 1);
        } else {
            newCartItems[index].totalPrice = newCartItems[index].basePrice * newCartItems[index].quantity;

        }

        newCartItems[index].totalPrice = newCartItems[index].basePrice * newCartItems[index].quantity;
        setCartItems(newCartItems);
        updateLocalStorage(newCartItems);
    }

    const removeItemFromCart = (index: number) => {
        const newCartItems = cartItems.filter((_: any, i: number) => i !== index);
    
        setCartItems(newCartItems);
        updateLocalStorage(newCartItems);
    };

    const estimatedTotal = cartItems.reduce((accumulator: any, currentItem: { totalPrice: any; }) => {
        return accumulator + currentItem.totalPrice;
    }, 0);

    return (
        <div className='flex flex-col items-center'>
            {cartItems && cartItems.length > 0 ? (
                <>
                    <div className='self-start lg:ml-56'>
                        <Typography className='m-10 text-3xl'>Your Cart</Typography>
                    </div>
                    <table className="w-2/3 text-left rtl:text-right">
                        <thead className="text-xs uppercase ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cart: any, index: number) => (
                                <tr key={index} className="bg-white border-b">
                                    <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                        <div className='flex flex-col gap-8'>
                                            <Box
                                                className='border-2'
                                                component="img"
                                                alt="mainItems"
                                                src={cart.image}
                                                width={150}
                                                height={170}
                                            />
                                            <div className='flex flex-col'>
                                                <Typography>{cart.title}</Typography>
                                                <Typography>{`P${cart.basePrice}`}</Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center'>
                                            <div className='flex flex-col mt-5'>
                                                <div className='flex gap-5 items-center'>
                                                    <button
                                                        onClick={() => handleQuantityChange(index, -1)}
                                                        className="px-3 py-1 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
                                                        disabled={cartItems[index].quantity <= 1}
                                                    >
                                                        -
                                                    </button>
                                                    <span>{cart.quantity}</span>
                                                    <button
                                                        onClick={() => handleQuantityChange(index, 1)}
                                                        className="px-3 py-1 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>  
                                            </div>
                                            <div>
                                                <button className='px-6 mt-6'>
                                                    <FaTrashAlt onClick={() => removeItemFromCart(index)} />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Typography>{`P${cart.totalPrice}`}</Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='self-end mr-64 py-8'>
                        <Typography variant='h6'>Estimated Total: {`P${estimatedTotal}`} </Typography>
                        <Button variant="contained" sx={{ 
                            padding:"10px",
                            width:"150px",
                            marginTop:"20px",
                            backgroundColor:"#6941C6", 
                            textTransform: "none",
                            "&:hover": {
                                bgcolor: "#6941C6",
                            },
                        }}>
                            Check Out
                        </Button>
                    </div>
                </>
            ) : (
                <div className='flex flex-col items-center justify-center h-screen'>
                    <Typography className='m-10 text-3xl'>Your cart is empty.</Typography>
                    <Button
                        onClick={continueShopping}
                        variant="contained" 
                        sx={{ 
                            padding:"10px",
                            width:"250px",
                            marginTop:"20px",
                            backgroundColor:"#6941C6", 
                            textTransform: "none",
                            "&:hover": {
                                bgcolor: "#6941C6",
                            },
                        }}
                    >
                           Continue Shopping
                        </Button>
                </div>
            )}
        </div>
    );
    
}
