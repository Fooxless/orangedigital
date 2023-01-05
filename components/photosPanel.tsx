import { useState, useEffect } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';



export default function Photos() {

    const [information, setInformation] = useState<any>(null)
    console.log("videos", information)
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
            <Box sx={{ width: '100%', display: 'flex', textAlign: 'center', marginTop: "20px", padding: "20px", flexDirection: "column", justifyItems: 'center' }}>
                {information && (information.photos?.map((video: any) => {
                    console.log("video", video);
                    const url = `/${video}`;
                    return (
                        <StyledBox key={video} sx={{ position: 'relative', margin: "5px", minWidth: "500px" }}>

                            <Image src={url} alt="me" width="500" height="250" />

                        </StyledBox >
                    )
                }))}
            </Box >

        </div >
    );
}