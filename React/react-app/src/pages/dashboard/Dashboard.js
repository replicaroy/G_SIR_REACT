
import LinkList from '../../components/linkList/LinkList'
import './Dashbord.css'
const obj={
    header:"Welcome to React Course",
    contact:[
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
const Dashboard=()=>{
    return(
        <div className="Dashbord">
            <h1>{obj.header}</h1>
         
            <LinkList linkArr={obj.contact} containerClass={'link_div'} linkClass={'link'}/>
        </div>
    )
}
export default Dashboard;