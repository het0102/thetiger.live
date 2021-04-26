import './App.css';

import { useCookies } from 'react-cookie';
import React,{useState} from 'react';
import Home from "./Home";

import Error from "./Error";

import Popularproducts from "./components/Popularproducts";
import Toppricedrops from "./components/Toppricedrops";
import Product from "./product";

import Signup from "./components/Signup";
import Login from "./components/Login";

import About from "./components/About";
import Blog from "./components/Blog";
import Features from "./components/Features";
import Help from "./components/Help";
import Privacy from "./components/Privacy";
import Supportus from "./components/Supportus";
import Terms from "./components/Terms";
import Tools from "./components/Tools";
import Header from "./Header";
import Search from './components/Search'

import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';


function App(props) {
	const [token,setToken] = useState(null);
	if(!token && localStorage.getItem("token")){
	    setToken(localStorage.getItem("token"))
	}
	if(token && !localStorage.getItem("token")){
	   localStorage.setItem("token",token)
	}

  return (
    <div>
    <Router>
     <Header token={token} setToken={setToken}/>
     <hr style={{color: "#F4B600",height: "4px"}} />
      	<Switch>

			<Route exact path="/" component={()=><Home setVal={setToken} getVal={token} />} />

	      	<Route path="/login" component={()=><Login setVal={setToken} getVal={token} />} />
	      	<Route path="/signup" component={Signup} />

	      	<Route path="/toppricedrops" component={Toppricedrops} />
	      	<Route path="/popularproducts" component={Popularproducts} />

			  // <Route path="/product" component={Product} />

			<Route path="/productDetails/:val" component={Product} />

			// <Route path="/product/:id" component={Product} />

	      	<Route path="/about" component={About} />
	      	<Route path="/blog" component={Blog} />
	      	<Route path="/features" component={Features} />
	      	<Route path="/help" component={Help} />
	      	<Route path="/privacy" component={Privacy} />
	      	<Route path="/tools" component={Tools} />
	      	<Route path="/supportus" component={Supportus} />
	      	<Route path="/terms" component={Terms} />
	      	<Route path="/search/:text" component={Search} />

	      	<Route component={Error} />

      	</Switch>
      
      	{/*<Footer />*/}
    </Router>
    </div>
  );
}

export default App;
