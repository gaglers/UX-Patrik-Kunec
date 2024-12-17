import './Home.css';
import {SearchField, Label, Input, Button} from 'react-aria-components';
import React from 'react';
import Card from '../components/Card';

import Stack from '../images/stack_image.svg'; import Queue from '../images/queue_image.svg'; 
import List from '../images/list_image.svg'; import Hashtable from '../images/hashtable_image.svg'; 
import Tree from '../images/tree_image.svg'; import TreeTraversal from '../images/treeTraversal_image.svg'; 
import Sorting from '../images/sorting_image.svg'; import GraphTraversal from '../images/graphTraversal_image.svg'; 

const cards = [
  { id: 1, name: 'Zásobník', image: Stack },
  { id: 2, name: 'Front', image: Queue},
  { id: 3, name: 'Zoznam', image: List},
  { id: 4, name: 'Hašovacia tabuľka', image: Hashtable},
  { id: 5, name: 'Stromy', image: Tree},
  { id: 6, name: 'Prechádzanie stromu', image: TreeTraversal},
  { id: 7, name: 'Triedenie', image: Sorting},
  { id: 8, name: 'Prechádzanie grafu', image: GraphTraversal},
  { id: 9, name: 'Binárny vyhľadávací strom', image: Tree}
]


function Home() {
  let [text, setText] = React.useState('');

  const filteredCards = cards.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()) );

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <h1 className='text-white font-mono text-2xl mt-7 mb-3 text-center'>Prosím vyber alebo vyhľadaj kategóriu</h1>
      <SearchField onChange={setText}>
        <Label className='text-yellow-500'>Hľadaj</Label>
        <Input placeholder='Názov kategórie alebo algoritmu'/>
      </SearchField>
      <div className='Card-Container'>
        {filteredCards.map((item) => ( 
            <Card key={item.id} name={item.name} image={item.image}/>
          ))
        } 
      </div>
    </div>
  );
}

export default Home;
