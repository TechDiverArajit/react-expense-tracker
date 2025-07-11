import { useState } from "react"

const Expense = ()=>{
    const[transaction , setTransaction] = useState([])
    const[title , setTitle] = useState("");
    const[amount , setAmount] = useState();
    const[date , setDate] = useState();
    const[category , setCategory]  = useState();
    
    const addTransaction = ()=>{
        if(title.trim!=""){
            const objects = {
                title: title,
                amount: amount,
                date: date,
                category: category
            }
            setTransaction(t=>[...t ,objects])
            
        }
        
    }

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
    

    return(
        <>
        <div>
      <h1>EXpense</h1>
      <p>Track every expense like a ditector</p>

      <div className="main-container">
        <div className="expense-details">
          <input onChange={(e)=>titleHandler(e)} className="title" type="text" placeholder="Enter expense details" />
          <input onChange={(e)=>amountHandler(e)} className="amount" type="number" placeholder="Enter the amount" />
          <input onChange={(e)=>dateHandler(e)} className="date" type="date" />
            <select onChange={(e)=>categoryHandler(e)}>
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
            {transaction.map((trxn)=> 
              <div className="Results">
                <li>
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
                </li>
              </div>
            )}
        </ul>

        
      </div>
    </div>
        </>
    )
}
export default Expense