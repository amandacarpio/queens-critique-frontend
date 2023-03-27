import {Nav} from '../Components/Nav'
import logo from '../logo.png'
import '../logo.css'
import { SearchBar } from '../Components/SearchBar'


export function LandingPage(){
    return(
        <div>
            {/* will need a flexbox here */}
            <img className='logoCss' src={logo} alt='logo'/>
            <Nav/>
            <SearchBar/>
        </div>
    )
}