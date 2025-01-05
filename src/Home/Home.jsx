import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import BannerImg from "./Banner/assets/bannerimg.svg"
import BannerImgMobile from "./Banner/assets/bannerimgmobile.svg"
import ConnectUs from "./ConnectUs/ConnectUs";
import DesignYou from "./DesignYou/DesignYou";
import LetNumber from "./LetNumber/LetNumber";
import WeOffer from "./WeOffer/WeOffer";

const BannerData = 
{
     image:BannerImg,
     text:"Bring home beautiful interior that fits \n in your budget"
 }

 const BannerDataMobile = 
{
     image:BannerImgMobile,
     text:"Bring home beautiful interior that fits \n in your budget"
 }


const DesignYouData={
    header:" The home design you crave",
    text:"When you give your home the Livspace touch, you get both beauty and functionality. We employ state-of-the-art technology to ensure your home features a flawless look that lasts a very long time"
}
const Home = ()=>{
    const[bannerdata,setBannerData] = useState(window.innerWidth <= 800 ? BannerDataMobile : BannerData);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                console.log("here");
                console.log(window.innerWidth);
                setBannerData(BannerDataMobile);
            } else {
                console.log("here");
                console.log(window.innerWidth);
                setBannerData(BannerData);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 

    return(
    <>
    <Banner data={bannerdata} ></Banner>
    <DesignYou data={DesignYouData}></DesignYou>
    <LetNumber></LetNumber>
    <WeOffer></WeOffer>
    <ConnectUs></ConnectUs>
    </>
    )
}
export default Home;