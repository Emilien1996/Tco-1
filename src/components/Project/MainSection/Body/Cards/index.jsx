


const Card = ({src,name,surname,info}) => {
  
 return   <>
        <div className="my-card">
            <div className="my-img-wrapper">
            <img src={src} alt="pic1" className="my-card-img"/>
            </div>
            <div className="my-card-circle">+</div>
            
            <p className="my-card-user"><span>{name}</span> <span>{surname}</span></p>
            <p className="my-card-info">{info}</p>
            
        </div>
    </>
}
export default Card