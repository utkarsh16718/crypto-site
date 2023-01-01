import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Coins from './components/Coins'

import Navbar from './components/Navbar'
import Head from './components/Head'

import './components/Coins.css'
function App() {

  const [coins, setCoins] = useState([])
  const [page, setPage] = useState(1)

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h%2C7d`

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(error)
    })

    }, [page])

  
    return (
      <>
        <Navbar />
        <Head />
        <Coins coins={coins} />
  <div className='button'>
  <button className='btn' onClick={() => {
                setPage(num => {
                    return num + 1
                })
            }}>Next</button>
            {
              page>1?
  <button className='btn' onClick={() => {
    setPage(num => {
        return num - 1
    })
}}>Prev</button>:null
            }
          
  </div>
           
      </>
    );
  }

export default App;
