'use client'
import React, {FormEvent} from "react";
import {useRouter} from 'next/navigation'
import {authUtils} from "../../firebase/authUtils";
import {NextPage} from "next";
import {Header} from "@/pages/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, Container, Grid, Input, Link, TextField} from "@mui/material";

const Singin: NextPage = (props) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()


    const handleForm = async (event: FormEvent) => {
        event.preventDefault()
        if (password.length < 6) {
            alert('Heslo musí mít alespoň 6 znaků.')
            return
        }
        if (!password.match(/[A-Z]/)) {
            alert('Heslo musí obsahovat alespoň jeden velký znak.')
            return
        }

        await authUtils.signin(email, password);
        return router.push("/")
    }


    return (
        <>
            <Header/>
            <form onSubmit={handleForm} className="form">

                <Box
                    sx={{

                        maxWidth: 600,
                        height: 'auto',
                        boxShadow: 5,
                        margin: '0 auto',
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 'clamp(20px, 3vw, 40px)',
                    }}
                >
                    <Typography variant="h3" sx={{marginBottom: 'clamp(10px, 3vw, 25px)', textAlign: 'center'}}>
                        Registrace
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Heslo"
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Registruj se
                    </Button>
                </Box>
            </form>
        </>
    );
}
export default Singin;