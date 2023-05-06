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
import "./AllCategoriesScreen.scss";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { IGameList } from "../../../Interfaces/IGameList";
import { IGames } from "../../../Interfaces/IGames";

{/*gamedata.data.map se tiene q cambiar x result.map*/}
export const AllCategoriesScreen = () => {

    const {gamesData, isLoading} = useGetTopGames();
    const [result, setResult] = useState <any | null>(null);
    let result2:any = [];
   
    
    const navigate = useNavigate();

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    

      const handleSearch = (search:any) => {

      
        if(!search){

            setResult(gamesData?.data);

        }else{

            setResult( gamesData?.data.filter( (dato) => dato.name.toLowerCase().includes(search.toLowerCase())))

        }
        console.log(result);
        
      }


    const videoGameCardArray = () => {
            if(!result){
                return gamesData?.data.map((item: IGames, index: any) => (  
              
            
                       <GameCard games={item} key = {index} />
                   )
              )
            }else{
                console.log("hola",result)
                return result.map((item: IGames, index: any) => <GameCard games={item}/>)
            }
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

              <div className="search">
                <SearchBar handleSearch = {handleSearch} />
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
                            
                            {isLoading && <LoadingOutlined /> }
                             {!isLoading && <div className='cards'> {videoGameCardArray()} </div> }
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
