import { useState, useEffect } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { styled } from '@mui/material/styles';

export default function Videos() {
    const [information, setInformation] = useState<any>(null)
    console.log("videos", information)
    useEffect(() => {
        fetch('/api/information', { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setInformation(data)
            })
    }, [])


    const StyledCircle = styled(PlayCircleOutlineIcon)`
    ${({ theme }) => `
    cursor: pointer;
    transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
    })};
    &:hover {
      transform: scale(1.1);
    }
    `}
  `;

    const StyledThumb = styled(ThumbUpAltIcon)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
    })};
  &:hover {
    transform: scale(1.1);
  }
  `}
`;

    return (
        <div >
            <Box sx={{ width: '100%', display: 'flex', textAlign: 'center', marginTop: "20px", padding: "20px", flexDirection: "column", }}>
                {information && (information.photos?.map((video: any) => {
                    console.log("video", video);
                    const url = `/${video}`;
                    return (
                        <Box key={video} sx={{ position: 'relative', margin: "5px", minWidth: "500px" }}>

                            <StyledThumb sx={{ position: 'absolute', marginBottom: "-110px", marginLeft: "210px", bottom: "50%", left: "50%", color: "#DAD9D6", fontSize: 25 }} />
                            <StyledCircle sx={{ position: 'absolute', marginBottom: "-30px", marginLeft: "-40px", bottom: "50%", left: "50%", color: "#DAD9D6", fontSize: 100, }} />
                            <Image src={url} alt="me" width="500" height="250" />

                        </Box >
                    )
                }))}
            </Box >

        </div >
    );
}