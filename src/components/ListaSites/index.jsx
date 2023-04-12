import { useContext } from "react";
import { GlobalContext } from "../../providers/global";

const Lista = () => {

    const { filtro } = useContext(GlobalContext);

    return(
        <>
            <div>
                <ul>
                    {filtro.map((site) => (
                        <li key={site}>{site.nome}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Lista;