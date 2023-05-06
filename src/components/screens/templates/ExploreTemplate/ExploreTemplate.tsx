import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { SideMenu } from "../../../organisms/SideMenu/SideMenu";
import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { StyleTitle } from "../../../atoms/StyleTitle/StyleTitle";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./ExploreTemplate.scss";
import { GameCard } from "../../../molecules/GameCard/GameCard";
import { useGetTopGames } from "../../../../Hooks/useGetGames/useGetTopGames";
import { Spinning } from "../../../atoms/Spining/Spinning";
import { motion } from "framer-motion";
import { HomeSliderCategoriesScreen } from "../../HomeSlideCategoriesScreen/HomeSlideCategoriesScreen";
import { HomeSlideStreamByGameScreen } from "../../HomeSlideStreamByGameScreen/HomeSlideStreamByGameScreen";
import { NavBarButton } from "../../../atoms/NavBarButton/NavBarButton";


export const ExploreTemplate = (props:any) => {


    const {gamesData, isLoading} = useGetTopGames();
    const navigate = useNavigate();

    const StreamCategoriesCardArray = () => {

      return(
        gamesData!.data.map((item, index) => ( 
          
                <HomeSlideStreamByGameScreen title={item.name} id={item.id} />
          ))
        )
  }

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    

       
    return(

        <Layout>
          <Sider  width={200} >
            
              <SideMenu callback = {props.callback} />

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
               
              </div>



           
        </Layout>
       
        

        </Layout>

    )

}