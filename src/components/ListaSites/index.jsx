import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { List, Card, InfoCard } from "./style";

const Lista = () => {

    const { filtro } = useContext(GlobalContext);

    return(
        <>
            <List>
                {filtro.map((site) => (
                    <Card key={site}>
                        <img src={site.imagem} alt={site.nome} />
                        <InfoCard>
                            <h3>{site.nome}</h3>
                            <span>{site.descri} <a href={site.link} target="blank">{site.nome}</a></span>
                        </InfoCard>
                    </Card>
                ))}
            </List>
        </>
    )
}
export default Lista;