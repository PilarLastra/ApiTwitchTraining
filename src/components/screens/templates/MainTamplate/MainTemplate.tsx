import React from 'react';
import { LaptopOutlined, LoadingOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Layout, theme } from 'antd';
import { SearchBar } from '../../../molecules/SearchBar/SearchBar';
import { AvatarLogo } from '../../../atoms/AvatarLogo/AvatarLogo';
import { NavBarButton } from '../../../atoms/NavBarButton/NavBarButton';
import { StyleTitle } from '../../../atoms/StyleTitle/StyleTitle';
import { SideMenu } from '../../../organisms/SideMenu/SideMenu';
import { ApiClient} from "../../../../services/apiService";

import "./MainTemplate.scss"
import { useGetToken } from '../../../../Hooks/useGetToken/useGetToken';
import { StreamCardScreen } from '../../StreamCardScreen/StreamCardScreen';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LogInTemplate } from '../LogInTemplate/LogInTemplate';
import { HomeTemplate } from '../HomeTemplate/HomeTemplate';
import { Spinning } from '../../../atoms/Spining/Spinning';



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


export const ApiContext = React.createContext({apiService: new ApiClient("")})


export const MainTemplate = () => {
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

   
    const {twitchApiToken, isLoading} = useGetToken();
    const navigate = useNavigate();

  {/* spinner: indicarle al user q la info esta cargando = crear un state: isLoading = true line 61 cuando result tenga data setear loading cmo false  if loading true mostrar espinner y si es false mostrar la card*/ }
   return (
   
    <Layout className='background'>
          {isLoading ? ( 
          <Spinning />
          ) : (
            <ApiContext.Provider value={{apiService: new ApiClient(twitchApiToken!.access_token)}}>
      <Header className="flex-container" id='NavBar'>
      
            <div>
                <AvatarLogo callback = {()=>{navigate("/")}} />
            </div>
            <div id="searchBar">
                <SearchBar />
            </div>
            <div>
                <NavBarButton title= "LOG IN" callback = {()=>{navigate("/login")}} /> {/*Consultar lo del map de botones*/}
            </div>
            <div>
                <NavBarButton title= "SING UP" callback = {()=>{navigate("/login")}}/>
            </div>
          
            
       
       
      </Header>
      
       
            <Routes>
             
              <Route path='/' element={ <HomeTemplate />} />
              <Route path='/login' element={<LogInTemplate/>} />
              <Route path='/TopStreams' element={<StreamCardScreen/>} />
              
            </Routes>
         
      
     
     
      </ApiContext.Provider>)}
    </Layout>
  );
};

