import React from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import Home from "../Home";


export default class Login extends React.Component {


 constructor() {
    super();

    this.state = {

        email:'',
        password:''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e,email) => {    
     this.setState({ [email]: e.target.value })
  }

  async handleSubmit(e) {
    
    e.preventDefault();

    console.log(this.state,'Submitted')

    const { email, password } = this.state;

    const form = await axios.post('http://127.0.0.1:8000/api/login', {

        email,
        password
        
    }).then(res=>{
        //this.setState({ redirect: "/" });
        window.location = '/';
        this.props.setVal(res.data.token);
        //alert("Login Successfully");
    })
    .then(res=>{
        console.log("Logged In")

    }).catch(e=>{
	    localStorage.removeItem("token");
        alert("Email or Password is inCorrect")

    }).catch(e=>{
	    localStorage.removeItem("token");
        //alert("dsgyjsdgfjhgdsjh")
    })

  }


  render(){  

     //if (this.state.redirect) {
    //    return <Redirect to={this.state.redirect} />
    // }

    return (

        <div className='login'>
           
             {/*<Link to="/">
                <img
                    className="login__logo"
                    src="/img/pruthatek.png" 
                    alt="logo"
                />
            </Link>   */}
            

            <div className='login__container mt-5'>
                <h2 style={{textAlign: "center"}}>Log-in</h2>

                <form onSubmit={this.handleSubmit}>
                <br/>
                    <h6 style={{color: "grey"}}>E-mail:</h6>
                    <input type='email' 
                        name="email" 
                        class="form-control me-2" 
                        id="email"
                        required="required" 
                        style={{borderRadius: '5px',height: "40px"}}
                        onChange={(e) => this.handleChange(e,"email")} />

                    <h6 style={{color: "grey"}}>Password:</h6>
                    <input type='password' 
                        name="password"
                        id="password" 
                        class="form-control me-2" 
                        required="required" 
                        style={{borderRadius: '5px',height: "40px"}}
                        onChange={(e) => this.handleChange(e,"password")} />

                    <Button 
                        type='submit'  
                        style={{
                            borderRadius: '5px',
                            borderColor:"rgb(221, 99, 34)",
                            backgroundColor: 'rgb(221, 99, 34)'
                        }}>
                        Log In</Button>
                </form>

                <p style={{color: 'grey'}}>
                    By continuing, you agree to our Conditions of Use and Privacy Notice. <br/>
                </p>
                
                <h6>Don't have account ?</h6>
                <a 
                    href="/signup" 
                    className='login__registerButton' 
                    style={{
                            marginTop:"5px",
                            fontSize: "15px",
                            borderRadius: '5px',
                            textDecoration:'none', 
                            textAlign: 'center',
                            backgroundColor: 'rgb(221, 99, 34)',
                            color:'white',
                            paddingTop:'2px'
                        }}>
                        Create your Account</a>
            </div>
        </div>

    )

  } 

}
