import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, Stepper, Step, StepLabel } from '@mui/material';
import ChooseAlgorithm from './dialogPages/ChooseAlgorithm';
import './DialogWindowSolo.css';
import Tree from '../images/tree_image.svg';
import { useNavigate } from 'react-router-dom';
import InputValuesSolo from './dialogPages/InputValuesSolo';


const steps = ['Výber kategórie', 'Výber algoritmu', 'Vstupy'];

const DialogWindowSolo = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [picked, setPicked] = useState(false);
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
    navigate('visualization');
  };
  const pickedOne = () => { 
    setPicked(true);
  };
  const arrayOfNums = () => {
    setArrayOfNums(true);
  };
  return (
    <div>
        <button className="Card" onClick={handleOpen}>
            <img src={Tree} alt="Stromy" />
            <h2 className="text-black text-2xl font-thin text-center p-2">Stromy</h2>
        </button>
      <Dialog className='bg-purple-700 bg-opacity-40' open={open} onClose={handleClose}>
        <DialogContent className='flex justify-center flex-wrap gap-1'>
          <div className='About-Selections'>
            <h2 className='text-sm text-blue-400'>Sólo režim</h2>
            <h2 className='text-xl font-semibold'>Stromy</h2>
            <img src={Tree} alt="Stromy"/>

          </div>
          <div>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 1 && <ChooseAlgorithm pickedOne={pickedOne} />}
          {activeStep === 2 && <InputValuesSolo arrayOfNums={arrayOfNums}/>}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={activeStep === 0 ? handleClose : handleBack}>
            {activeStep === 0 ? 'Odísť' : 'Späť'}
          </Button>
          {(((activeStep !== 0 && picked) && (activeStep === steps.length - 1 && isArrayGiven)) ||
            ((activeStep !== 0 && picked) && (activeStep < steps.length - 1)))
           && <Button onClick={activeStep === steps.length - 1 ? handleStart : handleNext}>
            
            {activeStep === steps.length - 1 ? 'Spustiť' : 'Ďalej'}
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWindowSolo;
