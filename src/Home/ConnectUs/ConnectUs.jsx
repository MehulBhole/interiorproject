import { useState } from "react";
import "./ConnectUs.css";

const contactUsData={
    title:"Connect With Us",
    subtitle:"Reach out on WhatsApp or give us a call for the best home design experience.",
    callus:"Call Now",
    whatsapp:"Whatsapp",
    mobileNumber:"+911111111"

}

const ConnectUs = ({connectData = contactUsData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const[copied,setCopied] = useState(false);

  const handleCopy = () => {
      navigator.clipboard.writeText(contactUsData.mobileNumber);
      setCopied(true);
  };
    return (
        <div className="connectUs-container">
         <div className="title-connectus">
       {contactUsData.title}
         </div>
         <div className="subtitle-connectus">
       {contactUsData.subtitle}
         </div>

         <div className="callWhatsapp-btn">
               <button className="callwhat-common-btn"
                onClick={() => {setShowPopup(true); setCopied(false);} }>
                <div >  {contactUsData.callus}</div>
             
               </button>
               <button className="callwhat-common-btn"
               onClick={() => {
                window.open("https://wa.me/919112285408", "_blank");
            }}>
               
               <div >{contactUsData.whatsapp}</div>
               </button>
         </div>
         {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Contact Number</h3>
                        <p>{contactUsData.mobileNumber}</p>
                        <button onClick={handleCopy} className="copy-btn">
                            Copy Number
                        </button>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="close-btn"
                        >
                            Close
                        </button>
                        {copied && (
    <div className="copied-message">
        Copied
    </div>
)}
                    </div>
                </div>
            )}
        </div>
    );

}
export default ConnectUs;