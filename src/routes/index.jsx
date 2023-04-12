import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<h1>Dashboard</h1>}/>
        </Routes>
    )
}

export default RoutesMain;