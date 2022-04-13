import axios from "axios"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Picture from "./components/Picture"
import Form from "./components/Form"
import Home from "./components/Home"

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const url = process.env.REACT_APP_URL
  const [photos, setPhotos] = useState([])

  const submitSearch = async form => {
    try {
      const responce = await axios.get(
        `${url}?per_page=20&query=${form.search}█`,
        {
          headers: {
            'Authorization': `Client-ID ${apiKey}`
          }
        }
      )
      setPhotos(responce.data.results)
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <>
      <Header>
        <h1>
          🖼️ Search images 📸
        </h1>
        <Form submit={submitSearch} />

      </Header>

      {
        photos.length !== 0 ?
          <Content>
            {photos.map(photo =>
              <Picture
                key={photo.id}
                photo={photo}
              />)
            }
          </Content> : <Home />
      }

      <Footer>
        <p>
          Developer: Luisana Henmary Perez Cadenas
        </p>
        <p>
          Affiliations: Kunaisoft,
          <a href="https://api.unsplash.com">
            Unsplash
          </a>
        </p>
      </Footer>
    </>
  );
}

export default App;
