import { useEffect, useReducer, useState } from "react"

const Expense = ()=>{
    const[transaction , setTransaction] = useState([])
    const[title , setTitle] = useState("");
    const[amount , setAmount] = useState(0);
    const[date , setDate] = useState();
    const[category , setCategory]  = useState();
    const[total , setTotal] = useState(0);

    // const initialState={
    //   transaction :[],
    //   title:"",
    //   amount:0,
    //   date:"",
    //   category:"",
    //   total:0
    // }


    // const[state, trxnDispatch] = useReducer(reducer,initialState);
    
    
    const addTransaction = ()=>{
        if(title.trim!="" && amount!=""){
            const objects = {
                title: title,
                amount: amount,
                date: date,
                category: category
            }
            setTransaction(t=>[...t ,objects])
            
        }

        
    }
    useEffect(()=>{
      const sum = transaction.reduce((acc, curr)=>{
        return acc+Number(curr.amount);
      },0);
      setTotal(sum);
    },[transaction])

    const titleHandler = (e) =>{
        setTitle(e.target.value);
    }
    const dateHandler = (e)=>{
        setDate(e.target.value);
    }
    const amountHandler = (e)=>{
        setAmount(e.target.value);
    }
    const categoryHandler = (e)=>{
      setCategory(e.target.value)
    }

    const del = (idx)=>{
      const newTrxn = transaction.filter((_,i)=> i!==idx);
      setTransaction(newTrxn);
      
      
    }
    

    return(
        <>
        <div>
          <div className="brand">
            <h1>EXpense</h1>
            <p>Track every expense like a ditector</p>
          </div>
      

      <div className="main-container">
        <div className="heading1">
          <h1>Enter Transaction details</h1>
        </div>
        <div className="expense-details">
          <input onChange={(e)=>titleHandler(e)} className="title" type="text" placeholder="Enter expense details" />
          <input onChange={(e)=>amountHandler(e)} className="amount" type="number" placeholder="Enter the amount" />
          <input onChange={(e)=>dateHandler(e)} className="date" type="date" />
            <select className="category" onChange={(e)=>categoryHandler(e)}>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing & rent">Housing & rent</option>
              <option value="Bills & Subscriptions">Bills & Subscriptions</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
            </select>
            <button onClick={addTransaction} className="add-btn">
              ADD
            </button>
            
        </div>
        <div className="heading2"><h1>
          Transactions
          </h1></div>
        <div className="transaction">
          <div className="list-titles">
            
            <h4>Title</h4>
          <h4>Amount</h4>
          <h4>Date</h4>
          <h4>Category</h4>
          <h4>Delete</h4>
          </div>
        </div>
        <ul>
            {/* <div className="Results">
                <li>
                    <div id="title" >
                        <p> Booked a hotel </p>
                    </div>

          <div id="amount">
            <p>
            10$
            </p>
          </div>
          
          <div id="date">
            <p>10 july , 2025</p>
          </div>

        <div id="category">
            <p >Travel</p>
        </div>

          </li>
            </div> */}
            {transaction.map((trxn ,idx)=> 
              <div className="Results">
                <li key={idx}>
                  <div id="title">
                    <p>{trxn.title}</p>
                  </div>
                  <div id="amount">
                    <p>{trxn.amount}</p>
                  </div>
                  <div id="date">
                    <p>{trxn.date}</p>
                  </div>
                  <div id="category">
                    <p>{trxn.category}</p>
                  </div>
                  <div onClick={()=>del(idx)} id="img">
                    <img src="./public/delete.png" width={30} alt="" />
                  </div>
                </li>
              </div>
            )}
        </ul>

        
      </div>
      <h1>Total: {total} </h1>
    </div>
        </>
    )
}
export default Expense