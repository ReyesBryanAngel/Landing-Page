import { Service } from "@/app/models/StaticDataModel";
import Image from 'next/image';
import { Typography, Box } from "@mui/material";

export default function Services ({ image, header, description, learnMore, icon, additionalContent }: Service) {
    return (
        <div className="flex flex-col items-center mt-10">
            <div>
                <Box
                    component="img"
                    alt="my logo."
                    src={image}                                     
                />
            </div>
            <div className="flex flex-col items-center p-3 gap-2">
                <Typography variant="h6">{header}</Typography>
                <Typography color="textSecondary">{description}</Typography>
                {additionalContent == true && (
                    <div className="flex gap-3 mt-5 items-center">   
                        <Typography sx={{ color:"#6941C6", fontWeight: "bold" }}>{learnMore}</Typography>
                        <div style={{ color:"#6941C6" }}>
                            {icon}
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}