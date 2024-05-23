import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import color1 from "./img/imgrow5.webp"
import color2 from "./img/test1.jpeg"
import color3 from "./img/styles6.avif"
import specific1 from"./img/about1.webp";
import specific2 from "./img/about.webp";
import specific3 from "./img/imgrow4.jpg" ;
import specific4 from "./img/text2.avif";
import store from "./img/sun.avif"
import "./about.css"
import Footer from './footer'
import logo from "./img/logo1.png"
import Metadata from './metadata'
import List from './list';




function About() {
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
<div class="d-flex justify-content-around w-100 p-2" >
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
      
<br></br>
</div>

 
 <div class="container-fluid  bg-white" id="color1">
  <div class="row">
  <div class="container"><br></br>
    <img src={store} width="100%"  ></img>
  </div><br/><br/><br/>
    <div class="col-sm-4"><br></br>
    <h1 id="about-h1">Latest Products</h1>

      <div class="fakeimg">
      <img src={color1} class="d-block w-100" alt="..." height={300}></img>
      </div><br></br>
      <h5 id="about-h1"><em>Among India’s most-loved online fashion store featuring new products every day!




Fashion has always been about making your own choices and self-expression.


</em>
</h5>
     
      <h1>Our Store</h1>
      <img src={color2} class="d-block w-100" alt="..." height={300}></img>
      
      <hr class="d-sm-none"></hr>
    </div>
    <div class="col-sm-8"><br></br>
      <h1 id="about-h1">Design elements</h1>
      <div class="fakeimg">
      <img src={color3} class="d-block w-100" alt="..." height={300}></img>
      </div>
      <br></br>
      <h4 id="about-h1">VIKA Boutique is an exclusive online platform offering a range of finest of Indian Products which includes Handwoven Silk and Cotton Sarees - Kanjivarams, Benerasis, Handloom cottons, Ikats, linens, Khadis, Tussars, Kalamkari, Block Printed, and more. We aims to revolutionize fashion with an Indian soul all over the world and provide young Indian women lifestyle pieces at addictive prices and unbeatable quality, swamping their wardrobes with an envious selection.

VIKA offers the fashion conscious Indian woman, trends straight off the runway at prices they just cannot pass, and more importantly, stands to spread a feeling of happiness in all its customers! We aims to cater the best and provide the best price which does not pinch your pockets. That's why we proudly say VIKA is by YOU and for YOU. </h4>
      <br></br>
    </div>
  </div>
</div>

<div  class="container-fluid jumbotron text-center bg-white">
  <h1 id="about-h1">FEATURED PRODUCTS</h1> 
</div>
<div class="container-fluid bg-white text-center" >
  <p id="about-h1"><em>Discover Aham Designer Boutique – a manifestation of Dinu Elizabeth Roy's incredible journey. From her days as a cabin crew member at Air India Express, Dinu has emerged as a dedicated fashion entrepreneur and designer. Fueled by an unwavering passion for fashion, Dinu and her Aham team are on a mission to empower the women, helping them embrace contentment and confidence through exquisite apparel.</em></p>
 <br/><div class="row">
    <div class="col-sm-4"  id="about-discover">
      <p class="text-center" id="about-h1"><strong>SHOP SAREES

</strong></p>
      <a href="#demo" data-toggle="collapse">
        <img src={specific1} class="img-circle person" alt="Random Name" width="255" height="255"></img>
      </a>

    </div>
    <div class="col-sm-4"  id="about-discover">
      <p class="text-center" id="about-h1"><strong>SHOP KURTA</strong></p>
      <a href="#demo2" data-toggle="collapse">
        <img src={specific2} class="img-circle person" alt="Random Name" width="255" height="255"></img>
      </a>
      <div id="demo2" class="collapse">
        <p>Drummer</p>
        <p>Loves drummin'</p>
        <p>Member since 1988</p>
      </div>
    </div>
    <div class="col-sm-4"  id="about-discover">
      <p class="text-center" id="about-h1"><strong>SHOP MAXI</strong></p>
      <a href="#demo3" data-toggle="collapse">
        <img src={specific3} class="img-circle person" alt="Random Name" width="255" height="255"></img>
      </a>
      <div id="demo3" class="collapse">
        <p>Bass player</p>
        <p>Loves math</p>
        <p>Member since 2005</p>
      </div>
    </div>
  </div>
  <br/><br/>
</div>


<div class="container-fluid bg-white" id="world">
  <div class="row">
    <div class="col-sm-4" >
    <img src={specific4} class="d-block w-100" alt="..." height={300}></img>
    </div>
    <div class="col-sm-8" >
      <h1 id="about-h1">Our Values</h1><br></br>
      <h2 id="about-h1"><em>Among India’s most-loved online fashion store featuring new products every day!




Fashion has always been about making your own choices and self-expression.</em></h2>
       </div>
      
  </div>
  <br/><br/><br/>
</div>


<Footer/>
 </>
  )
}

export default About