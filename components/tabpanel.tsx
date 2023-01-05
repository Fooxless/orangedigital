import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Tabpanel() {
    const [value, setValue] = useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%', boxShadow: 2 }}>
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
                    There will be a video component here
                </div>
            ) : (<div>
                There will be a photo component here
            </div>
            )}

        </div>
    );
}