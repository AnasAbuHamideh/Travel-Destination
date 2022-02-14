import  toursdata from "../../data/db.json";

function Tours(props){
    console.log(props);
    return(
<>
        {
            props.data.map(tour=>{
                return(
                    <>
                    <h1>Name: {tour.name}</h1>
                    <img src={tour.image}/>
                    </>
                )
            })
        }
          
</>
    );
}

export default Tours;