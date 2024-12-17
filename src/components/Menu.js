import './Menu.css';
import Logo from './Logo';
import HomeIcon from '../icons/home_icon.svg';
import MenuIcon from '../icons/menu_icon.svg';
import SettingsIcon from '../icons/settings_icon.svg';
import BugIcon from '../icons/bug_icon.svg';
import InfoIcon from '../icons/info_icon.svg';
import { Link } from "react-router-dom";
import DialogWindowComparative from './DialogWindowComparative';
import { useState } from 'react';


function Menu() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if(!open){
      setOpen(true);
    }
    else{
      setOpen(false);
    }
  };

  return (
    <div className='flex justify-center items-center w-full flex-col h-auto'>
      <div className={"Menu-Top text-red-50 "+ (open ? "Menu-Open" : 'null')}>
          <Logo />
          <button onClick={toggleOpen} className='absolute right-0 flex items-center text-2xl font-medium'>
            <h2>Menu</h2> <img className='' src={MenuIcon} alt='menu'/>
          </button>
          <div className={'Hidden-Menu ' + (open ? null : 'Hidden')}>
            <div className='w-48 h-38 flex justify-start items-center flex-wrap gap-0 p-2 rounded-md'>
              <Link to='' className='Menu-Item'><img className='w-5 h-5' src={HomeIcon} alt="Home" />Home</Link>
              <DialogWindowComparative />
              <div className='Menu-Item bg-opacity-75 bg-yellow-500 hover:bg-opacity-100 hover:bg-blue-500 cursor-pointer'>Tréningový režim</div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='mt-3 w-52 h-8 flex justify-center items-center flex-wrap gap-5 bg-yellow-400 rounded-md'>
                <img src={SettingsIcon} alt="Settings" />
                <img src={BugIcon} alt="Bug" />
                <img src={InfoIcon} alt="Info" />
              </div>
                <button className='text-teal-500 border-teal-500 border-2 rounded-md'>Prihlásenie</button>
            </div>
          </div>
      </div>
      <div className='Menu-Bottom'>
        <DialogWindowComparative />
        <Link to='/'  className='flex justify-center items-center bg-opacity-75 hover:bg-opacity-100'>
          <img src={HomeIcon} className='w-5 h-5' alt='homeIcon'/>
          Domov
        </Link>
        <div className='Menu-Item bg-opacity-75 bg-yellow-500 hover:bg-opacity-100 hover:bg-blue-500 cursor-pointer'>Tréningový režim</div>
      </div>
    </div>
  );
}

function MenuItem({ to, label, isActive }) {
  return (
    <li>
      <Link to={to} className={"Menu-Item" + isActive ? 'active' : ''}>
        {label}
      </Link>
    </li>
  );
}


export default Menu;
