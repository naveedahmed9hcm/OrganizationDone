import React,  { useState, useEffect } from 'react';
import { fetchData, postData } from '../HttpService/HttpService'
import "../css/style.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";

function Department() {
   
    const [mydatas, setMydata] = useState([]);
    const [mycity, setCitys] = useState([]);
    const [mystate, setMystate] = useState ([])

    const [DepartName, setDepartName] = useState ([])
    const [PhoneNo, setPhoneNo] = useState ([])
    const [Email, setEmail] = useState ([])

    const [mycityd, setCityd] = useState([]);
    // OnChanged Function

    const handleCountrySelect = (event) => {
        getApiState(event.target.value)
    }

const handleStateSelect = (event) => {
    getApiCity(event.target.value)
}

const handleCitySelect = (event) => {
    setCityd(event.target.value)
}

const handleInputDepart = (event) => {
    setDepartName(event.target.value)
}

const handleInputPhone = (event) => {
    setPhoneNo(event.target.value)
}

const handleInputEmail = (event) => {
    setEmail(event.target.value)
}

    const handlePostData = async (event) => {
    
       var payload ={
            'organisationid': "4e0aa802-6697-4260-97dc-84e67aabc097",
            'suborganisationid': "63daf138-22aa-430d-a7a1-470a2773b862",
            'cityid': mycityd,
            'departmentname':DepartName,
            'phoneno': PhoneNo,
            'email':Email
        }

        try {
          const result = await postData( "/Department/CreateDepartment", payload);
          console.log(result);
        } catch (error) {
          console.error('Error posting data:', error);
        }
     };

    // Integration Get Country

      const GetCountryData = async() => {
      const res = await axios.get("http://localhost:5247/api/Department/GetAllCountry");
      setMydata(res.data.Response) } 
     
      // Integration Get State
      const getApiState = async(countryid) => {  
         const res = await axios.get("http://localhost:5247/api/Department/GetAllState?countryid="+ countryid +""); 
         setMystate(res.data.Response) 
     } 

        // Integration Get Cities
        const getApiCity = async(stateid) => {  
        const res = await axios.get("http://localhost:5247/api/Department/GetAllCity?stateid="+ stateid +"");
        setCitys(res.data.Response)  } 
            
              useEffect(() => {
                GetCountryData();
              }, []);   

    const [isMenuOpen, setMenuOpen]  = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    };

   
  const [theme, setTheme] = useState("theme");

    const toggleTheme = () => {

        if (theme === "dark-theme"){
            setTheme("light-theme")
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
</div>
</div>
<div>
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
},  ], }, ]}
  className='labelside'
  >
</Menu>
      <ul>
<li> <Link to="/Board" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Board</Link> </li>

<li> <Link to="/Employee" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Employee Information</Link> </li>

<li> <Link to="/Medical" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Medical & Health</Link>  </li>

<li> <Link to="/Education" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Education History</Link> </li>

<li> <Link to="/Consent" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Consent & Authorized</Link> </li>

</ul> </div> </div> </div>  </div>
                <div className='Acc-from'>
                    <div className='navbar11'>
                        <input type='checkbox' name='' id='chk1' />
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
                          <input type="checkbox" onClick={() => toggleTheme()} />
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
   
      <h2> Department </h2>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Country</label>
            <select className='sect' onChange={handleCountrySelect}>
        { mydatas.map( (Mdata) => (
            <option key={ Mdata.CountryId} value={Mdata.CountryId}> <p>{Mdata.Countryname} </p></option>
        ))
        }
</select>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>States</label>
            <select className='sect' onChange={handleStateSelect}> 
            { mystate.map( (Sdata) => (
            <option key={ Sdata.Stateid} value={Sdata.Stateid}> <p>{Sdata.StateName} </p></option>
        )) }  
            </select>
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Cities</label>
            <select className='sect' onChange={handleCitySelect} >
        { mycity.map( (Cdata) => (
            <option key={ Cdata.city} value={Cdata.city}> <p>{Cdata.Cityname} </p></option>
        )) }
       </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Department Name</label>
                <input type="text" className="form-control" onChange={handleInputDepart} id='departmentname'  />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Phone No</label>
                <input type="number" className="form-control" onChange={handleInputPhone} id='phoneno' />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Email</label>
                <input type="text" className="form-control" onChange={handleInputEmail} id='email' />
            </div>
        </div>
    </div>
</div>

<button onClick={handlePostData} type='submit' className='Tbtn'>Save</button>
 
   </div>
    </div>
        </>
    )
}
export default Department;