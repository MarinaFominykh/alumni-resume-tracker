import {FC} from 'react'
import Chip from '@mui/material/Chip';
import {directionStyle} from './styles'
interface DirectionProps {
    id: string,
  label: string;
  onClick: () => void;
  
}
const Direction:FC<DirectionProps> = ({id, label, onClick}) => {
  return (
    <Chip id={id} label={label} sx={directionStyle.chip} onClick={onClick} />
  )
}

export default Direction
