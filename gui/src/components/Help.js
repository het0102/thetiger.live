import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import { Accordion,Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'



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


function Help() {
   

    return (

		<>

  			<div class="container">

	    	<br/>
	    	<div class="row">

	    		<div class="column">

	    			<div class="content_inner">

	    				<h3 style={pagetitle}>Thetiger.live Support</h3>

	    				<div style={outer_frame}>

	    					<div style={inner_frame}>  	

		    						<h4 style={{color:"grey"}}>FAQs / Common Issues</h4>
		    						<Accordion defaultActiveKey="0">
									  <Card>
									    <Accordion.Toggle as={Card.Header} eventKey="0">
										How Our Price Checking System Works ?
									    </Accordion.Toggle>
									    <Accordion.Collapse eventKey="0">
									      <Card.Body>We keep this information on our blog so that it can be more easily updated. Read the links below to get a very in-depth description of how our system works, along with some statistics regarding its price checking frequency.</Card.Body>
									    </Accordion.Collapse>
									  </Card>
									  <Card>
									    <Accordion.Toggle as={Card.Header} eventKey="1">
										How do I create a "price watch?"
									    </Accordion.Toggle>
									    <Accordion.Collapse eventKey="1">
									      <Card.Body>
											  <li>Find a product on Amazon. Copy the product's URL from your browser's address bar.</li>

											  <li>Go to thetiger.live and paste the URL from step 1 into the search bar at the top of the page and hit enter.</li>

											  <li>On the next page move your mouse over the price tag icon next to the price type you're interested in (usually Amazon) then click on the -$0.01 link in the window that pops up. Next click "Start Tracking" in the same row.</li>
												You're done! We'll email you when the price drops!</Card.Body>
									    </Accordion.Collapse>
									  </Card>
									  
									  <Card>
									    <Accordion.Toggle as={Card.Header} eventKey="3">
										What are "Popular Products" and how is that determined?
									    </Accordion.Toggle>
									    <Accordion.Collapse eventKey="3">
									      <Card.Body>Our Popular Products shows items that our users are tracking and have recently bought. By looking at the top 5-10% most tracked products in our database and combining it with our sales reports from Amazon, we've created a page that reflects the current interests of tiger.live users. We think our users are pretty good at spotting deals on quality products, and the Popular Products page reflects that. By default, this page shows the most popular products among tiger.live users over the last 3 months. You can change the lookback period with the 1 week and 1 month buttons at the top. You can also filter for good deals by selecting the Deals Only button.

											<br/><br/>Regarding the sales data we get from Amazon, we should emphasize that we don't actually know who buys what. What you as an individual are buying is a mystery to us; we do not and cannot track individual purchases. Amazon only gives us reports showing aggregate sales that were referred by us. So we see something like: 25 ear thermometers were sold, for example. The Popular Products page is simply the intersection of this sales data from Amazon and a list of the most tracked items on the site. Again, we don't want to reveal anyone's individual interests here; we just want to use the collective smarts of tiger.live users to highlight good deals at Amazon.</Card.Body>
									    </Accordion.Collapse>
									  </Card>
									  <Card>
									    <Accordion.Toggle as={Card.Header} eventKey="4">
										How do I disable Twitter alerts?
									    </Accordion.Toggle>
									    <Accordion.Collapse eventKey="4">
									      <Card.Body>Twitter no longer allows us to deliver messages via their service. Sorry about that.</Card.Body>
									    </Accordion.Collapse>
									  </Card>
									  <Card>
									    <Accordion.Toggle as={Card.Header} eventKey="5">
										I can't find the offer price thetiger.live is reporting.
									    </Accordion.Toggle>
									    <Accordion.Collapse eventKey="5">
									      <Card.Body>There are frequently numerous retailers besides Amazon selling merchandise on Amazon's website. Amazon puts what it thinks is the best offer for the customer in the Buy Box. Sometimes this is an Amazon offer (meaning it ships from and is sold by Amazon itself) and sometimes it's a 3rd party offer (merchandise that is owned by another retailer but is still sold on Amazon's website). You can now see all offers available for purchase on Amazon by clicking on the See all offers link below the Buy button as shown in the red circle in the image below.</Card.Body>
									    </Accordion.Collapse>
									  </Card>
									  
									  <Card>
									    <Accordion.Toggle as={Card.Header} eventKey="7">
										What is repricing?
									    </Accordion.Toggle>
									    <Accordion.Collapse eventKey="7">
									      <Card.Body>Our repricing feature helps you find and update your price watches that have extremely low desired prices. If the price you've chosen to be alerted at is below the lowest price ever recorded for a product, we'll flag those watches and ask you if you want to set the desired price to a level that is both a good deal and a price more likely to be realized.

											<br/><br/>For each watch of yours that we find with a desired price less than the best price ever seen, we'll set a new, better desired price to the lesser of two values: the good deal price (the price that is just 5% higher than the best price ever; and our definition of a good deal) or the current price - $0.01. If the product's current price is already less than the good deal price, we'll set the desired price to the current price - $0.01.

											<br/><br/>In this way you should receive no immediate alerts after running the repricing tool. You will, however, end up with price watches that are much more likely to alert you eventually. And when they do alert, the price you will be alerted at is guaranteed to be a good deal!</Card.Body>
									    </Accordion.Collapse>
									  </Card>
									  <Card>
									    <Accordion.Toggle as={Card.Header} eventKey="8">
										What about shipping & handling prices?
									    </Accordion.Toggle>
									    <Accordion.Collapse eventKey="8">
									      <Card.Body>The price tracked by thetiger.live does not include shipping and handling. We'd love to make this information available to our users, but it's not something that Amazon currently shares with us. We only know the lowest price offer in the three price type categories (Amazon, 3rd Party New, and 3rd Party Used). We can, however, show you whether the offer is Prime eligible which means the shipping is free for Prime members or for non-members spending $35 or more.</Card.Body>
									    </Accordion.Collapse>
									  </Card>
				
								 </Accordion>

					    	</div>

					    	<div class="column">

								<hr/>

							</div>

							<h4 style={{color:"grey"}}>Contact Us</h4>
							<p>If the FAQs don't help, please visit the <Link to="/tools" style={{textDecoration: "none",color:"rgb(221, 99, 34)"}}>contact information page</Link> and use your preferred method to get in touch with us. We will do our best to resolve your problem.</p>
							<p>We cannot sell (or provide access to, via API or download) our historical pricing and sales rank data. Please do not ask. We will no longer be replying to emails that request this.</p>

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

export default Help;