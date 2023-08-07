import React from 'react'
import { styled } from 'styled-components'
import { useAuthor, useTanArticle, useTanCategory } from '../../hooks/useAuthor'
import { useSelector } from "react-redux"
import {MdOutlineBookmarkAdd} from "react-icons/md"
import {AiOutlineMinus, AiOutlineMenu} from "react-icons/ai"
import img from "../../assets/bukky.jpg"


const HomePage = () => {
    const userID = useSelector((state: any) => state.appUser)

    const { article }:any = useTanCategory(userID)
    useAuthor(userID)

    console.log( useAuthor(userID));

    return (
        <div>
            <Container>
                <Main>
                    <Left>
                      <Card>
                          <Holder>
                          <Image src={img}/>
                        <Name>Ajayi Segun </Name>
                        <Date>14, Augest 2023</Date>
                        </Holder>
                        <Div>
                            <div style={{width: "60%"}}>
                            <Title>I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.</Title>
                            <Sub>Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny — Y’all… fair warning. I have a weird sense of humor.</Sub>
                            </div>
                            <ImageHolder>
                            <SubjectImage/>
                            </ImageHolder>

                        </Div>
                        <Div1>
                            <div style={{display : "flex"}}>
                            <Category>Tech</Category>
                            <Time>6 min read </Time>
                            </div>
                            <Icon>
                                <div style={{margin: "0 10px"}}>
                                <MdOutlineBookmarkAdd size={25}/> 
                                </div>
                                <div style={{margin: "0 10px"}}>
                                <AiOutlineMenu size={25}/>
                                </div>
                                <div style={{margin: "0 10px"}}>
                                <AiOutlineMinus size={25}/>
                                </div>

                            </Icon>
                        </Div1>

                      </Card>
                      <Card>
                          <Holder>
                          <Image src={img}/>
                        <Name>Ajayi Segun </Name>
                        <Date>14, Augest 2023</Date>
                        </Holder>
                        <Div>
                            <div style={{width: "60%"}}>
                            <Title>I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.</Title>
                            <Sub>Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny — Y’all… fair warning. I have a weird sense of humor.</Sub>
                            </div>
                            <ImageHolder>
                            <SubjectImage/>
                            </ImageHolder>

                        </Div>
                        <Div1>
                            <div style={{display : "flex"}}>
                            <Category>Tech</Category>
                            <Time>6 min read </Time>
                            </div>
                            <Icon>
                                <div style={{margin: "0 10px"}}>
                                <MdOutlineBookmarkAdd size={25}/> 
                                </div>
                                <div style={{margin: "0 10px"}}>
                                <AiOutlineMenu size={25}/>
                                </div>
                                <div style={{margin: "0 10px"}}>
                                <AiOutlineMinus size={25}/>
                                </div>

                            </Icon>
                        </Div1>

                      </Card>
                      <Card>
                          <Holder>
                          <Image src={img}/>
                        <Name>Ajayi Segun </Name>
                        <Date>14, Augest 2023</Date>
                        </Holder>
                        <Div>
                            <div style={{width: "60%"}}>
                            <Title>I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.</Title>
                            <Sub>Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny — Y’all… fair warning. I have a weird sense of humor.</Sub>
                            </div>
                            <ImageHolder>
                            <SubjectImage/>
                            </ImageHolder>

                        </Div>
                        <Div1>
                            <div style={{display : "flex"}}>
                            <Category>Tech</Category>
                            <Time>6 min read </Time>
                            </div>
                            <Icon>
                                <div style={{margin: "0 10px"}}>
                                <MdOutlineBookmarkAdd size={25}/> 
                                </div>
                                <div style={{margin: "0 10px"}}>
                                <AiOutlineMenu size={25}/>
                                </div>
                                <div style={{margin: "0 10px"}}>
                                <AiOutlineMinus size={25}/>
                                </div>

                            </Icon>
                        </Div1>

                      </Card>



                    </Left>

                    <Right>
                        
                        <Article>Interesting Article</Article>
                        <div>
                        <Hold>
                            <Avatar src={img}/>
                            <NameTitle>Travis</NameTitle>
                           

                        </Hold>
                        <ArticleTitle>Special Report: Extreme Heat and Human Health</ArticleTitle>
                        </div>
                        <div>
                        <Hold>
                            <Avatar src={img}/>
                            <NameTitle>Travis</NameTitle>
                           

                        </Hold>
                        <ArticleTitle>Special Report: Extreme Heat and Human Health</ArticleTitle>
                        </div>
                        <CartHolder>
                            <Article>Recommended Categories</Article>
                            <Cart>Design Fashion</Cart>
                            <Cart>Design Fashion</Cart>
                            <Cart>Design Fashion</Cart>
                            <Cart>Design Fashion</Cart>
                            <Cart>Design Fashion</Cart>
                        </CartHolder>

                        <Following>
                            <Follow>Who to Follow</Follow>
                            <FollowHolder>
                                <Avatar1 src={img}/>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                    <Name1>Micheal Williams</Name1>
                                    <Small>Writer turned investor turned investors who writes. General...</Small>
                                </div>
                                <Button>Follow</Button>
                            </FollowHolder>
                        </Following>

                    </Right>
                    
                </Main>
            </Container>
        </div>
    )
}

export default HomePage


const Button= styled.button`
width: 100px;
height: 30px;
font-family: Poppins;
border-radius: 30px;
border: 1px solid silver;
background-color: transparent;
`
const Small= styled.div`
font-size: 13px;
width: 90%;
`
const FollowHolder= styled.div`
display: flex;

`
const Follow= styled.div``
const Following= styled.div`
margin-top: 20px;
`
const Cart= styled.div`
padding: 5px 10px;
margin:  5px;
background-color: #c9c9c9;
border-radius: 30px;
font-size: 14px;
`
const CartHolder= styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 50px;
`
const ArticleTitle= styled.div`
    font-weight: 700;
    font-size: 16px;
`
const NameTitle = styled.div`
margin-left: 10px;
`
const Avatar1 = styled.img`
width: 50px;
height: 30px;
margin-right: 10px;
border-radius: 50%;
border: 1px solid silver;
object-fit: cover;


`
const Avatar = styled.img`
width: 25px;
height: 25px;
border-radius: 50%;
border: 1px solid silver;
object-fit: cover;


`
const Hold = styled.div`
display: flex;
margin-top: 20px;
`
const Article = styled.div`
font-size: 17px;
font-weight: 600;
margin-bottom: 20px;
`
const Right = styled.div`
width: 40%;
position: relative;
/* height: 100vh; */
border-left: 1px solid silver;
padding:  20px;
`
const Icon = styled.div`
display: flex;
`
const Time = styled.div`
font-size: 13px;
font-weight: 400;
margin-left: 10px;
`
const Category = styled.div`
padding: 2px 15px;
color: white;
border-radius: 30px;
background-color: black;
font-size: 12px;
`
const Div1 = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
width: 100%;
justify-content: space-between;
`
const SubjectImage = styled.div``
const ImageHolder = styled.div`
width: 200px;
height: 150px;
background-color: orange;
`
const Sub = styled.div`
font-size: 14px;
margin-top: 10px;
`
const Div = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
const Title = styled.div`
font-size: 25px;
font-weight: 700;
margin-top: 10px;
`
const Date = styled.div`
font-size: 14px;
margin-left: 10px;

`
const Name1 = styled.div`
font-size: 14px;
`
const Name = styled.div`
font-size: 14px;
margin-left: 10px;
`
const Holder = styled.div`
display: flex;
align-items: center;
`

const Image = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid silver;
object-fit: cover;
`
const Card = styled.div`
width: 90%;
margin-left: 50px;
border-top: 1px solid silver ;
padding: 20px 0;
margin-top: 30px;
`
const Left = styled.div`
width: 100%;
`
const Main = styled.div`
display: flex;
width: 1166px;
/* height: 100vh; */

`

const Container = styled.div`
/* height: 100vh; */
display: flex;
align-items: center;
justify-content: center;



`