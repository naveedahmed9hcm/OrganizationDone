import React,  { useState, useEffect } from 'react';
import axios from "axios";
import { fetchData, postData } from '../HttpService/HttpService'
import { Menu } from "antd";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

function Team() {
    
const [mydata, setMyData] = useState ({
    teamname: "",
    teamlead: "",
  })

     const handleInput = (event) => {
        setMyData ({... mydata, [event.target.id]: event.target.value})
      }

      const handlePostData = async (event) => {
        event.preventDefault()
        console.log(mydata, "mydata");
        try {
          const result = await postData( "/TeamInformation/CreateTeamInformation",mydata);
          // setPostDataResponse(result);
          console.log(result);
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };
      // Get Integration 

      const [mydatas, setMydata] = useState([]);
      const getApidata = async() => {
      const res = await axios.get("http://localhost:5247/api/TeamInformation/GetAllProject");
          setMydata(res.data.Response)
      } 
      console.log(mydatas);
        useEffect(() => {
          getApidata();
        }, []);

        // Integration Team Detail

    const [team, setTeam] = useState ({
        teammemberjoindate: "",
        teammemberenddate: "",
        teammemberjoinreason: "",
        teammemberendreason: "",
    })

    var handleInputs = (event) => {
    setTeam ({... team, [event.target.id]: event.target.value})
    }

    const handlePostDatas = async (event) => {
      event.preventDefault()
      console.log(mydata, "mydata");
        try {
          const result = await postData( "/TeamDetail/CreateTeamDetailInformation",team);
          // setPostDataResponses(result);
          console.log(result);
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };

         // Get Integration 

          const [Mydatas, setMydataa] = useState([]);

          const getApidatas = async() => {
          const ress = await axios.get("http://localhost:5247/api/TeamDetail/GetAllteam");
              setMydataa(ress.data.Response)
          } 
          console.log(mydatas);
            useEffect(() => {
              getApidatas();
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
             Role
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
}, ], },
  ]}
  className='labelside'
  >
</Menu>
<ul>
<li>
<Link to="/Board" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Dashboard</Link> 
</li>
<li>
 <Link to="/Employee" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Employee Information</Link> 
</li>
<li>
<Link to="/Medical" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Medical & Health</Link> 
</li>
<li>
<Link to="/Education" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Education History</Link> 
</li>
<li>
<Link to="/Consent" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Consent & Authorized</Link> 
</li>
</ul>  </div>  </div>  </div>  </div>
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
               
                    <h2> Team  </h2>
<div className="">
    <div className="row">
         <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Team</label>
            <select className='sect'>
            { mydatas.map( (Mdata) => (
            <option key={ Mdata.Projectid} value={Mdata.Projectid}> <p>{Mdata.Projectname} </p></option>
        ))
        }
        </select>
            </div>
        </div>
  
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Team Name</label>
                <input type="text" className="form-control" onChange={handleInput} id='teamname' required  />
            </div>
        </div>
       
    </div>
</div>

<div className="">
    <div className="row">
         <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Team Lead</label>
                <input type="text" className="form-control" onChange={handleInput} id='teamlead' required  />
            </div>
        </div>
       
    </div>
</div>

<button onClick={handlePostData} type='submit' className='Tbtn'>Save</button>
{/* {postDataResponse && <p>Post Response: {postDataResponse}</p>} */}



      <h2 className='teamheading'> Team Detail </h2>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Team Detail</label>
            <select className='sect'>
            { Mydatas.map( (Medata) => (
            <option key={ Medata.Teamid} value={Medata.Teamid}> <p>{Medata.Teamname} </p></option>
        ))
        }
        </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Team Member Join Date</label>
                <input type="date" className="form-control" onChange={handleInputs} id='teammemberjoindate'
                    />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Team Member End Date</label>
                <input type="text" className="form-control" onChange={handleInputs} id='teammemberenddate'
                   />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Team Member Join Reason</label>
                <input type="text" className="form-control" onChange={handleInputs} id='teammemberjoinreason'
                   />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Team Member End Reason</label>
                <input type="text" className="form-control" onChange={handleInputs} id='teammemberendreason'
                   />
            </div>
        </div>
    </div>
</div>

<button onClick={handlePostDatas} type='submit' className='Tbtn'>Save</button>
{/* {postDataResponses && <p>Post Response: {postDataResponses}</p>} */}

</div>
</div>
        </>
    )
}
export default Team;