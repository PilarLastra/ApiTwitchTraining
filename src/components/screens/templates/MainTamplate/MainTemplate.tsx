import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { VideogameCard } from '../../../molecules/Card/VideogameCard';
import { SearchBar } from '../../../molecules/SearchBar/SearchBar';
import { AvatarLogo } from '../../../atoms/AvatarLogo/AvatarLogo';
import { NavBarButton } from '../../../atoms/NavBarButton/NavBarButton';
import { StyleTitle } from '../../../atoms/StyleTitle/StyleTitle';
import { SideMenu } from '../../../organisms/SideMenu/SideMenu';
import {useState, useEffect} from "react";
import Twitch, { getToken } from 'simple-twitch-api';
import { ApiClient, CLIENT_ID, CLIENT_SECRET, SCOPES } from "../../../../services/apiService";
import { IStream } from '../../../../Interfaces/IStreams';
import "./MainTemplate.scss"

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

export const MainTemplate = () => {
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [streams, setStreams] = useState([]);


  useEffect(() => {
    
    const script = async () => {
   
      const request = await getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);
      const apiService = new ApiClient(request.access_token);

      const result = await apiService.getStreams();

     setStreams(result.data);

  }
    script();

  }, [])

  {/* spinner: indicarle al user q la info esta cargando = crear un state: isLoading = true line 61 cuando result tenga data setear loading cmo false  if loading true mostrar espinner y si es false mostrar la card*/ }
      
  const videoGameCardArray = () => {

      return(
        streams.map((item, index) => ( 
          <VideogameCard stream={item}/>

        ))
      )



  }



  return (
   
    <Layout >
      <Header className="flex-container" id='NavBar'>
      
            <div>
                <AvatarLogo />
            </div>
            <div id="searchBar">
                <SearchBar />
            </div>
            <div>
                <NavBarButton />
            </div>
            <div>
                <NavBarButton />
            </div>
            
       
       
      </Header>
      <Layout>
        <Sider  width={200} >
           
            <SideMenu />
         
        </Sider>
        <Layout style={{ padding: '0 24px 24px'}} >
           
   

            {/* Titulo de categoria (H1) */}
          <StyleTitle/>
            
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
            {videoGameCardArray()}
            </div>
        

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

