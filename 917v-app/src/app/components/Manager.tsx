import { CompanyManager } from "@/app/models/StaticDataModel";
import Image from 'next/image';
import { Typography } from "@mui/material";

export default function Manager ({ 
    companyImage, 
    companyName,
    header,
    managerImage,
    managerName,
    managerPosition
}: CompanyManager) {
    return (
        <div className="flex flex-col items-center gap-2 mt-10">
            <div className="flex items-center gap-2">
                <Image
                    src={companyImage}
                    alt="Github Logo"
                    width={50}
                    height={50}
                    style={{borderRadius:"8px", width:"30px", height:"30px" }}
                    className='h-6' 
                />
                <Typography>{companyName}</Typography>
            </div>
            <div className="mt-5">
                <Typography variant="h5">{header}</Typography>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image
                    src={managerImage}
                    alt="Github Logo"
                    width={50}
                    height={50}
                    style={{borderRadius:"8px", width:"30px", height:"30px" }}
                    className='h-6' 
                />
                <Typography>{managerName}</Typography>
                <Typography color={"textSecondary"}>{managerPosition}</Typography>
            </div>
        </div>
    )
}