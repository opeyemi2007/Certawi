

import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import styles from './Style.module.css'
import appleSVG from "./assets/apple.svg"
import googleSVG from "./assets/google.svg"
import cert from "./assets/Cert.png"
import emailSVG from "./assets/email.svg"
import keySVG from "./assets/key.svg"
import logoSVG from "./assets/Certawi-logo.png"
import menuSVG from "./assets/menu.svg"

const Login = () => {
    const [type, setType]=useState('password');
    //const [isVisible, setisVisible]=useState(false);
    const [formData, setFormData] = React.useState({ email: "",  acceptTerms: false})
  
    const handleToggle=()=>{    
      if(type==='password'){
       // setisVisible(AiOutlineEye);      
        setType('text');
      }
      else{
      //  setisVisible(AiOutlineEyeInvisible);     
        setType('password');
      }
    }
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return(
        <div>
            <div className={styles['logo-div']}>
                <img className={styles.logo} alt="" src={logoSVG}/>
                <img className={styles.menu} alt="" src={menuSVG}/>
            </div>
            <div className={styles.authContainer}>
                <div className={styles.formDiv}>
                    <form>
                        <div id={styles.heading}>Welcome to Certawi</div>    
                        <small id={styles.startGenerating}>Start generating certificates by creating a Certawi account</small>
                        <div id={styles.signupG} ><img alt="" src={googleSVG} id="imgs"/>Signup using Google</div>
                        <div id={styles.signupA} ><img alt="" src={appleSVG} id="imgs"/>Signup using Apple</div>
                        <div id={styles.hrLine}><span id="or">or</span></div>
                        <div id={styles.email}>
                            <img alt="" src={emailSVG}/>
                            <input className={styles.Reactemail_input} placeholder=" Email" type="email" required></input>    
                        </div>         
                        <div id="pwd">
                            <img alt="" src={keySVG}/>
                            <input id={styles.input_id} placeholder="Create a password" type={type} required/>
                            <span onClick={handleToggle}>
                            {type==="text" ? <AiOutlineEye size={25} className={styles.eye}/> : <AiOutlineEyeInvisible size={25} className="eye" />}</span>
                        </div>
                        <div className={styles.forgotPwd}>Forgot password?</div>
                        <div id="checkTerms">
                            <input type="checkbox" id="acceptTerms" checked={formData.acceptTerms}
                            onChange={handleChange} name="acceptTerms"/>
                            <label id="labels" htmlFor="acceptTerms">Remember me</label>
                        </div>
                        <div id="btn">Login</div>
                    </form>   
                    <p className={styles.haveAccount}>Don’t have a Certawi account? <Link to="/signup" id="coloredTerms">Create an account </Link></p>
                </div>
                <div className={styles.emptySpace}><img className="cert_img" alt="" src={cert}/></div>
            </div>
        </div>
    )
}
export default Login