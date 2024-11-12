import { NavLink, Outlet } from "react-router-dom"

const index = () => {
  return (
    <div className="common-layout w-100 h-100">
      <p className="topic-txt">New Medallion</p>
      <div className="d-flex align-items-center cus-gap-5">
        <NavLink to="/medallion/new-medallion" className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">1</span>Choose Owner
        </NavLink>
        <NavLink to="/" className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">2</span>Enter Medallion Details
        </NavLink>
        <NavLink to="/" className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">3</span>Decide Lease or Purchase
        </NavLink>
        <NavLink to="/" className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">4</span>Create Packet
        </NavLink>
        <NavLink to="/" className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">5</span>Execute Contract
        </NavLink>
      </div>
      <div className="py-4">
      <Outlet/>
      </div>
    </div>
  )
}

export default index