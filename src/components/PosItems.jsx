import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomButton from './CustomButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {DummData} from './utils/DemoData';

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
    createData(),
    createData(),
    createData(),
];

const PosItems = (props) => {
    const [value, setValue] = React.useState('1');
    const [itemData,setItemData] = useState(null);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        const filteredData = DummData.filter(res => res.id === props.itemId);
        setItemData(...filteredData.list)
        // console.log(itemData)
    },[props.itemId]);

    

    return (
        <>
            <Typography component="div" variant="" sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 5px', alignItems: 'center' }}>
                <Typography component="div" variant="h6">POS Screen{props.id}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1
                        },
                    }}
                >
                    <CustomButton text={'Reports'} pd="pd"/>
                    <CustomButton text={'Action'} bg="bg" color="white" pd="pd"/>
                </Box>
            </Typography>
            <Paper sx={{ marginBottom: '1rem', paddingBottom: '1rem' }} elevation={3}>
                <Typography component="div" variant="" sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 5px', alignItems: 'center' }}>
                    <Typography component="div" variant="h5" sx={{fontWeight:'700!important',fontSize:'1.6rem',marginLeft:'1rem'}}>Items</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                                m: 1
                            },
                        }}
                    >
                        <CustomButton text={'Favorites'} bg="bg" color="white" />
                        <CustomButton text={'Recents'} bg="bg" color="white" />
                        <CustomButton text={'More'} bg="bg" color="white" />
                    </Box>
                </Typography>
                <Paper elevation={3} sx={{ margin: '0.5rem' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                                m: 1
                            },
                        }}
                    >
                    </Box>
                    <Box sx={{ width: '100%', typography: 'body1', }}>
                        <TabContext value={value} >
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="All Items" value="1"/>
                                    <Tab label="Misc" value="2" />
                                    <Tab label="Cat 1" value="3" />
                                    <Tab label="Cat 2" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Paper>
                                    <TableContainer component={Paper} elevation={3} sx={{ height: '60vh', overflow: 'auto' }}>
                                        <Box sx={{display:'flex',alignItems:'center'}}>
                                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password" size='small'>Search</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type='text'
                                                    size='small'
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="start"
                                                            >
                                                                {<SearchIcon />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {<ClearIcon />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }

                                                    label="Search"
                                                />
                                            </FormControl>
                                            <Typography component="div" variant="p" className='filter'>  {'  '}<FilterListIcon className='Icon_color'/> Filters</Typography>
                                        </Box>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                            <TableHead>
                                                <TableRow >
                                                    <TableCell sx={{fontWeight:'bold'}}>Add</TableCell>
                                                    <TableCell align="right" sx={{fontWeight:'bold'}}>item_eta</TableCell>
                                                    <TableCell align="right" sx={{fontWeight:'bold'}}>item_name</TableCell>
                                                    <TableCell align="right" sx={{fontWeight:'bold'}}>stock_pos</TableCell>
                                                    <TableCell align="right" sx={{fontWeight:'bold'}}>Price_pos</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {itemData && itemData.map((row) => (
                                                    <TableRow
                                                        key={row.add}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.add}
                                                        </TableCell>
                                                        <TableCell >{row.item_eta}</TableCell>
                                                        <TableCell >{row.item_name}</TableCell>
                                                        <TableCell >{row.stock_pos}</TableCell>
                                                        <TableCell >{row.Price_pos}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                            <TabPanel value="4">Item Four</TabPanel>
                        </TabContext>
                    </Box>
                </Paper>
            </Paper>
        </>
    )
}

export default PosItems