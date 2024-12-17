import './ComparativeVisualization.css';
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


import VisualizationImage from '../images/sorting_visualization.svg';
import { useState } from 'react';

function ComparativeVisualization() {
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
      <div className='flex justify-center flex-wrap gap-24'>
        <div className='Comparative-Visualization-Section'>
          Bubble Sort
          <div className='Comparative-Pseudocode'>Pseudokód</div>
          <img src={VisualizationImage} alt="Visualization" />
        </div>
        <div className='Comparative-Visualization-Section'>
          Insertion Sort
          <div className='Comparative-Pseudocode'>Pseudokód</div>
          <img src={VisualizationImage} alt="Visualization" />
        </div>
      </div>
    </div>
  );
}

export default ComparativeVisualization;
