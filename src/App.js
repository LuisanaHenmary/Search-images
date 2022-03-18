import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Picture from "./components/Picture"

const App = () => {

  const [photos, setSPhotos] = useState([])
  const apiKey = process.env.REACT_APP_API_KEY
  const search = "cat"

  const cargaSimbolos = useCallback(async () => {
    try {
      const responce = await axios.get(
        `https://api.unsplash.com/search/photos?per_page=20&query=${search}█`,
        {
          headers: {
            'Authorization': `Client-ID ${apiKey}`
          }
        })
        setSPhotos(responce.data.results)
    } catch (error) {
      console.log('error')
    }
  }, [search, apiKey])


  useEffect(() => {
    cargaSimbolos()
  }, [cargaSimbolos])

  return (
    <>
      <Header>
        <h1>🖼️ Search images 📸 </h1>
      </Header>
      <Content>
        {photos.map(photo => <Picture key={photo.id} photo={photo} />)}
      </Content>
      <Footer>
        <p>developer: Luisana Henmary Perez Cadenas</p>
        <p>Pictures from unsplash.com</p>
        <p>deploy march 2022</p>
      </Footer>
    </>
  );
}

export default App;
