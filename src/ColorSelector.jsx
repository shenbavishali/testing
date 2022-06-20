import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { colorChange } from './features/theme'

export default function ColorSelector() {
    const [color, setColor] = useState('red')
    const dispatch = useDispatch()

  return (
    <div>
        <input type = "color" value={color} onChange={(e)=>setColor(e.target.value)} />
        <button onClick={dispatch(colorChange(color))}>changecolor</button>
    </div>
  )
}
