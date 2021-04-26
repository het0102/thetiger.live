import React,{useRef,useState} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import { Person,Search } from 'react-bootstrap-icons';
import "./App.css"
import axios from 'axios';
import {Link} from 'react-router-dom'



const styleNav = {
	marginBottom: '-20px',
	marginTop: '-2px'
};


function Header(props) {

	const [sear,setsear] = useState(null)
	
	const helperRef = useRef(null);
	const redirectHelper = () =>{
		let x = "Token "+props.token;
		axios({
			method: 'post',
			url: "https://thetiger.live/api/logout/",
			headers: {'Authorization': x }
		})		
		.then(r=>{
		    removeTokenFromLocalStorage()
			helperRef.current.click();
			//alert("went here ");
		})
		.catch(e=>{
		    removeTokenFromLocalStorage()
			alert(e.message);
		}) 
	}
	const removeTokenFromLocalStorage = () =>{
	    props.setToken(null)
	    localStorage.removeItem("token");
	}


return (

  	<div className="container-fluid">
  	 <div className="row">
   
      	<Navbar bg="white" expand="lg" style={styleNav}>

  			<Navbar.Brand href="/"><img src={"/static/LOGO1.png"} title="TheTiger.live" style={{height: "auto",maxWidth:"230px",width:"100%"}} alt="logo" /></Navbar.Brand>
  			<Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "white"}} />

  			<Navbar.Collapse id="basic-navbar-nav">

  				<form class="d-flex" style={{marginLeft:"auto"}}>
			        <input class="form-control me-2" type="search" placeholder="Find Amazon Products" aria-label="Search" style={{width:"350px"}} onChange={(e)=>{
			        	setsear(e.target.value)
			        }}/>
			        <Link class="btn btn-outline-warning" type="submit" to={'/search/'+sear}><Search style={{color:'gray'}} /></Link>
     			</form>

			    <Nav style={{marginLeft: "auto",marginRight:"auto"}}>
			      <Link className="nav-links nav" to="/popularproducts">Popular Products</Link>
			      <Link className="nav-links nav" to="/toppricedrops">Top Price Drops</Link>
				  {/*<Nav.Link href="/wishlist" className="nav-links">Wish List</Nav.Link>
				  <Nav.Link href="/features">Features</Nav.Link>
				  <Nav.Link href="/about">About Us</Nav.Link>*/}

			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			         <Person />
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
			          
			          <Link to="/" style={{display: "none"}} ref={helperRef} ></Link>
			          	{props.token ?
							<>
							<h5>Hello{props.name}</h5>
			          		<span class="dropdown-item nav-links" onClick={redirectHelper} style={{cursor: "pointer"}} >Logout</span></>
			          		:
			          		<span>
								<Link class="dropdown-item nav-links" to="/signup">Sign Up</Link>
								<Link class="dropdown-item nav-links" to="/login">Login</Link>
			          		</span>
			      		}
			        </div>
			      </li>

			      {/*<NavDropdown title="SignUp/Login" id="basic-nav-dropdown">
			        <NavDropdown.Item href="/signUp">Sign Up</NavDropdown.Item>
			        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
			      </NavDropdown>*/}
			    </Nav>
    
  			</Navbar.Collapse>
		</Navbar>
	 </div>	
	</div>	

  );
}

export default Header;
