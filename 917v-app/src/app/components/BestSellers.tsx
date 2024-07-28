import { Typography, Button, Box } from "@mui/material";
import { BestSellers } from "../models/StaticDataModel";

export default function BestSeller({ title, products }: BestSellers) {
    const imageSize = {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
    };
    return (
        <div className="flex flex-col mt-10">
            <Typography className="lg:text-3xl self-start">{title}</Typography>
            <div className="grid lg:grid-cols-4 gap-10 mt-8">
                {products.map((product, index) => (
                    <div key={index} className="border p-5 flex flex-col items-start gap-4">
                        <Box
                            component="img"
                            alt="my logo."
                            src={product.image}       
                            sx={imageSize}                              
                        />
                        <Typography>{product.title}</Typography>
                        <Typography>{product.price}</Typography>
                    </div>
                ))}
            </div>
        </div>
    )
}