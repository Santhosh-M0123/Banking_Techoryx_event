var router = require('express').Router();
var con = require("./DB_connection");


router.post("/postChallan" , (req,res) => {
    let accname = req.body.accountnum;
    let ph = req.body.phnnum;
    let acctype = req.body.acctype;
    let amtwords = req.body.amtwords;
    let count = req.body.amtcount;
    let branch = req.body.branch
    let datePost = req.body.datePost;

    let query = "INSERT INTO challan_form(account_num , branch_name , date_chellan , account_type , total_deposite, total_deposite_amt , phn_num) values (? , ? ,? ,? ,? ,? ,?)"

    con.query( query , [accname , branch , datePost, acctype , amtwords , count , ph] , (err,data) => {
        if (err){
            console.log(err)
        }else{
            res.send("Inserted");
        }
    } )
})

router.get("/dash" , (req,res) =>{
    let query = "select * from challan_form"

    con.query(query , (err,data) => {
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})


// router.post("/mail" , (req,res) => {
//     let mailTransporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'xyz@gmail.com',
//             pass: '*************'
//         }
//     });

//     let mailDetails = {
//         from: 'xyz@gmail.com',
//         to: 'abc@gmail.com',
//         subject: 'Test mail',
//         text: 'Node.js testing mail for GeeksforGeeks'
//     };
// })

router.post('/user' , (req,res) => {
    let d = req.body.user;

    let q = "select * from challan_form where account_num = ?"

    con.query(q , [d] , (err,data) => {
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})


module.exports = router;