import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


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


export default function Error(props) {

	return (

    	<div class="container">
    		<br/>
    		<div class="row">

    		<div class="column">

    			<div class="content_inner">

    				<h3 style={pagetitle}>Error 404 Page Not Found</h3>

    				<div style={outer_frame}>

    					<div style={inner_frame}>

    						<div style={content}>

    							<p>The requested page generated an error. Please use your browser's Back function, or choose a different page from the menu above, or you can click on our logo to redirect on Home page. And feel free to contact us for help!</p>

    						</div>
    					</div>

    				</div>

    			</div>

    		</div>

    		</div>

    	</div>

    	);

}