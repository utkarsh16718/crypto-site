import React, { useState } from 'react'
import CoinItem from './CoinItem'
import axios from 'axios'

import './Coins.css'
import './Coin.css'
import CancelIcon from '@mui/icons-material/Cancel';

const Coins = (props) => {

    const [coin, setCoin] = useState({})
    const [modal, setModal] = useState(false);


    const toggleModal = () => {
        setModal(!modal);
    };

    const handleStyleButton = (condition) => {
        if (condition > 0) {
            return {
                color: "#00E400"
            }
        }
        return {
            color: "red"
        }
    };


    const showDetail = (id) => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) => {
            setCoin(response.data)
            setModal(true);
        }).catch((error) => {
            console.log(error)
        })

    }

    return (


        <div className='container'>
            {

                modal
                    ?
                    (

                        <div className='mob-cont'>
                        
                            <div className='mob-heading bold'>
                                <p># {coin.market_cap_rank}</p>
                                <img src={coin.image} alt='' />
                                <p className='m0b-name '>NAME: {coin.name.toUpperCase()} </p>
                                <p className='mob-price '>PRICE:  ${coin.market_data.current_price.usd.toLocaleString()}</p>
                                <p className='mob-twenty'>24H: {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p>


                                <p className=' mob-marketcap bold'>MARKET CAP: ${coin.market_data.market_cap.usd.toLocaleString()}</p>

                                <p className=' mob supply'>CIRCULATING SUPPLY: ${coin.market_data.circulating_supply.toLocaleString()} {coin.symbol.toUpperCase()} </p>
                                <button onClick={toggleModal}><CancelIcon/></button>
                            </div>
                        


                     </div>
                     
                    ) :
                    (<div>
                        <div className='heading'>
                            <p>#</p>
                            <p className='coin-name name'>NAME</p>
                            <p className='price'>PRICE</p>
                            <p className='twenty'>24H</p>

                            {/* <p className='hide-mobile'>7D</p> */}
                            <p className='hide-mobile marketcap'>MARKET CAP</p>
                            {/* <p className='hide-mobile'>VOLUME(24H)</p> */}
                            <p className='hide-mobile supply'>CIRCULATING SUPPLY</p>
                        </div>

                        {props.coins.map(coins => {
                            return (

                                // <CoinItem coins={coins} key={coins.id} />
                                <div key={coins.id} className='coin-row' onClick={() => showDetail(coins.id.toLowerCase())} >
                                    <p>{coins.market_cap_rank}</p>
                                    <div className='img-symbol'>
                                        <img src={coins.image} alt='' />
                                        <p className='name'>{coins.name.toUpperCase()}</p>
                                    </div>
                                    <p className='price'>${coins.current_price.toLocaleString()}</p>
                                    <p className='twenty' style={handleStyleButton(coins.price_change_percentage_24h)}>{coins.price_change_percentage_24h.toFixed(2)}%</p>
                                    {/* <p className='hide-mobile'>${props.coins.price_change_percentage_7d_in_currency.toLocaleString()}</p> */}
                                    <p className='hide-mobile marketcap'>${coins.market_cap.toLocaleString()}</p>
                                    {/* <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p> */}
                                    <p className='hide-mobile supply'>${coins.circulating_supply.toLocaleString()} {coins.symbol.toUpperCase()} </p>
                                </div>


                            )
                        })}

                    </div>
                    )
            }
        </div>


    )
}


export default Coins
