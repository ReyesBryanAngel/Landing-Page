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
    Tooltip
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


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
            <div className='flex justify-between items-center'>            
                <div className='flex items-center'>
                    <div>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            {/* <Box 
                                component="img"
                                src={GithubLogo}
                                className='h-7'
                            /> */}
                            <h4>IMAGE</h4>
                        </a>
                    </div>
                    <div className='ml-1'>
                        <Typography variant='h6' fontWeight="bold">Untitled UI</Typography>
                    </div>
                    <div className={`flex items-center ml-5 ${showBreadCrumb}`}>
                        <Button variant='text'>
                            Home
                        </Button>
                        <Button variant="text">
                            About
                        </Button>
                        <Button variant="text">
                            Skills
                        </Button>
                        <Button variant="text">
                            Projects
                        </Button>
                        <Button variant="text">
                            Contact
                        </Button>
                    </div>
                </div>
                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <List>
                        <ListItem button onClick={scrollToHome}>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button onClick={scrolltoAbout}>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button onClick={scrollToSkils}>
                            <ListItemText primary="Skills" />
                        </ListItem>
                        <ListItem button onClick={scrollToProjects}>
                            <ListItemText primary="Projects" />
                        </ListItem>
                        <ListItem button onClick={scrollToFooter}>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Drawer>
                <div className={showBreadCrumb}>
                    <Tooltip title='Profile' sx={{ position:"relative" }}>
                        <IconButton>
                            <div className='flex justify-center items-center rounded-full w-9 h-9 p-3 border-2 text-white bg-blue-300'>
                                <div className='flex text-xs'>
                                    Profile Pic
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