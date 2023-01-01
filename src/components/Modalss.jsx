import React from 'react'
import './Coins.css'

const Modalss=(props) =>{

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

    console.log(props.details)
    return (

        <div className='container'>

            <div>
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

                {props.details.map(detail => {
                    return (

                        // <CoinItem coins={coins} key={coins.id} />
                        <div key={detail.id} className='coin-row'>
                            <p>{detail.market_cap_rank}</p>
                            <div className='img-symbol'>
                                <img src={detail.image} alt='' />
                                <p className='name'>{detail.name.toUpperCase()}</p>
                            </div>
                            <p className='price'>${detail.current_price.toLocaleString()}</p>
                            <p className='twenty' style={handleStyleButton(detail.price_change_percentage_24h)}>{detail.price_change_percentage_24h.toFixed(2)}%</p>
                            {/* <p className='hide-mobile'>${props.coins.price_change_percentage_7d_in_currency.toLocaleString()}</p> */}
                            <p className='hide-mobile marketcap'>${detail.market_cap.toLocaleString()}</p>
                            {/* <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p> */}
                            <p className='hide-mobile supply'>${detail.circulating_supply.toLocaleString()} {detail.symbol.toUpperCase()} </p>
                        </div>


                    )
                })}

            </div>
        </div>
    )
}

export default Modalss