import { useContext } from "react";
import { GlobalContext } from "../../providers/global";

const Lista = () => {

    const { filtro } = useContext(GlobalContext);

    return(
        <>
            <ul>
                {filtro.map((site) => (
                    <li key={site}>
                        <img src={site.imagem} alt={site.nome} />
                        <h3>{site.nome}</h3>
                        <span>{site.descri}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Lista;