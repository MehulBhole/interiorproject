import IconFix from "../assets/iconfix.svg"
import "./Cards.css";


const Cards=({cardData })=>{

    return(
        <div className="card">
            <div className="headerSection">
           <img className="card-icon" src={cardData.icon}>
             
           </img>
           <div className="card-header">
           {cardData.cardHeader}
           </div>
           </div>
          
           <div className="card-text">
                {cardData.cardContent && cardData.cardContent.length > 0 ? (
                    <ul>
                        {cardData.cardContent.map((item, index) => (
                            <li key={index}>{item.text}</li> // Render each text item in a list
                        ))}
                    </ul>
                ) : null}
            </div>
           </div>
       
    )

}
export default Cards; 