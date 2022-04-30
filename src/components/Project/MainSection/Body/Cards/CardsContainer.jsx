import "./styles.css"
import Card from "."
import { cardData } from "./card-data"

const CardsContainer = () => {
    return <div className="my-card-wrapper">
    {cardData.map((data)=> {

   return  (
       
      <Card key={data.id} {...data}/>
       
    
   )
    })}
    </div>
    
}
export default CardsContainer