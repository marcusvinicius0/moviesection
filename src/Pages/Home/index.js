import { useState, useEffect } from "react";
import api from "../../Services/api";
import { Link } from "react-router-dom";

export default function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes');

            setFilmes(response.data);
        }

        loadFilmes()

    }, [])
    
    return(
        <div>
            <div>
                {filmes.map((filme)=>{
                    return(
                       <article key={filme.id}>
                           <strong>{filme.nome}</strong>
                           <img src={filme.foto} alt={filme.nome}/>
                           <Link to="/filme">Acessar</Link>
                       </article>
                    )
                })}
            </div>
        </div>
    )
}