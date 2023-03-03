import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css"
import { useNavigate } from "react-router-dom";


export default function Nav(props){
    const navigate = useNavigate()
    const logOut = () => {
        navigate('/');
   }
    const {onSearch} = props
    return (
        <>
        <SearchBar onSearch={onSearch}/>
        <button className={style.style} onClick ={logOut}>Log out </button>
        </>
    )
}