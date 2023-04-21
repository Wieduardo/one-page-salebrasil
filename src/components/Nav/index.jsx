import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { Logo, NavContent, Navigation, Submenu } from "./style";

const Nav = () =>{

    const {busca, setBusca} = useContext(GlobalContext);

    return(
        <>
            <Navigation>
                <Logo>
                <h1>Sale Brasil</h1>
                </Logo>
                <NavContent>
                    <input type="text" value={busca} placeholder="Pesquisa" onChange={(ev) => setBusca(ev.target.value)}/>
                    <div className="nav-container- menu">
                        <ul>
                            <li><span>Cidade</span>
                                <ul className="dropdown">
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                    <li>Item 4</li>
                                    <li>Item 5</li>
                                </ul>
                            </li>
                            <li><span>Bairro</span>
                                <ul className="dropdown">
                                    <li>Item 6</li>
                                    <li>Item 7</li>
                                    <li>Item 8</li>
                                    <li>Item 9</li>
                                </ul>
                            </li>
                            <li><span>Serviços</span>
                                <ul className="dropdown">
                                    <li>Item 10</li>
                                    <li>Item 11</li>
                                    <li>Item 12</li>
                                </ul>    
                            </li>
                        </ul>
                    </div> 
                </NavContent>
            </Navigation>
        </>
    )
}
export default Nav;