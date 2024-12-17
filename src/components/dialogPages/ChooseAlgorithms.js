import React from 'react';
import Checkbox from '@mui/material/Checkbox'; 
import FormControlLabel from '@mui/material/FormControlLabel'; 
import FormGroup from '@mui/material/FormGroup';

function ChooseAlgorithms({updateCounter}){

    const algorithms = ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort'];
    const [checked, setChecked] = React.useState( algorithms.reduce((acc, category) => ({ ...acc, [category]: false }), {}) );
    
    const handleChange = (event) => { 
      setChecked({ ...checked, [event.target.name]: event.target.checked });
      if(event.target.checked){
        updateCounter(1);
      }
      else{
        updateCounter(-1);
      }

     };
  
    return (
      <div className='ml-7 mt-3'>
        <FormGroup> {algorithms.map((category) => ( 
          <FormControlLabel className='text-white'
            key={category} 
            control={ <Checkbox checked={checked[category]} onChange={handleChange} name={category} /> } label={category} 
          /> 
          ))} 
        </FormGroup>
      </div>
    );
}

export default ChooseAlgorithms;
  