import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import React, { useState } from 'react';

const { Meta } = Card;

export const SmallCard = () => {
 

  return (
    <>
     
      <Card style={{ width: 200, height: 50}} >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
          title="Card title"
        />
      </Card>
      
    </>
  );
};

