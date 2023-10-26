import {FC, ReactNode} from 'react'
import './ChipsContainer.css';
interface ChipsContainerProps {
  children: ReactNode,
}
export const ChipsContainer:FC<ChipsContainerProps> = ({children}) => {
  return (
    <div className='chips-cntr'>
      {children}
    </div>
  )
}
