import React, {useEffect} from 'react';
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

function Terms() {


    useEffect (() => {

        window.scrollTo(0,0)

    }, [])
   

    return (

		<>

    	<div class="container">

    	<br/>
    	<div class="row">

    		<div class="column">

    			<div class="content_inner">

    				<h3 style={pagetitle}>Thetiger.live Terms & Privacy</h3>

    				<div style={outer_frame}>

    					<div style={inner_frame}>
    						<h4 style={{fontWeight:"500"}}>Terms:</h4>
    						<p>Last updated: 15-04-2021</p>
    						<p>This website provides a free service and, as such, we provide no warranty or guarantee of service or uptime. By using this site, you acknowledge that you have read and agree to these terms and do so at your own risk.</p>
    						<p>CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON SERVICES LLC. THIS CONTENT IS PROVIDED ‘AS IS’ AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME.</p>
    						<p>Thetiger.live is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</p>
    						<p>Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply to the purchase of this product.</p>

    						<h4 style={{fontWeight:"500"}}>Privacy Policy:</h4>
    						<p>We try to collect as little personal data from our users as possible, but we do typically require your email address in order to deliver price alerts and other site-related messages. Please do not give us your email address if you do not want us to contact you. We do not sell your email address or share it outside our company. We will purge it from our database on request. Easy enough.</p>
    						<p>There are, however, a few ways in which we utilize third party services to help run / fund the site:</p>
    							<ul>
    								<li  style={{lineHeight:"1.9"}}><b>Affiliate Marketing.</b> When you buy a product through our site, Amazon pays us a percentage of each sale. This does not impact your price in any way, and helps pay to keep the site online.</li>
    								<li style={{lineHeight:"1.9"}}><b>Advertising.</b> This typically involves embedding a script from one or more ad networks into our pages, which then display ads that may might be relevant to the viewer. If you don't like the sound of that, please feel free to use an ad blocker (and maybe consider making a donation.)</li>
    								<li style={{lineHeight:"1.9"}}><b>Analytics.</b> Our web traffic is also analyzed by third party companies, for our own internal reporting and server monitoring.</li>
    							</ul>
    						<p>Ad networks and analytics companies generally try to build viewer profiles to better target their advertising and/or improve their web traffic analyses, so these companies may have more of your personal data.</p>
							<h6 style={{fontWeight:"bold"}}>Amazon</h6>
							<p><b>PrivacyPolicy: </b><a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank">https://www.amazon.com .</a></p>
							<p><b>Purpose: </b>Affiliate Marketing</p>
							<h6 style={{fontWeight:"bold"}}>Google</h6>
							<p><b>Privacy Policy:</b><a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com .</a></p> 
 							<p><b>Purpose:</b>Analytics, Advertising</p>
							<p>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Ads Settings. (Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting www.aboutads.info .)</p>	

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

export default Terms;