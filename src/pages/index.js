import React, {useState, useEffect} from "react"
import emotion from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {useFetch} from '../hooks/useFetch'
// import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Input from '../components/input'


const IndexPage = () => {


  const [isLoading, setIsLoading] = useState(false);
  const [memes, setMemes] = useState([]);
  let [displayImage, updateDisplayImage] = useState('');
  const [count, setCount] = useState(0);
  let [components, updateComponents] = useState([]);

  function AddNewComponent() {
    const newComponents = [...components, Input];
    updateComponents(newComponents)

  }

  function ClearComponents() {
    const clearComponents = [];
    updateComponents(clearComponents)
  }

  useEffect(() => {
    setIsLoading(true);
    useFetch('https://api.imgflip.com/get_memes', {}).then(value => {
      setIsLoading(false);
      setCount(prevCount => prevCount += 10)
      setMemes([...value.data.memes])
      updateDisplayImage([...value.data.memes][0].url)
    })
  }, [])



 if (isLoading) {
    return <div>Loading...</div>
  }

  let MemesShown = memes.map((item, index ) => {
    if(index <= count && index > count - 10 ) {
      return <img onClick={() => {
        updateDisplayImage(item.url)
        ClearComponents()
      }} src={item.url} key={index} alt={item.name}/>
    }
 })

return (
  <Layout>
    <SEO title="Home" />

    <StyledH1>Meme Generator</StyledH1>
    <ShowcaseContainer>
      <ButtonStyles color="#717EC3" onClick={AddNewComponent}>Add input</ButtonStyles>
      {components.length !== 0 &&
             <ButtonStyles color="#D05353" onClick={ClearComponents}>Clear all Inputs</ButtonStyles>}

    </ShowcaseContainer>

    <ShowcaseContainer>
    {components.length !== 0 &&
              components.map((Input, i) => <Input key={i} keys={i} text='Test' />)}
    </ShowcaseContainer>

    <DisplayImage src={displayImage} alt=''/>
    <ShowcaseContainer>

      {
        count > 10 &&
        <ButtonStyles  color="#329998" onClick={() => setCount(prevCount => prevCount - 10)}>Back</ButtonStyles>
      }
       {
        count < 100 &&
        <ButtonStyles color="#329998" onClick={() => setCount(prevCount => prevCount + 10)}>Next</ButtonStyles>

      }

      </ShowcaseContainer>
      <MemeImagesContainer>
        <ImageContainer>
          {MemesShown}
        </ImageContainer>
      </MemeImagesContainer>


   </Layout>
  )
}

const MemeImagesContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-auto-rows: 230px;
  width: 100%;
  justify-items: center;


  img {
    max-width: 200px;
    object-fit: cover;
    max-height:200px;
    margin: 10px;
    cursor: pointer;
    border: solid #2D2D2D 1px;
  }
`

const DisplayImage = styled.img`
  width: auto;
  max-height: 400px;
  margin: auto;
  text-align: center;
  display: flex;
  border: solid #2D2D2D 1px;

`


const ShowcaseContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`

const ButtonStyles = styled.button`
  background-color: ${props => props.color ? props.color : 'teal'};
  appearance: none;
  border: 0;
  color: white;
  padding: 5px 15px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 2px;
`

const StyledH1 = styled.h1`
  background: -webkit-linear-gradient(45deg, #D05353, #717EC3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 30px;
`

export default IndexPage
