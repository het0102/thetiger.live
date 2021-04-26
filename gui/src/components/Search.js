import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';




const SearchElement = (props) =>{

  const [products,setProducts]=useState([]);
	const {text} = props.match.params;
  
  //console.log(text)
  //console.log("BBBBBBBBBBBBBBBBBBBBBBV")
	
  useEffect(()=>{
		axios('https://thetiger.live/product/api/?search='+text)
		.then(res=>{
      setProducts(res.data)
			console.log(res.data)
		}) .catch (e=>{
			console.log(e.message)
		})
	})

	return(
		
		                  <div>

                            {products.map((product,index)=>{
                          
                              return(
                          
                                <>

                              		<div class="row d-flex justify-content-center align-items-center" key={'gh$%'+index}>

                                    <div class="card mb-3 mx-2" style={{maxWidth: "540px"}}>

                                     <div class="row g-0">

                                       <div class="col-md-4">

                                         <img src="" alt="product-image" />
                                         
                                       </div>

                                       <div class="col-md-8 col-sm-12 col-xsm-12 col-lg-6">

                                         <div class="card-body">

                                           <h5 class="card-title"><a href={"/productDetails/"+product.id} class="products" style={{textDecoration: "none",fontSize: "20px",color:"black",fontWeight:"900"}}>{product.name}</a></h5>
                                           <p class="card-text">{product.desc}</p>
                                           <p class="card-text"><small class="text-muted">{product.name}</small></p>

                                         </div>

                                       </div>

                                     </div>

                                    </div>

                                  </div>

                                </>
                            );

                            })}


                            {/*<nav aria-label="Page navigation example">
                             <ul class="pagination justify-content-center">
                               <li class="page-item">
                                 <a class="page-link" href="#" aria-label="Previous">
                                   <span aria-hidden="true">&laquo;</span>
                                   
                                 </a>
                               </li>
                               <li class="page-item"><a class="page-link" href="#">1</a></li>
                               <li class="page-item"><a class="page-link" href="#">2</a></li>
                               <li class="page-item"><a class="page-link" href="#">3</a></li>
                               <li class="page-item">
                                 <a class="page-link" href="#" aria-label="Next">
                                   <span aria-hidden="true">&raquo;</span>
                                   
                                 </a>
                               </li>
                             </ul>
                            </nav>
                            */}

		                    </div>
	);
}

export default SearchElement