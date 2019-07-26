import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


function GetImages() {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({images: []});

  async function fetchData() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    res
    .json()
    .then(res => setData(res))
    .catch(err => setErrors(err));
    }

  useEffect(() => {


    fetchData()

  })

  return (
    <div>


      {JSON.stringify(data)}



    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Meme Generator</h1>
    {GetImages()}

  </Layout>
)

export default IndexPage
