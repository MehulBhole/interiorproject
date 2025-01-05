import "./DesignYou.css";

const DesignYou = ({data}) => {

    return(
        <>
        <div className="designYou_container">
            <div className="designYou_header">
                {data.header}
            </div>
            <div className="designYou_text">
                {data.text}
            </div>
        </div>
        </>
    );
}

export default DesignYou;