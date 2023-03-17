import React from 'react';
import { CrownFilled, EditOutlined,EllipsisOutlined,EyeOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar,Card } from 'antd';
import {useState, useEffect} from "react";
import Twitch, { getToken } from 'simple-twitch-api';
import { ApiClient, CLIENT_ID, CLIENT_SECRET, SCOPES } from "../../../services/apiService";
import { IStream } from '../../../Interfaces/IStreams';
import "./VideogameCard.scss";
import { ViewerCount } from '../../atoms/ViwersCount/ViwersCount';


const { Meta } = Card;

export const VideogameCard = ({stream}:{stream:IStream}) => {  {/* El objeto q se recive va a tener como valor IStream */}



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

