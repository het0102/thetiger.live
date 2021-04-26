import React,{useState,useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import PopularCard from "./components/PopularCard"
import TopProductCard from "./components/TopProductCard"
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


const large ={
	width: "33.3333333333%:",
	float: "left",
	clear: "none",
	paddingRight: ".3125rem",
	paddingLeft: ".3125rem"
};

const llarge1 = {
	borderCollapse: "collapse",
	width: "100%",
	marginBottom: ".61rem",
	borderRadius: "3px",
	boxSizing: "inherit"
};

const lllarge2 = {
	border: "3px solid #f1f1f1",
	backgroundColor: "#fefefe",
	boxSizing: "inherit"
};

const llllarge5 = {
	padding: ".5rem .625rem .625rem"
};




function Home() {


	useEffect (() => {

		window.scrollTo(0,0)

	}, [])
	

	const [products,setProducts]=useState([]);

    	useEffect(()=>{
        fetch("https://thetiger.live/product/api/",{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res =>setProducts(res))
        .catch(error=>console.log(error))
        .catch(error=>console.log(error))
   	 },[])


	 var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


 
    return (

    	<div class="container home">

    		<br/>

			<div class="row container">

				<div class="column">

					<h2  class="text-title">Welcome to <span style={{color: "#dd6322"}}>The Tiger.Live</span>, a free Amazon price tracker!</h2>
					<p style={{textAlign:"center"}}>Our free Amazon price tracker monitors millions of products and alerts you when prices drop, helping you decide when to buy.</p> 

				</div>

				<div class="column">

					<hr/>

				</div>

				<div class="column">

					<Fade right><h3 style={{textAlign: "center"}}>We help you <span style={{color:"#dd6322"}}>to save money.</span></h3></Fade>

				</div>

				<div class="column">

					<hr/>

				</div>

				

					<div class="row">

						<div class="column col-md-4">
							<div class="row">
								<div class="column-block small-3">
									<img src={"/static/Icon1.png"} alt="image" style={{height:"80px",width:"80px"}}/>
								</div>
								<div class="column-block small-9">
									<h5 style={{marginBottom: ".5rem",lineHeight: "1.4",fontWeight:"500"}}>Amazon Price Drop Alerts</h5>
									<p>Create Amazon price watches and get alerts via email when prices drop.</p>
								</div>
							</div>
						</div>

						<div class="column col-md-4">
							<div class="row">
								<div class="column-block small-3">
									<img src={"/static/Icon2.png"} alt="image" style={{height:"80px",width:"80px"}}/>
								</div>
								<div class="column-block small-9">
									<h5 style={{marginBottom: ".5rem",lineHeight: "1.4",fontWeight:"500"}}>Amazon Price History Charts</h5>
									<p>View the price history of millions of Amazon products.</p>
								</div>
							</div>
						</div>

						<div class="column col-md-4">
							<div class="row">
								<div class="column-block small-3">
									<img src={"/static/Icon3.png"} alt="image" style={{height:"80px",width:"80px"}}/>
								</div>
								<div class="column-block small-9">
									<h5 style={{marginBottom: ".5rem",lineHeight: "1.4",fontWeight:"500"}}>Browser Extension</h5>
									<p>Add our price history charts to your browser with The tiger.live</p>
								</div>
							</div>
						</div>

					</div>

			

				{/*<div class="column">

					<hr/>

				</div>

				<h6 style={{textAlign: "center",marginTop:"auto",fontWeight:"800"}}>Don't have account ?</h6>
                <Link 
                	to="/signup" 
                	className='login__registerButton' 
                	style={{
                		fontSize: "16px",
                		borderRadius: '5px',
                		textDecoration:'none', 
                		textAlign: 'center',
                		backgroundColor: '#56a645',
                		color:'white',
                		paddingTop:'9px',
                		width: "250px",
                		height: "50px",
                		margin: "auto",
                		fontWeight:"800"
                	}}>Create your Account</a>*/}
                
                <div class="column">

					<hr/>

				</div>

				<div class="column">

					<h6>
						<Link
							to="/popularproducts"
							style={{
								textDecoration: "none",
								fontSize: "20px",
								color:"#dd6322",
								fontWeight:"900"
							}}>Popular Products:</Link>
					</h6>
					<p>Check out these recently popular deals on The Tiger.Live. See what thetiger.live users have been buying lately!</p>
				            {/*Popular products*/}
                    		<PopularCard />
                </div>
				 <div class="column">

					<hr/>

				</div>
                    <div class="column">

					<h6><Link to="/toppricedrops" style={{textDecoration: "none",fontSize: "20px", color:"#dd6322",fontWeight:"800"}}>Top Amazon Price Drops:</Link></h6>
					<p>Big price drops! The products below are selected from categories that you frequently track products in and have had large price drops since the last price update. See more price drops.</p>

				            {/*Top products*/}
                    		<TopProductCard />
                    </div>

				<div class="column">

					<hr/>

				</div>
			
				<h6 style={{textAlign: "center",marginTop:"8px",fontWeight:"800"}}>Don't have account ?</h6>
                <Link 
                	to="/signup" 
                	className='login__registerButton' 
                	style={{
                		marginBottom: "auto",
                		fontSize: "16px",
                		borderRadius: '5px',
                		textDecoration:'none', 
                		textAlign: 'center',
                		backgroundColor: '#dd6322',
                		color:'white',
                		paddingTop:'9px',
                		width: "250px",
                		height: "50px",
                		margin: "auto"
                	}}>Create your Account</Link>

                <div class="column">

					<hr/>

				</div>

				<h6 style={{textDecoration: "none",fontSize: "20px", color:"#dd6322",fontWeight:"800"}}>Amazon.com Discounts by Category</h6>
				<p>These lists are a great way to start your Amazon price tracking experience with The Tiger.Live. Use the links below to find a product you want to buy at Amazon, then come back here and put the product's URL into our search box to look up its price history and/or create a price watch.</p>
				
				<div class="row">

					<div class="col-md-4" style={large}>

						<table style={llarge1}>

							<tbody style={lllarge2}>

								<tr>

									<td style={llllarge5}><a href="https://www.amazon.in/baby" target="_blanck" style={{textDecoration:"none"}}>Baby Products</a></td>
									<td style={{textAlign:"right"}}>Save75%+</td>

								</tr>
								<tr>

									<td style={llllarge5}><a href="https://www.amazon.in/books" target="_blanck" style={{textDecoration:"none"}}>Books</a></td>
									<td style={{textAlign:"right"}}>Save60%+</td>

								</tr>

							</tbody>

						</table>

					</div>

					<div class="col-md-4" style={large}>

						<table style={llarge1}>

							<tbody style={lllarge2}>

								<tr>

									<td style={llllarge5}><a href="https://www.amazon.in/electronics" target="_blanck" style={{textDecoration:"none"}}>Electronics</a></td>
									<td style={{textAlign:"right"}}>Save75%+</td>
								</tr>
								<tr>

									<td style={llllarge5}><a href="https://www.amazon.in/kitchen" target="_blanck" style={{textDecoration:"none"}}>Home & Kitchen</a></td>
									<td style={{textAlign:"right"}}>Save60%+</td>

								</tr>

							</tbody>

						</table>

					</div>

					<div class="col-md-4" style={large}>

						<table style={llarge1}>

							<tbody style={lllarge2}>

								<tr>

									<td style={llllarge5}><a href="https://www.amazon.in/tv" target="_blanck" style={{textDecoration:"none",margin:"auto"}}>Movies & TV</a></td>
									<td style={{textAlign:"right"}}>Save75%+</td>

								</tr>
								<tr>

									<td style={llllarge5}><a href="https://www.amazon.in/videogames" target="_blanck" style={{textDecoration:"none"}}>Video Games</a></td>
									<td style={{textAlign:"right"}}>Save60%+</td>

								</tr>

							</tbody>

						</table>

					</div>

				</div>

			</div>
			<br/>

			<Footer />
			
    	</div>

    	 )
}

export default Home;
