'use client'
import { 
    Typography,
    Button
  } from "@mui/material";
  import { BannerItem } from "@/app/models/StaticDataModel";
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Key, useEffect } from "react";


export default function Banner({ 
    firstContent, 
    secondContent,
    thirdContent,
    applyStyling 
}: BannerItem) {
    
    useEffect(() => {
        console.log(thirdContent);
    }, []);

    const renderContentWithBreaks = (content: string) => {
        return content.split('\n').map((line, index: Key | null | undefined) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };
    return (
        <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-4 items-start text-start">
                <div>
                    <Typography className="text-2xl lg:text-4xl font-bold">{renderContentWithBreaks(secondContent)}</Typography>
                </div>
                <div className="w-8/12">
                    <Typography color="textSecondary" className="whitespace-nowrap">
                        {renderContentWithBreaks(thirdContent)}
                    </Typography>
                </div>
                <Button variant="contained" sx={{ 
                        padding:"10px", 
                        backgroundColor:"#6941C6", 
                        textTransform: "none",
                        "&:hover": {
                            bgcolor: "#6941C6",
                        },
                    }}>
                    Shop Now
                </Button>
            </div>
          
        </div>
    )
}