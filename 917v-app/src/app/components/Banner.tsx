'use client'
import { 
    Typography,
  } from "@mui/material";
  import { BannerItem } from "@/app/models/StaticDataModel";
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Banner({ 
    firstContent, 
    secondContent,
    thirdContent,
    applyStyling 
}: BannerItem) {
    return (
        <div className="p-5 flex flex-col items-center gap-4">
            <div className={`flex ${!applyStyling ? 'mt-5 flex' : ''}`}>
                {applyStyling ? (
                    <div className="flex gap-2 border rounded-full p-3 items-center bg-purple-50 h-6">
                        <div className="rounded-full border w-24">
                            <Typography className="whitespace-nowrap" sx={{ fontSize:"13px", backgroundColor:"white", borderRadius:"16px", color:"#6941C6" }}>{firstContent.split("Check out the team dashboard")}</Typography>
                        </div>
                        <Typography className="whitespace-nowrap" sx={{ fontSize:"13px", color:"#6941C6" }}>{firstContent.split("New feature")}</Typography>
                        <ArrowForwardIcon sx={{ color:"#6941C6" }} className="hover:cursor-pointer" />

                    </div>
                ) : (
                    <div className="mt-10">
                        <Typography className="" sx={{ color:"#6941C6" }}>{firstContent}</Typography>
                    </div>
                    
                )}
            </div>
            <div className="flex flex-col gap-4 items-center">
                <div>
                    <Typography className="lg:text-4xl lg:font-bold">{secondContent}</Typography>
                </div>
                <div className="w-8/12">
                    <Typography color="textSecondary">
                        {thirdContent}
                    </Typography>
                </div>
            </div>
          
        </div>
    )
}