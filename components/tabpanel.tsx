import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VideosPanel from "./videosPanel";
import PhotosPanel from "./photosPanel";


export default function Tabpanel() {
    const [value, setValue] = useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%', boxShadow: 3 }}>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label={<Typography variant="h6" gutterBottom
                        sx={{ fontWeight: 'bold' }}>
                        Videos
                    </Typography>} />
                    <Tab value="two" label={<Typography variant="h6" gutterBottom
                        sx={{ fontWeight: 'bold' }}>
                        Photos
                    </Typography>} />
                </Tabs>
            </Box>
            {value === 'one' ? (
                <div>
                    <VideosPanel />
                </div>
            ) : (<div>
                <PhotosPanel />
            </div>
            )}

        </div>
    );
}