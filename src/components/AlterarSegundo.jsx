
export default function AdicionarSegundo (lista, setLista) {

    function segundo () {

        const novaLista = [...lista];
        novaLista[1] = "André" 
        setLista(novaLista)
    }
    return( segundo() ) 
}