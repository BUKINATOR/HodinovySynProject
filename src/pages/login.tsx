import {NextPage} from "next";
import Box from "@mui/material/Box";
import {Header} from "@/pages/Header";
import * as React from "react";
import {Button, Input, Link, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/navigation";
import {FormEvent} from "react";
import {authUtils} from "../../firebase/authUtils";
import LockIcon from '@mui/icons-material/Lock';

const Login: NextPage = (props) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()


    const handleForm = async (event: FormEvent) => {
        event.preventDefault()
        try {
            await authUtils.login(email, password);
            router.push("/");
        } catch (error) {
            alert("Nesprávné heslo nebo email");
        }

        await authUtils.signin(email, password);
        return router.push("/")
    }

    return (
        <>
            <Header/>
            <form onSubmit={handleForm} className="form">
                <Box
                    component="div"
                    sx={{
                        position: 'absolute',
                        zIndex: -1,
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                    }}
                >0
                    <Box sx={{display: 'flex', maxHeight: '100%'}}>
                        <img src="loginBackground.jpg" alt="background"
                             style={{maxWidth: '100%', height: 'auto', display: 'block', overflow: 'hidden'}}/>
                    </Box>
                </Box>
                <Box
                    sx={{

                        maxWidth: 600,
                        height: 'auto',
                        boxShadow: 5,
                        backgroundColor: 'primary.main',
                        margin: '0 auto',
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 'clamp(20px, 3vw, 40px)',
                    }}
                >
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <LockIcon sx={{color: 'primary.light', fontSize: 35}}/>
                    </div>
                    <Typography variant="h3" sx={{marginBottom: 'clamp(10px, 3vw, 25px)', textAlign: 'center'}}>
                        Přihlášení
                    </Typography>


                    <Input
                        sx={{marginBottom: 'clamp(10px, 3vw, 25px)'}}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                    <Input
                        sx={{marginBottom: 'clamp(10px, 3vw, 25px)'}}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Heslo"
                    />

                    <Button type="submit" variant="contained"
                            sx={{marginTop: 'clamp(20px, 3vw, 40px)', height: 'clamp(40px, 5vw, 80px)'}}>
                        Přihlásit se
                    </Button>
                    <Link href="Singin" underline="always"
                          sx={{display: 'flex', color: 'black', justifyContent: 'end', padding: 2}}>
                        {'Zaregistruj se'}
                    </Link>
                </Box>
            </form>

        </>
    )
}
export default Login;