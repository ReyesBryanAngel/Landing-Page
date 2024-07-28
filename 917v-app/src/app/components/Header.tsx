import { useState, useEffect } from 'react';
import { 
    Typography, 
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Button,
    Tooltip,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { Headers } from "@/app/models/StaticDataModel";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export default function Header({companyLogo, comapnyName, items, profile }: Headers) {

    const showBreadCrumb = 'hidden lg:block hover:cursor-pointer';
    const showMenu = 'lg:hidden';
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleDrawer = (open: any) => () => {
      setDrawerOpen(open);
    };

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
        <div className={`fixed w-full top-0 ${scrolled ? 'bg-customBackground' : ''} transition-all duration-300 left-1/2 transform -translate-x-1/2 z-10 pr-5 py-6`}>
            <div className='flex justify-around items-center'>            
                <div className='flex items-center'>
                    <div className='ml-3'>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image
                                src={companyLogo}
                                alt="Company Logo"
                                width={50}
                                height={50}
                                style={{borderRadius:"8px", width:"35px", height:"35px" }}
                                className='h-6' 
                            />
                        </a>
                    </div>
                    <div className='ml-1'>
                        <Typography variant='h6' className={`${scrolled ? "text-white" : ""}`}>{comapnyName}</Typography> {/* UNTITLED UI */}
                    </div>
                    <div className={`flex ml-5 ${showBreadCrumb}`}> {/* OPTIONS */}
                    {Object.keys(items).map((key) => (
                        <Button variant='text' sx={{ textTransform: "none", color: `${scrolled ? "white" : "black"}` }} key={key}>{items[key as keyof typeof items]}</Button>
                    ))}
        
                    </div>
                </div>
                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <List sx={{ width:150 }}>
                        {Object.keys(items).map((key) => (
                            <ListItem button key={key} sx={{ paddingLeft:"30px", marginTop:"10px"}}>
                                <ListItemText primary={items[key as keyof typeof items]} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <div className={showBreadCrumb}> {/* PROFILE */}
                    {/* <Tooltip title='Cart' sx={{ position:"relative" }}> */}
                        {/* <IconButton> */}
                            <div className='flex justify-center items-center rounded-full w-9'>
                                <div className='flex gap-4'>
                                    {/* <Box
                                        component="img"
                                        className='w-full hover:cursor-pointer'
                                        alt="my logo."
                                        src={profile}                                     
                                    /> */}
                                    <SearchIcon sx={{ color:`${scrolled ? "white" : ""}` }} />
                                    <PersonIcon sx={{ color:`${scrolled ? "white" : ""}` }} />
                                    <LocalMallIcon sx={{ color:`${scrolled ? "white" : ""}` }} />
                                </div>
                            </div>
                        {/* </IconButton> */}
                    {/* </Tooltip> */}
                </div>
                <div className={showMenu}>
                    <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon sx={{ color:`${scrolled ? "white" : ""}` }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}