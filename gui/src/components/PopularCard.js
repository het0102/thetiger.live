import React,{useState,useEffect}from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card,Button } from 'react-bootstrap';



const Card1 = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
};



export default function PopularCard() {
     const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/product/api/",{
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
      slidesToScroll: 4,
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


        return(

               <div style={{marginBottom:"20px"}}>
                <Slider {...settings}>
                  {products.map((product,index)=>{
                                return(
                                <>


                        <div style={Card1} key={'cd$%'+index}>

                        <Card style={{ width: '18rem' }}>
                      <img src="/img/LOGO1.png" alt="image" style={{height:"auto",width:"100%",margin:"auto",objectFit:"contain"}}/>
                      <Card.Body>
                                   <Card.Title>
                                      <a href={"/productDetails/"+product.id} className="products" style={{textDecoration: "none",fontSize: "20px",color:"black",fontWeight:"900"}}>
                                          {product.name}
                                      </a>
                                   </Card.Title>

                      <Card.Text>
                        {product.price}
                      </Card.Text>
                      <a className="center" target="_blank" style={{color:"white",textDecoration:"none"}}><Button variant="primary" style={{backgroundColor:"rgb(221, 99, 34)",alignContent:"center",width:"150px",borderColor:"rgb(221, 99, 34)"}}>Buy</Button></a>
                      </Card.Body>
                  </Card>

              </div>
                  </>
                          );
                          })}
                </Slider>
            </div>





        );

}