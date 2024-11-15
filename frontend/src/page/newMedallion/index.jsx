import { NavLink, Outlet } from "react-router-dom"

const index = () => {
  const ownerDetail=[
    {
        label:"Case Number",
        value:"NEWMED123"         
    },
    {
        label:"Case Status",
        value:"In Progress"         
    },
    {
        label:"Created On",
        value:"10/24/2024"         
    },
];
  return (
    <div className="common-layout w-100 h-100">
      <p className="topic-txt">New Medallion</p>
      <div className="d-flex align-items-center cus-gap-5">
        <NavLink to="/medallion/new-medallion" end  className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">1</span>Choose Owner
        </NavLink>
        <NavLink to="/medallion/new-medallion/medallion-detail" className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">2</span>Enter Medallion Details
        </NavLink>
        <NavLink to="/medallion/new-medallion/create-packet" className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">3</span>Create Packet
        </NavLink>
        <NavLink to="/medallion/new-medallion/lease-detail" className={({isActive})=>[isActive? "active":"" ,"step-menu d-flex align-items-center gap-2 text-grey"].join(" ")}>
        <span className="d-flex align-items-center justify-content-center rounded-circle">4</span>Enter Lease Details
        </NavLink>
      </div>
      <div className="d-flex align-items-center gap-5 py-4 ">
            {
            ownerDetail.map(({label,value},idx)=>{
            return (<div key={idx}>
                <p className="text-grey mb-0">{label}</p>
                <p className="regular-semibold-text">{value}</p>
            </div>)
            })
            }
        </div>
      <div className="py-4">
      <Outlet/>
      </div>
    </div>
  )
}

export default index