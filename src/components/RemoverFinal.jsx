
export default function RemoverFinal (lista, setLista) {
        
    function slice(){

        setLista(lista.slice(0, -1))
    }
    
    return( slice() )
    
}
