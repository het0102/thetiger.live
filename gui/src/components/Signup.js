import React from 'react';
import Home from "../Home";
import Login from "./Login";

import axios from "axios";
import { Button } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';


export default class Signup extends React.Component {
   

  constructor() {
    super();
    this.state = {
        name: '',
        email:'',
        password:'',
        password2:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e,name) => {    
     this.setState({ [name]: e.target.value })
  }
  

  async handleSubmit(e) {
    
    e.preventDefault();

    console.log(this.state,'Submitted')

    const { name, email, password,password2 } = this.state;

    if (password !== password2) 
        {
            alert("Passwords don't match");
        }
        else 
        {
            const form = await axios.post('http://127.0.0.1:8000/api/register', {
    
            name,
            email,
            password,
        
            }).then(res=>{

                alert("Account Created");
                console.log("Created")
                this.setState({ redirect: "/login" });
              // window.location = '/login'

            }).catch(e=>{

                alert("Email Already Exists");

            })    
        }

    this.state = { redirect: null };

  }

  render() { 

    
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }

    return (
        <div className='login'>
            
                {/*<img
                    className="login__logo"
                    src="/img/pruthatek.png"
                    alt="logo"
                    />*/}
            

            <div className='login__container mt-4'>
                <h2 style={{textAlign: "center"}}>Create Account</h2>

                <form onSubmit={this.handleSubmit}>
                <br/>
                    <h6 style={{color: "grey"}}>Name:</h6>
                    <input type='text' 
                        name="name" 
                        class="form-control me-2" 
                        required="required" 
                        style={{borderRadius: '5px',height: "40px"}}
                        onChange = {(e)=>this.handleChange(e,"name")}/>

                    <h6 style={{color: "grey"}}>E-mail:</h6>
                    <input type='email' 
                        name='email' 
                        class="form-control me-2" 
                        required="required" 
                        style={{borderRadius: '5px',height: "40px"}} 
                        onChange = {(e)=>this.handleChange(e,"email")}/>

                    <h6 style={{color: "grey"}}>Password:</h6>
                    <input type='password' 
                        name='password' 
                        class="form-control me-2" 
                        required="required" 
                        style={{borderRadius: '5px',height: "40px"}} 
                        onChange = {(e)=>this.handleChange(e,"password")}/>

                        <small style={{color:"grey",fontSize:"10px",margin:'3px'}}>*Password must contains atleast 8 words and special symbols.</small>
  
                       
                    <h6 style={{color: "grey",marginTop:'5px'}}>Confirm-Password:</h6>
                    <input type='password' 
                        name="password2" 
                        class="form-control me-2" 
                        required="required" 
                        style={{borderRadius: '5px',height: "40px"}} 
                        onChange = {(e)=>this.handleChange(e,"password2")}/>  

                    <Button 
                        className='login__registerButton' 
                        type='submit' 
                        style={{
                            fontSize: "15px",
                            borderRadius: '5px',
                            textAlign: 'center',
                            backgroundColor: 'rgb(221, 99, 34)',
                            borderColor:'rgb(221, 99, 34)',
                            color:'white',
                            paddingTop:'2px'
                        }}>Create Account</Button>
                    
                   
                </form>

                    <p style={{marginTop:"6x"}}>
                    By continuing, you agree to our Conditions of Use and Privacy Notice. <br/>
                    </p>

                
                   <div> Already Have Account ?<a href="/login" style={{textDecoration:"none"}}>  Log in</a></div>
            </div>
        </div>
    );
  }  
}
