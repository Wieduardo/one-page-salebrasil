import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Maint from '../pages/Maintenance';
import NotFound from '../pages/404';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/maintenance-view' element={<Home/>}/>
            <Route path='/' element={<Maint/>} />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}

export default RoutesMain;