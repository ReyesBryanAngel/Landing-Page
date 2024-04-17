import { Footers } from "@/app/models/StaticDataModel"; 
import { List, ListItem, Typography, Divider } from '@mui/material';
import Image from 'next/image';

interface FooterProps {
    footer: Footers;
  }

export default function Footer ({ footer }: FooterProps) {
    const { image, companyName, allRights, ...footerItems } = footer;
    const transformToTitleCase = (text: string) => {
        if (text === 'useCases') {
          return 'Use cases';
        } else {
          return text
            .split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }
      };
    return (
        <div className="flex flex-col w-full">
            <div className="grid grid-cols-2 mt-24 lg:grid-cols-6 place-items-center">
                {Object.entries(footerItems).map(([category, items]) => (
                    <div key={category}>
                        <div>
                            <Typography color="textSecondary" variant="h6" className="text-start ml-3 mt-5">{transformToTitleCase(category)}</Typography>
                            <List>
                                {Object.keys(items).map((key) => (
                                    <ListItem key={key}>{items[key as keyof typeof items]}</ListItem>
                                ))}
                            </List>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Divider />
                <div className="p-10 flex flex-col gap-5 lg:flex-row justify-between lg:items-center">
                    <div className="flex gap-3 items-center">
                        <Image
                            src={image}
                            alt="Github Logo"
                            width={100}
                            height={100}
                            style={{ borderRadius: "8px", width: "40px", height: "40px" }} />
                        <Typography className="whitespace-nowrap" variant="h6">{companyName}</Typography>
                    </div>
                    <div>
                        <Typography className="whitespace-nowrap flex" color="textSecondary">&copy; {allRights}</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}