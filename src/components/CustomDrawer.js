import React, { useState } from 'react'
import { Drawer, Box, Button, InputBase, InputAdornment } from '@mui/material'
import { StyledBox, Styledbox, Search, StyledStack} from '../style/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const CustomDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <StyledBox onClick={() => setOpenDrawer(true)}>
                <MenuIcon fontSize="large" />
            </StyledBox>
            {/*  side menu that slides on click a button in and out from the left side of the screen */}
            <Drawer
            PaperProps={{
                sx: {
                  backgroundColor: "#004A80",
                  color: "white",
                }
              }}
            anchor='left' open={openDrawer}
                onClose={() => setOpenDrawer(false)}>
                <Box width='220px' role='presentation'>
                    <Styledbox onClick={() => setOpenDrawer(false)}>
                        <CloseIcon />
                    </Styledbox>
                    <StyledStack direction='column' spacing={1} paddingY={1}>
                        <Button sx={{ color: 'white' }} disableRipple>home</Button>
                        <Button sx={{ color: 'white' }} disableRipple>Blog</Button>
                        <Button sx={{ color: 'white' }} disableRipple>Contact</Button>
                        <Search>
                            <InputBase placeholder='Search Exam Category'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>}
                            />
                        </Search>
                    </StyledStack>
                    
                </Box>
            </Drawer>
        </>
    )
}

export default CustomDrawer
