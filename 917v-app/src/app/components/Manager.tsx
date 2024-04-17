import { CompanyManager } from "@/app/models/StaticDataModel";
import Image from 'next/image';
import { Typography, Box } from "@mui/material";

export default function Manager ({ 
    companyImage, 
    companyName,
    header,
    managerImage,
    managerName,
    managerPosition
}: CompanyManager) {
    return (
        <div className="flex flex-col items-center p-5 gap-2 mt-10 bg-gray-50 border">
            <div className="flex items-center gap-2">
                 <Box
                    component="img"
                    alt="my logo."
                    src={companyImage}                                     
                />
                <Typography>{companyName}</Typography>
            </div>
            <div className="mt-5">
                <Typography variant="h5">{header}</Typography>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
                <Image
                    src={managerImage}
                    alt="I am Photo"
                    width={50}
                    height={50}
                    style={{width:"60px", height:"60px" }}
                    className='h-6' 
                />
                <Typography>{managerName}</Typography>
                <Typography color={"textSecondary"}>{managerPosition}</Typography>
            </div>
        </div>
    )
}