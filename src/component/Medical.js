import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Menu } from "antd";
import "../css/style.css";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link, useNavigate  } from "react-router-dom";


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="submit"
      style={{  background: 'rgb(67, 67, 222)', color: '#fff',  width: '133.58px', height: '37.11', }}
      onClick={decoratedOnClick}
      className='btn-7'
    >
      {children}
    </button>
  );
}

function Medical() {

  // Medical Integration 

  const Medicalurl = "https://localhost:7035/api/HealthMedicalInformation/CreateHealthInformation";

  const [medical, setMedical]  = useState( {
  "bloodtype": "",
  "allergies": "",
  "medicalconditions": "",
  "insuranceinformation": "",
  "lastmedicalcheckupdate": "",
  "emergencymedicalcontact": "",
 })

 function hendle(e) {
  const newMedical = {... medical}
  newMedical[e.target.id] = e.target.value
  setMedical(newMedical)
  console.log(newMedical)
}

function saveMedical(e) { 
  e.preventDefault();
  axios.post( Medicalurl,
     {
      bloodtype: medical.bloodtype,
      allergies: medical.allergies,
      medicalconditions: medical.medicalconditions,
      insuranceinformation: medical.insuranceinformation,
      lastmedicalcheckupdate: medical.lastmedicalcheckupdate,
      emergencymedicalcontact: medical.emergencymedicalcontact,
  })
  .then(res => console.log(res))
  .catch(err => console.error(err))
}

// Financial Integration

const Financialurl = "https://localhost:7035/api/FinancialInformation/CreateFinancialInformation";

const [fina, setFinancial]  = useState( {
  "accountnumber": "",
  "bankname": "",
  "branchname": "",
  "accounttype": "",
  "accounttitle": "",
 })

 function hendlee(e) {
  const newFinancial = {... fina}
  newFinancial[e.target.id] = e.target.value
  setFinancial(newFinancial)
  console.log(newFinancial)
}

function saveFinancial(e) { 
  e.preventDefault();
  axios.post( Financialurl,
     {
      accountnumber: fina.accountnumber,
      bankname: fina.bankname,
      branchname: fina.branchname,
      accounttype: fina.accounttype,
      accounttitle: fina.accounttitle,
  })
  .then(res => console.log(res))
  .catch(err => console.error(err))
}

// Information Integration

const informurl = "https://localhost:7035/api/EmployementInformation/CreateEmployementInformation";

const [info, setInfo]  = useState( {
  "startdate": "",
  "enddate": "",
  "companyname": "",
  "jobtitle": "",
  "employmenttype": "",
  "resignationreason": "",
  "jobresponsibilities": "",
  "workhoursschedules": "",
 })

function hendllee(e) {
  const newInformation = {... info}
  newInformation[e.target.id] = e.target.value
  setInfo(newInformation)
  console.log(newInformation)
}

function saveInfo(e) { 
  e.preventDefault();
  axios.post( informurl,
     {
      startdate: info.startdate,
      enddate: info.enddate,
      companyname: info.companyname,
      employmenttype: info.employmenttype,
      resignationreason: info.resignationreason,
      jobresponsibilities: info.jobresponsibilities,
      workhoursschedules: info.workhoursschedules,
      jobtitle: info.jobtitle,
  })
  .then(res => console.log(res))
  .catch(err => console.error(err))
}

  const [isMenuOpen, setMenuOpen]  = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    const toggleTheme = () => {
        if (theme === "dark-theme"){
            setTheme('light-theme')
        }
        else {
            setTheme ("dark-theme")
        }
    };


    const [theme, setTheme] = useState("theme");

    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    const navigate = useNavigate();

  return (
    <>
      
      <div className='form-data'>



      <div className='sidebar'>

<img src="/images/Frame 1.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div className="imgic">
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<img src="/images/Vector.png" onClick={toggleMenu}/>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu}/>

<div className='imgic2'>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
</div>

</div>

<div>

<div id='sidemenu'  style={{
  width: '220px',
  display: isMenuOpen ? 'none' : 'block',
  // flex: isMenuOpen ? 1 : 0,
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

</ul>
</div>
</div>

</div>

</div>

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
        <Accordion defaultActiveKey="0">
          <div className='first-accordian'>
      <Accordion.Item eventKey="0">
      <div className='Accitem'>
        <Accordion.Header>Health and Medical Information Table:</Accordion.Header>


        <Accordion.Body>
                <div className='form-head'>
                <h2> Health and Medical Information Table:</h2>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                             <span className="btn-2"> Customize </span>
                                      </button>
                   {/* <button>Customize</button> */}
             </div>

     <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>
<form onSubmit={saveMedical}>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Blood Type</label>
                <input type="text" className="form-control" onChange={(e) => hendle(e)}value={medical.bloodtype} placeholder='First Name' id='bloodtype' required  />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Allergies</label>
                <input type="text" className="form-control" onChange={(e) => hendle(e)}value={medical.allergies} placeholder='Allergies' id='allergies' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Medical Conditions</label>
                <input type="text" className="form-control"onChange={(e) => hendle(e)}value={medical.medicalconditions} placeholder='Medical Conditions' id='medicalconditions'required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Insurance Information</label>
                <input type="text" className="form-control"onChange={(e) => hendle(e)}value={medical.insuranceinformation} placeholder=' Insurance Information' id='insuranceinformation' required />
            </div>
        </div>
    </div>
</div>


<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Last Medical Checkup Date</label>
                <input type="date" className="form-control" onChange={(e) => hendle(e)}value={medical.lastmedicalcheckupdate} placeholder='Last Medical Check Update' id='lastmedicalcheckupdate' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Emergency Medical Contact</label>
                <input type="number" className="form-control"onChange={(e) => hendle(e)}value={medical.emergencymedicalcontact} placeholder='Emergency Medical Contact' id='emergencymedicalcontact' required />
            </div>
        </div>

    </div>
</div>



<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1' type='submit'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>
</form>
</div>
    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col">Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Blood Type</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Allergies</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Medical Conditions</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Insurance Information</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Last Medical Checkup Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Emergency Medical Contact</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
        </Accordion.Body>


        </div>
      </Accordion.Item>
      </div>

    <div className='middle-accordian'>
      <Accordion.Item eventKey="1">
      <div className='Accitem'>
        <Accordion.Header>Financial Information Table:</Accordion.Header>


        <Accordion.Body>
                <div className='form-heads'>
                <h2>Financial Information Table:</h2>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="next" >
                <span className="btn-0">Customize</span>
                       </button>
             </div>

     <div id="carouselExampleControlss"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>
<form onSubmit={saveFinancial}>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Bank Account Number</label>
                <input type="number" className="form-control" onChange={(e) => hendlee(e)}value={fina.accountnumber} placeholder='Account Number' id='accountnumber' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Bank Name</label>
                <input type="text" className="form-control" onChange={(e) => hendlee(e)}value={fina.bankname} placeholder=' Bank Name' id='bankname'required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Account Type </label>
                <input type="text" className="form-control" onChange={(e) => hendlee(e)}value={fina.accounttype} placeholder='Account Type' id='accounttype' required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Bank Branch</label>
                <input type="text" className="form-control" onChange={(e) => hendlee(e)}value={fina.branchname} placeholder='Branch Name' id='branchname' required />
            </div>
        </div>
    </div>
</div>


<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Account Title</label>
                <input type="text" className="form-control" onChange={(e) => hendlee(e)}value={fina.accounttitle} placeholder='Account Title' id='accounttitle' required />
            </div>
        </div>

    </div>
</div>



<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1' type='save'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>
</form>
</div>
    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col">Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Bank Account Number</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Bank Name</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Account Title</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Bank Branch</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Account Type</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
        </Accordion.Body>
        </div>
      </Accordion.Item>
      </div>
      <div className='last-accordian'>
      <Accordion.Item eventKey="2">
      <div className='Accitem'>
        <Accordion.Header> Employment History Table: </Accordion.Header>
        <Accordion.Body>
                <div className='forms-head'>
                <h2> Employment History Table:</h2>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="next" >
                 <span className="btn-1">Customize</span>
                </button>
             </div>

     <div id="carouselExampleControlsss"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>
<form onSubmit={saveInfo}>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Start Date</label>
                <input type="date" className="form-control" onChange={(e) => hendllee(e)}value={info.startdate} placeholder='Start Date' id='startdate' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">End Date</label>
                <input type="date" className="form-control" onChange={(e) => hendllee(e)}value={info.enddate} placeholder='End Date' id='enddate' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Company Name </label>
                <input type="text" className="form-control" onChange={(e) => hendllee(e)}value={info.companyname} placeholder='Company Name' id='companyname' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Employment Type</label>
                <input type="text" className="form-control"  onChange={(e) => hendllee(e)}value={info.employmenttype} placeholder='Employment Type' id='employmenttype'  required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Resignation Reason</label>
                <input type="text" className="form-control"  onChange={(e) => hendllee(e)}value={info.resignationreason} placeholder='Resignation Reason' id='resignationreason' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Job Responsibilities</label>
                <input type="text" className="form-control"  onChange={(e) => hendllee(e)}value={info.jobresponsibilities} placeholder='Job Responsibilities' id='jobresponsibilities'  required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Work Hour and Schedules </label>
                <input type="text" className="form-control"  onChange={(e) => hendllee(e)}value={info.workhoursschedules} placeholder='Work Hours Schedules' id='workhoursschedules' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Job Title Description </label>
                <input type="text" className="form-control"  onChange={(e) => hendllee(e)}value={info.jobtitle} placeholder='Job Title' id='jobtitle' required />
            </div>
        </div>
    </div>
</div>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>
</form>
</div>
    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col">Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Start Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">End Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Company Name</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">File</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Employment Type</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Resignation Reason</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Job Responsibilities</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Work Hours and Schedules</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Job Title Description</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'  onClick={() => navigate("/Formthree")}> Next </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
 </Accordion.Body>
       
        </div>
      </Accordion.Item>
      </div>
    </Accordion>

    </div>
    </div>
    </>
  )
}

export default Medical;
