import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { resourcesItemsData } from '../../data/ResourcesData'



function Resources(){
    return (
        <Container>
        <Hometheme>
            <WorkspaceContainer>
                <Name>
                    Resources
                </Name>
                <NewMessage>
                    <BsFillInfoCircleFill/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    resourcesItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))

                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <Link to="/posts">
                        Community Posts
                    </Link>
                </NewChannelContainer>
                <ChannelsList>
            
                </ChannelsList>
            </ChannelsContainer>
            </Hometheme>
        </Container>
        
    )
}

export default Resources


const Container = styled.div`
    background: #CEB5EF;
    max-width:260px;
    height:700px;

    @media screen and (max-width: 991px ){
        padding-right: 30px;
        padding-left: 30px;
    }
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid  #532753;
`

const Name = styled.div``

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;
`
const MainChannelItem=styled.div`
color: rgb(188,171,188);
display:grid;
grid-template-columns:15% auto;
height:28px;
align-items:center;
padding-left:19px;
cursour:pointer;

:hover{
    background: #350D36;
}

`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
    border-bottom: 1px solid  #532753;
    cursor:pointer;

`

const ChannelsList = styled.div``

const Hometheme = styled.div`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro' , sans-sherif;
    }
 
`