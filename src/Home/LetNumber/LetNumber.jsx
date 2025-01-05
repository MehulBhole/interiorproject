import "./LetNumber.css";
const data={
   title:"Let our numbers do the talking!",
   subtitle1:"Live Count",
   subtitle1count:"1111  +",
   subtitle2:"Satisfied Customers",
   subtitle2count:"222  +",

}
const LetNumber=({letNumberData = data})=>{
return(
    <div className="LetNumber_container">
       <div className="letnum-title">
{letNumberData.title}
       </div>
       <div className="subtitle">
        <div>
        <div className="subtitle-text">{letNumberData.subtitle1}</div>
        <div className="subtitle-subcount">{letNumberData.subtitle1count}</div>
        </div>
      <div>
        <div className="subtitle-text">{letNumberData.subtitle2}</div>
        <div className="subtitle-subcount">{letNumberData.subtitle2count}</div>
        </div>
       </div>
    </div>
)
}
export default LetNumber;