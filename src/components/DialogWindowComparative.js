import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, Stepper, Step, StepLabel } from '@mui/material';
import Categories from './dialogPages/Categories';
import ChooseAlgorithms from './dialogPages/ChooseAlgorithms';
import InputValuesComp from './dialogPages/InputValuesComp';
import './DialogWindowComparative.css';
import Sorting from '../images/sorting_image.svg';
import { useNavigate } from 'react-router-dom';


const steps = ['Výber kategórie', 'Výber algoritmov', 'Vstupy'];

const DialogWindowComparative = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isArrayGiven, setArrayOfNums] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleReset();
  };
  const handleStart = () => {
    setOpen(false);
    navigate('comparative_visualization');
  };
  const updateCounter = (increment) => { 
    setCounter(counter + increment);
  };
  const arrayOfNums = () => {
    setArrayOfNums(true);
  };
  return (
    <div>
      <button className='Menu-Item flex justify-center bg-blue-400 items-center bg-opacity-75 hover:bg-opacity-100' onClick={handleOpen}>
        Komparatívny režim
      </button>
      <Dialog className='bg-purple-700 bg-opacity-40' open={open} onClose={handleClose}>
        <DialogContent className='flex justify-center flex-wrap gap-1'>
          <div className='About-Selections'>
            <h2 className='text-sm text-yellow-400'>Komparatívny režim</h2>
            {activeStep !== 0 && <h2 className='text-xl font-semibold'>Triedenie</h2>}
            {activeStep !== 0 && <img src={Sorting} alt="Triedenie"/>}

          </div>
          <div>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 && <Categories handleNext={handleNext} />}
          {activeStep === 1 && <ChooseAlgorithms updateCounter={updateCounter} />}
          {activeStep === 2 && <InputValuesComp arrayOfNums={arrayOfNums}/>}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={activeStep === 0 ? handleClose : handleBack}>
            {activeStep === 0 ? 'Odísť' : 'Späť'}
          </Button>
          {(((activeStep !== 0 && counter >= 2) && (activeStep === steps.length - 1 && isArrayGiven)) ||
            ((activeStep !== 0 && counter >= 2) && (activeStep < steps.length - 1)))
           && <Button onClick={activeStep === steps.length - 1 ? handleStart : handleNext}>
            
            {activeStep === steps.length - 1 ? 'Spustiť' : 'Ďalej'}
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWindowComparative;
