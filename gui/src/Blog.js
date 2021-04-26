import React from 'react';
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



function Blog() {
   

    return (

		<>

    		<div class="container">

	    	<br/>
	    	<div class="row">

	    		<div class="column">

	    			<div class="content_inner">

	    				<h3 style={pagetitle}>Thetiger.live Blog</h3>

	    				<div style={outer_frame}>

	    					<div style={inner_frame}>

	    						<h5 style={{color:"rgb(221, 99, 34)"}}>Whoa, That Looks Different!</h5>
	    						<p style={{fontSize:"11px"}}>January 19,2021 at 2:00 AM</p>
	    						<p style={{color:"#314b44"}}>It has been about 6 months in the making, but we've finally updated the site to be friendly to all screen sizes. We will be writing a larger blog entry about it in the near future, but. for now, please report any bugs to info@pruthatek.com. Thank you.</p>
	    						<p style={{color:"#314b44"}}>We hear you. You want the new design to be more dense / efficient in utilizing screen space, and we are working on it. Might even have an update ready today. Thanks for your patience.</p>

	    						<div class="column">

									<hr/>

								</div>

								<h5 style={{color:"rgb(221, 99, 34)"}}>Smile now available in the INDIA</h5>
								<p style={{fontSize:"11px"}}>January 19,2021 at 2:00 AM</p>
	    						<p style={{color:"#314b44"}}>We are finally able to offer Amazon India price tracking! We've long supported Smile in the India. Smile is Amazon's optional program to direct a small portion of your purchase to a charity of your choice. Now we've added support for India Smile as well. Just visit your account settings page and set Smile to Yes to automatically be directed to Smile URLs when you click Thetiger.live buy links.</p>

	    						<div class="column">

									<hr/>

								</div>

								<h5 style={{color:"rgb(221, 99, 34)"}}>Chart issues resolved!</h5>
								<p style={{fontSize:"11px"}}>January 19,2021 at 2:00 AM</p>
	    						<p style={{color:"#314b44"}}>We have fixed the chart issues. Got a bit hairy at the datacenter but we replaced a server and everything appears to work.<br/> Thank you for your patience. <a href="/tools" style={{textDecoration:"none"}}>Please let us know</a> if you notice any other issues.</p>

	    						<div class="column">

									<hr/>

								</div>

								<h5 style={{color:"rgb(221, 99, 34)"}}>A holiday safety tip about scams</h5>
								<p style={{fontSize:"11px"}}>January 19,2021 at 2:00 AM</p>
	    						<p style={{color:"#314b44"}}>Amazon has become a target of scammers over the past few months and we want our users to be aware of the issue as we expect scammers to continue to operate through the holiday season. We've introduced some filters in the past 24 hours that are removing some of the scams from our price records, but it's impossible to remove all of them with the limited amount of information that we obtain about merchants from Amazon.</p>
	    						<p style={{color:"#314b44"}}>The scam is pretty straight forward. A 3rd party retailer posts an item for sale on Amazon at an especially low price. However, they ask in the offer description to contact them via email to complete the sale. Never contact merchants directly. This is where they scam you. Always complete your transaction on Amazon's website. But in this instance you don't want to complete the transaction at all because it is very likely a scam. If you see a scam like this report it to Amazon so that they remove it quickly.</p>	
	    						<p style={{color:"#314b44"}}>Also be wary of 3rd party offers from new merchants with few or zero ratings. Quality merchants usually have hundreds if not thousands of ratings. We've seen a few instances of scammers that appear to be posing as new merchants as well.</p>	
	    						<p style={{color:"#314b44"}}>If you want to be absolutely confident that you're not getting scammed stick to items that are fulfilled by Amazon. Those are usually marked as Prime on Amazon and therefore Amazon will handle the invoicing and shipping of the item.</p>	
	    						<p style={{color:"#314b44"}}>This issue is affecting a relatively small number of items and we're sure Amazon is working to further limit the impact, but it's always wise to proceed with caution when that deal seems a little too good to be true.</p>	
	    						<p style={{color:"#314b44"}}>Thanks for using Thetiger.live this holiday season!</p>		    						

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

export default Blog;