const ExpenseInfo = ({titleHandler, amountHandler ,dateHandler})=>{
    return(
        <>
        <input onChange={(e)=>titleHandler(e)} className="title" type="text" maxLength={20} placeholder="Enter expense details" />
          <input onChange={(e)=>amountHandler(e)} className="amount" type="number" placeholder="Enter the amount" />
          <input onChange={(e)=>dateHandler(e)} className="date" type="date" />
        </>
    )
}
export default ExpenseInfo