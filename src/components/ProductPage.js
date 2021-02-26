import React from "react";
import "./ProductPage.css";



const ProductPage=()=>{
    return(
    <div>
       
           <div className="smallline">
                <a>Furniture›</a>
                <a>Living Room Furniture›</a>
                <a>Wall Shelves›</a>
                <a>Ss Arts Engineered Wood Wall Mount WiFi Router Stand/Rack</a>
           </div>
           <div className="overall">
           {/* 3 div starts here */}
           <div>
              {/* <div className="butimg">
                  <button className="chotaimg"><img src="https://images-na.ssl-images-amazon.com/images/I/416wNR6LqcL._SS40_.jpg" alt="" /></button>
             

                  <button className="chotaimg"><img src="https://images-na.ssl-images-amazon.com/images/I/31NPqWLaNSL._SS40_.jpg" alt="" /></button>
             

                 <button className="chotaimg"><img src="https://images-na.ssl-images-amazon.com/images/I/41vhyZaCPaL._SS40_.jpg" alt="" /></button>
             
                 <button className="chotaimg"><img src="https://images-na.ssl-images-amazon.com/images/I/51pTUSZtsML._SS40_.jpg" alt="" /></button> 
                </div> */}
            </div>
           <div>
             <img src="https://images-na.ssl-images-amazon.com/images/I/51zyIctEERL._SX679_.jpg"alt="" className="heroimg"/>
             
           </div>

           <div className="thrddiv">
               <h4 className="title">Ss Arts Engineered Wood Wall Mount WiFi Router
               Stand/Rack </h4>
               <a className="brand">Brand: SS ARTS</a>
               <hr></hr>
              <div className="rates">
             <div className="fir">
               <p className="mamuli">M.R.P.:</p>
               <p className="squash">	₹ 1,499.00</p>
               </div>
               <div className="dealprices">
               <p className="mamuli">Deal Price:</p>
               <p className="bigred">₹ 790.00</p>
               </div>
               <div className="fir">
               <p className="mamuli">You Save:</p>
               <p className="red">₹ 790.00 (47%)</p>
               </div>
              
               <p className="inc">	Inclusive of all taxes</p>
               <div className="fir1">
               <p className="mamulifree">FREE delivery:</p>
               <p className="mamu">Monday, March 1</p>
               <a className="a">Details</a>
               </div>
               </div>

           </div>
           <div>
               <div className="fir">
               {/* <a  className="ab">Share</a> */}

               
               </div>
               <div className="border">
                   <div className="quality">
                       <form>
                           <label className="gap">Quality</label>
                           <select className="sel">
                               <option>1</option>
                               <option>2</option>
                               <option>3</option>
                               <option>4</option>
                               <option>5</option>
                               <option>6</option>
                               <option>7</option>
                               <option>8</option>
                               <option>9</option>
                               <option>10</option>
                               <option>11</option>
                               <option>12</option>
                               <option>13</option>
                               <option>14</option>
                           </select>
                       </form>
                   </div>
                   <div className="below">
                   <button className="
                   addbut">Add to Cart</button>
                   <button className="buybut">Buy Now</button>

                   <a className="sec">Secure transaction </a>
                   <hr/>
                   <a className="sec">Select delivery location</a>
                   <hr/>
                   <button className="lstbut">Add to Wish List</button>
                   </div>
               </div>
               <div className="smalbord">
                   <p className="
                   mamu">New (2) from</p>
                   <div className="fir2">
                    <p className="red">₹ 790.00</p> 
                        <p className="dot">FREE Delivery.</p>
                        </div>
               </div>
           </div>
           
       </div>
       </div>
    )
}
export default ProductPage