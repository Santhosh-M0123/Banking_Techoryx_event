import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
    let Navigate = useNavigate();

    let Challan = () => {
        Navigate("/challan");
    }
    let Dash = () => {
        window.alert('Only Cashiers are permitted to enter this site ! If you are a cashier Press ok to continue');
        Navigate("/dash");
    }
  return (
    <div className='home'>
        <div className="home-head">
            <h2>Digital Challan From</h2>
            <p>Reduce the Waiting time in the Queue in the Bank</p>
        </div>
        <div className="route">
            <button onClick={Challan}>Fill Challan</button>
            <button onClick={Dash}>Admin Dashboard</button>
        </div>
    </div>
  )
}

export default Home