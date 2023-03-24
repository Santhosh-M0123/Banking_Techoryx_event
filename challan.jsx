import React from "react";
import "./chalan.css";
import { useState ,useEffect } from "react";
import axios from "axios"
import {toast , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import { Navigate } from "react-router-dom";
import {useNavigate} from "react-router-dom"
const Challan = () => {

    let [accnum,setacc] = useState("");
    let [phn,setphn] = useState("");
    let [acctype , settype] = useState("SB");
    let [amtwords,setamt] = useState("");
    let [amtcount,setcount] = useState("");
    let [branch,setbranch] = useState("");
    // toast.configure()

    let Navigate = useNavigate();
    let Display =async () => {
        let url = "http://localhost:8000/post"
        var date  = new Date();
        // let d = date.getDate()
        // console.log(d)
        if(accnum != "" & amtwords != "" &phn != "" & amtcount != "" & branch  != "" & acctype!=""){
            let res = await axios.post(url + "/postChallan" ,{
                accountnum : accnum,
                phnnum : phn,
                acctype : acctype,
                amtwords : amtwords,
                amtcount : amtcount,
                branch : branch, 
                datePost : date
            })
            if(res.status == 200){
                setacc("")
                setamt("");
                setbranch("");
                setcount("");
                setphn("");
                toast.info("Challan Added to dashboard");
                Navigate("/user");
                localStorage.setItem("acc" , accnum);
            }else{
                toast.info("Invalid Content");
            }
        }else{
            toast.warn("Fill all the fields in Challan");
        }
        }
  return (
    <div className="form-main">
        <ToastContainer />
      <div className="container form-content">
        <h2>Digital Challan</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div class="form-group top">
            <div>
              <label for="exampleInputEmail1">Account Number</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter account number"
                value={accnum}
                onChange={e => setacc(e.target.value)}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div>
              <label for="exampleFormControlSelect1">Type of account</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>SB</option>
                <option>CA</option>
                <option>RD</option>
                <option>CC</option>
                <option>TL</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Branch name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Branch name"
              value={branch}
              onChange ={e => setbranch(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Total deposite in Words</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Total deposite ammount in Words"
              value={amtwords}
              onChange={e => setamt(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Amount</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Total deposite ammount in Count : 5000"
              value={amtcount}
              onChange ={ e => setcount(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone number</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="8838144509"
              value={phn}
              onChange = {e => setphn(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={Display}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Challan;
