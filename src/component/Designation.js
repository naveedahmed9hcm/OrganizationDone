import React,  { useState, useEffect } from 'react';
import { fetchData, postData } from '../HttpService/HttpService'
import { Menu } from "antd";
import axios from 'axios';
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

function Designation() {

    const [mydatas, setMydata] = useState([]);

    const [departmentid, setDepartmentid] = useState ([])
    const [designation, setDesignation] = useState ([])
    const [Createon, setCreateon] = useState ([])
    const [purpose, setPurpose] = useState ([])
    const [type, setType] = useState ([])

    const handleDeparSelect = (event) => {
        setDepartmentid(event.target.value)
    }

    const handleInputDesi = (event) => {
        setDesignation(event.target.value)
    }

    const handleInputCreat = (event) => {
        setCreateon(event.target.value)
    }

    const handleInputPurp = (event) => {
        setPurpose(event.target.value)
    }

    const handleInputtype = (event) => {
        setType(event.target.value)
    }

    const handlePostData = async (event) => {
     
       var data ={
            'departmentid':departmentid,
            'designation': designation,
            'createdon': Createon,
            'createdpurpose': purpose,
            'designationtype': type,
        }

        try {
          const result = await postData("/Designation/Createdesignation", data)
          console.log(result)
        } catch (error) {
          console.error('Error posting data:', error);
        }
      }

      // Get Integration 
     
      const getApidata = async() => {
      const res = await axios.get("http://localhost:5247/api/Designation/GetAllDepartment");
          setMydata(res.data.Response)
    }
      console.log(mydatas);
        useEffect(() => {
          getApidata();
        }, []);

    const [isMenuOpen, setMenuOpen]  = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    };

    const [theme, setTheme] = useState("theme");
    const toggleTheme = () => {
        if (theme === "dark-theme"){
            setTheme('light-theme')
        }
        else {
            setTheme ("dark-theme")
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const navigate = useNavigate();

    return (  
        <>
    <div className='form-data' style={{ display: 'flex', }}>

    <div className='sidebar'>

<img src="/images/Frame 1.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div className="imgic">
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>

<div className='imgic2'>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
</div> </div> <div>

<div id='sidemenu'  style={{
  width:  '220px',
  display: isMenuOpen ? 'none' : 'block',
}}
>
<h2>Homes</h2>
<img src="/images/Layer 1.png" />
<div className='sideline'>
<Menu 
onChange={(e) => window.location.href = e.target.value}
mode="inline"
items={[
    {
        label: "Organization",
        key: "Organization", 
        children: [
            {
                label: (
            <Link to="/">
             Department
            </Link>
          ),
          value: "/",
        },
        {
            label: (
        <Link to="/Designation">
         Designation
        </Link>
      ),
      value: "/Designation",
    },
    {
        label: (
            <Link to="/Project">
             Project
            </Link>
          ),
          value: "/Project",
          },
    {
        label: (
            <Link to="/Role">
              Role & Responsibilities
            </Link>
          ),
          value: "/Role",
        },
          {
              label: (
            <Link to="/Team">
             Team
            </Link>  
    ),
    value: "/Team",
}, ], }, ]}
  className='labelside'>
</Menu>
<ul>
<li> <Link to="/Board" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Dashboard</Link> </li>

<li> <Link to="/Employee" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Employee Information</Link> </li>

<li> <Link to="/Medical" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Medical & Health</Link> </li>

<li> <Link to="/Education" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Education History</Link> </li>

<li> <Link to="/Consent" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Consent & Authorized</Link> </li>

</ul> </div> </div> </div> </div>

                <div className='Acc-from'>
                    <div className='navbar11'>
                        <input type='checkbox' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
                                </form>
                        </div>
                        <ul>

                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                  
                        <div className='text'>     
                          <label className="switchh">
                          <input type="checkbox"  onClick={() => toggleTheme()} />
                      <span className="sliders"></span>
                                 </label>
                        </div>
                        <div className='text2'>
                           <p className='pra'> Welcome </p>
                           <p className='para'> Heydim (Admin) </p>
                        </div>

                        <div className='text3'>
                            <img src="/images/Ellipse 47.png" />
                        </div>
                        </ul>                   
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>
                    <h2> Designation </h2>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Department</label>
            <select className='sect' onChange={handleDeparSelect}>
            { mydatas.map( (Mdata) => (
            <option key={ Mdata.deparmentid} value={Mdata.deparmentid}>
                 <p>{Mdata.depname} </p>
                 </option>
        ))
        }
        </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Designation</label>
                <input type="text" className="form-control" onChange={handleInputDesi} id='designation' />
            </div> 
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">CreatedOn</label>
                <input type="date" className="form-control" onChange={handleInputCreat} id='createdon'/>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">CreatedPurpose</label>
                <input type="text" className="form-control" onChange={handleInputPurp} id='createdpurpose'/>
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Designation Type</label>
                <input type="text" className="form-control" onChange={handleInputtype}  id='designationtype'
                   />
            </div>
        </div>

    </div>
</div>

<button onClick={handlePostData} type='submit' className='Tbtn'>Save</button>
{/* {postDataResponse && <p>Post Response: {postDataResponse}</p>} */}
                       
                </div>
            </div>
        </>
    )
}
export default Designation;