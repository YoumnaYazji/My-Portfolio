"use client";


import Image from "next/image";
import myphoto from '../../public/youmna.png'


const Footer =() =>{
return(
    <>
    <div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ border: '2px solid #88ff99', borderRadius: '50px',marginLeft:'30px' }}>
    <Image
      src={myphoto}
      alt=""
      width={75}
      height={200}
    />
  </div>
  <h1 className="text-white/60 mt-4" style={{ marginLeft: '30px',marginBottom:'30px' }}>
    © 2024. All rights reserved by Youmna Yazji
  </h1>
</div>
    </div>
    </>
)
}

export default Footer;