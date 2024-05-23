import React, { useState } from 'react'
import "./customer.css"
import { Link } from 'react-router-dom'
import img2 from "./img/customer.jpg"
import img3 from "./img/customer1.jpg"
import Footer from './footer'
import logo from "./img/logo1.png"
import Metadata from './metadata'
import List from './list';
import beauty from "./img/beauty.webp"
function Customer() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    // Convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>

<Metadata title={'Buy best Products'}/>
      <div class="container-fluid" id="navbar_top">
      <div className="scrolling-text">
      <p className="container d-flex justify-content-center mx-auto scrolling-text-content fst-italic" style={{fontSize:"17px"}}>Steller's Violet Summer Sale is Live! Don't miss out on great deals!</p>
        
        </div>
        </div><br/>
      <nav class="navbar navbar-expand-lg navbar-light  ">
  <div class="container-fluid" id="navbar">
    <Link class="navbar-brand" to="/homepage"><img src={logo} height={45} width={180} style={{marginLeft:"20px"}}></img></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse bg-white" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/about"  className='link_nav'>About us</Link>
          
        </li>
        <li class="nav-item">
        <Link to="/customer"  className='link_nav'>Years of Customers</Link>
          
        </li>
        <li class="nav-item dropdown">
        <Link to="/shoppingcart" className='link_nav'> Shop Now</Link>
          
        </li>
      </ul>

     

    
<div className="search-container mx-auto w-25">
            <i className="fa-solid fa-magnifying-glass search-icon" style={{marginTop:"10px", position:"absolute",marginLeft:"10px",color:"rgb(180, 9, 180)",fontSize:"18px"}}></i>
            <input
                type="text"
                placeholder="Search"
                className="form-control search-input"
                value={inputText}
                onChange={inputHandler}
                style={{paddingLeft:"35px"}}
            />
            {/* Display the search results below the search bar only if inputText is not empty */}
            {inputText.length > 0 && <List input={inputText}/>}
        </div>


      <form class="d-flex" id="forms">
<div id="user">
<a href="#why_choose_us" target="_self">
<i class="fa-solid fa-user"></i> 

</a>&nbsp;
<a href="./shoppingcart" >
<i class="fa-solid fa-cart-shopping "></i>
</a>
</div>




      </form>
    </div>
  </div>

</nav>
<br/><br/><br/>
<div class="container-fluid shadow-lg " id="navbar_top1">
<div class="d-flex justify-content-around w-100 p-2">
<Link to="/shoppingcart" className='link_nav_1'><li >Bridal Collection</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Saree's</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >churidhar</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Cholli</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Kids-Girls</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Tops</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Jeans</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Casual Collections</li></Link>
<li id="sale">SALE</li>

</div>
      
<br/><br/><br/><br/><br/>
</div>

<div class="container-fluid bg-white">
<br></br><br/>
    <img src={beauty} width="100%"  ></img>
  </div>

    <div class="jumbotron text-center bg-white" id="about-h1"><br/>
  <h3>Every year is the year of the customer</h3>
  <p>Have you heard? It’s the year of the customer.</p> <br/>
</div>

<div class="container-fluid bg-white">
  <div class="row">
    <div class="col-sm-4">
      <h2 id="about-h1">The Latest Boutique Industry Statistics Unveiled</h2>
     
      <p id="about-h1">Approximately 200,000 to 250,000 small fashion boutiques exist in the United States, which is around 95% of the overall number of boutiques nationwide.</p>
      
      <hr class="d-sm-none"/>
    </div>
    <br></br>
    <div class="col-sm-8">
      <h2 id="about-h1">According to IBIS World, the fashion boutique industry makes up just 7% of the total fashion industry’s revenue.

</h2>
     
     {/* <img src={img3} ></img> */}
      <p id="about-h1">B2B customers are people, and like all people, they’re constantly on the lookout for new ways to simplify their lives. It’s not knowing about the new technology that your organization is using; it’s about making that new technology work seamlessly for them.</p>
      <br/><br/>
      <h2 id="about-h1">In 2021, despite pandemic challenges, the fashion boutique industry achieved a 1.8% growth rate.</h2>
      
        {/* <img src={img2}></img> */}
        <p id="about-h1">Illuminating the resilience and adaptability of the fashion boutique industry, this 1.8% growth rate in 2021, in the midst of pandemic pressures, emphasizes a truly remarkable story of perseverance. Shedding light on the narrative of triumph against odds, this figure offers a beacon of hope for boutique business owners, potential investors, and industry analysts alike.</p>
       </div>
  </div>
</div>
<br/><br/>
<div>

</div>
<Footer/>




    </>
  )
}

export default Customer