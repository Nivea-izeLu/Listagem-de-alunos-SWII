import "./card.css";

import AdicionarInicio from "../AdicionarInicio.jsx"
import AdicionarFinal from "../AdicionarFinal.jsx"
import AlterarSegundo from "../AlterarSegundo.jsx"
import RemoverInicio from "../RemoverInicio.jsx"
import RemoverFinal from "../RemoverFinal.jsx"
import { useState } from "react";

export default function Card () {

    const [lista, setLista] = useState(["Maria", "João", "Gabriel", "Vitória", "Larissa"])


    return( 

        <div>
            <h2 class="tit">Lista de Alunos</h2>

            <div>

                <ul class="lista">
                    {lista.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>

                <button onClick={() => AdicionarInicio(lista, setLista)}>Adicionar Inicio</button>
                <button onClick={() => AdicionarFinal(lista, setLista)}>Adicionar Final</button>
                <button onClick={() => AlterarSegundo(lista, setLista)}>Alterar segundo</button>
                <button onClick={() => RemoverInicio(lista, setLista)}>Remover Inicio</button>
                <button onClick={() => RemoverFinal(lista, setLista)}>Remover Final</button>
            </div>
        </div>
    )
}