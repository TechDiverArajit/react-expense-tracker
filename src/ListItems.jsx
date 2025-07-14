const Listitems = ({filterCat , transaction , filteredTrxn})=>{
    return(
        <>
        {filterCat==""?transaction.map((trxn ,idx)=> 
              <div className="Results">
                <li key={idx}>
                  <div id="title">
                    <p>{trxn.title}</p>
                  </div>
                  <div id="amount">
                    <p>₹{trxn.amount}</p>
                  </div>
                  <div id="date">
                    <p>{trxn.date}</p>
                  </div>
                  <div id="category">
                    <p>{trxn.category}</p>
                  </div>
                  <div  onClick={()=>del(idx)} id="img">
                    <img src="/src/assets/delete.png" width={30} alt="" />
                  </div>
                </li>
              </div>
            ):filteredTrxn.map((trxn ,idx)=> 
              <div className="Results">
                <li key={idx}>
                  <div id="title">
                    <p>{trxn.title}</p>
                  </div>
                  <div id="amount">
                    <p>₹{trxn.amount}</p>
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
        </>
    )
}
export default Listitems