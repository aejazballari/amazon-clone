import React from "react";
import styles from "./productcard.module.css";


const ThirdCardImages=[
 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg_LOWER_QL10_._SY116_CB423376243_.jpg",

 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_2_64e793dc_221d_4067_8fca_2f0338879977_jpg_LOWER_QL85_._SY116_CB423376243_.jpg" ,

 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_3_ccc0f761_ea08_4cfb_9562_6f13e80170d8_jpg_LOWER_QL30_._SY116_CB423376243_.jpg",

 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_4_bc4e9dc4_a3aa_4aae_93fd_9723dacd805f_jpg_LOWER_QL50_._SY116_CB423376243_.jpg",
]
const ProductCard=()=>{
    return(
    <div> 
      <div className={styles.firstrow}>
          {/* first rectangle */}
          <div className={styles.divone}>
              
              <h2 className={styles.head}>Amazon Brands & more</h2>

             <div className={styles.doubleimg}>
              <div className={styles.proimages}>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg"alt=""className={styles.imageInCard}/>
              <p className={styles.proinfo}>
              Home products
             </p>
             </div>
             <div className={styles.proimg}>
             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/Mixer_B07RYL7NSH_Asins_186x116._SY116_CB409842842_.jpg" className={styles.imageInCard}/>
             <p className={styles.proinfo}>
              Kitchen & dinning
              </p>
              </div>
              </div>

              <div className={styles.doubleimg}>
              <div className={styles.proimages}>
              
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg" alt=""      className={styles.imageInCard}/>
             <p className={styles.proinfo1}>
              Daily essentials
              </p></div>

              <div className={styles.proimages}>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg" alt=""className={styles.imageInCard}/>
             <p className={styles.proinfo}>
              Clothing essentials
             </p>
              <a className={styles.atage}>See more</a>
              </div>
              </div>
           </div>
       
            {/* second rectangle */}
           <div className={styles.div}>

              <h2 className={styles.head}>Revamp your home in style</h2>

               <div className={styles.doubleimg}>
               <div className={styles.proimages}>

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg_LOWER_QL10_._SY116_CB423376243_.jpg" alt=""className={styles.imageInCard}/>
                  <p className={styles.proinfo}>
                  Bedsheets,curtains & more
                  </p>
                 </div>
                <div className={styles.proimages}>

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_2_64e793dc_221d_4067_8fca_2f0338879977_jpg_LOWER_QL85_._SY116_CB423376243_.jpg" alt=""className={styles.imageInCard}/>
                  <p className={styles.proinfo}>Home decoration</p>
                </div>
            </div>
             
             <div className={styles.doubleimg}>
                 <div className={styles.proimages}>
                      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_3_ccc0f761_ea08_4cfb_9562_6f13e80170d8_jpg_LOWER_QL30_._SY116_CB423376243_.jpg" alt=""className={styles.imageInCard}/>
                      <p className={styles.proinfo}> Home storage</p>
                 </div>
                 <div className={styles.proimages}>
                     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_4_bc4e9dc4_a3aa_4aae_93fd_9723dacd805f_jpg_LOWER_QL50_._SY116_CB423376243_.jpg" alt=""className={styles.imageInCard}/>
                     <p className={styles.proinfo}>Lighting solutions</p>
                     <a className={styles.atag} >Explore all</a>
                   </div>
               </div>
           </div>
           {/* <div> third rectangle  */}
           <div className={styles.div3}>

              <h2 className={styles.head}>Pay your credit card bills on Amazon</h2>

             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg" alt="" className={styles.billimg}/>

              <a className={styles.pay}>Pay Now</a>
     
           
            </div>
            {/* fourth rectangle */}
        <div className={styles.updown}>
            <div className={styles.small}>
                <h3 className={styles.head}>Sign in for your best experience</h3>
                <button className={styles.but}>Sign in securely</button>

            </div>
            {/* fourt lower rectangle  */}
            <div>
                <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"alt="" className={styles.imagere}/>
            </div>
         </div>
          
        </div>

        {/* second Row starts */}
        <div className={styles.secrow}>
        <div className={styles.divtwo}>

              <h2 className={styles.head}>Upgrade your home</h2>

               <div className={styles.doubleimg}>
               <div className={styles.proimages}>

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B00OT9CS5S_186x116._SY116_CB417134289_.jpg" alt=""className={styles.imageInCard}/>
                  <p className={styles.proinfo}>
                  Washing machines & more
                  </p>
                 </div>
                <div className={styles.proimages}>

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B08345R1ZW_186x116._SY116_CB417134289_.jpg" alt=""className={styles.imageInCard}/>
                  <p className={styles.proinfo}>Kitchen appliances</p>
                </div>
              </div>
             
             <div className={styles.doubleimg}>
                 <div className={styles.proimages}>
                      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/WFH_186x116._SY116_CB417134289_.jpg" alt=""className={styles.imageInCard}/>
                      <p className={styles.proinfo}>WFH furniture</p>
                 </div>
                 <div className={styles.proimages}>
                     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B01N5KIHWN_186x116._SY116_CB417134288_.jpg" alt=""className={styles.imageInCard}/>
                     <p className={styles.proinfo}>Bestselling furniture</p>
                     <a className={styles.atag} >See more deals</a>
                   </div>
               </div>
           </div>

           {/* 2nd row 2nd rectsngle  */}

           <div className={styles.div22}>

              <h2 className={styles.head}>Style for Women | Up to 70% off</h2>

               <div className={styles.doubleimg}>
               <div className={styles.proimages}>

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg" alt=""className={styles.imageInCard}/>
                  <p className={styles.proinfo}>
                  Women's Clothing
                  </p>
                 </div>
                <div className={styles.proimages}>

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/2._SY116_CB413571277_.jpg" alt=""className={styles.imageInCard}/>
                  <p className={styles.proinfo}>Footwear+Handbags</p>
                </div>
              </div>
             
             <div className={styles.doubleimg}>
                 <div className={styles.proimages}>
                      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/5._SY116_CB413571277_.jpg" alt=""className={styles.imageInCard}/>
                      <p className={styles.proinfo}>Watches</p>
                 </div>
                 <div className={styles.proimages}>
                     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/3._SY116_CB413571277_.jpg" alt=""className={styles.imageInCard}/>
                     <p className={styles.proinfo}>Fashion jewellery</p>
                     <a className={styles.atag} >View all offers</a>
                   </div>
               </div>
           </div>
           {/* 2nd row 3rd rectangle starts  */}
           <div className={styles.div22}>

              <h2 className={styles.head}>Home essentials | Amazon Brands & more</h2>

               <div className={styles.doubleimg}>
               <div className={styles.proimages}>

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg" alt=""className={styles.imageInCard}/>
                  <p className={styles.proinfo2}>
                 Bedsheets, curtains&more
                  </p>
                 </div>
                <div className={styles.proimages}>

                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg" alt=""className={styles.imageInCard}/>
                  <p className={styles.proinfo}>Cloth organizers, boxes <br/> & baskets</p>
                </div>
              </div>
             
             <div className={styles.doubleimg}>
                 <div className={styles.proimages}>
                      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg" alt=""className={styles.imageInCard}/>
                      <p className={styles.proinfo}>Wall stickers & clocks</p>
                 </div>
                 <div className={styles.proimages}>
                     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" alt=""className={styles.imageInCard}/>
                     <p className={styles.proinfo}>Smart bulbs & strings</p>
                     <a className={styles.atag} >See more</a>
                   </div>
               </div>
           </div>

           {/* 2nd row 4th rectangle started  */}
           <div className={styles.div22}>

              <h2 className={styles.head}>Up to 40% off | Fab Phones Fest</h2>

             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Georache/Feb/FPF/MSO/D21045020_GW_MSO_Graphics_FPFFeb_379X304_1._SY304_CB660355884_.jpg" alt="" className={styles.billimg}/>

              <a className={styles.pay}>See all deals</a>
              </div>
        </div>
    </div>
       
       );
}


export default ProductCard ;