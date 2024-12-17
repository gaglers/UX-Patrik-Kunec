import './Visualization.css';
import PlayIcon from '../icons/visualization/play_icon.svg';
import ForwardArrowIcon from '../icons/visualization/forward_arrow_icon.svg';
import ForwardIcon from '../icons/visualization/forward_icon.svg';
import BackArrowIcon from '../icons/visualization/arrow_back_icon.svg';
import BackwardIcon from '../icons/visualization/backward_icon.svg';
import SkipField from '../icons/visualization/skip_to_field.svg';
import SpeedIcon from '../icons/visualization/speed_icon.svg';
import AddActionIcon from '../icons/visualization/add_action_icon.svg';
import StatisticsIcon from '../icons/visualization/statistics_icon.svg';
import VisualDescrIcon from '../icons/visualization/visual_descr_icon.svg';
import ShareIcon from '../icons/visualization/share_icon.svg';
import ArrowIconLeft from '../icons/visualization/arrow_left_icon.svg';
import ArrowIconRight from '../icons/visualization/arrow_right_icon.svg';


import VisualizationImage from '../images/tree_visualization.svg';
import { useState } from 'react';

function Vizualization() {
  const [open, setOpen] = useState(false);

  const togglePseudocode = () => {
    if(!open){
      setOpen(true);
    }
    else{
      setOpen(false);
    }
  }
  return (
    <div className='Visualization'>
      <div className='Visualization-Buttons'>
        <div className='Vizualization-Section'>
        <img src={VisualDescrIcon} alt='visualDecrIcon' />
        <img src={ShareIcon} alt='shareIcon' />
        </div>
        <div className='Vizualization-Section'>
          <img src={BackwardIcon} alt='backwardIcon' />
          <img src={BackArrowIcon} alt='backArrowIcon' />
          <img src={PlayIcon} alt='playIcon' />
          <img src={ForwardArrowIcon} alt='forwardArrowIcon' />
          <img src={ForwardIcon} alt='forwardIcon' />
        </div>
        <div className='Vizualization-Section'>
          <img src={SpeedIcon} alt="speedIcon" />
          <img src={SkipField} alt="skipField" />
          <img src={AddActionIcon} alt="skipField" />
          <img src={StatisticsIcon} alt="statisticsIcon" />
        </div>
      </div>
      <img src={VisualizationImage} alt="Visualization" />
      <div className={'flex items-start justfy-center text-2xl absolute right-0 bottom-1/4 text-white bg-purple-950 bg-opacity-85 duration-300 h-72 rounded-lg ' + (open ? "w-80 " : "w-8 ")}>
          <img width="24px" height='24px' onClick={togglePseudocode} className='cursor-pointer' src={(open ? ArrowIconRight : ArrowIconLeft)} alt='arrowIconLeft' /> 
          {open ? "Pseudokód" : null}
      </div>
    </div>
  );
}

export default Vizualization;
