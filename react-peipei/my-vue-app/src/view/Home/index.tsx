import {useNavigate} from "react-router-dom"


function About() {
  const navigate=useNavigate()
  return <div onClick={()=>{
    navigate("/logins")
  }}>about</div>
}

export default About
