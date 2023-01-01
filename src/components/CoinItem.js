// import React, { useState } from 'react'
// import axios from 'axios'

// import './Coins.css'

// const CoinItem = (props) => {
//     const [details, setdetails] = useState([])



//     // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=falsehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d'

//     // const handleClick=(id)=> {
//     //   axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) => {
//     //     setdetails(response.data)
//     //   }).catch((error) => {
//     //     console.log(error)
//     //   })
//     // }




//     const handleStyleButton = (condition) => {
//         if (condition > 0) {
//             return {
//                 color: "#00E400"
//             }
//         }
//         return {
//             color: "red"
//         }
//     };

//     return (
//         <div className='coin-row' 
//         // onClick={handleClick(props.coins.name.toLowerCase())}
//         >
//             <p>{props.coins.market_cap_rank}</p>
//             <div className='img-symbol'>
//                 <img src={props.coins.image} alt='' />
//                 <p className='name'>{props.coins.name.toUpperCase()}</p>
//             </div>
//             <p className='price'>${props.coins.current_price.toLocaleString()}</p>
//             <p className='twenty' style={handleStyleButton(props.coins.price_change_percentage_24h)}>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
//             {/* <p className='hide-mobile'>${props.coins.price_change_percentage_7d_in_currency.toLocaleString()}</p> */}
//             <p className='hide-mobile marketcap'>${props.coins.market_cap.toLocaleString()}</p>
//             {/* <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p> */}
//             <p className='hide-mobile supply'>${props.coins.circulating_supply.toLocaleString()} {props.coins.symbol.toUpperCase()} </p>
//         </div>
//     )
// }

// export default CoinItem
