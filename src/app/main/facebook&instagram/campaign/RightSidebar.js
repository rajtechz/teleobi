import {useState} from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import { Typography,Divider } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const imageMap = {
    'Button': '/assets/images/otnBroadcastfacebook/button.png',
    'File': '/assets/images/otnBroadcastfacebook/file.png',
    'Image': '/assets/images/otnBroadcastfacebook/image.png',
    'Mp3': '/assets/images/otnBroadcastfacebook/mp3.png',
    'Quick Reply': '/assets/images/otnBroadcastfacebook/quick_reply.png',
    'Text': '/assets/images/otnBroadcastfacebook/text.png',
    'Video': '/assets/images/otnBroadcastfacebook/video.png',


  };


 

function RightSidebar({ selectedMessageType }) {

    return (

        <>
            <div style={{ flex: 1, backgroundColor: 'lightgray', padding: '20px' }}>
                <Typography variant='h6'>Summary</Typography>
            </div>
            <div style={{ height: '100px', overflow: 'auto', marginTop: "20px", justifyContent:"center",alignItems:"center" }}>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                        <Grid item xs={6} sx={{ marginLeft: '10px' }}>
                            <Item>Page subscriber</Item>
                        </Grid>

                        <Grid item xs={6} sx={{ marginLeft: '10px' }}>
                            <Item>Targeted reach</Item>
                        </Grid>

                    </Grid>
                </Box>


            </div>
            <div style={{ display:"flex", gap: '10px',justifyContent: 'flex-end' }}>
                <CardMedia
                    component="img"
                    alt="Image"
                    height="200"
                    sx={{ width: '200px' }}        
                    image={imageMap[selectedMessageType]}
                    />

            </div>
            <Divider sx={{ my: 4 }} />

        </>
    )
}

export default RightSidebar
