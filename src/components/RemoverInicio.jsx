
export default function RemoverInicio (lista, setLista) {


    function shift () {

        const novaLista = [...lista];
        novaLista.shift()
        setLista (novaLista)   
    }

    return ( shift() )
}