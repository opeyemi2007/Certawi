
import React from "react";
import {Link} from "react-router-dom";
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

const Signup = () => {
    const [type, setType]=useState('password');
    //const [icon, setIcon]=useState(AiOutlineEyeInvisible);
    const [formData, setFormData] = React.useState({ email: "",  acceptTerms: false})
  
    /* implementing hide and reveal password */
    const handleToggle=()=>{    
      if(type==='password'){
      //  setIcon(AiOutlineEye);      
        setType('text');
      }
      else{
      //  setIcon(AiOutlineEyeInvisible);     
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
            <div className={styles['logo-container']}>
                <div className={styles['logo-div']}>
                    <img className={styles.logo} alt="" src={logoSVG}/>
                    <img className={styles.menu} alt="" src={menuSVG}/>
                </div>
            </div>
            <div className={styles.authContainer}>
                <div className={styles.formDiv}>
                    <div id={styles.heading}>Welcome to Certawi</div>    
                    <span id={styles.startGenerating}>Start generating certificates by creating a Certawi account</span>
                    <div id={styles.signupG}>
                        <img alt="" src={googleSVG} id="img_id" />
                        <a href="/">Signup using Google</a>
                    </div>
                    <div id={styles.signupA}>
                        <img alt="" src={appleSVG} id="img_id" />
                        <a href="/">Signup using Apple</a>
                    </div>
                    <div id="hrLine"><span id="or">or</span></div>
                    <form>
                        <div id="email">
                            <img alt="" src={emailSVG}/>
                            <input className={styles.email_input} placeholder=" Email" type="email" required></input>    
                        </div>                    
                        <div id="pwd">
                            <img alt="" src={keySVG}/>
                            <input id="input_id" placeholder="Create a password" type={type} required/>
                            <span onClick={handleToggle}>
                            {type==="text" ? <AiOutlineEye size={25} className={styles.eye}/> : <AiOutlineEyeInvisible size={25} className={styles.eye} />}
                            </span>
                        </div>
                        <div id="checkTerms">
                            <input type="checkbox" id="acceptTerms" checked={formData.acceptTerms}
                            onChange={handleChange} name="acceptTerms"/>
                            <div className={styles.termsOfUse}>By creating an account, I declare that I have 
                            read and accepted Certawi’s <span id="coloredTerms"> Terms of Use</span> and 
                            <span id="coloredTerms"> Privacy Policy</span></div>
                        </div>
                        <div id="btn">Create Account</div>
                    </form>   
                    <p className={styles.haveAccount}>Already have an account? <Link to="/login" id="coloredTerms">Login</Link></p>
                </div>   
                <div className={styles.emptySpace}><img className="cert_img" alt="" src={cert}/></div>         
            </div>
        </div>
    )
}
export default Signup