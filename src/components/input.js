import React, {useState, useEffect} from "react"
import Draggable, {DraggableCore} from 'react-draggable'
import styled from '@emotion/styled'


function useInput({ type, key }) {
  const [value, setValue] = useState("");
  const input = <textarea className="not-draggable" key={key} value={value} placeholder="Type here" onChange={e => setValue(e.target.value)} type={type} />;
  return [value, input];
}

const Input = (props, key) => {
  const [username, userInput] = useInput({ type: "text", key: 0 });


return (
  <DraggableInputContainer key={key}>
      <Draggable
        bounds={{top: -400, left: -400, right: 400, bottom: 400}}
        handle=".handle"
        cancel="string"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        cancel=".not-draggable"
        grid={[10, 10]}
        scale={1}
        key={props.keys}
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

  .handle {
    padding: 17px;
    height: auto;

    textarea {
      --webkit-appearance: none;
      background-color: transparent;
      border: none;
      font-size: 30px;
      height: 100%;
      width: auto;
      color: white;
      text-shadow: 2px 2px 5px #2D2D2D;
    }
  }

  .container {
    margin: auto;
  }

  .react-draggable {
    cursor: pointer;
  }

`
