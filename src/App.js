import { useState, useEffect } from 'react'
import './App.css'
import BreadCrumb from './components/BreadCrumb'
import Images from './components/Images'
import Navbar from './components/Navbar'
import axios from 'axios'
import SnackBar from './components/SnackBar'
import Footer from './components/Footer'

function App() {

  const URL = 'https://pixabay.com/api/';
  const API_KEY = '20259577-c93c75abc878a636931b34317';

  const [data, setData] = useState([])
  const [text, setText] = useState('')
  const [count, setCount] = useState(16)
  const [open, setOpen] = useState(false)



  useEffect(() => {
    if (count < 3 || count > 200) {
      setOpen(true)
      return;
    }
    setOpen(false)
    const getData = async () => {
      try {
        const { data } = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        setData(data.hits)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [text, count])


  return (
    <>
      <Navbar />
      <BreadCrumb setCount={setCount} setText={setText} />
      <Images data={data} />
      <SnackBar open={open} setOpen={setOpen} />
      <Footer />
    </>
  )
}

export default App