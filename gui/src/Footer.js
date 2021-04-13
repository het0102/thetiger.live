import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'


const mystyle1 = {
  position: "relative",
  color:"#fff",
  bottom: "0",
  width: "100%",
  fontSize:"15px"
};


function Footer() {
  return (

<>
    

    <footer class="mt-2">

        <div class="row footer-main">

            <div class="col-md-4 col-xsm-12 col-sm-12 my-5 justify-content-center align-items-center" >

                <img src="/img/footer-09.png" class="image-content" alt="image-content" />

            </div>

            {/*<div class="col-md-4 my-5 justify-content-center align-items-center footer-content">

                <h5 class="text-uppercase footer-content-inner mt-3" style={{color:"#42210b",fontWeight:"400"}}>We help you to save money.</h5>

                <p class="mt-3" style={{textAlign:"justify",color:"white"}}>
                   Our free Amazon price tracker monitors millions of products and alerts you when prices drop, helping you decide when to buy. As an Amazon Associate I earn from qualifying purchases.
                </p>

            </div>*/}

            <div class="col-md-4 col-xsm-12 col-sm-12 d-flex justify-content-center align-items-center">

                <ul class="list-unstyled mr-auto" style={{margin:"auto",marginLeft:"200px"}}>
                  <li>
                    <img src="/img/tiger icon.png" className="footer-leg-icon" /><Link to="/about" class="footer-links">About</Link> 
                  </li>
                  <li>
                    <img src="/img/tiger icon.png" className="footer-leg-icon" /><Link to="/features" class="footer-links">Features</Link>
                  </li>
                  <li>
                    <img src="/img/tiger icon.png" className="footer-leg-icon" /><Link to="/blog" class="footer-links">Blog</Link>
                  </li>
                  <li>
                    <img src="/img/tiger icon.png" className="footer-leg-icon" /><Link to="/terms" class="footer-links">Terms & Privacy</Link>
                  </li>
                  {/*<li>
                    <a href="/privacy" class="footer-links">Privacy</a>
                  </li>
        
                  <li>
                    <a href="/supportus" style={{textDecoration: 'none'}}>Support US</a>
                  </li>*/}
                  <li>
                    <img src="/img/tiger icon.png" className="footer-leg-icon" /><Link to="/tools" class="footer-links">Contact Us</Link>
                  </li>
                  <li>
                    <img src="/img/tiger icon.png" className="footer-leg-icon" /><Link to="/help" class="footer-links">Help</Link>
                  </li>
              </ul>

            </div>

            <div class="col-md-4 col-xsm-12 col-sm-12 my-2 d-grid justify-content-center align-items-center footer-three">

              <img src="/img/footer-03.png" className="footer-logo" title="TheTiger.live" alt="logo" />
              <h5 class="text-white mt-2" style={{color:"rgb(221, 99, 34)"}}>Contact Us</h5>
              <div>

                <a href="https://www.facebook.com/PruthaTek" target="_blank"><img src="/img/facebook2.png" className="footer-logo-social" title="TheTiger.live" alt="fb-logo" /></a>

                <a href="https://www.instagram.com/pruthaTek" target="_blank"><img src="/img/insta2.png" className="footer-logo-social" title="TheTiger.live" alt="insta-logo" /></a>

                <a href="https://www.linkedin.com/PruthaTek" target="_blank"><img src="/img/linkdin.png" className="footer-logo-social" title="TheTiger.live" alt="linkedin-logo" /></a>

                <a href="https://mail.google.com/mail" target="_blank"><img src="/img/mail.png" className="footer-logo-social" title="TheTiger.live" alt="gmail-logo" /></a>

            </div>

            </div>

        </div>

        <div class="text-center p-3">
          <hr style={{color: "white",height: "4px"}}/>

          <h5 className="copy-right" style={mystyle1}> &copy; 2021 <a href="https://pruthatek.com" target="_blank" style={{textDecoration:"none"}}><img src="/img/pruthatek.png" title="logo" alt="PruthaTek" style={{height: "25px",marginBottom:"2px"}}/>.</a> All Rights Reserved.</h5>       
        </div>

    </footer>



{/*
    <footer class="text-white text-center text-lg-start mt-1" style={{backgroundColor:"#42210b"}}>
      
      <div class="container p-4">
        
        <div class="row mt-3" style={row}>
         
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase" style={{color:"white",fontWeight:"400"}}>We help you to save money.</h5>

            <p style={{textAlign:"justify",color:"white"}}>
             Our free Amazon price tracker monitors millions<br/> of products and alerts you when prices drop,<br/> helping you decide when to buy. As an Amazon<br/> Associate I earn from qualifying purchases.
            </p>

            

          </div>
    
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-0" style={{color:"white",fontWeight:"400"}}>Pages</h5>

            <ul class="list-unstyled" style={{marginTop:"8px",margin:"auto"}}>
              <li>
                <a href="/about" style={{textDecoration: 'none',color:"white"}}>About</a> 
              </li>
              <li>
                <a href="/features" style={{textDecoration: 'none',color:"white"}}>Features</a>
              </li>
              <li>
                <a href="/blog" style={{textDecoration: 'none',color:"white"}}>Blog</a>
              </li>
              <li>
                <a href="/terms" style={{textDecoration: 'none',color:"white"}}>Terms & Privacy</a>
              </li>
              
                <li>
                <a href="/tools" style={{textDecoration: 'none',color:"white"}}>Contact Us</a>
              </li>
              <li>
                <a href="/help" style={{textDecoration: 'none',color:"white"}}>Help</a>
              </li>
            </ul>
          </div>

           <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-0" style={{color:"white",fontWeight:"400"}}>Contact Us</h5>

            <ul class="list-unstyled" style={{marginTop:"7px",margin:"auto"}}>
              <li>
                <a href="https://mail.google.com/mail" target="_blank" style={{textDecoration: 'none',color:"white",lineHeight:"1.9"}}><img src="/img/gmail.png" alt="image" style={{height:"20px",width:"20px",marginBottom:'1px'}}/> - Gmail</a> 
              </li>
              <li>
                <a href="https://www.instagram.com/pruthaTek" target="_blank" style={{textDecoration: 'none',color:"white",lineHeight:"1.9"}}><img src="/img/instagram.png" alt="image" style={{height:"20px",width:"20px",marginBottom:'1px'}}/> - Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/PruthaTek" target="_blank" style={{textDecoration: 'none',color:"white",lineHeight:"1.9"}}><img src="/img/facebook.png" alt="image" style={{height:"20px",width:"20px",marginBottom:'1px'}}/> - Facebook</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/PruthaTek" target="_blank" style={{textDecoration: 'none',color:"white",lineHeight:"1.9"}}><img src="/img/linkedin.png" alt="image" style={{height:"20px",width:"20px",marginBottom:'1px'}}/> - LinkedIn</a>
              </li>
              <li>

              </li>
            </ul>
          </div>
          
        </div>
        
      </div>

     <div class="text-center p-3">
        <hr style={{color: "white",height: "4px"}}/>

          <h5 className="copy-right" style={mystyle1}> &copy; 2021 <a href="https://pruthatek.com" target="_blank" style={{textDecoration:"none"}}><img src="/img/pruthatek.png" title="logo" alt="PruthaTek" style={{height: "25px",marginBottom:"2px"}}/>.</a> All Rights Reserved.</h5>       
     </div>
      
    </footer>
     */}

    </>
    
  );
}

export default Footer;
