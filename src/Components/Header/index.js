import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to="/">Filmaria</Link>
            <Link to="/favoritos">Salvos</Link>
        </header>
    )
}