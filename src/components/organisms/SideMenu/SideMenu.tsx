import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import "./SideMenu.scss";
import { SideMenuButton } from '../../atoms/SideMenuButton/SideMenuButton';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { StreamCardScreen } from '../../screens/StreamCardScreen/StreamCardScreen';
import { SmallCard } from '../../molecules/SmallCard/SmallCard';
import { HomeTemplate } from '../../screens/templates/HomeTemplate/HomeTemplate';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

];

export const SideMenu = ( props:any ) => {

  const navigate = useNavigate();
  

  return (
    <div style={{ width: 200  }}> {/* Tamaño del SideMenu */}
     
     {/* Si hubiese un boton para colapsar el menu podria iria aca */}
      
      <div className='sideMenu'>
        <div>
          <div className='home'>
            <SideMenuButton title= "Home" callback = {()=>{navigate("/")}} />
          </div>
          <div className='home'>
            <SideMenuButton title= "Top Streams" callback= {()=>{navigate("/TopStreams")}} />
          </div>
          <div className='home'>
            <SideMenuButton title= "Explorar" callback= {()=>{navigate("/Explore")}} />
    
          </div>
          <div>
       
          </div>
        </div>
       
      
      </div>
    

    </div>
  );
};

