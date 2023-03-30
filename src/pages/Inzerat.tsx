import {NextPage} from "next";
import * as React from "react";
import {Header} from "@/pages/Header";
import {InzeratButton} from "@/InzeratButton";
import Box from "@mui/material/Box";
import {Autocomplete, Button, Chip, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {Stack, width} from "@mui/system";

const Rubrika = [
    {
        title: 'Hlídání děťí',
    },
    {
        title: 'Stříhání keřů',
    },
    {
        title: 'Hlídání psa',
    },
    {
        title: 'Čištění bazénů',
    },
];
const Kategorie = [
    {
        title: 'Zahrada',
    },
    {
        title: 'Domácnost',
    },
    {
        title: 'Kutil',
    },
    {
        title: 'Hlídání',
    },
];
const Cena = [
    {
        title: 'Dohodou',
    },
    {
        title: '50kč',
    },
    {
        title: '100kč',
    },
    {
        title: '150kč',
    },
    {
        title: '200kč',
    },
];
const Lokalita = [
    {
        title: 'Hradec Králové',
    },
    {
        title: 'Pardubice',
    },
    {
        title: 'Praha',
    },
    {
        title: 'Brno',
    },
];


const Inzerat: NextPage = (props) => {
    return (
        <>
            <Header/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'space-between'}}>
                <Box sx={{display: 'flex', paddingTop: 10, paddingRight: 1}}>
                    <Box>
                        <Stack spacing={3} sx={{width: 290}}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={Rubrika}
                                getOptionLabel={(option) => option?.title || ''}
                                defaultValue={[Rubrika[13]]}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Rubrika"
                                        placeholder="Vyber si dovednosti"
                                    />
                                )}
                            />
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', paddingLeft: 1, paddingTop: 10}}>
                    <Box>
                        <Stack spacing={3} sx={{width: 290}}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={Kategorie}
                                getOptionLabel={(option) => option?.title || ''}
                                defaultValue={[Kategorie[13]]}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Kategorie"
                                        placeholder="Vyber si kategorii"
                                    />
                                )}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'space-between'}}>
                <Box sx={{display: 'flex', paddingTop: 5, paddingRight: 1}}>
                    <Box>
                        <Stack spacing={3} sx={{width: 290}}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={Cena}
                                getOptionLabel={(option) => option?.title || ''}
                                defaultValue={[Cena[13]]}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Cena"
                                        placeholder="Vyber si cenu"
                                    />
                                )}
                            />
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', paddingLeft: 1, paddingTop: 5}}>
                    <Box>
                        <Stack spacing={3} sx={{width: 290}}>
                            <Autocomplete
                                id="tags-outlined"
                                size="small"
                                options={Lokalita}
                                getOptionLabel={(option) => option.title}
                                defaultValue={Lokalita[13]}
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip
                                            variant="outlined"
                                            label={option.title}
                                            size="small"
                                            {...getTagProps({index})}
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Vyber si lokalitu"
                                        placeholder="Lokalita"
                                    />
                                )}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
                <TextField multiline fullWidth label="Text" id="fullWidth" rows={15}
                           sx={{
                               maxWidth: 600,
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
            <Box component="div" sx={{position: 'absolute', zIndex: -1, left: 0, marginTop: -85}}>
                <img src="flowers.png" alt="logo"/>
            </Box>
            <Box component="div"
                 sx={{position: 'absolute', zIndex: -1, right: 0, marginTop: "-590px", overflow: 'hidden'}}>
                <img src="Women_cleaner.png" alt="logo"/>
            </Box>
        </>


    )
}
export default Inzerat;