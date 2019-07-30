import React, {useState, useEffect} from "react"

const Input = ({value, updateInputValues, count}) => {
const ownFunction = (e) => {
  updateInputValues(e.target.value, count)
  value = e.target.value

}

return (
  <div>
    <input
      value={value}
      onChange={ownFunction}
      placeholder="Type Here"
      type="text"
      name="input"
      required
    />

  </div>
  )

}


export default Input
