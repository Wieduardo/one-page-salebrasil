import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Maint from '../pages/Maintenance';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/maintenance-view' element={<Home/>}/>
            <Route path='/' element={<Maint/>} />
        </Routes>
    )
}

export default RoutesMain;