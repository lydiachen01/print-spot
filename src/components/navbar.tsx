import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
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

const Navbar:React.FC = () => {
    const [mobileState, setMobileState] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openCampus, setOpenCampus] = useState(false);

    const handleCampusClick = () => { setOpenCampus(!openCampus) }

    useEffect(() => {
        const handleResize = () => { setMobileState(window.innerWidth < 480) }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize) }
    }, []);

    const list = (
        <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
        >
            <List>
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
                        <Image src="/icons8-marker-30.png" className="mt-0.5 mx-0.5 h-[16px]" alt="marker" width={16} height={16} />
                        <span>SPOT</span>
                    </div>
                    <button onClick={() => setOpenMenu(true)} className="focus:outline-none">
                        <Image className="mt-1 space-x-3 h-[25px]" src="/menu.png" alt="menu" width={25} height={25} />
                    </button>
                    <Drawer
                        anchor='right'
                        open={openMenu}
                        onClose={() => setOpenMenu(false)}
                        sx={{ '& .MuiDrawer-paper': { height: '100vh' } }}
                    >
                        {list}
                    </Drawer>
                </nav>
            ) : (
                <nav className="flex justify-between items-center py-4 px-6 border border-double border-b-black border-b-4">
                    <div className="flex space-x-4">
                        <Link href="/#link1" className="hover:underline">Tufts University</Link>
                    </div>
                    <Logo theme="light"/>
                    <div>
                        <button className="px-4 py-2 rounded bg-black text-white ml-4">Login</button>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
