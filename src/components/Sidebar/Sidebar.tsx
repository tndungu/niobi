import React,{useState} from 'react'
import { FaBars, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Sidebar = ({children} :any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItems=[
        {
            path:"/",
            name:"dashboard",
            icon:<FaTh/>
        },
        {
            path:"/entity",
            name:"Entity",
            icon:<FaUserAlt/>
        },
        {
            path:"/admin",
            name:"Admin",
            icon:<FaRegChartBar/>
        },
        {
            path:"/payables",
            name:"Payables",
            icon:<FaCommentAlt/>
        },
        {
            path:"/suppliers",
            name:"Suppliers",
            icon:<FaShoppingBag/>
        },
        {
            path:"/payments",
            name:"Payments",
            icon:<FaThList/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaUsers/>
        },
    ]

  return (
    <div className='container'>
        <div style={{width:isOpen ? "250px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display:isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                <div style={{marginLeft:isOpen ? "50px" : "0px"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link">  
                        <div className="icon">{item.icon}</div>
                        <div style={{display:isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  );
};
