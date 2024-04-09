import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CustomButton from '../components/CustomButton';
import { DummData } from '../components/utils/DemoData';
import PosItems from '../components/PosItems';
import PosBilling from '../components/PosBilling';
const InstaImage = 'https://cdn.pixabay.com/photo/2016/12/04/18/58/instagram-1882330_960_720.png'

const POS = () => {
    const [contentId,setContentId] = useState();

    return (
        <header className="App-header">
            <section className='one'>
                <div>
                    <CustomButton text={'Settings'} bg="bg" color="white" />
                </div>
                {DummData.map((item, index) => {
                    return (
                        <Paper key={index} sx={{ margin: '0.5rem 0' }}>
                            <Card sx={{ display: 'flex', padding: '8px', borderRadius: '5px', alignItems: 'center' }} onClick={() => setContentId(item.id)}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 'auto', height: '80px', borderRadius: '10px' }}
                                    image={InstaImage}
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h6">
                                            {item.name}{contentId}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {item.sdetail}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Paper>
                    )
                })}

            </section>
            <section className='two'>
                <PosItems itemId={contentId} />
            </section>
            <section className='ten'>
                <PosBilling />
            </section>
        </header>
    )
}

export default POS