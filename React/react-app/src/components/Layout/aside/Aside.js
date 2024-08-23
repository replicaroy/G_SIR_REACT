import {Link} from 'react-router-dom'
import './aside.css'
const sidebarData={
    header:"Welcome To Dashbord",
    contact:[
        {
            key:"dashbord",
            label:"Dashboard"
        },
        {
            key:"profile",
            label:"Profile"
        },
        {
            key:"about",
            label:"About"
        },
        {
            key:"contact",
            label:"Contact"
        },
        {
            key:"help",
            label:"Help"
        }
    ]
}

function Aside(){
    
    return (
        <aside id="side_bar" >
           <h2>{sidebarData.header}</h2> 
           <div className="btn_div">
            {sidebarData.contact.map(hd=><Link to={hd.key} key={hd.key} className='btn'>{hd.label}</Link>
            ) }
           </div>
        </aside>
    )
}
export default Aside 