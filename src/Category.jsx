
const Category = ({filter , filterHandler})=>{
    return (
        <>
        <div className="card" style={{display: filter?"flex":"none"}}>
        <select className="category" onChange={(e)=>filterHandler(e)}>
              <option value="">Select category</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing & rent">Housing & rent</option>
              <option value="Bills & Subscriptions">Bills & Subscriptions</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
        </select>
      </div>
        </>
    )
}
export default Category