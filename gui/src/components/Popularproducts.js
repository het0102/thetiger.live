import React, {useEffect} from 'react';
import Footer from "../Footer";
import PopularCard from "./PopularCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card,Button } from 'react-bootstrap';




const Card1 = {
	display:"flex",
	justifyContent:"center",
	alignItems:"center"
};





function Popularproducts() {


  useEffect (() => {

    window.scrollTo(0,0)

  }, [])
   
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
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
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

            <h1 style={{textAlign:"center",color:"rgb(221, 99, 34)"}}>Popular Products</h1><br/>
            <p style={{textAlign:"center"}}>Check out these recently popular deals on Thetiger.live . See what Camel users have been buying lately!</p>

            <br/>
    		
              <PopularCard />
          </div>
        </div>

			<br/>
			<br/>
			<Footer />
			
    	</div>

    	 )
}

export default Popularproducts;