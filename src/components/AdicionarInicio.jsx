
export default function AdicionarInicio(lista, setLista) {

    function unshift (){

        const novaLista = [...lista];
        novaLista.unshift("Ana")
        setLista(novaLista);
    }

    return ( unshift() )
}

