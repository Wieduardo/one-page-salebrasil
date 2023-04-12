import { useContext } from "react";
import { GlobalContext } from "../../providers/global";

const Nav = () =>{

    const {busca, setBusca} = useContext(GlobalContext);

    return(
        <>
            <nav>
                <h1>Sale Brasil</h1>
                <input type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)}/>
            </nav>
        </>
    )
}
export default Nav;