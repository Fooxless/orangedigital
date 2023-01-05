import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import { styled } from '@mui/material/styles';

export default function ProfileCards() {

    const [information, setInformation] = useState<any>(null)
    console.log("information", information)
    useEffect(() => {
        fetch('/api/information', { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setInformation(data)
            })
    }, [])




    const StyledBox = styled(Box)`
        ${({ theme }) => `
        cursor: pointer;
        transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
    })};
        &:hover {
          transform: scale(1.03);
        }
        `}
      `;


    return (
        <div >
            <Box sx={{ width: '100%', display: 'flex', textAlign: 'center', marginTop: "20px", padding: "20px", flexDirection: "column", }}>
                {information && (information.userdetails?.map((user: any) => {
                    console.log("user", user);
                    const url = `/${user.picture}`;
                    return (
                        <StyledBox key={user.picture} sx={{ display: 'flex', margin: "5px", boxShadow: 3, textAlign: 'center' }}>
                            <Box sx={{ display: 'flex', margin: "10px" }}>
                                <Image src={url} alt="me" width="100" height="100" />
                            </Box >
                            <Box sx={{ display: 'flex', margin: "10px", flexDirection: "column", textAlign: 'left', }}>
                                <Typography variant="h6"> {user.name}</Typography>
                                <Typography variant="body1"> {user.description} </Typography>
                                <Box sx={{ display: 'flex', textAlign: 'left', marginTop: 1 }}>

                                    <Grid item container spacing={1}>
                                        <Grid item sx={{ display: 'flex', marginRight: 1 }} >
                                            <AccessTimeFilledRoundedIcon sx={{ color: "#A1A1A2", fontSize: 18, marginRight: 0.5 }} />
                                            <Typography variant="body2"> {user.time}</Typography>
                                        </Grid>
                                        <Grid item sx={{ display: 'flex', }}>
                                            <FavoriteRoundedIcon sx={{ color: "#A1A1A2", fontSize: 18, marginRight: 0.5 }} />
                                            <Typography variant="body2"> {user.likes}</Typography>
                                        </Grid>
                                        <Grid item sx={{ display: 'flex', }}>
                                            <ChatBubbleRoundedIcon sx={{ color: "#A1A1A2", fontSize: 18, marginRight: 0.5 }} />
                                            <Typography variant="body2"> {user.comments}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box >
                            </Box >
                        </StyledBox >
                    )
                }))}
            </Box >

        </div >
    );
}