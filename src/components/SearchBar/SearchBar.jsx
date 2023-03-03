
import { useState } from 'react'
import style from './SearchBar.module.css'

export default function SearchBar ({ onSearch }) {
  const [Character,setCharacter] = useState("")
  const handleChange = (e) =>{
    setCharacter(e.target.value)
  }
  return (
    <div>
      <input 
      type='search' 
      placeholder='Write an ID...'  
      className={style.border}
      onChange={handleChange} />
      <button 
      onClick={() => onSearch(Character) } 
      className={style.btn}>Agregar</button>
    </div>
  )
}
