const Expense = ()=>{
    return(
        <>
        <div>
      <h1>EXpense</h1>
      <p>Track every expense like a ditector</p>

      <div className="main-container">
        <div className="expense-details">
          <input className="title" type="text" placeholder="Enter expense details" />
          <input className="amount" type="number" placeholder="Enter the amount" />
          <input className="date" type="date" />
            <select>
              <option value="">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing & rent">Housing & rent</option>
              <option value="Bills & Subscriptions">Bills & Subscriptions</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
            </select>
            <button className="add-btn">
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

        <div className="Results">
            <ul>
                <li><p>
            Booked hotel
          </p>
          <p>
            10$
          </p>
          <p>10 july , 2025</p>
          <p>Travel</p></li>
            </ul>
          
        </div>
      </div>
    </div>
        </>
    )
}
export default Expense