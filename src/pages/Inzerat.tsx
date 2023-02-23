import {NextPage} from "next";
import * as React from "react";
import {Header} from "@/pages/Header";
import {InzeratButton} from "@/InzeratButton";
import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {width} from "@mui/system";

const Rubrika = [
    {
        label: 'Sekání trávy',
    },
    {
        label: 'Stříhání keřů',
    },
    {
        label: 'Hlídání psa',
    },
    {
        label: 'Čištění bazénů',
    },
];
const Kategorie = [
    {
        label: 'Zahrada',
    },
    {
        label: 'Domácnost',
    },
    {
        label: 'Kutil',
    },
    {
        label: 'Hlídání',
    },
];
const Lokalita = [
    {
        label: 'Hradec Králové',
    },
    {
        label: 'Pardubice',
    },
    {
        label: 'Praha',
    },
    {
        label: 'Brno',
    },
];

const Inzerat: NextPage = (props) => {
    return (
        <>
            <Header/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'space-between'}}>
                <Box sx={{display: 'flex', paddingTop: 10, paddingRight: 5}}>
                    <Box>
                        <TextField sx={{width: 200}}
                                   id="fullWidth"
                                   select
                                   label="Rubrika"
                                   helperText="Vyber si svojí rubriku"
                        >
                            {Rubrika.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', paddingLeft: 5, paddingTop: 10}}>
                    <Box>
                        <TextField sx={{width: 200}}
                                   id="fullWidth"
                                   select
                                   label="Kategorie"
                                   helperText="Vyber si svojí kategorii"
                        >
                            {Kategorie.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'space-between'}}>
                <Box sx={{display: 'flex', paddingTop: 5, paddingRight: 5}}>
                    <Box>
                        <TextField sx={{width: 200}}
                                   id="fullWidth"
                                   select
                                   label="Rubrika"
                                   helperText="Vyber si svojí rubriku"
                        >
                            {Rubrika.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', paddingLeft: 5, paddingTop: 5}}>
                    <Box>
                        <TextField sx={{width: 200}}
                                   id="fullWidth"
                                   select
                                   label="Lokalita"
                                   helperText="Vyber si lokalitu"
                        >
                            {Lokalita.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
                <TextField multiline fullWidth label="Text" id="fullWidth" rows={15}
                           sx={{
                               maxWidth: 620,
                               display: 'flex',
                               boxShadow: 1,
                               border: 'none'
                           }}>
                </TextField>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 5}}>
                <Box sx={{display: 'flex', justifyContent: 'end', width: 600}}>
                    <Button variant="contained" sx={{
                        boxShadow: 0,
                        borderRadius: 3,
                        height: 42,
                        width: "100px",
                        display: 'flex',
                        backgroundColor: 'primary.light',
                        color: 'primary.main',
                        fontSize: 10
                    }}>Vytvořit</Button>
                </Box>
            </Box>
            <Box component="div" sx={{position:'absolute', zIndex: -2, right: 0}}>
                <img src="Women_cleaner.png" alt="logo"/>
            </Box>
        </>
    )
}
export default Inzerat;