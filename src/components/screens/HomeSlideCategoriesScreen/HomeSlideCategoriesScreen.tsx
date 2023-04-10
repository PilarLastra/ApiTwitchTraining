import Layout, { Content } from "antd/es/layout/layout"
import { motion } from "framer-motion"
import { StyleTitle } from "../../atoms/StyleTitle/StyleTitle"
import { Spinning } from "../../atoms/Spining/Spinning"
import { theme } from "antd"
import { useGetTopGames } from "../../../Hooks/useGetGames/useGetTopGames"
import { GameCard } from "../../molecules/GameCard/GameCard"
import "./HomeSlideCategoriesScreen.scss"




export const HomeSliderCategoriesScreen = () => {


    const {gamesData, isLoading} = useGetTopGames();

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    

    const GameCardArray = () => {

        return(
            gamesData!.data.map((item, index) => ( 
            
                  <GameCard games={item}/>
            ))
          )
    }

    return(

    
        <Layout style={{ padding: '0 24px 24px'}} >
                
        

                    {/* Titulo de categoria (H1) */}
                
                        <StyleTitle  title="Categorias Populares"  />
                
                    
                    
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
                        <motion.div id="gameCard" drag="x" dragConstraints= {{right: 0, left: -2450}} >
                            {isLoading ? 
                            <Spinning /> : <div id="gameCard"> {GameCardArray()} </div> }
                            

                        </motion.div>
                    </motion.div>
                
                
                </Content>

                
            </Layout>
     

    )
}