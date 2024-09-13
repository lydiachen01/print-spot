import React, { useState } from 'react'
import { CssBaseline, styled, Typography } from '@mui/material'
import MobileTab from './MobileTab'
import { grey } from '@mui/material/colors'

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}))

const Drawer:React.FC = () => {
  const [drawerHeight, setDrawerHeight] = useState('40vh')
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDrawer = () => {
    setIsExpanded(!isExpanded);
    setDrawerHeight(isExpanded ? '40vh' : '75vh'); 
  };

  return (
    <>
      <div
        className="pt-4 rounded-2xl drop-shadow-2xl transition-all"
        style={{ 
          position: 'absolute', 
          right: 0, 
          left: 0, 
          bottom: 0, 
          height: drawerHeight, 
          zIndex: 1000, 
          backgroundColor: 'white',
          transition: 'height 0.3s ease',
        }}
        onClick={toggleDrawer}  // Toggle height on click
      >
        <CssBaseline />
        <Puller />
        <Typography sx={{ p: 2, color: 'text.secondary' }}>Within 5 miles</Typography>
        {/* <label className="mx-4 text-gray-400">5 miles</label> */}
        <div>
          <MobileTab name="Printer #1" building="JCC 235" />
          <MobileTab name="Printer #2" building="JCC 240" />
          <MobileTab name="Printer #3" building="JCC 220" />
        </div>
      </div>
    </>
  )
}


// import { Global } from '@emotion/react';
// import { styled } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { grey } from '@mui/material/colors';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import Typography from '@mui/material/Typography';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import { useState } from 'react';
// import MobileTab from './MobileTab';

// const drawerBleeding = 56;

// interface Props {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window?: () => Window;
// }


// const Root = styled('div')(({ theme }) => ({
//     height: '100%',
//     backgroundColor:
//         theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
//  }));

// const StyledBox = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
// }));
  
// const Puller = styled('div')(({ theme }) => ({
//     width: 30,
//     height: 6,
//     backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
//     borderRadius: 3,
//     position: 'absolute',
//     top: 8,
//     left: 'calc(50% - 15px)',
// }));
  
// const Drawer = (props: Props) => {
//     const { window } = props;
//     const [open, setOpen] = useState(false);
  
//     const toggleDrawer = (newOpen: boolean) => () => { setOpen(newOpen) }
  
//     // This is used only for the example
//     const container = window !== undefined ? () => window().document.body : undefined;
  
//     return (
//         <>
//             <div className='pt-4 rounded-2xl border border-black h-[50vh]'
//                 style={{ position: 'absolute', right: 0, left: 0 }}>
//                 <CssBaseline/>
//                 <Puller/>
//                 <label className='mx-4 text-gray-400'>5 miles</label>
//                 <div className='mt-5'>
//                     <MobileTab 
//                         name="Printer #1"
//                         building="JCC 235"/>
//                     <MobileTab 
//                         name="Printer #2"
//                         building="JCC 240"/>
//                     <MobileTab 
//                         name="Printer #3"
//                         building="JCC 220"/>
//                 </div>
//             </div>
//         </>

    //   <Root>
    //     <CssBaseline />
    //     <Global
    //       styles={{
    //         '.MuiDrawer-root > .MuiPaper-root': {
    //           height: `calc(80% - ${drawerBleeding}px)`,
    //           overflow: 'visible',
    //         },
    //       }}
    //     />
    //     <SwipeableDrawer
    //       container={container}
    //       anchor="bottom"
    //       open={open}
    //       onClose={toggleDrawer(false)}
    //       onOpen={toggleDrawer(true)}
    //       swipeAreaWidth={drawerBleeding}
    //       disableSwipeToOpen={false}
    //       ModalProps={{
    //         keepMounted: true,
    //       }}
    //     >
    //       <StyledBox
    //         sx={{
    //           position: 'absolute',
    //           top: -drawerBleeding,
    //           borderTopLeftRadius: 8,
    //           borderTopRightRadius: 8,
    //           visibility: 'visible',
    //           right: 0,
    //           left: 0,
    //         }}
    //       >
    //         <Puller />
    //         <Typography sx={{ p: 2, color: 'text.secondary' }}>Within 5 miles</Typography>
    //       </StyledBox>
    //         <MobileTab 
    //             name="Printer #1"
    //             building="JCC 235"/>
    //         <MobileTab 
    //             name="Printer #2"
    //             building="JCC 240"/>
    //         <MobileTab 
    //             name="Printer #3"
    //             building="JCC 220"/>
    //     </SwipeableDrawer>
    //   </Root>
//     );
//   }

export default Drawer