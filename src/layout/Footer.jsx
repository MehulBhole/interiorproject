import "./Footer.css";

const data={
   title:"© 2025 Interio.com All Rights Reserved.",
   content:"¹For full scope, please visit, www.livspace.com/in/service | ²For kitchen, wardrobes and storage | ³In comparison with a branded player and for exact scope | ⁴Booking amount is 5% of the final quote or Rs.25000, whichever is higher interior designers in Pune interior designer near me best interior designers in Pune interior designers in bangalore interior design bangalore interior designer near me best interior designers in mumbai interior designer near me interior designer mumbai interior design mumbai interior designers in hyderabad best interior designers in Hyderabad interior designer near me interior designer Hyderabad interior designers in chennai interiors in chennai interior decorators in chennai best interior designers in chennai interior designers in noida interior designer near me interior decorator near me best interior designers in noida best interior designers in kolkata interior company in Kolkata home interiors Kolkata best interior designers in Kolkata interior designers in gurgaon interior designer near me home interior design interior design near me"
}

const Footer=({footerData=data})=>{
    return(
        <div  className="footer-container">
           <div className="footer-title">
            {footerData.title}
           </div>
           <div className="footer-content">
            {footerData.content}
           </div>
        </div>
    )
};

export default Footer;