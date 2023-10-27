import { directionsStyle } from './styles';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Direction from '../elements/Direction/Direction';
import { testDirections } from '../../consts/testDirections';


export const Directions = () => {
    const handleClick = (label:string) => {
        console.log(label)
    }
  return (
    <Box sx={directionsStyle.wrapper}>
      <Typography sx={directionsStyle.title}></Typography>
      <Box sx={directionsStyle.list}>
        {testDirections.slice(0, 9).map((direction) => (
          <Direction
            key={direction.id}
            id={direction.id}
            label={direction.label}
            onClick={()=> handleClick(direction.label)}
          />
        ))}
      </Box>
      <Accordion sx={directionsStyle.accordion}>
        <AccordionSummary sx={directionsStyle.summary} aria-controls='panel1a-content' id='panel1a-header'>
          <Typography sx={directionsStyle.accordionText}>Показать больше направлений</Typography>
        </AccordionSummary>
        <AccordionDetails sx={directionsStyle.accordionDetail}>
          <Box sx={directionsStyle.list}>
        {testDirections.slice(9).map((direction) => (
          <Direction
            key={direction.id}
            id={direction.id}
            label={direction.label}
            onClick={()=> handleClick(direction.label)}
          />
        ))}
      </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Directions;
