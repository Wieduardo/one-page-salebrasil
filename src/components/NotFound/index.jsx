import { TbError404 } from 'react-icons/tb'
import { Erro404Container } from "./style";

const Erro404 = () => {
    return(
        <>
            <Erro404Container>
                <span><TbError404/></span>
                <h1>Página Não Encontrada</h1>
            </Erro404Container>
        </>
    )
}

export default Erro404;