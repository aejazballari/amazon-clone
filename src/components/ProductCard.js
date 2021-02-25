import React from "react";
import "./productcard.css";


const ThirdCardImages=[
 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg_LOWER_QL10_._SY116_CB423376243_.jpg",

 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_2_64e793dc_221d_4067_8fca_2f0338879977_jpg_LOWER_QL85_._SY116_CB423376243_.jpg" ,

 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_3_ccc0f761_ea08_4cfb_9562_6f13e80170d8_jpg_LOWER_QL30_._SY116_CB423376243_.jpg",

 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_4_bc4e9dc4_a3aa_4aae_93fd_9723dacd805f_jpg_LOWER_QL50_._SY116_CB423376243_.jpg",
]
const ProductCard=()=>{
    return(
    <div>

      <div className="firstrow">
          {/* first rectangle */}
          <div className="divone">
              
              <h2 className="head">Amazon Brands & more</h2>

             <div className="doubleimg">
              <div className="proimages">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg"alt=""className="imageInCard"/>
              <p className="proinfo">
              Home products
             </p>
             </div>
             <div className="proimg">
             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/Mixer_B07RYL7NSH_Asins_186x116._SY116_CB409842842_.jpg" className="imageInCard"/>
             <p className="proinfo">
              Kitchen & dinning
              </p>
              </div>
              </div>

              <div className="doubleimg">
              <div className="proimages">
              
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg" alt=""      className="imageInCard"/>
             <p className="proinfo1">
              Daily essentials
              </p></div>

              <div className="proimages">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg" alt=""className="imageInCard"/>
             <p className="proinfo">
              Clothing essentials
             </p>
              <a className="atage">See more</a>
              </div>
              </div>
           </div>
       
            {/* second rectangle */}
           <div className="div">

              <h2 className="head">Revamp your home in style</h2>

               <div className="doubleimg">
               <div className="proimages">

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg_LOWER_QL10_._SY116_CB423376243_.jpg" alt=""className="imageInCard"/>
                  <p className="proinfo">
                  Bedsheets,curtains & more
                  </p>
                 </div>
                <div className="proimages">

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_2_64e793dc_221d_4067_8fca_2f0338879977_jpg_LOWER_QL85_._SY116_CB423376243_.jpg" alt=""className="imageInCard"/>
                  <p className="proinfo">Home decoration</p>
                </div>
            </div>
             
             <div className="doubleimg">
                 <div className="proimages">
                      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_3_ccc0f761_ea08_4cfb_9562_6f13e80170d8_jpg_LOWER_QL30_._SY116_CB423376243_.jpg" alt=""className="imageInCard"/>
                      <p className="proinfo"> Home storage</p>
                 </div>
                 <div className="proimages">
                     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_4_bc4e9dc4_a3aa_4aae_93fd_9723dacd805f_jpg_LOWER_QL50_._SY116_CB423376243_.jpg" alt=""className="imageInCard"/>
                     <p className="proinfo">Lighting solutions</p>
                     <a className="atag" >Explore all</a>
                   </div>
               </div>
           </div>
           {/* <div> third rectangle  */}
           <div className="div3">

              <h2 className="head">Pay your credit card bills on Amazon</h2>

             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg" alt="" className="billimg"/>

              <a className="pay">Pay Now</a>
     
           
            </div>
            {/* fourth rectangle */}
        <div className="updown">
            <div className="small">
                <h3 className="head">Sign in for your best experience</h3>
                <button className="but">Sign in securely</button>

            </div>
            {/* fourt lower rectangle  */}
            <div>
                <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"alt="" className="imagere"/>
            </div>
         </div>
          
        </div>

        {/* second Row starts */}
        <div className="secrow">
        <div className="divtwo">

              <h2 className="head">Upgrade your home</h2>

               <div className="doubleimg">
               <div className="proimages">

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B00OT9CS5S_186x116._SY116_CB417134289_.jpg" alt=""className="imageInCard"/>
                  <p className="proinfo">
                  Washing machines & more
                  </p>
                 </div>
                <div className="proimages">

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B08345R1ZW_186x116._SY116_CB417134289_.jpg" alt=""className="imageInCard"/>
                  <p className="proinfo">Kitchen appliances</p>
                </div>
              </div>
             
             <div className="doubleimg">
                 <div className="proimages">
                      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/WFH_186x116._SY116_CB417134289_.jpg" alt=""className="imageInCard"/>
                      <p className="proinfo">WFH furniture</p>
                 </div>
                 <div className="proimages">
                     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B01N5KIHWN_186x116._SY116_CB417134288_.jpg" alt=""className="imageInCard"/>
                     <p className="proinfo">Bestselling furniture</p>
                     <a className="atag" >See more deals</a>
                   </div>
               </div>
           </div>

           {/* 2nd row 2nd rectsngle  */}

           <div className="div22">

              <h2 className="head">Style for Women | Up to 70% off</h2>

               <div className="doubleimg">
               <div className="proimages">

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg" alt=""className="imageInCard"/>
                  <p className="proinfo">
                  Women's Clothing
                  </p>
                 </div>
                <div className="proimages">

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/2._SY116_CB413571277_.jpg" alt=""className="imageInCard"/>
                  <p className="proinfo">Footwear+Handbags</p>
                </div>
              </div>
             
             <div className="doubleimg">
                 <div className="proimages">
                      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/5._SY116_CB413571277_.jpg" alt=""className="imageInCard"/>
                      <p className="proinfo">Watches</p>
                 </div>
                 <div className="proimages">
                     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/3._SY116_CB413571277_.jpg" alt=""className="imageInCard"/>
                     <p className="proinfo">Fashion jewellery</p>
                     <a className="atag" >View all offers</a>
                   </div>
               </div>
           </div>
           {/* 2nd row 3rd rectangle starts  */}
           <div className="div22">

              <h2 className="head">Home essentials | Amazon Brands & more</h2>

               <div className="doubleimg">
               <div className="proimages">

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg" alt=""className="imageInCard"/>
                  <p className="proinfo">
                 Bedsheets, curtains&more
                  </p>
                 </div>
                <div className="proimages">

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg" alt=""className="imageInCard"/>
                  <p className="proinfo">Cloth organizers, boxes <br/> & baskets</p>
                </div>
              </div>
             
             <div className="doubleimg">
                 <div className="proimages">
                      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg" alt=""className="imageInCard"/>
                      <p className="proinfo">Wall stickers & clocks</p>
                 </div>
                 <div className="proimages">
                     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""className="imageInCard"/>
                     <p className="proinfo">Smart bulbs & strings</p>
                     <a className="atag" >See more</a>
                   </div>
               </div>
           </div>

           {/* 2nd row 4th rectangle started  */}
           <div className="div22">

              <h2 className="head">Up to 40% off | Fab Phones Fest</h2>

             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Georache/Feb/FPF/MSO/D21045020_GW_MSO_Graphics_FPFFeb_379X304_1._SY304_CB660355884_.jpg" alt="" className="billimg"/>

              <a className="pay">See all deals</a>
              </div>
        </div>
    </div>
       
       );
}


export default ProductCard ;