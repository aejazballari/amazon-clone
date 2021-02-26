import React from "react";
import styles from "./ProductPage.module.css";



const ProductPage=()=>{
    return(
    <div>
       
           <div className={styles.smallline}>
                <a>Furniture›</a>
                <a>Living Room Furniture›</a>
                <a>Wall Shelves›</a>
                <a>Ss Arts Engineered Wood Wall Mount WiFi Router Stand/Rack</a>
           </div>
           <div className={styles.overall}>
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
             <img src="https://images-na.ssl-images-amazon.com/images/I/51zyIctEERL._SX679_.jpg"alt="" className={styles.heroimg}/>
             
           </div>

           <div className={styles.thrddiv}>
               <h4 className={styles.title}>Ss Arts Engineered Wood Wall Mount WiFi Router
               Stand/Rack </h4>
               <a className={styles.brand}>Brand: SS ARTS</a>
               <hr></hr>
              <div className={styles.rates}>
             <div className={styles.fir}>
               <p className={styles.mamuli}>M.R.P.:</p>
               <p className={styles.squash}>	₹ 1,499.00</p>
               </div>
               <div className={styles.dealprices}>
               <p className={styles.mamuli}>Deal Price:</p>
               <p className={styles.bigred}>₹ 790.00</p>
               </div>
               <div className={styles.fir}>
               <p className={styles.mamuli}>You Save:</p>
               <p className={styles.red}>₹ 790.00 (47%)</p>
               </div>
              
               <p className={styles.inc}>	Inclusive of all taxes</p>
               <div className={styles.fir1}>
               <p className={styles.mamulifree}>FREE delivery:</p>
               <p className={styles.mamu}>Monday, March 1</p>
               <a className={styles.a}>Details</a>
               </div>
               </div>

           </div>
           <div>
               <div className={styles.fir}>
               {/* <a  className="ab">Share</a> */}

               
               </div>
               <div className={styles.border}>
                   <div className={styles.quality}>
                       <form>
                           <label className={styles.gap}>Quality</label>
                           <select className={styles.sel}>
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
                   <div className={styles.below}>
                   <button className={styles.
                   addbut}>Add to Cart</button>
                   <button className={styles.buybut}>Buy Now</button>

                   <a className={styles.sec}>Secure transaction </a>
                   <hr/>
                   <a className={styles.sec}>Select delivery location</a>
                   <hr/>
                   <button className={styles.lstbut}>Add to Wish List</button>
                   </div>
               </div>
               <div className={styles.smalbord}>
                   <p className={styles.
                   mamu}>New (2) from</p>
                   <div className={styles.fir2}>
                    <p className={styles.red}>₹ 790.00</p> 
                        <p className={styles.dot}>FREE Delivery.</p>
                        </div>
               </div>
           </div>
           
       </div>
       </div>
    )
}
export default ProductPage