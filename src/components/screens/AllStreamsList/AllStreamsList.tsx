import React, { useState } from "react";
import { useGetStreems } from "../../../Hooks/useGetStreems/useGetStreems";
import { VideogameCard } from "../../molecules/Card/VideogameCard";
import { LoadingOutlined } from "@ant-design/icons";
import { SideMenu } from "../../organisms/SideMenu/SideMenu";
import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { StyleTitle } from "../../atoms/StyleTitle/StyleTitle";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useGetUserById } from "../../../Hooks/useGetUsersById/useGetUsersById";
import { NavBarButton } from "../../atoms/NavBarButton/NavBarButton";
import { useGetAllCategories } from "../../../Hooks/useGetAllCategories/useGetAllCategories";
import { GameCard } from "../../molecules/GameCard/GameCard";
import { useGetTopGames } from "../../../Hooks/useGetGames/useGetTopGames";
import "./AllStreamsList.scss";
import { CheckBox } from "../../atoms/CheckBox/CheckBox";
import { IStream } from "../../../Interfaces/IStreams";
import { IGameList } from "../../../Interfaces/IGameList";
import { IStreamList } from "../../../Interfaces/IStreamList";



export const AllStreamsScreen = () => {

    const {streamsData, isLoading} = useGetStreems();

    const [result, setResult] = useState<IStream[]>([]);
   
   
    
    const navigate = useNavigate();

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
  
    const handleOnChange = (list:any) => {
        
        let data: IStream[] = []
        
        if (!streamsData) {
            return [];
        }

        if(list){
        
            list.forEach((element: any) => {
                const arrayResult = streamsData.data.filter( e => (
                    e.tags.some(tag => tag === element)  
                ))
                
                data= [...data, ...arrayResult];  

               
            });
            setResult(data)
        }
    }

      

    const videoGameCardArray = () => {
        console.log(result);
            return(
                result.map((item: IStream,index: any)=> (
                    <VideogameCard stream={item} key={item.id}/>
                ))
             )
    }
       
    return(

        <Layout>
        <Sider  width={200} >
           
            <SideMenu />

        </Sider>
        <Layout>
            <div >
                <div id="title">
                    <StyleTitle title = "Explorar"/>
                </div>
              <div id="subTitles">
                <div>
                    <NavBarButton title="Categorias" callback = {()=>{navigate("/Categories")}} />
                </div>
                <div>
                    <NavBarButton title="Canales en Directo" callback = {()=>{navigate("/Streams")}}/>
                </div>
              </div>
              <div className="DropDown">
                <div >
                    <CheckBox handleOnChange = {handleOnChange} />
                </div>
               
               
              </div>
               
              </div>

                <Layout>
                        <Content 
                            style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                        
                    >
                        {/* Card de los juegos */}
                        <div className='cards'>
                            
                            {isLoading ? 
                            <LoadingOutlined /> : <div className='cards'> {videoGameCardArray()} </div> }
                        </div>
                    
                    
                    </Content>
                </Layout>

           
        </Layout>
        
      </Layout>
         

    )

}

function getGames(): { categoriesData: any; isLoading: any; } {
    throw new Error("Function not implemented.");
}
