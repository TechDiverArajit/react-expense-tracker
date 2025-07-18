import { useEffect, useReducer, useState } from "react"
import Category from "./Category";
import Listitems from "./ListItems";
import ExpenseInfo from "./ExpenseInfo";

const Expens = ()=>{
    const[transaction , setTransaction] = useState(()=>{
      return JSON.parse(localStorage.getItem("trxn"))||[];
    })
    const[title , setTitle] = useState("");
    const[amount , setAmount] = useState(0);
    const[date , setDate] = useState();
    const[category , setCategory]  = useState("");
    const[total , setTotal] = useState(0);
    const[filterCat , setFilterCat] = useState("");
    const[filter , setFilter] = useState(false);
    const[filteredTrxn , setFilteredTrxn] = useState([]);
    

    // const initialState={
    //   transaction :[],
    //   title:"",
    //   amount:0,
    //   date:"",
    //   category:"",
    //   total:0
    // }

    const filterHandler=(e)=>{
      setFilterCat(e.target.value);
      
    }

    

    // const[state, trxnDispatch] = useReducer(reducer,initialState);
    
    
    const addTransaction = ()=>{
        if(title.trim!="" && date!="" && category!="" && amount!=""){
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
      localStorage.setItem("trxn" , JSON.stringify(transaction))
      if(filterCat){
        const cat = transaction.filter((ele)=>ele.category==filterCat);
        setFilteredTrxn(cat);
        const sum1 = cat.reduce((acc, curr)=>{
        return acc+Number(curr.amount);
        },0)
        setTotal(sum1);
      }else{
        const sum = transaction.reduce((acc, curr)=>{
        return acc+Number(curr.amount);
      },0);
      setTotal(sum);
      }
      
      
    },[transaction,filterCat])

    

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
    const fil = ()=>{
      setFilter(!filter);
      
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
          <ExpenseInfo titleHandler={titleHandler} dateHandler={dateHandler} amountHandler={amountHandler}/>
            <select className="category" onChange={(e)=>categoryHandler(e)}>
                <option value="">Select</option>
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
            <Listitems filterCat={filterCat} transaction={transaction} filteredTrxn={filteredTrxn} del={del}/>
        </ul>

        
      </div>
      <h1>Total: ₹{total} </h1>
      <div onClick={fil} className="filter">
        <img src="/filter.png" width={50} alt="" />
        <h4>Filter </h4>
      </div>
      
      <div className="add-trxn">
        <img src="/add.png" alt="" />
      </div>

      <Category filter={filter} filterHandler={filterHandler} />
    </div>
        </>
    )
}
export default Expens