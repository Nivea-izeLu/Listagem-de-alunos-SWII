
export default function AdicionarFinal (lista, setLista) {

    function push () {
        setLista([...lista, "Felipe"]);

    }

    return ( push() )

}