import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { async } from "q";



const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch(error) {
        setError(error);
      }
    }
    fetchData()
  }, [])
  return {response, error, isLoading};
}

// https://api.imgflip.com/get_memes


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Meme Generator</h1>


  </Layout>
)

export default IndexPage
