import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import {useNavigate} from "react-router-dom"

const UserChallan = () => {
    
    let [data,setdata] = useState([])
    let Navigate = useNavigate();
    let Fetch = async () => {
        let user = localStorage.getItem("acc");
        let res  = await axios.post('http://localhost:8000/post/user' ,{
            user : user
        })
        console.log(res)
        setdata(res.data)
    }

    useEffect(() => {
        Fetch()
    },[])

    let Challan = () => {
        localStorage.removeItem("acc");
        Navigate("/challan");
    }
  return (
    <div className='container dash'>
        <div className="top-bar">
            <h2>User Challan Details</h2>
        </div>
        {data.map(i => {
            return(
                <div className="display-challan">
            <div className="header">
                <p>Branch Name : {i.branch_name}</p>
                <p>Account type : {i.account_type}</p>
            </div>
            <div className="acc">
                <div>
                <h4>Acc.no :{i.account_num}</h4>
                <p>{i.total_deposite}</p>
                <p>{i.total_deposite_count}</p>
                </div>
                <div>
                    <p>Data : 24-03-2023</p>
                    <p>In Queue: {i.priority}</p>
                </div>
            </div>
        </div>
            );
        })}
        <div className="link">
        <h4 onClick={Challan}>Back to Challan Form</h4>
        </div>
    </div>

  )
}

export default UserChallan;