import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card ({name, species, gender, image, onClose, detailId }) {
  return (
    <div className={style.container}>
      <div className={style.back}>
        <button onClick={onClose} className = {style.btnDelete}>X</button>
        <Link to = {`/detail/${detailId}`}>
        <h2 className={style.title}>{name}</h2>
        <h2 className={style.title}>{species}</h2>
        <h2 className={style.title}>{gender}</h2>
        <img src={image} alt={name}/>
        </Link>
        
       </div> 
       <div>
        
      </div>
    </div>
  )
}
