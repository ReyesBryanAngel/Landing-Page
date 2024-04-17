import { useState, useEffect } from 'react';
import { 
    Typography, 
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Breadcrumbs,
    Box,
    Button,
    Tooltip,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function Header() {

    const showBreadCrumb = 'hidden lg:block hover:cursor-pointer';
    const showMenu = 'lg:hidden';

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const githubLink = "https://github.com/ReyesBryanAngel";

    const scrolltoAbout = () => {
        if (aboutRef.current) {
            setDrawerOpen(false)
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } 
    };

    const scrollToSkils = () => {
        if (skillsRef.current) {
            setDrawerOpen(false)
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });                               
        }
    }

    const scrollToProjects = () => {
        if (projects.current) {
            setDrawerOpen(false)
            projects.current.scrollIntoView({ behavior: 'smooth' });                               
        }
    }

    const scrollToHome = () => {
        if (home.current) {
            home.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const scrollToFooter = () => {
        if (footer.current) {
            setDrawerOpen(false)
            footer.current.scrollIntoView({ behavior: 'smooth' });                               
        }
    }
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
        <div className="fixed border w-full top-0 bg-blue-100 transition-all duration-300 left-1/2 transform -translate-x-1/2 z-10 pr-5">
            <div className='flex justify-around items-center'>            
                <div className='flex items-center'>
                    <div className='ml-3'>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={"/assets/company_logo.png"}
                                alt="Company Logo"
                                width={50}
                                height={50}
                                style={{borderRadius:"8px", width:"35px", height:"35px" }}
                                className='h-6' 
                            />
                        </a>
                    </div>
                    <div className='ml-1'>
                        <Typography variant='h6'>Untitled UI</Typography>
                    </div>
                    <div className={`flex ml-5 ${showBreadCrumb}`}>
                        <Button variant='text' sx={{ textTransform: "none", color: "black" }}>
                            Home
                        </Button>
                        <Button variant="text" sx={{ textTransform: "none" , color: "black" }}>
                            Products
                        </Button>
                        <Button variant="text" sx={{ textTransform: "none" , color: "black" }}>
                            Resources
                        </Button>
                        <Button variant="text" sx={{ textTransform: "none" , color: "black" }}>
                            Pricing
                        </Button>
                    </div>
                </div>
                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <List>
                        <ListItem button onClick={scrollToHome}>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button onClick={scrolltoAbout}>
                            <ListItemText primary="Product" />
                        </ListItem>
                        <ListItem button onClick={scrollToSkils}>
                            <ListItemText primary="Resources" />
                        </ListItem>
                        <ListItem button onClick={scrollToProjects}>
                            <ListItemText primary="Pricing" />
                        </ListItem>
                    </List>
                </Drawer>
                <div className={showBreadCrumb}>
                    <Tooltip title='Profile' sx={{ position:"relative" }}>
                        <IconButton>
                            <div className='flex justify-center items-center rounded-full w-9'>
                                <div className='flex'>
                                    <Box
                                        component="img"
                                        className='w-full hover:cursor-pointer'
                                        alt="my logo."
                                        src={"/assets/olivia.png"}                                     
                                    />
                                </div>
                            </div>
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={showMenu}>
                    <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Skills" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Projects" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}