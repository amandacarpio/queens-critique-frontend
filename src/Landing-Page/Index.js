import {Nav} from './Nav'
import logo from '../logo.png'
import '../logo.css'
import { Search } from './Search'


export function LandingPage(){
    return(
        <div>
            {/* will need a flexbox here */}
            <img className='logoCss' src={logo} alt='logo'/>
            <Nav/>
            <Search/>
        </div>
    )
}