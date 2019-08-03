import React, {useState, useEffect} from "react"
import Draggable, {DraggableCore} from 'react-draggable'
import styled from '@emotion/styled'


function useInput({ type }) {
  const [value, setValue] = useState("");
  const input = <input class="not-draggable" value={value} onChange={e => setValue(e.target.value)} type={type} />;
  return [value, input];
}

const Input = (props) => {

  const [username, userInput] = useInput({ type: "text" });


return (
  <DraggableInputContainer>
      <Draggable
        bounds={{top: -150, left: -150, right: 150, bottom: 150}}
        handle=".handle"
        cancel="string"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        cancel=".not-draggable"
        grid={[10, 10]}
        scale={1}
        >
          <div className="container">
            <div className="handle">
            <div>

              {userInput}

            </div>
            </div>


          </div>
    </Draggable>
  </DraggableInputContainer>
  )

}



export default Input



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
