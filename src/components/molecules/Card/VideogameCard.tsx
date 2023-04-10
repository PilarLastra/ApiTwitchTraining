import React from 'react';
import { Avatar,Card } from 'antd';
import { IStream } from '../../../Interfaces/IStreams';
import "./VideogameCard.scss";
import { IUser } from '../../../Interfaces/IUser';



const { Meta } = Card;


export const VideogameCard = ({stream}:{stream:IStream}, {user}:{user:IUser}) => {  {/* El objeto q se recive va a tener como valor IStream */}



   const replaceImageURL = () =>{

    const imageURL = stream.thumbnail_url.replace("{width}x{height}", "300x182"); 

    return(imageURL)

   }

 return(
  
<Card
   
    style={{ width: 300 }}
    
    cover={ [ 
      <div className='in-live' >EN VIVO</div>,
      <img
      
        alt="example"
        src= {replaceImageURL()}
      />,
    
    ]}
    actions={[
      
      
    ]}
  >
    <Meta
       avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
      title= {stream.title}
      description={stream.user_name}
    />
  
  </Card>

 )

  
};  

