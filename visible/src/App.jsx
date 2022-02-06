import { useState, useEffect } from 'react'
import './App.css' 
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import VoterReg from './components/VoterReg'
import EciLogin from './components/ecilogin'
import AdminLogin from './components/adminlogin'
import Adminreg from './components/adminreg'
import './components/VoterReg.css'
import './components/Navbar.css'
import './components/Homepage.css'
import './components/Footer.css'
import './components/Adminlogin.css'
import './components/Ecilogin.css'
import './components/Adminreg.css'



function App() {

  const [components, setComponents] = useState({
                                        "nav-bar" : true,
                                        "footer" : true,
                                        "admin-login" : false,
                                        "admin-reg" : false,
                                        "candidate-reg" : false,
                                        "voter-reg" : false,
                                        "eci-login" : false,
                                        "home-page" : true,  
                                      })

                                      const ECIcallback = () => {
                                        setComponents({"eci-login":true, 
                                        "home-page":false, 
                                        "nav-bar" : true,
                                        "footer" : true});
                                      }

                                    //   useEffect(() => {
                                    //     console.log(components);
                                    //  }, [components]);

  return (
    <div>
      {components["nav-bar"] && <Navbar callback={ECIcallback}/>}
      {components["footer"] && <Footer/>}
      {components["admin-login"] && <AdminLogin/>}
      {components["admin-reg"] && <Adminreg/>}
      {components["candidate-reg"] && false}
      {components["voter-reg"] && <VoterReg/>}
      {components["eci-login"] && <EciLogin/>}
      {components["home-page"] && <Homepage/>}
    </div>
  )
}

export default App;
