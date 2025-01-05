import Cards from "./Cards/Cards";
import "./WeOffer.css";
import IconFix from "./assets/iconfix.svg"

const cardData=[
     {
        icon:IconFix,
        cardHeader:"Our Services",
        cardContent:[
            {text:"Modular kitchen"},
            {text:"Modular Wardrobes"},
            {text:"Lighting"},
            {text:"Flooring"},
            {text:"Electical Work"}
        ]

    },
    {
        icon:IconFix,
        cardHeader:"Our Services",
        cardContent:[
            {text:"Modular kitchen"},
            {text:"Modular Wardrobes"},
            {text:"Lighting"},
            {text:"Flooring"},
            {text:"Electical Work"}
        ]

    },{
        icon:IconFix,
        cardHeader:"Our Services",
        cardContent:[
            {text:"Modular kitchen"},
            {text:"Modular Wardrobes"},
            {text:"Lighting"},
            {text:"Flooring"},
            {text:"Electical Work"}
        ]

    },

]

const WeOffer=()=>{
return(
    <div className="offer_container">
   <div className="offer_header">
   What We Offer
   </div>
   <div className="cards-container">
                {cardData.map((data, index) => (
                    <Cards key={index} cardData={data} /> 
                ))}
            </div>

    </div>
);

}
export default WeOffer;