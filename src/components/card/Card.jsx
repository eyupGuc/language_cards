import {languages} from '../helper/data';
import './Card.css';

const Card=(data)=>{
    console.log(data);
    const{name,img,options}=data;
    return (<div className='card'>
        {languages.map((item,index)=>{
            // console.log(item.name)
         return(<h1>{item.name}</h1>)


        })}

    </div>)
}

export default Card;