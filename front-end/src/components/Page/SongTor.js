import React from "react"
import { useState } from "react";
import {Link} from "react-router-dom";
import './style/SongTor.css';
import Data_Accordion from "./Data_SongTor/Data_Accordion";
import SingleContent from "./Data_SongTor/SingleContent";


const SongTor=()=>{ 
    const [Content,setContent]=useState(Data_Accordion); 
return(
    <div className="container-sellbook">
        <h1 className="header-welcome">ยินดีต้อนรับสู่ SongTor</h1>
        {/* Accordion drop-down show info */} 
        <div className="accordion-container">
            <div className="accordion-container-box">
                <h1>ทำความรู้จักกับ SongTor...</h1>
                <section>
                    {Content.map((Data_Accordion)=>{
                        return <SingleContent key={Data_Accordion.id} {...Data_Accordion}/>
                    })}
                </section>
            </div>
        </div>
        {/* banner middle link to sell page */}
        <div className="banner-mid">
            <div className="banner-mid-welcome">
                <h1>สวัสดีคุณ User0001</h1>
            </div>
            <div className="banner-mid-GetStart">
                <Link to="/sell-book-post">เริ่มต้นใช้งาน</Link> 
            </div>
        </div>
        {/* <div>
            <h1>Footer Component</h1>
        </div> */}
    </div>
    )
}
export default SongTor  