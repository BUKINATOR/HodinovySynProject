import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Mainbutton} from "@/Mainbutton";
import {NextPage} from "next";
import {Grid, Link} from "@mui/material";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import {Stack} from "@mui/system";
import {Iconcomponent} from "@/pages/Iconcomponent";

const Homepage: NextPage = (props) => {
    return (
        <>
            <Typography variant="h1"
                        sx={{textAlign: 'center', fontFamily: "Bebas Neue", fontWeight: 400, paddingTop: 10}}>
                "NAJDI SI BRIGÁDNÍKA SVÝCH SNŮ"
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: 10}}>
                <Link href="Inzerat" underline="none"><Mainbutton content="Napiš svůj inzerát"/></Link>
                <Mainbutton content="Najdi Brigádníka"/>
            </Box>

            <Box component="div" sx={{position: 'absolute', zIndex: -1, right: 0, marginTop: -25}}>
                <img src="Women.png" alt="logo"/>
            </Box>
            <Box component="div" sx={{position: 'absolute', zIndex: -1, left: 0, marginTop: -15, marginLeft: -35}}>
                <img src="Dog.png" alt="logo"/>
            </Box>
            <Typography variant="h2"
                        sx={{textAlign: 'center', fontFamily: "Bebas Neue", fontWeight: 400, paddingTop: 55}}>
                JEDNODUCHÝ POSTUP
            </Typography>

            <Stack direction="row" spacing={4} sx={{alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
                <Iconcomponent icon={<NotesOutlinedIcon sx={{color: 'primary.light', fontSize: 150}}/>} index={1}
                               children={'Vytvoř si inzerát'}></Iconcomponent>
                <HorizontalRuleOutlinedIcon sx={{color: 'primary.contrastText', fontSize: 120}}/>
                <Iconcomponent icon={<TravelExploreOutlinedIcon sx={{color: 'primary.light', fontSize: 150}}/>}
                               index={2} children={'Vytvoř si inzerát'}></Iconcomponent>
                <HorizontalRuleOutlinedIcon sx={{color: 'primary.contrastText', fontSize: 120}}/>
                <Iconcomponent icon={<SavingsOutlinedIcon sx={{color: 'primary.light', fontSize: 150}}/>} index={3}
                               children={'Vytvoř si inzerát'}></Iconcomponent>
            </Stack>
            <Stack direction="row" spacing={4} sx={{alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
                <Iconcomponent icon={<PeopleAltOutlinedIcon sx={{color: 'primary.light', fontSize: 150}}/>} index={1}
                               children={'Vytvoř si inzerát'}></Iconcomponent>
                <HorizontalRuleOutlinedIcon sx={{color: 'primary.contrastText', fontSize: 120}}/>
                <Iconcomponent icon={<TextsmsOutlinedIcon sx={{color: 'primary.light', fontSize: 150}}/>} index={2}
                               children={'Vytvoř si inzerát'}></Iconcomponent>
                <HorizontalRuleOutlinedIcon sx={{color: 'primary.contrastText', fontSize: 120}}/>
                <Iconcomponent icon={<DoneOutlineOutlinedIcon sx={{color: 'primary.light', fontSize: 150}}/>} index={3}
                               children={'Vytvoř si inzerát'}></Iconcomponent>
            </Stack>

            <Box sx={{zIndex: -1, position: 'absolute', marginTop: 50, right: 500}}>
                <img src="Guy.png"/>
            </Box>
            <Box sx={{overflow: 'hidden', zIndex: -2}}>
                <Box sx={{
                    backgroundColor: 'primary.light',
                    width: '146.8px',
                    height: "2600px",
                    zIndex: 2,
                    marginTop: -40,
                    transform: 'rotate(53deg)',
                    boxShadow: 10,
                    marginLeft: "900px",
                    position: 'relative',
                }}></Box>
            </Box>
        </>
    );

}
export default Homepage;
