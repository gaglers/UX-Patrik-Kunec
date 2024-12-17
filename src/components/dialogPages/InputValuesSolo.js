import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import AddIcon from '../../icons/add_icon.svg';

function InputValuesSolo({arrayOfNums}){
    const [value, setValue] = useState('');
    const [order, setOrder] = useState('Vzostupne');
    const [items, setItems] = useState([]); 

    const handleAddItem = () => { 
        setItems([...items, "Delete 5"]);; 
    };
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
        <div className='flex flex-col gap-3 justify-center ml-8 mt-3'>
            <TextField label="Pole prvkov" value={value} onChange={handleChange} variant="outlined" />
            <div className='flex flex-wrap flex-col'>
                <div className='flex justify-between'>
                    Akcie nad stromom
                    <Button className="w-1" variant="contained" color="primary" onClick={handleAddItem}> <img src={AddIcon} alt="addIcon" /> </Button> 
                </div>
                <List className='h-48 rounded-md bg-purple-300 bg-opacity-30 overflow-scroll'> {items.map((item, index) => ( 
                    <ListItem key={index}> 
                        <ListItemText primary={item} /> 
                    </ListItem> ))} 
                </List>
            </div>
        </div>
    );
}

export default InputValuesSolo;