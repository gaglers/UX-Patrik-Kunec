import React, { useState } from 'react';
import './Categories.css';

const categoriesData = [ 
    { id: 1, name: 'Údajové štruktúry', items: ['Zásobník', 'Front', 'Zoznam', 'Hašovacia tabuľka', 'Stromy',] }, 
    { id: 2, name: 'Algoritmy', items: ['Prechádzanie stromu', 'Triedenie', 'Prechádzanie grafu'] }
];


function Categories({handleNext}){
    const [openCategories, setOpenCategories] = useState({}); 
    
    const toggleCategory = (id) => { setOpenCategories((prev) => ({
         ...prev, [id]: !prev[id], 
        })); 
    };
  return (
    <div className='ml-10 text-white'>
        {categoriesData.map((category) => ( 
            <div key={category.id}> 
            <h2 className='Category-Title' onClick={() => toggleCategory(category.id)}> 
            {openCategories[category.id] ? '↓' : '↑'} {category.name} 
            </h2> 
        {openCategories[category.id] && ( 
            <ul> {category.items.map((item, index) => ( 
                <li onClick={handleNext} className='Category-Item' key={index}>{item}</li> ))} 
            </ul> )} 
            </div> ))}
    </div>
  );
};

export default Categories;
