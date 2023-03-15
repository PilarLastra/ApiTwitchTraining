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

   console.log(stream);

   const replaceImageURL = () =>{

    const imageURL = stream.thumbnail_url.replace("{width}x{height}", "300x182"); 

    return(imageURL)

   }

 return(
  
<Card
   
    style={{ width: 300 }}
    cover={ 
      <img
        alt="example"
        src= {replaceImageURL()}
      />
    }
    actions={[

     <div className='in-live' ><p>EN VIVO</p></div>,
     <p id='viewers'><i className='fa-solid fa-user'></i> {stream.viewer_count} </p>
           
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

