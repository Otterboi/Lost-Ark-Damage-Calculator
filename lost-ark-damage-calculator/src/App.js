import { TextField, Button, Container, FormControl} from '@mui/material';
import { test } from './back-end/data';
//cimport { engravings } from "./back-end/engravings";
import React, {useState} from 'react';

function App() {
  const [className, setClassName] = useState('');
  const [time, setTime] = useState('');
  const [spec, setSpec] = useState('');
  const [critRate, setCritRate] = useState('');
  const [wepQual, setWepQual] = useState('');
  const [engravings, setEngravings] = useState('');
  const [rotation, setRotation] = useState('');
  const [tripods, setTripods] = useState('');
  const [armorSet, setArmorSet] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();

    test(className, time, spec, critRate, wepQual, engravings, rotation, tripods, armorSet);
  }

  return (
    <Container maxWidth="sm">
      <FormControl>
        <TextField 
            id="outlined-basic className" 
            label="Class Name" 
            variant="outlined" 
            value={className} 
            onChange={(event => {setClassName(event.target.value)})}/>
        <TextField 
            id="outlined-basic time" 
            label="Time" 
            variant="outlined" 
            value={time} 
            onChange={(event => {setTime(event.target.value)})}/>
        <TextField 
            id="outlined-basic spec" 
            label="Spec" 
            variant="outlined" 
            value={spec} 
            onChange={(event => {setSpec(event.target.value)})} />
        <TextField 
            id="outlined-basic critRate" 
            label="Crit Rate" 
            variant="outlined" 
            value={critRate} 
            onChange={(event => {setCritRate(event.target.value)})}/>
        <TextField
            id="outlined-basic wepQual" 
            label="Weapon Quality Stat" 
            variant="outlined" 
            value={wepQual} 
            onChange={(event => {setWepQual(event.target.value)})}/>
        <TextField 
            id="outlined-basic engravings" 
            label="Engravings" 
            variant="outlined" 
            value={engravings} 
            onChange={(event => {setEngravings(event.target.value)})}/>
        <TextField 
            id="outlined-basic rotation"
            label="Rotation" 
            variant="outlined" 
            value={rotation} 
            onChange={(event => {setRotation(event.target.value)})}/>
        <TextField 
            id="outlined-basic tripods"
            label="Tripods" 
            variant="outlined" 
            value={tripods} 
            onChange={(event => {setTripods(event.target.value)})} />
        <TextField 
            id="outlined-basic armorSet" 
            label="Armor Set" 
            variant="outlined" 
            value={armorSet} 
            onChange={(event => {setArmorSet(event.target.value)})}/>
        <Button 
            type="submit" 
            variant="contained" 
            onClick={handleSubmit}>Send
        </Button>
      </FormControl>
    </Container>
  );
}

export default App;
