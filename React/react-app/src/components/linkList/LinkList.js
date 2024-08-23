
import { Link } from "react-router-dom"

const LinkList=({linkArr=[],containerClass="",linkClass=""})=>{
    return(
        <div className={containerClass}>
        {
            linkArr.map((item)=>{
                return <Link className={linkClass} key={item.key} to={`/${item.key}`}>{item.label}</Link>
        })}
    </div>
)}
export default LinkList