// import React, { useState } from 'react'
// import logoimage from "./img/violet4.png"
// import bridal  from "./img/bridal.avif";
// import sarees  from "./img/saress.avif";
// import chudi  from "./img/image-1715248733647.webp";
// import cholli  from "./img/cholli1.jpeg";
// import tops  from "./img/tops.webp";
// import casual  from "./img/casual.jpg";
// import Jeans  from "./img/jeans.jpg";
// import savings from "./img/saving.webp"
// import discount from "./img/discount.avif"
// import deals from "./img/deals.webp"
// import stores from "./img/stores.avif"
// import love from "./img/love.avif"
// import kids  from "./img/image-1715250056445.jpeg";
// import card from "./img/card.png"
// import card1 from "./img/card1.png"
// import card2 from "./img/card2.png"
// import card3 from "./img/card3.png"
// import card4 from "./img/card4.png"
// import card5 from "./img/card5.png"
// import card6 from "./img/card6.png"
// import card7 from "./img/card7.png"
// import card8 from "./img/card8.png"
// import dress from "./img/dress.avif"
// import dress1 from "./img/dress1.avif"
// import dress2 from "./img/dress2.avif"
// import dress3 from "./img/dress3.avif"
// import dress4 from "./img/dress4.avif"
// import imgrow from "./img/imgrow3.jpg"


// import { Link } from 'react-router-dom'







// import "./slide.css"


// import axios from "axios"




// function Slide() {


//   const [name,setname]=useState("")
//   const [email,setemail]=useState("")
//   const [msg,setMsg]=useState("")
//   const [address,setaddress]=useState("")
//   const [num,setnum]=useState("")


//   let SubmitEvent=async(e)=>{
//         e.preventDefault()

//         try{
//             await axios.post("http://localhost:5009/contact",{
//               name,
//               email,
//               num,
//               address,
//               msg
//             })
//         }
//         catch(e){
//           console.log(e);
//         }

//   }
//   function Card({ imageSrc, title }) {
//     return (
//       <div className="card">
//         <img src={imageSrc} alt={title} className="card-img-top card-image" />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
          
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div class="container-fluid  bg-white">


//       <div class="container-fluid">
//         <img src={logoimage} height={350} width={1255} style={{marginLeft:"-18px"}}></img>
//         </div><br/>


//         <div class="container-fluid bg-white">
//   {/* <h1 id="swimin">SWIMMIN' IN DISCOUNTS</h1> */}
//   <img src={discount} width={1230}></img>
  
// </div><br/>


//         <div class="container-fluid" >
//         <Link to="/shoppingcart" className='link_nav_1'><img src={bridal} class="img-circle" height={130} width={140} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={sarees} class="img-circle" height={130} width={140} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={chudi} class="img-circle"  height={130} width={140} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={cholli} class="img-circle" height={130} width={140} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={kids} class="img-circle"   height={130} width={140} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={tops} class="img-circle"   height={130} width={140} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={Jeans} class="img-circle"  height={130} width={140} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={casual} class="img-circle" height={130} width={140} alt="Cinque Terre"></img></Link>

//         </div><br/>
//         <div class="container">

//         <div class="row">
//     <div class="col-sm-2" >
//     <Link to="/shoppingcart" className='link_nav_2 col-sm-2'> <p>Bridal Collection</p></Link>
//     </div>
//     <div class="col-sm-2" >
//     <Link to="/shoppingcart" className='link_nav_2 col-sm-2'><p>Sarees's</p></Link>
//     </div>
//     <div class="col-sm-2" >
//     <Link to="/shoppingcart" className='link_nav_2 col-sm-2'><p>churidhar</p></Link>
//     </div>
//     <div class="col-sm-2" >
//     <Link to="/shoppingcart" className='link_nav_2 col-sm-2'><p>Cholli</p></Link>
//     </div>
//     <div class="col-sm-2" >
//     <Link to="/shoppingcart" className='link_nav_2 col-sm-2'><p>Kids-Girls</p></Link>
//     </div>
//     <div class="col-sm-2" >
//     <Link to="/shoppingcart" className='link_nav_2 col-sm-2'> <p>Casual Collections</p></Link>
//     </div>
//     </div>
// </div><br/>


   

// <div class="bg-3" >
//   <div class="container"><br/>
//     <img src={savings} width={1150}></img>
//   </div><br/>
  
//   <div className="container">
//       <div className="row">
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'> <Card
//             imageSrc={card} 
//             title="Partywear Designer Printed Pink Color Kurti"
            
//           /></Link>
//         </div>
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'> <Card
//             imageSrc={card1}
//             title="Appealing Wine Colored Designer Suit"
            
//           /></Link>
//         </div>
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'> <Card
//             imageSrc={card2}
//             title="Layered Kurti In White Color in Cotton Fabric"
            
//           /></Link>
//         </div>
//       </div>
//       <div className="row mt-4">
      
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'> <Card
//             imageSrc={card3}
//             title="multi Colored Saree With Blouse trendy collections"
            
//           /></Link>
//         </div>
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'> <Card
//             imageSrc={card4}
//             title="Black Banarasi Silk Saree With Zari Weaving Work "
            
//           /></Link>
//         </div>
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'><Card
//             imageSrc={card5}
//             title="Trendy Designer Saree Grey Online Printed Bhagalpuri silk Saadi"
            
//           /></Link>
//         </div>
//       </div><br/>
//       <div class="container">
//     <img src={deals} width={1150}></img>
//   </div>
//       <div className="row mt-4">
      
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'><Card
//             imageSrc={card6}
//             title="KARMIC VISION
//             Solid Top"
            
//           /></Link>
//         </div>
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'> <Card
//             imageSrc={card7}
//             title="Casual Regular fit v Neck shirt"
            
//           /></Link>
//         </div>
//         <div className="col-md-4">
//         <Link to="/shoppingcart" className='link_nav_1'><Card
//             imageSrc={card8}
//             title="Regular Fit V Collered Casual Shirt"
            
//           /></Link>
//         </div>
//       </div>
//     </div>

  
// </div>
// <br/>
// <div class="container" >
//     <img src={stores} width={1150}></img>
//   </div><br/>

//   <div class="container-fluid"  >
  

//         <Link to="/shoppingcart" className='link_nav_1'><img src={dress} class="img-circle"  height={220} width={230} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={dress1} class="img-circle" height={220} width={230} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={dress2} class="img-circle" height={220} width={230} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={dress3} class="img-circle" height={220} width={230} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <Link to="/shoppingcart" className='link_nav_1'><img src={dress4} class="img-circle" height={220} width={230} alt="Cinque Terre"></img>&nbsp;&nbsp;</Link>
//         <br/>
//          </div>
  
// <div class="container-fluid  bg-white" id='why_choose_us'>  <br></br> <br/>

// <div class="container">
//     <img src={love} width={1150} ></img>
//   </div><br/>
//   <img src={imgrow} height={350} width={550} style={{marginLeft:"20px"}}></img>
//     <div class="col-sm-6 thumbnail" style={{marginLeft:"600px",marginTop:"-340px"}}>
    
//     <form action='POST' id='contact_box'>
//     <div class="col-sm-11">
//       <div class="row">
//         <div class="col-sm-6 form-group">
//           <input class="form-control" id="name" name="name" placeholder="Name" type="text" required onChange={(e)=>{setname(e.target.value)}}></input>
//         </div>
//         <div class="col-sm-6 form-group">
//           <input class="form-control" id="email" name="email" placeholder="Email" type="email" required onChange={(e)=>{setemail(e.target.value)}}></input>
//         </div>
//         <div class="col-sm-6 form-group"><br/>
//           <input class="form-control" id="number" name="number" placeholder="Contact" type="number" required onChange={(e)=>{setnum(e.target.value)}}></input>
//         </div>
//       </div><br></br>
//       <textarea class="form-control" id="comments" name="Address" placeholder="Address" rows="5" onChange={(e)=>{setaddress(e.target.value)}}></textarea><br></br>
    
//       <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5" onChange={(e)=>{setMsg(e.target.value)}}></textarea><br></br>
//       <div class="row">
//         <div class="col-sm-12 form-group">
          
// <div class="offcanvas offcanvas-end" id="demo">
//   <div class="offcanvas-header">
//     <h1 class="offcanvas-title">Thank You!!</h1>
//     <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
//   </div>
//   <div class="offcanvas-body">
//    <h3>Register Successfully</h3>
//    <a href="./homepage">
//     <button class="btn btn-secondary" className='shop_but w-50 p-3 mt-2' type="button">Back</button>
//    </a>
//   </div>
// </div>

// <div class="container-fluid mt-3">
//   {/* <h3>Right Offcanvas</h3> */}
//   {/* <p>The .offcanvas-end class positions the offcanvas to the right of the page.</p> */}
//   <button class="btn btn-primary" className='shop_but w-100 p-3 mt-2' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" id="send" onClick={SubmitEvent} >
//    send
//   </button>
// </div>
// </div>
//     </div>
//       </div>
//     </form>
//     </div>
  
  
//   <br/><br/><br/>
// </div>



//     </div>
//   )
// }

// export default Slide


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./slide.css";
import bridal from "./img/bridal.avif";
import sarees from "./img/saress.avif";
import chudi from "./img/image-1715248733647.webp";
import cholli from "./img/cholli1.jpeg";
import tops from "./img/tops.webp";
import casual from "./img/casual.jpg";
import Jeans from "./img/jeans.jpg";
import savings from "./img/saving.webp";
import discount from "./img/discount.avif";
import deals from "./img/deals.webp";
import stores from "./img/stores.avif";
import love from "./img/love.avif";
import kids from "./img/image-1715250056445.jpeg";
import card from "./img/card.png";
import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";
import card4 from "./img/card4.png";
import card5 from "./img/card5.png";
import card6 from "./img/card6.png";
import card7 from "./img/card7.png";
import card8 from "./img/card8.png";
import dress from "./img/dress.avif";
import dress1 from "./img/dress1.avif";
import dress2 from "./img/dress2.avif";
import dress3 from "./img/dress3.avif";
import dress4 from "./img/dress4.avif";
import imgrow from "./img/imgrow3.jpg";

function Slide() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setMsg] = useState("");
  const [address, setaddress] = useState("");
  const [num, setnum] = useState("");

  let SubmitEvent = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5009/contact", {
        name,
        email,
        num,
        address,
        msg
      });
    } catch (e) {
      console.log(e);
    }
  }

  function Card({ imageSrc, title }) {
    return (
      <div className="card">
        <img src={imageSrc} alt={title} className="card-img-top card-image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-white">
      

      <div className="container-fluid bg-white">
        <img src={discount} width="100%" alt="Discount" />
      </div><br />

      <div className="container-fluid text-center">
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={bridal} className="img-circle" height={130} width={140} alt="Bridal" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={sarees} className="img-circle" height={130} width={140} alt="Sarees" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={chudi} className="img-circle" height={130} width={140} alt="Chudi" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={cholli} className="img-circle" height={130} width={140} alt="Cholli" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={kids} className="img-circle" height={130} width={140} alt="Kids" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={tops} className="img-circle" height={130} width={140} alt="Tops" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={Jeans} className="img-circle" height={130} width={140} alt="Jeans" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={casual} className="img-circle" height={130} width={140} alt="Casual" />
        </Link>
      </div><br />

      <div className="container text-center">
        <div className="row">
          <div className="col-sm-2">
            <Link to="/shoppingcart" className='link_nav_2'><p>Bridal Collection</p></Link>
          </div>
          <div className="col-sm-2">
            <Link to="/shoppingcart" className='link_nav_2'><p>Sarees's</p></Link>
          </div>
          <div className="col-sm-2">
            <Link to="/shoppingcart" className='link_nav_2'><p>Churidhar</p></Link>
          </div>
          <div className="col-sm-2">
            <Link to="/shoppingcart" className='link_nav_2'><p>Cholli</p></Link>
          </div>
          <div className="col-sm-2">
            <Link to="/shoppingcart" className='link_nav_2'><p>Kids-Girls</p></Link>
          </div>
          <div className="col-sm-2">
            <Link to="/shoppingcart" className='link_nav_2'><p>Casual Collections</p></Link>
          </div>
        </div>
      </div><br />

      <div className="bg-3">
        <div className="container"><br />
          <img src={savings} width="100%" alt="Savings" />
        </div><br />

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card} title="Partywear Designer Printed Pink Color Kurti" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card1} title="Appealing Wine Colored Designer Suit" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card2} title="Layered Kurti In White Color in Cotton Fabric" />
              </Link>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card3} title="Multi Colored Saree With Blouse Trendy Collections" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card4} title="Black Banarasi Silk Saree With Zari Weaving Work" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card5} title="Trendy Designer Saree Grey Online Printed Bhagalpuri Silk Saadi" />
              </Link>
            </div>
          </div><br />
          <div className="container">
            <img src={deals} width="100%" alt="Deals" />
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card6} title="KARMIC VISION Solid Top" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card7} title="Casual Regular Fit V Neck Shirt" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/shoppingcart" className='link_nav_1'>
                <Card imageSrc={card8} title="Regular Fit V Collared Casual Shirt" />
              </Link>
            </div>
          </div>
        </div>
      </div><br />

      <div className="container">
        <img src={stores} width="100%" alt="Stores" />
      </div><br />

      <div className="container-fluid text-center">
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={dress} className="img-circle" height={220} width={230} alt="Dress" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={dress1} className="img-circle" height={220} width={230} alt="Dress1" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={dress2} className="img-circle" height={220} width={230} alt="Dress2" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={dress3} className="img-circle" height={220} width={230} alt="Dress3" />
        </Link>&nbsp;&nbsp;
        <Link to="/shoppingcart" className='link_nav_1'>
          <img src={dress4} className="img-circle" height={220} width={230} alt="Dress4" />
        </Link><br />
      </div>

      <div className="container-fluid bg-white" id='why_choose_us'><br /><br />
        <div className="container">
          <img src={love} width="100%" alt="Love" />
        </div><br /><br/><br /><br/><br /><br/><br /><br/><br /><br/><br /><br/>
        {/* <img src={imgrow} height={350} width="100%" style={{ marginLeft: "20px" }} alt="Imgrow" /> */}
        <div className="col-sm-6 thumbnail" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "-340px" }}><br /><br/>
          <form action='POST' id='contact_box'>
            <div className="row">
              <div className="col-sm-6 form-group">
                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required onChange={(e) => { setname(e.target.value) }} />
              </div>
              <div className="col-sm-6 form-group"><br/>
                <input className="form-control" id="email" name="email" placeholder="Email" type="email" required onChange={(e) => { setemail(e.target.value) }} />
              </div>
              <div className="col-sm-6 form-group"><br />
                <input className="form-control" id="number" name="number" placeholder="Contact" type="number" required onChange={(e) => { setnum(e.target.value) }} />
              </div>
            </div><br />
            <textarea className="form-control" id="comments" name="Address" placeholder="Address" rows="5" onChange={(e) => { setaddress(e.target.value) }}></textarea><br />
            <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5" onChange={(e) => { setMsg(e.target.value) }}></textarea><br />
            <div className="row">
              <div className="col-sm-12 form-group">
                <div className="offcanvas offcanvas-end" id="demo">
                  <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Thank You!!</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                  </div>
                  <div className="offcanvas-body">
                    <h3>Register Successfully</h3>
                    <a href="./homepage">
                      <button className="btn btn-secondary shop_but w-50 p-3 mt-2" type="button">Back</button>
                    </a>
                  </div>
                </div>

                <div className="container-fluid mt-3">
                  <button className="btn btn-primary shop_but w-100 p-3 mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" id="send" onClick={SubmitEvent}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div><br /><br /><br />
      </div>
    </div>
  );
}

export default Slide;
