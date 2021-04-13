import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Link} from 'react-router-dom'




                                                      {/*Contact.js Page*/}



const pagetitle = {
	border: "1px",
	color: "#fff",
	backgroundColor: "rgb(221, 99, 34)",
	borderRadius: "3px",
	padding: "0.5rem 1rem",
	marginBottom: "0",
	lineHeight:"1.2",
	fontWeight:"500"
};

const outer_frame = {
    backgroundColor: "#f3f3f3",
    padding: "0.5rem"
};

const inner_frame = {
	padding: "0.5rem",
	border: "1px solid #ccc",
	backgroundColor: "#fff"
};



function Tools() {
   

    return (

		<>

    		<div class="container">

	    	<br/>
	    	<div class="row">

	    		<div class="column">

	    			<div class="content_inner">

	    				<h3 style={pagetitle}>Contact Us</h3>

	    				<div style={outer_frame}>

	    					<div style={inner_frame}>

	    						<p style={{fontWeight:"500",lineHeight:"1.4",fontSize:"18px"}}>We cannot sell (or provide access to, via API or download) our historical pricing and sales rank data. Please do not ask. We will no longer be replying to emails that request this.</p>

	    						<div class="column">

									<hr/>

								</div>

								<p style={{fontWeight:"500",lineHeight:"1.4",fontSize:"18px"}}>There are a few main ways to contact us and/or get support regarding this site:</p>
								<ul>

									<li style={{lineHeight:"1.4"}}><a href="https://mail.google.com/mail" target="_blank" style={{textDecoration: "none"}}>Email</a> · Email us directly at <span style={{color:"rgb(221, 99, 34)",fontWeight:"800"}}>info@pruthatek.com.</span> <Link to="/help" style={{textDecoration:"none"}}>Please read the FAQs first</Link>. We cannot respond to emails asking questions that are already answered there. Thanks for your help and consideration. </li>
									<li style={{lineHeight:"1.4"}}><a href="https://www.instagram.com/pruthaTek" target="_blank" style={{textDecoration: "none"}}>Instagram</a> · pruthatek</li>
									<li style={{lineHeight:"1.4"}}><a href="https://www.linkedin.com/PruthaTek" target="_blank" style={{textDecoration: "none"}}>LinkedIn</a> · PruthaTek</li>
									<li style={{lineHeight:"1.4"}}><a href="https://www.facebook.com/PruthaTek" target="_blank" style={{textDecoration: "none"}}>Facebook</a> · PruthaTek</li>

								</ul>

								<div class="column">

									<hr/>

								</div>

								<p style={{fontWeight:"500",lineHeight:"1.4",fontSize:"18px"}}>We cannot sell (or provide access to, via API or download) our historical pricing and sales rank data. Please do not ask. We will no longer be replying to emails that request this</p>

	    					</div>

	    				</div>

	    			</div>

		    	</div>

		    </div>

	    	</div>
			<br/><br/>
			<Footer/>

			</>
    	 )
}

export default Tools;