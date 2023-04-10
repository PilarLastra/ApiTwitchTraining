import React from 'react';
import { Card, Layout } from 'antd';
import "./GameCard.scss"
import { IGames } from '../../../Interfaces/IGames';

const { Meta } = Card;

export const GameCard = ({games}:{games:IGames}) => {  
  
    const replaceImageURL = () =>{

        const imageURL = games.box_art_url.replace("{width}x{height}", "214x285"); 
        
        return(imageURL)
        
    }


    return(
        <Layout>
        <Card
            className='game-image'
            hoverable
            cover={<img alt="example" src={replaceImageURL()} />}
        >
           
        </Card>
        <div className='game-names'>
            <h1> {games.name} </h1>
        </div>
       
        </Layout>

    )
 
};