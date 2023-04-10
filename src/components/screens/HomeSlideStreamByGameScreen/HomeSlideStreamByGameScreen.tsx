import Layout, { Content } from "antd/es/layout/layout"
import { motion } from "framer-motion"
import { StyleTitle } from "../../atoms/StyleTitle/StyleTitle"
import { Spinning } from "../../atoms/Spining/Spinning"
import { theme } from "antd"
import { VideogameCard } from "../../molecules/Card/VideogameCard"
import { useGetStreamFilterByGame } from "../../../Hooks/useGetStreemFilterByGame/useGetStreemFilterByGame"
import "./HomeSlideStreamByGameScreen.scss"



export const HomeSlideStreamByGameScreen = (props:any) => {

    
  
    const {streamsData, isLoading} = useGetStreamFilterByGame({id: props.id});

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    

      const StreamCardArray = () => {

        return(
            streamsData!.data.map((item, index) => ( 
            
                  <VideogameCard stream={item}/>
            ))
          )
    }
       

    return(

    
        <Layout style={{ padding: '0 24px 24px'}} >
                
        

                    {/* Titulo de categoria (H1) */}
                
                        <StyleTitle  title= {props.title} />
                
                    
                    
                <Content 
                    style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    }}
                    
                >
                        {/* Card de los juegos */}
                    <motion.div className="slider-container">
                        <motion.div id="streamCard" drag="x" dragConstraints= {{right: 0, left: -5087}} >
                            {isLoading ? 
                            <Spinning /> : <div id="streamCard"> {StreamCardArray()} </div> }
                            

                        </motion.div>
                    </motion.div>
                
                
                </Content>

                
            </Layout>
     

    )
}