import React, {useEffect} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import { Accordion,Card } from 'react-bootstrap'


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

export default function Features() {


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

    				<h3 style={pagetitle}>Thetiger.live Features</h3>

    				<div style={outer_frame}>

    					<div style={inner_frame}>

    						<h4 style={{color:"grey"}}>Topics:</h4>
					        <Accordion defaultActiveKey="0">
							  <Card>
							    <Accordion.Toggle as={Card.Header} eventKey="0">
							      Price Drop & Availability Alerts
							    </Accordion.Toggle>
							    <Accordion.Collapse eventKey="0">
							      <Card.Body>The primary feature of our site is the sending of email alerts when prices change. The user simply sets a price threshold at which alerts are generated, and we email you when that condition is met.</Card.Body>
							    </Accordion.Collapse>
							  </Card>
							  {/*<Card>
							    <Accordion.Toggle as={Card.Header} eventKey="1">
							      Price History Charts
							    </Accordion.Toggle>
							    <Accordion.Collapse eventKey="1">
							      <Card.Body>Price history charts are another major part of Thetiger.live. Every product page contains graphs of the price variations over time for each of the three price types, as well as the high/low/average prices. Price and availability data is updated from Amazon constantly to ensure it is as accurate as possible, but should always be checked on Amazon before making a purchase. </Card.Body>
							    </Accordion.Collapse>
							  </Card>*/}
							  <Card>
							    <Accordion.Toggle as={Card.Header} eventKey="2">
							      Amazon Product Search
							    </Accordion.Toggle>
							    <Accordion.Collapse eventKey="2">
							      <Card.Body>Search is accessed via the box at the top center of every page, or by clicking "Amazon Products" in the menu at the top of the page.<br/><br/>Search results are displayed tabularly and, amongst other things, contain the Amazon/New/Used prices and links to price history RSS feeds for each price type, which are useful if you'd rather not actually create a price watch.</Card.Body>
							    </Accordion.Collapse>
							  </Card>
							  
							  <Card>
							    <Accordion.Toggle as={Card.Header} eventKey="4">
							     Amazon Locales Support
							    </Accordion.Toggle>
							    <Accordion.Collapse eventKey="4">
							      <Card.Body>Thetiger.live supports these Amazon Locals: - INDIA</Card.Body>
							    </Accordion.Collapse>
							  </Card>
							  <Card>
							    <Accordion.Toggle as={Card.Header} eventKey="5">
							      Registration Optional
							    </Accordion.Toggle>
							    <Accordion.Collapse eventKey="5">
							      <Card.Body>Signing up for things is a pain in the neck, so Thetiger.live makes it completely optional. You don't even have to give your email address to track products, although it helps if you want to receive email alerts. If you don't, you can simply add the price watch's RSS feed to your newsreader and await the alerts patiently.<br/><br/>If you do choose to sign up or receive email alerts, rest assured that I will not sell or distribute your information to anyone without your consent.<br/><br/>Those brave souls who take the plunge -- much like Bastian in the Neverending Story 2 -- and register receive access to the thetiger.live Management and Wishlist Importer tools, which are very useful and look good on your resume. Any price watches created prior to your registration, using the same email address, will be moved over to your account as we check them for pricing updates. This may take up to 8 hours or so, and they will appear to trickle in.</Card.Body>
							    </Accordion.Collapse>
							  </Card>
							  <Card>
							    <Accordion.Toggle as={Card.Header} eventKey="6">
							      The tiger price watch management Interface
							    </Accordion.Toggle>
							    <Accordion.Collapse eventKey="6">
							      <Card.Body>Accessible by clicking the "Your Price Watches" link at the top of every page, your list of price watch is laid out in table format: you get the name and picture of the product with a small description; your desired price as well as the price at which you began tracking the product, and the current price; and of course links to all manner of price watch, products, and Amazon pages.<br/><br/>To help you keep track of your price watches, there are a number of filters available--which remain active until disabled or you logout--to help refine the list, as follows:<br/><br/><ul>
							      		<li><b>Status</b> - is your price watch active (woot, the price you want!), updated, unchanged, or perhaps new?</li>
							      		<li><b>Price Type</b> - there are three price types available for your tracking needs: Amazon, Third Party New and Third Party Used prices. You can track one or all three! </li>
							      		<li><b>Category</b> - this filter is based on the Amazon category of your tracked products. </li>
							      		<li><b>Artist</b> - as a music fan I thought it would be nice to list the artists (with picture!) of any musical price watches you might have.</li>
							      		<li><b>Product Name</b> - the first letter of every product you're tracking is made into a filter option.</li>
							      		</ul>
							      		Your price watch list is automatically split into pages of 25. Also, each product has a checkbox; this lets you edit or delete multiple price watches at the same time, using the dropdown menu at the bottom of the list.
							      </Card.Body>
							    </Accordion.Collapse>
							  </Card>
							  <Card>
							    <Accordion.Toggle as={Card.Header} eventKey="7">
							      Wishlist
							    </Accordion.Toggle>
							    <Accordion.Collapse eventKey="7">
							      <Card.Body>The ability to import Amazon Wishlists was one of the earliest and most common feature requests. With it, you can import all of the products from any public Amazon list (Wishlist or otherwise); all it takes is the URL of the list. Once you submit that, Thetiger.live reads the list information and imports the products which you have not already received/purchased, tracking them at "Amazon new price minus one". All price watches created using this tool are still editable and will appear under the "New" filter in the "Your Products" section of the site.<br/><br/>Please note that your Amazon login information is not needed to use this or any Thetiger.live functionality.</Card.Body>
							    </Accordion.Collapse>
							  </Card>
							  
							</Accordion>
		
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
