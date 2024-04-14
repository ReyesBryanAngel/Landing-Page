'use client'
import { 
    Typography,
  } from "@mui/material";
  import { BannerItem } from "@/app/models/StaticDataModel";


export default function Banner({ 
    firstContent, 
    secondContent,
    thirdContent,
    applyStyling 
}: BannerItem) {
    return (
        <>
            <div className={`flex ${!applyStyling ? 'mt-5' : ''}`}>
                {applyStyling ? (
                    <div className="flex gap-4">
                        <Typography style={{ fontWeight: 'bold' }}>{firstContent.split("Check out the team dashboard")}</Typography>
                        <Typography>{firstContent.split("New feature")}</Typography>
                    </div>
                ) : (
                    <Typography>{firstContent}</Typography>
                )}
            </div>
            <div className="mt-5">
                <Typography variant="h5">{secondContent}</Typography>
            </div>
            <div>
                <Typography color="textSecondary">
                    {thirdContent}
                </Typography>
            </div>
        </>
    )
}