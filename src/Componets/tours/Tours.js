import  toursdata from "../../data/db.json";
import Tour from "./tour/Tour";
function Tours(){
    
    return(
<div>
        <Tour data={toursdata}/>
</div>
    );
}

export default Tours;