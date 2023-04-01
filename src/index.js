import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Firstpage from './firstpage';
import Secondpage from './secondpage';
import Thirdpage from './thirdpage';
import Notfound from './notfound';
import './index.css'

function RouterApp(){
  return(
    <Router>
      <div >
      <div className='side'>
        <h1 className='head'>Languages</h1>
        
        <nav>
          <div>
          <ul className='clr'>
            <li><Link to='/'><span>HTML</span></Link></li>
            <li><Link to='/about'><span>Css</span></Link></li>
            <li><Link to='/contact'><span>React</span></Link></li>
          </ul>
          </div>
        </nav>
        </div>
        <div className='go'>
        <Routes>
          <Route path='/' element={<Firstpage/>}></Route>
          <Route path='/about' element={<Secondpage/>}></Route>
          <Route path='/contact' element={<Thirdpage/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
        </div>
       
      </div>
    </Router>
  )
}
ReactDOM.render(<RouterApp/>,document.getElementById('root'));