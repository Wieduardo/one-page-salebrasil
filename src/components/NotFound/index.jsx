import { Link } from "react-router-dom"
import { TbError404 } from 'react-icons/tb'
import { Erro404Container } from "./style";

const Erro404 = () => {
    return(
        <>
            <Erro404Container>
                <TbError404/>
                <h1>Página Não encontrada.</h1>
            </Erro404Container>
        </>
    )
}

export default Erro404;