

import React from 'react';
import { Button, Checkbox, Form, Input, Layout, theme } from 'antd';
import "./LogInTemplate.scss"
import { Content } from 'antd/es/layout/layout';
import { CircleButton } from '../../../atoms/CircleButton/CircleButton';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export const LogInTemplate = () => {

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return( 
        <Layout>
        
            <Layout style={{ padding: '0 24px 24px'}} >
            
    

            
            
                
            <Content 
                style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                }}
                
            >
                {/* Card de los juegos */}
            
            <div className='form'>
               
              
                <div className='divLeft'>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>

                        
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <div className='rememberMeForgotPasword'>
                                <div>
                                    <Checkbox>Remember me</Checkbox>
                                </div>
                                <div>
                                <a className="login-form-forgot" href="">
                                    Forgot password
                                 </a>
                                </div>
                            </div>
                          
                      
                            
                        </Form.Item>

                        <Form.Item >
                           <div className='logInOrRegister'>
                                <div className='logIn'>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </div>
                                <div className='orRegisterNow'>
                                    <p>Or</p>
                                     <a href="">Register now!</a>
                                </div>
                           </div>
                            
                           

                        </Form.Item>
                    </Form>

                </div>
                <div className='divRight'>
                    <div className="title">
                        <h1>You can use social accounts</h1>
                    </div>
                    <div>
                        <CircleButton title = "Continue with Google" />
                    </div>
                    <div>
                        <CircleButton title = "Continue with Facebook" />
                    </div>
                    <div>
                        <CircleButton title = "Continue with Twitter" />
                    </div>
                    
                    
                </div>
                   
             
            </div>
            
            </Content>

            
            </Layout>
        </Layout>
  
    )
};

