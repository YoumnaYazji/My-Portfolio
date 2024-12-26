import Link from "next/link"
import { FaFacebook,FaLinkedin,FaInstagram,FaWhatsapp}  from 'react-icons/fa'
const social=[
    {icon:<FaFacebook/>,path:'https://www.facebook.com/youmna.yazji.1?mibextid=ZbWKwL'},
    {icon:<FaLinkedin/>,path:'https://www.linkedin.com/in/youmna-yazji-9a654619a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {icon:<FaWhatsapp/>,path:'https://wa.me/+963968569238?text=Hello%20from%20my%20website'},
    {icon:<FaInstagram/>,path:'https://www.instagram.com/youmnayazji/profilecard/?igsh=MXhoZ2wxeTNvaGRjdQ=='},

]
const Social = ({containerStyles,iconStyles}) =>{
    return (
        <>
        <div className={containerStyles}>
         {social.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
         })}
        </div>
        </>
    )
}

export default Social