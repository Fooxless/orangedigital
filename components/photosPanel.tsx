import { useState, useEffect } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';



export default function Photos() {

    const [videos, setVideos] = useState<any>(null)
    console.log("videos", videos)
    useEffect(() => {
        fetch('/api/videos', { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setVideos(data)
            })
    }, [])

    return (
        <div >
            <Box sx={{ width: '100%', display: 'flex', textAlign: 'center', marginTop: "20px", padding: "20px", flexDirection: "column", }}>
                {videos && (videos?.map((video: any) => {
                    console.log("video", video);
                    const url = `/${video}`;
                    return (
                        <Box key={video} sx={{ position: 'relative', margin: "5px", minWidth: "500px" }}>

                            <Image src={url} alt="me" width="500" height="250" />

                        </Box >
                    )
                }))}
            </Box >

        </div >
    );
}