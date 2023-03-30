import {NextPage} from "next";
import * as React from "react";
import Box from "@mui/material/Box";
import {Header} from "@/pages/Header";

const hledaniInzeratu: NextPage = (props) => {
    return (
        <>
            <Header/>
            <Box sx={{
                backgroundColor: 'secondary.contrastText',
                display: 'flex',
                justifyContent: 'center',
                width: '1400px', // adjust width to 1400px
                height: '100px', // adjust height to 100px
                position: 'absolute', // set position to absolute
                top: '20%', // move box to center vertically
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            </Box>

        </>
    );

}
export default hledaniInzeratu;