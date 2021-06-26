import Switch from '@material-ui/core/Switch';
import { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';

const InfoSwitch = () => {

const {show, togglePerCents} = useContext(ShowContext)
    
  return (
    <div style={{gridColumn:'1/4'}}>
      
      <Switch
        checked={show}
        onChange={togglePerCents}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <p style={{display:"inline",}}>Toggle perCents</p>
    </div>
  );
}

export default InfoSwitch