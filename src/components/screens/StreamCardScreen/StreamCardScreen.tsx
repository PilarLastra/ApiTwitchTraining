
import React from "react";
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


export const StreamCardScreen = () => {

    const {streamsData, isLoading} = useGetStreems();
    
    const navigate = useNavigate();

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    

    const videoGameCardArray = () => {
      
        return(
            streamsData!.data.map((item, index) => ( 
            
                  <VideogameCard stream={item}/>
            ))
          )
    }
       
    return(

        <Layout>
        <Sider  width={200} >
           
            <SideMenu />

        </Sider>
        <Layout style={{ padding: '0 24px 24px'}} >
           
   

            {/* Titulo de categoria (H1) */}
          <StyleTitle title="Top Streams" />
            
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
         

    )

}