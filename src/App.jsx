import { useEffect , useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {
 
  const[news, setNews] = useState([]);

  useEffect(() => {
    // Perform some side effect here, like fetching data from an API
    axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=74909088e28f4359be627b903b04de54")
    .then((response) => {
      console.log(response.data.articles);
      setNews(response.data.articles);
    })
  }, []);
  return (
    <>
    <div className='card_container'>
      {
        news.map((news) => {
          return (
            <div className='card'>
              <div className='image_div'>
                <img src={news.urlToImage} alt="image" />
              </div>
              <div className='card_body'>
                <div className='News_Title'>{news.title}</div>
                <div className='News_Description'>{news.description}</div>
                <a href={news.url} target="_blank">
                  <button>Read More</button>
                </a>
              </div>
            </div>
          );
        })
      }
    </div>
    <div className='footer'>
      Created with ❤️ by Paras  <a href=""> <img src="./src/assets/github-250.png" alt="GitHub Logo" width="24" height="24" /></a>
    </div>
  </>
  )
}

export default App
