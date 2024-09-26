'use client';
import { Box, IconButton } from "@mui/material";
import sections from "../constants/sections";

export default function Menu() {
    return (
        <Box sx={{height: '270px', width: "60px", backgroundColor: 'background.default', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '30px'}}>
            {sections.map((elem) => (
                <div key={elem.section} style={{width: "60px", height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <IconButton href={"https://marcin59.github.io"} target="_blank" key={elem.name} 
                        sx={[(theme) => ({
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: theme.palette.primary.main,
                            }
                        }), {color: "text.primary"}]}>
                        <elem.icon sx={{width: "30px", height: '30px', color: "inherit"}}/>
                    </IconButton>
                </div>
            )) }
        </Box>
    )
}