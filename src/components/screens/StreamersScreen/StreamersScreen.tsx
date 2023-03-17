
import React from "react";
import { useGetStreems } from "../../../Hooks/useGetStreems/useGetStreems";
import { VideogameCard } from "../../molecules/Card/VideogameCard";
import { LoadingOutlined } from "@ant-design/icons";
import { dividerClasses } from "@mui/material";



export const StreemScreen = () => {

    const {streamsData, isLoading} = useGetStreems();

    const videoGameCardArray = () => {

        return(
            streamsData!.data.map((item, index) => ( 
            
                  <VideogameCard stream={item}/>
              
            ))
          )
    }
       
    
    return(

        <div>
            {isLoading ? 
            <LoadingOutlined /> : <div className='cards'> {videoGameCardArray()} </div> }
        </div>

    )









}