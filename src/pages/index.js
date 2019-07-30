import React, {useState, useEffect} from "react"
import emotion from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {useFetch} from '../hooks/useFetch'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Input from '../components/input'


const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memes, setMemes] = useState([]);
  let [displayImage, updateDisplayImage] = useState('');
  const [count, setCount] = useState(0);

  const [inputValues, updateInputValues] = useState(['first', 'test2','test3']);

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

  let MemesShown = memes.map((item, index, arr) => {
    if(index <= count && index > count - 10 ) {
      return <img onClick={() => updateDisplayImage(item.url) } src={item.url} key={index} alt={item.name}/>
    }
 })

 const updateValuesWhatever = (newValue, count) => {
  updateInputValues(prevState => {
    prevState[count] = newValue
    return prevState
  })
 }

return (
  <Layout>
    <SEO title="Home" />
    <h1>Meme Generator</h1>
    {/* <button onClick={() => updateInputs(prevState => prevState.push('shit'))}>Add input</button> */}
    {inputValues.map((value, i) => <Input key={i} values={value} updateInputValues={updateValuesWhatever} count={i}/>)}
    {/* <Input inputs={inputs} updateInputs={updateInputs}/> */}

    <ShowcaseContainer>
      <DraggableInputContainer>
          {inputValues.map((value, i) => {

            return  <Draggable
                      key={i}
                      bounds={{top: -150, left: -150, right: 150, bottom: 150}}
                      handle=".handle"
                      defaultPosition={{x: 0, y: 0}}
                      position={null}
                      grid={[10, 10]}
                      scale={1}
                      >
                          <div className="container">
                            <div className="handle">
                              {value}
                            </div>

                          </div>
                    </Draggable>
          })}


          </DraggableInputContainer>

      </ShowcaseContainer>



    <DisplayImage src={displayImage} alt=''/>
      {
        count > 10 &&
         <button onClick={() => setCount(prevCount => prevCount - 10)}>Back</button>
      }
      <button onClick={() => setCount(prevCount => prevCount + 10)}>Next</button>
      <ImageContainer>
        {MemesShown}
      </ImageContainer>
   </Layout>
  )
}


const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f4f4f4;
  max-width: 1000px;
  margin: auto;

  img {
    max-width: 200px;
    object-fit: cover;
    max-height:200px;
    margin: 10px;
    cursor: pointer;
  }
`

const DisplayImage = styled.img`
  width: auto;
  max-height: 400px;
  margin: auto;
  text-align: center;
  display: flex;
`


const DraggableInputContainer = styled.div`

  height: 100%;
  position: absolute;
  min-height: 400px;
  text-align: center;


  .container {
    max-width: 300px;
    border: blue solid 2px;
    margin: auto;
  }

  .react-draggable {
    cursor: pointer;
  }

`

const ShowcaseContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
`

export default IndexPage
