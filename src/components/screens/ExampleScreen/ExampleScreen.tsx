import React, { useEffect } from "react";
import logo from "../../../assets/logo.svg";
import Twitch, { getToken } from 'simple-twitch-api';
import "./ExampleScreen.scss";
import { ApiClient, CLIENT_ID, CLIENT_SECRET, SCOPES } from "../../../services/apiService";

export const ExampleScreen = () => {



  useEffect(() => {
    const script = async () => {
   
      const request = await getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);
      const apiService = new ApiClient(request.access_token);

      const result = await apiService.getStreams();

      console.log(result);
  
  }
    script();

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Welcome to React Training </p>
      </header>
    </div>
  );
};
