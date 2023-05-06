import React, { useState } from 'react';
import { Avatar,Card } from 'antd';
import { IStream } from '../../../Interfaces/IStreams';
import "./VideogameCard.scss";
import { IUser } from '../../../Interfaces/IUser';
import { useGetUserById } from '../../../Hooks/useGetUsersById/useGetUsersById';



const { Meta } = Card;


export const VideogameCard = ({stream}:{stream:IStream}) => {  {/* El objeto q se recive va a tener como valor IStream */}

 
  const {userData, isLoadingUser} = useGetUserById({id: stream.user_id});
  
 
 
  
  const usersProfileImageArray = () => {
    

    if(userData && userData?.data.length > 0){

        return  replaceImageURL(userData?.data[0].profile_image_url, "40x40") 

    }else{
      return ""
    }

    }

    

   const replaceImageURL = (image:string ,size:string) =>{

    const imageURL = image.replace("{width}x{height}", size); 

    return(imageURL)

   }

 

 return(
  
<Card
   
    style={{ width: 300 }}
    
    cover={ [ 
      <div className='in-live' >EN VIVO</div>,
      <img
      
        alt="example"
        src= {replaceImageURL(stream.thumbnail_url, "300x182")}
      />,
    
    ]}
    actions={[
      
      
    ]}
  >
    <Meta
       avatar={<Avatar src={usersProfileImageArray()} />}
      title= {stream.title}
      
    />
    <div className='card'>
     
      <div> {stream.user_name} </div>
      <div> {stream.game_name} </div>
    </div>

    <div className="tagDiv">
      {stream && stream.tags && stream.tags.slice(0, 2).map((item, id) => (
          <div className= "tags" key={id}> {item} </div>
        ))}
    </div>
    
  
  </Card>

 )

  
};  

