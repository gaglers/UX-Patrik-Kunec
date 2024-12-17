import {React, useState} from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from'@mui/material';

function ChooseAlgorithm({pickedOne}){

    const algorithms = ['Binárny vyhľadávací strom', 'AVL strom'];
    const [selectedValue, setSelectedValue] = useState(''); 
    const handleChange = (event) => { 
        pickedOne();
        setSelectedValue(event.target.value); 
    }; 
    return (
        <div className='ml-7 mt-3'>
        <FormControl component="fieldset"> 
            <RadioGroup name="options" value={selectedValue} onChange={handleChange}> 
                <FormControlLabel className='text-white' value="Binárny vyhľadávací strom" control={<Radio />} label="Binárny vyhľadávací strom" /> 
                <FormControlLabel className='text-white' value="AVL strom" control={<Radio />} label="AVL strom" /> 
            </RadioGroup> 
        </FormControl> 
        </div>
    ); 
}

export default ChooseAlgorithm;
  