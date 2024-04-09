import React from 'react'
import CustomButton from './CustomButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
];

const PosBilling = () => {
    return (
        <>
            <Paper sx={{ paddingBottom: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 0.5
                        },
                    }}
                >
                    <CustomButton text={'Delivery'} bg="bg" color="white" />
                    <CustomButton text={'Pickup'} bg="bg" color="white" />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1
                        },
                    }}
                ><CustomButton text={'Dine-in'} bg="bg" color="white" />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1
                        },
                    }}
                >
                    <TextField id="outlined-basic" label="Name" variant="outlined" size="small"/>
                    <TextField id="outlined-basic" label="Number" variant="outlined" size="small"/>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1
                        },
                    }}
                >
                    <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth size="small"/>
                </Box>

                <Paper sx={{ m: 1, p: 1 }} elevation={3}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TableContainer component={Paper} sx={{ height: '40vh', overflow: 'auto' }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="right">Perticulars</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell >{row.calories}</TableCell>
                                            <TableCell >{row.fat}</TableCell>
                                            <TableCell >{row.carbs}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                                m: 1
                            },
                        }}
                    >

                    </Box>

                    <TextField size="small" id="outlined-basic" label="Comments" variant="outlined" fullWidth sx={{marginTop:'0.5rem'}}/>
                    <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                                m: 1
                            },
                        }}
                    >
                        <CustomButton text={'Reset'} />
                        <CustomButton text={'Print Reciept'} bg="bg" color="white" />
                        <CustomButton text={'Give KOT'} />
                    </Box>
                </Paper>

            </Paper>
        </>
    )
}

export default PosBilling