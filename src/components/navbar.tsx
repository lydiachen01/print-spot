import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { Layout } from "@maptiler/sdk";
import Logo from "./Logo";

const collegesInBoston = [
    // 'Boston University',
    // 'Harvard University',
    // 'MIT',
    // 'Northeastern University',
    // 'Boston College',
    'Tufts University',
    // 'UMass Boston',
];

const Navbar: React.FC<> = () => {
    const [mobileState, setMobileState] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openCampus, setOpenCampus] = useState(false);

    const handleCampusClick = () => { setOpenCampus(!openCampus) }    

    useEffect(() => {
        const handleResize = () => { setMobileState(window.innerWidth < 480) }
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    }, []);

    const list = (
        <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={() => setOpenMenu(false)} // Close the Drawer on item click
        >
            {/* <List>
                {['Campus', 'Feedback'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
             <List>
      {/* Campus Tab with Subtabs */}
            <ListItem disablePadding>
                <ListItemButton onClick={handleCampusClick}>
                <ListItemText primary="Campus" />
                {openCampus ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </ListItem>
            <Collapse in={openCampus} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {collegesInBoston.map((college) => (
                    <ListItem key={college} disablePadding sx={{ pl: 4 }}>
                    <ListItemButton>
                        <ListItemText primary={college} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Collapse>

            {/* Feedback Tab */}
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemText primary="Feedback" />
                </ListItemButton>
            </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {mobileState ? (
                <nav className="flex p-4 justify-between bg-white">
                    <div className="font-bold text-xl flex items-center">
                        <span>PRINT</span>
                        <img src="icons8-marker-30.png" className="mt-0.5 mx-0.5 h-[16px]" alt="marker" />
                        <span>SPOT</span>
                    </div>
                    <button onClick={() => setOpenMenu(true)} className="focus:outline-none">
                        <img className="mt-1 space-x-3 h-[25px]" src="menu.png" alt="menu" />
                    </button>
                    <Drawer
                        anchor='right'
                        open={openMenu}
                        onClose={() => setOpenMenu(false)}
                        sx={{ '& .MuiDrawer-paper': { height: '100vh' } }} // Ensure Drawer spans full height
                    >
                        {list}
                    </Drawer>
                </nav>
            ) : (
                <nav className="flex justify-between items-center py-4 px-6 border border-double border-b-black border-b-4">
                    <div className="flex space-x-4">
                        <a href="/#link1" className="hover:underline">Tufts University</a>
                        {/* <a href="/#link2" className="underline">Link 2</a>
                        <a href="/#link3" className="underline">Link 3</a> */}
                    </div>
                    <Logo />
                    <div>
                        <button className="px-4 py-2 rounded bg-black text-white ml-4">Login</button>
                        {/* <ResetButton /> */}
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
