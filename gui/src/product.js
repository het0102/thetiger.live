import React,{useState,useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';



const productContent = {
    display: "grid",
    justifyContent: "center"
};

const imgContent = {
    height: "auto",
    width:"100%",
};


const btn1 = {
    color: "white",
    backgroundColor:"#dd6322",
    borderColor:'#dd6322'
};

const pagetitle = {
    border: "1px",
    color: "#fff",
    backgroundColor: "#dd6322",
    borderRadius: "3px",
    padding: "0.5rem 1rem",
    marginBottom: "0",
    lineHeight: "1.2",
    fontWeight: "500"
};

const outer_frame = {
    backgroundColor: "#f3f3f3",
    padding: "0.5rem"
};

const inner_frame = {
    padding: "0.5rem",
    border: "1px solid #dd6322",
    backgroundColor: "#fff"
};

const inner_framee = {
    padding: "0.5rem",
    border: "1px solid #f1f1f1",
    backgroundColor: "#fff"
};

const pagetitlee = {
    border: "1px",
    color: "grey",
    backgroundColor: "#f1f1f1",
    borderRadius: "3px",
    padding: "0.5rem 1rem",
    marginBottom: "0",
    lineHeight: "1.2",
    fontWeight: "500",
    fontSize: "22px"
};

const row2 ={
    color:"grey",
    backgroundColor: "#f1f1f1",
    padding: "0.5rem 1rem",
};

const row1 ={
    color:"grey",
    padding: "0.5rem 1rem",
};





function Product(props) {

    const val = props.match.params.val
    console.log(val)
    const [products,setProducts]=useState([]);

    const [email,setemail]=useState([]);
    const [price,setPrice]=useState([]);
    const [discount,setDiscount]=useState([]);


    const [trackPrice,setTrackPrice] = useState("")
    const url = `http://127.0.0.1:8000/product/api/PriceTrackingData`
    
    //console.log("?////////11111///", props)
    
    const [data,setData] = useState({

        product_id:"",
        email:"",
        price_value:"",
        price_percent:""

    })
    data.product_id = parseInt(val)
    
    //console.log("/////////////data,setData", data)
    
    function handleChange(e) {

        const newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
        console.log(newData)

    }

    function handleSubmit(e) {

        e.preventDefault();
       
        //console.log("//////////////////", data, e)    
        
        axios.post(url,{
            
            product_id:data.product_id,
            email: data.email,
            price_value: data.price_value,
            price_percent: data.price_percent,
            
        })
        .then(res=>{
            console.log(res.data);
            console.log("data submited")
            alert("Thank You For Tracking");
        })
        .catch(err=>{
            console.log(err)
        })

    }


    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/product/api/id=${val}`)
        .then(res=>{
            setProducts(res.data)
        })
        .catch(error=>{
            alert(error.message)
        })
        },[])

    return (
        <div class="container home">
        {products.map(product=>{
                                return(
                                <>
            {/*Banner Section image and info.*/}
            <div className="row d-flex justify-content-center align-items-center py-5">
                <div className="col-md-6" >
                    <img src="/img/laptop.jpg" className="image-product" style={imgContent} />
                </div>
                <div className="col-md-6" style={productContent}>
                    <p>{product.title}</p>
                    <h3>{product.name}</h3>
                    <p style={{ fontSize: "12px" }}>{product.desc}</p>
                    <h2 style={{ color: "#dd6322", marginBottom: "0" }}>{product.price}</h2>
                    <p style={{ fontSize: "12px", marginBottom: "0" }}>Amazon Price</p>
                    <p style={{ fontSize: "12px" }}>Last Updated : {product.lastupdatescan}</p>
                    <a href={product.url} target="_blank" style={{width: "163px"}}><button type="button" class="btn btn-outline-warning" style={btn1}>View At Amazon</button></a>
                </div>
            </div>


            {/*Tracking Table*/}
            <div class="row">

                <div class="content_inner">

                    <h3 style={pagetitle}>Create Amazon Price Watches</h3>

                    <div style={outer_frame}>

                        <div style={inner_frame}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="row mt-2">
                                
                                <div class="col-md-4">
                                    <p>We'll send an email to</p>
                                    <input type="hidden"  name="product_id"  id="product_id" required="required" value={product.id} />
                                    <input type="email" name="email" class="form-control me-2" id="email" required="required" placeholder="enter email" value={data.email} onChange={(e)=>handleChange(e,"email")} />
                                    <p>{email}</p>
                                </div>
                                <div class="col-md-4">
                                    <p>When the </p>
                                    <select class="form-select" aria-label="Default select" name="price_value" onChange={(e)=>handleChange(e,"price_value")}>
                                        <option>-/Select</option>
                                        <option value="amazon-price">Amazon Price</option>
                                        <option value="3rd-party-product-new">3rd Party New Price</option>
                                        <option value="3rd-party-product-used">3rd Party Used Price</option>
                                    </select>
                                    <p>{price}</p>
                                </div>
                                <div class="col-md-4">
                                    <p>Drops to</p>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="addon-wrapping">&#8377;</span>
                                        <select class="form-select" aria-label="Default select" name="price_percent" onChange={(e)=>handleChange(e,"price_percent")}>
                                            <option>-/Select Price Drop</option>
                                            <option value={product.price-Math.floor(1)}>Any Price Drop - &#8377;{product.price-Math.floor(1)}</option>
                                            <option value={product.price-Math.floor((product.price*2)/100)}>-2% (&#8377;{product.price-Math.floor((product.price*2)/100)})</option>
                                            <option value={product.price-Math.floor((product.price*4)/100)}>-4% (&#8377;{product.price-Math.floor((product.price*4)/100)})</option>
                                            <option value={product.price-Math.floor((product.price*6)/100)}>-6% (&#8377;{product.price-Math.floor((product.price*6)/100)})</option>
                                            <option value={product.price-Math.floor((product.price*8)/100)}>-8% (&#8377;{product.price-Math.floor((product.price*8)/100)})</option>
                                            <option value={product.price-Math.floor((product.price*10)/100)}>-10% (&#8377;{product.price-Math.floor((product.price*10)/100)})</option>
                                        </select>
                                        {/*<input list="browsers"  value={data.tracked} onChange={(e)=>handleChange(e)} name="price-drop" placeholder="-/Select Price Drop" class="form-select" />
                                        <datalist id="browsers">
                                            <option>Any Price Drop - &#8377;{product.Price-Math.floor(1)}</option>
                                            <option id="two_drop">-2% (&#8377;{product.Price-Math.floor((product.Price*2)/100)})</option>
                                            <option id="four_drop">-4% (&#8377;{product.Price-Math.floor((product.Price*4)/100)})</option>
                                            <option id="six_drop">-6% (&#8377;{product.Price-Math.floor((product.Price*6)/100)})</option>
                                            <option id="eight_drop">-8% (&#8377;{product.Price-Math.floor((product.Price*8)/100)})</option>
                                            <option id="ten_drop">-10% (&#8377;{product.Price-Math.floor((product.Price*10)/100)})</option>
                                        </datalist>*/}
                                        <button class="btn btn-outline-warning" type="submit" id="button-addon1">Track</button>
                                    </div>
                                </div>
                                
                            </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
            <br/>


    {/*Product information*/}
            <div class="row">

                <div class="content_inner">

                    <h3 style={pagetitlee}><span width="50px" height="50px">&#9432;</span> Product Details</h3>

                    <div style={outer_frame}>

                        <div style={inner_framee}>
                            <div className="row">
                                <div className="col-md-3" style={row1}>Product group </div>
                                <div className="col-md-9" style={row1}>{product.productgroup}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-3" style={row2}>Category </div>
                                <div className="col-md-9" style={row2}>Kitchen </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3" style={row1}>Manufacturer </div>
                                <div className="col-md-9" style={row1}>{product.manufacturer}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-3" style={row2}>Model </div>
                                <div className="col-md-9" style={row2}>{product.model}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-3" style={row1}>Locale </div>
                                <div className="col-md-9" style={row1}>{product.location}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-3" style={row2}>List price </div>
                                <div className="col-md-9" style={row2}><span>&#8377;</span>{product.price}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-3" style={row1}>Last update scan </div>
                                <div className="col-md-9" style={row1}>{product.lastupdatescan}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-3" style={row2}>Last tracked </div>
                                <div className="col-md-9" style={row2}>{product.lasttracked}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <Footer />
            </>
            );
            })}
        </div>
    );
}

export default Product;