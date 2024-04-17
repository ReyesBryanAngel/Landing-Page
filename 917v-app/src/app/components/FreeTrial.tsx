import { FreeTrials } from "@/app/models/StaticDataModel";
import { Button, Typography } from "@mui/material";
export default function FreeTrial ({ 
    title, 
    poster, 
    getStartedButtonLabel,
    learnMoreButtonLabel  
}: FreeTrials) {
    return (
        <div className="flex flex-col items-center gap-3 mt-10 p-10 lg:p-24 bg-gray-100 lg:w-full">
            <div>
                <Typography variant="h4" fontWeight="bold" className="whitespace-nowrap pb-5">{title}</Typography>
                <Typography color="textSecondary">{poster}</Typography>
            </div>
            <div className="mt-5 gap-3 flex flex-col lg:flex-row lg:w-auto w-full">
                <Button variant="contained" 
                    sx={{ 
                        padding:"10px", 
                        height:"40px", 
                        borderRadius:"8px", 
                        backgroundColor:"#6941C6",
                        textTransform: "none",
                        "&:hover": {
                            bgcolor: "#6941C6",
                        },
                    }}
                >
                    {getStartedButtonLabel}
                </Button>
                <Button sx={{ 
                    padding:"10px", 
                    height:"40px", 
                    borderRadius:"8px", 
                    color:"#000000", 
                    display:"flex", 
                    gap:"6px",
                    border:"1px solid #757575",
                    textTransform: "none",
                }}
                >
                    {learnMoreButtonLabel}
                </Button>
            </div>
        </div>
    )
}