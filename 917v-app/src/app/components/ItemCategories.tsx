import { Typography, Button, Box } from "@mui/material"
import { PopularCategories } from "../models/StaticDataModel";

export default function ItemCategories({header, title, categoryItems, categoryButton }: PopularCategories) {
    const imageSize = {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
    };

    const buttonStyle = {
        padding:"10px", 
        backgroundColor:"#6941C6", 
        textTransform: "none",
        "&:hover": {
            bgcolor: "#6941C6",
        },
    }

    return (
        <div className="flex flex-col items-center mt-20 border p-14 gap-3">
            <Typography className="lg:text-3xl">{header}</Typography>
            <div className="lg:self-start mt-10">
                <Typography className="lg:text-2xl">{title}</Typography>
                <div className="lg:flex gap-8">
                    {categoryItems.map((categoryItem: any, index: any) => (
                        <div key={index} className="flex flex-col items-center mt-5">
                            <Box
                                component="img"
                                alt="my logo."
                                src={categoryItem.categoryImage}       
                                sx={imageSize}                              
                            />
                            <Typography>{categoryItem.categoryName}</Typography>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                <Button variant="contained" sx={buttonStyle}>
                    {categoryButton}
                </Button>
            </div>
        </div>
    )
}