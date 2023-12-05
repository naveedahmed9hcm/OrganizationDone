import React, { useState, useEffect } from 'react';
import "../css/style.css";
import axios from "axios";
import { Menu } from "antd";
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

function Education() {

  // Education History Integration 

  const [study, setStudy] = useState(
    {
      "degrees": "",
      "major": "", 
      "schoolinstitution":"", 
      "graduationyear":"",
      "gpa":"", 
      "transcripts":"", 
     })  

      const handle = (event) => {
        setStudy ({... study, [event.target.id]: event.target.value})
      }

      function saveStudy(event){
        event.preventDefault()
        axios.post("https://localhost:7035/api/EducationInformation/CreateEducationInformation", study)
        .then(response => console.log(response))
        .catch(err => console.log(err)) 
      }

  // Perform record Integration

  const [record, setRecord] = useState(
    {
      "evaluationdate": "",
      "supervisor": "", 
      "performancerating":"", 
      "addcomments":"",
      "goalsset":"", 
      "projectoutcomes":"", 
      "developmentplans": "",
     })  

      const handlee = (event) => {
        setRecord ({... record, [event.target.id]: event.target.value})
      }

      function saveRecord(event){
        event.preventDefault()
        axios.post("https://localhost:7035/api/PerformanceInformation/CreatePerformanceInformation", record)
        .then(response => console.log(response))
        .catch(err => console.log(err)) 
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

<div >

<div id='sidemenu'  style={{
  width: '220px',
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
        <Accordion.Header>Education History Table:</Accordion.Header>


        <Accordion.Body>
                <div className='form-head'>
                <h2> Education History Table:</h2>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                             <span className="btn-2"> Customize </span>
                                      </button>
             </div>

     <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>
<form onSubmit={saveStudy}>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Degree</label>
                <input type="text" className="form-control" onChange={handle} placeholder='Degree' id='degrees' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Major</label>
                <input type="text" className="form-control" onChange={handle} placeholder='Major' id='major' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">School/Institution</label>
                <input type="text" className="form-control" onChange={handle}placeholder='School Institution' id='schoolinstitution' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Graduation Year</label>
                <input type="date" className="form-control" onChange={handle}placeholder='Graduation Year' id='graduationyear' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">GPA</label>
                <input type="number" className="form-control" onChange={handle}placeholder='GPA' id='gpa' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Transcripts</label>
                <input type="text" className="form-control" onChange={handle}placeholder='Transcripts' id='transcripts' required />
            </div>
        </div>

    </div>
</div>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
 
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
      <th scope="row">Degree</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Major</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">School/Institution</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Graduation Year </th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">GPA</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Transcripts</th>
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
        <Accordion.Header>Performance Records Table:</Accordion.Header>
        <Accordion.Body>
                <div className='form-heads'>
                <h2>Performance Records Table:</h2>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="next" >
                <span className="btn-0">Customize</span>
                       </button>
             </div>

     <div id="carouselExampleControlss"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>
<form onSubmit={saveRecord}>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Evalution Date</label>
                <input type="date" className="form-control"onChange={handlee} placeholder=' Evaluation Date' id='evaluationdate' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Supervisor</label>
                <input type="text" className="form-control" onChange={handlee}placeholder=' Supervisor' id='supervisor' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Performance Rating </label>
                <input type="text" className="form-control" onChange={handlee} placeholder=' Performance Rating' id='performancerating' required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Goals Set</label>
                <input type="text" className="form-control"onChange={handlee} placeholder=' Goals Set' id='goalsset' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Award </label>
                <input type="text" className="form-control" onChange={handlee} placeholder='Add Comments' id='addcomments' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Development plan</label>
                <input type="text" className="form-control" onChange={handlee} placeholder='Development Plans' id='developmentplans' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Project Outcome</label>
                <input type="text" className="form-control" onChange={handlee} placeholder=' projectoutcomes' id='projectoutcomes' required />
            </div>
        </div>
    </div>
</div>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
 
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
      <th scope="row">Evalution Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Supervisor</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Performance Rating</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Goals Set</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Award</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Development Plan</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Project Outcomes</th>
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
        <Accordion.Header> Skill Record & Competence Table: </Accordion.Header>
        <Accordion.Body>
                <div className='forms-head'>
                <h2> Skill Record & Competence Table:</h2>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="next" >
                 <span className="btn-1">Customize</span>
                </button>
             </div>
     <div id="carouselExampleControlsss"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
    <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>
<form>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Skill Name</label>
                <input type="text" className="form-control"  required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Proficiency Level</label>
                <input type="text" className="form-control"  required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Certification </label>
                <input type="text" className="form-control"  required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Certification Date</label>
                <input type="date" className="form-control"   required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Training/Certification Provider</label>
                <input type="text" className="form-control"  required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Skill Assessment Scores</label>
                <input type="number" className="form-control" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Skill Description </label>
                <input type="text" className="form-control"  required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Issuing Authority </label>
                <input type="text" className="form-control" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Legal Status </label>
                <input type="text" className="form-control" required />
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
      <th scope="row">Skill Name</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Proficiency Level</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Certification </th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Certification Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Training/Certification Provider</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Skill Assessment Scores</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Skill Description</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Issuing Authority</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Legal Status</th>
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
    <button className='btn-1'  onClick={() => navigate("/Formforth")}> Next</button>
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

export default Education;

