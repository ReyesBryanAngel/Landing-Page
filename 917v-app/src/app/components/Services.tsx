import { Service } from "@/app/models/StaticDataModel";
import Image from 'next/image';
import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function Services ({ image, header, description, learnMore, icon, additionalContent }: Service) {
    return (
        <div className="flex flex-col items-center mt-10">
            <div>
                <Image
                    src={image}
                    alt="Github Logo"
                    width={50}
                    height={50}
                    style={{borderRadius:"8px", width:"30px", height:"30px" }}
                    className='h-6' 
                />
            </div>
            <div className="flex flex-col items-center mt-5 gap-2">
                <Typography>{header}</Typography>
                <Typography>{description}</Typography>
                {additionalContent == true && (
                    <div className="flex gap-3 mt-5 items-center">   
                        <Typography>{learnMore}</Typography>
                        {icon}
                    </div>
                )}
                
            </div>
        </div>
    )
}