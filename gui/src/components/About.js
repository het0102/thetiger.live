import React,{useState,useEffect} from 'react';
import Header from "../Header";
import Footer from "../Footer";

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

const content = {
	marginRight: 0,
	marginLeft: 0,
	paddingRight: 0,
	paddingLeft: 0
};

const smcolb = {
	paddingRight: ".3125rem",
	paddingLeft: ".3125rem",
	width: "100%",
	marginBottom: ".625rem"
};

const medium = {
	width:"25%",
	paddingRight: ".3125rem",
	paddingLeft: ".3125rem",
	float:"left"
};

const medium1 = {
	width:"75%",
	paddingRight: ".3125rem",
	paddingLeft: ".3125rem",
	float:"left"
};


function About() {

   
    return (

		<>

    	<div class="container">


    	<br/>
    	<div class="row">

    		<div class="column">

    			<div class="content_inner">

    				<h3 style={pagetitle}>About Thetiger.live</h3>

    				<div style={outer_frame}>

    					<div style={inner_frame}>

    						<div style={content}>

    							<img src="/img/logo1.png" alt="image" style={{maxHeight:"300px",maxWidth:"300px"}} />

    						</div>

    						<div style={content}>

    							<p>We are an Amazon price tracker that provides price drop alerts and price history charts for products sold by Amazon. </p>

    						</div>

    						{/*<div class="column">

								<hr/>

							</div>

							<div><h3 style={{color:"grey"}}>The Team</h3></div>

							<div class="row">

								<div style={smcolb}>

									<div style={medium}><img src="/img/het.jpeg" alt="image" style={{height:"230px",Width:"100px",borderRadius:"20px"}}/></div>
									<div style={medium1}>
										<h5 style={{fontWeight:"400"}}>Het Shah</h5>
										<p>Het handles frontend coding duties while begrudgingly managing the business stuff, too.frjkfjjtjrjjtrelktjrkjerj ktjkjt;k ;jtkjktj l;j ktiwtiuio u iwyu yuwy uy</p>
									</div>

								</div>

								<div style={smcolb}>

									<div style={medium}><img src="/img/somestaff.png" alt="image" style={{height:"250px",Width:"100px",borderRadius:"20px"}}/></div>
									<div style={medium1}>
										<h5 style={{fontWeight:"400"}}>Kishan Suthar</h5>
										<p>Kishan handles Backend coding duties while begrudgingly managing the business stuff, too.frjkfjjtjrjjtrelktjrkjerj ktjkjt;k ;jtkjktj l;j ktiwtiuio u iwyu yuwy uy</p>
									</div>

								</div>

								<div style={smcolb}>

									<div style={medium}><img src="/img/somestaff.png" alt="image" style={{height:"250px",Width:"100px",borderRadius:"20px"}}/></div>
									<div style={medium1}>
										<h5 style={{fontWeight:"400"}}>Abdali Vora</h5>
										<p>Abdali handles Backend coding duties while begrudgingly managing the business stuff, too.frjkfjjtjrjjtrelktjrkjerj ktjkjt;k ;jtkjktj l;j ktiwtiuio u iwyu yuwy uy</p>
									</div>

								</div>

							</div>*/}

							<div class="column">

								<hr/>

							</div>

							<div><h3 style={{color:"grey"}}>Acknowledgements</h3></div>

							<div style={content}>

    							<p>This site makes use of Amazon Web Services, React-Font, and 	Bootstrap 4 , and jQuery. </p>

    						</div>

    						<div class="column">

								<hr/>

							</div>

							<div style={content}>

    							<p style={{fontSize:"14px"}}>CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON SERVICES LLC. THIS CONTENT IS PROVIDED ‘AS IS’ AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME.</p>
    							<p style={{fontSize:"12px"}}>Thetiger.live is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. As an Amazon Associate I earn from qualifying purchases. Thetiger.live receives a commission on all purchases made through our Amazon links.</p>

    						</div>

    					</div>

    				</div>

    			</div>

    		</div>

    	</div>
    	</div>
		<br/><br/>
		<Footer />
		</>

    	 )
}

export default About;