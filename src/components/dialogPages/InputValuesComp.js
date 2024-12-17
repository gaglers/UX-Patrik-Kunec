import React, { useState } from 'react';
import TextField from '@mui/material/TextField'; 
import Select from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl'; 
import InputLabel from '@mui/material/InputLabel';

function InputValuesComp({arrayOfNums}){
    const [value, setValue] = useState('');
    const [order, setOrder] = useState('Vzostupne'); 
    const handleChange = (event) => { 
        const inputValue = event.target.value.replace(/[^\d\s]/g, '');
        const formattedValue = inputValue.replace(/ {2,}/g, ' ').replace(/[^\d\s]/g, '');
        setValue(formattedValue); 
        arrayOfNums();
    };
    const handleOrderChange = (event) => { 
        setOrder(event.target.value); 
    };
    return (
        <div className='flex flex-col justify-center ml-8 mt-3'>
            <TextField label="Pole prvkov" value={value} onChange={handleChange} variant="outlined"/>
            <FormControl variant="outlined" style={{maxWidth: "130px", marginTop: '20px' }}> 
                <InputLabel>Zoradenie</InputLabel> 
                <Select value={order} onChange={handleOrderChange} label="Order"> 
                    <MenuItem value="Vzostupne">Vzostupne</MenuItem> 
                    <MenuItem value="Zostupne">Zostupne</MenuItem> 
                </Select> 
            </FormControl>
        </div>
    );
}

export default InputValuesComp;