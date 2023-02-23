import {NextPage} from "next";
import Box from "@mui/material/Box";
import {Header} from "@/pages/Header";
import * as React from "react";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";

const Formular: NextPage = (props) => {
    return (
        <>
            <Header/>
            <Box component="div" sx={{position: 'absolute', zIndex: -1, width: 100}}>
                <img src="Formlar_backgroundc.jpg" alt="background"/>
            </Box>
            <Typography variant="h1" sx={{
                position: 'absolute',
                zIndex: -1,
                 right: 450,
                marginTop: "350px",
                fontFamily: 'Bebas Neue'
            }}>
                Vytvoř si účet nebo se <br/>
                zaregistruj.
            </Typography>
            <Box sx={{
                width: 536,
                height: 704,
                boxShadow: 5,
                marginLeft: 16.9,
                marginTop: 14.3,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: "87px",
            }}>
                <Button sx={{
                    width: 484,
                    height: "80px",
                    placeSelf: 'center',
                    borderRadius: 5,
                    backgroundColor: 'secondary.light',
                    boxShadow: 5,
                }}>
                    <Box component="div" sx={{position: 'absolute', left: 60, alignItems: 'center', display: 'flex'}}>
                        <img src="Icon awesome-apple.png"/>
                    </Box>
                    <Typography sx={{
                        color: 'primary.main',
                    }}>Pokračovat přes Apple
                    </Typography>
                </Button>
                <Button sx={{
                    width: 484,
                    height: "80px",
                    placeSelf: 'center',
                    borderRadius: 5,
                    boxShadow: 5,
                    marginTop: "34px"
                }}>
                    <Box component="div" sx={{position: 'absolute', left: 60, alignItems: 'center', display: 'flex'}}>
                        <img src="Icon awesome-google.png"/>
                    </Box>
                    <Typography sx={{
                        color: 'secondary.light',
                    }}>Pokračovat přes Google
                    </Typography>
                </Button>
                <Button sx={{
                    width: 484,
                    height: "80px",
                    placeSelf: 'center',
                    borderRadius: 5,
                    boxShadow: 5,
                    backgroundColor: 'secondary.main',
                    marginTop: "34px"
                }}>
                    <Box component="div" sx={{position: 'absolute', left: 60, alignItems: 'center', display: 'flex'}}>
                        <img src="Icon awesome-facebook.png"/>
                    </Box>
                    <Typography sx={{
                        color: 'primary.main',
                    }}>Pokračovat přes Facebook
                    </Typography>
                </Button>
                <Typography sx={{
                    fontSize: 30,
                    color: 'primary.contrastText',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: "50px"
                }}>Nebo
                </Typography>
                <Button sx={{
                    width: 484,
                    height: "80px",
                    placeSelf: 'center',
                    borderRadius: 5,
                    p: 2, border: '1px solid #51B371',
                    backgroundColor: 'primary.main',
                    marginTop: "50px"
                }}>
                    <Typography sx={{
                        color: 'primary.light',
                    }}>Pokračovat přes e-mail
                    </Typography>
                </Button>
            </Box>
        </>
    )
}
export default Formular;