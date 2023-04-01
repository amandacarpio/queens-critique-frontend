import {Link, Outlet} from "react-router-dom"
import Nav from './components/Nav'
import logo from './logo.png'
import './logo.css'
import './index.css'
 
function App() {
  return (
    <div className="App">
      <Link to='/'><img className='logoCss' src={logo} alt='logo'/></Link>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App;