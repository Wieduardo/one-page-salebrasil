import { FaCogs } from 'react-icons/fa'
import { MaintenaceContainer } from './style';

const Maintenance = () => {
    return(
        <>
            <MaintenaceContainer>
                <span><FaCogs/></span>
                <h1>Estamos em manutenção até o dia 01/05/23</h1>
            </MaintenaceContainer>
        </>
    )
}

export default Maintenance;