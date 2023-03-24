import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Dash = () => {

    let [data,setdata] = useState([])
    // let [a,b] = useState("");

    let Fetch = async () => {
        let res  = await axios.get('http://localhost:8000/post/dash')
        console.log(res)
        setdata(res.data)
    }

    useEffect(() => {
        Fetch()
    },[])

    let CloseEntry = async () => {
    // let res = await axios.post()
    toast("This will Initimate that the user Challan progress is completed");
    }
  return (
    <div className='container dash'>
        <ToastContainer/>
        <div className="top-bar">
            <h2>Cashier Dashboard</h2>
        </div>
        {data.map(i => {
            return(
                <div className="display-challan">
            <div className="header">
                <p>{i.branch_name}</p>
                <p>Account type : {i.account_type}</p>
            </div>
            <div className="acc">
                <div>
                <h4>Acc.no :{i.account_num}</h4>
                <p>{i.total_deposite}</p>
                <p>Rs . {i.total_deposite_amt}</p>
                </div>
                <div>
                    <p>Date : 24-03-2023</p>
                    <p>Token no :{i.priority}</p>
                </div>
            </div>
            <div className="btns">
            <button onClick={CloseEntry}>Entry</button>
            </div>
        </div>
            );
        })}
    </div>
  )
}

export default Dash;