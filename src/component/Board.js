import React,  { useState, useEffect } from 'react';
import "../css/style.css";
import { Menu } from "antd";
import ApexChart  from 'react-apexcharts';
import { Chart as GoogleChart } from 'react-google-charts';
import { Link, useNavigate } from "react-router-dom";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ];

function Board() {

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
    });

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

<div >

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

                 <div className='Board'>
                    <div className='row' >
                    
                        <div className= 'Box1 col-7' >
                          <h2> Employee Analytics </h2>
                          <p>Employee Summary</p>

                            <div className='largebox'>
                          <div className='row ' >
                            <div className='col-sm-12 col-md-6 col-lg-3 small1'>
                            <h5>300</h5>
                            <h4>Total Employee</h4>
                            <p>+5% from yesterday</p>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-3 small2'>
                            <h5>300</h5>
                            <h4>Total Employee</h4>
                            <p>+5% from yesterday</p>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-3 small3'>
                            <h5>300</h5>
                            <h4>Employee Join </h4>
                            <p>+5% from yesterday</p>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-3 small4'>
                            <h5>300</h5>
                            <h4>Employee Resign</h4>
                            <p>+5% from yesterday</p>
                            </div>
                          </div>
                          </div>
                        </div>
                        <div className=' Box2 col-5'>
                        <ApexChart
      className="Dashboard"              
      type='bar'
    
      series={ [
        {
          name:"Male",
          data:[4, 5, 8, 3, 9, 6, 4]
        },
        {
          name:"Female",
          data:[2, 6, 9, 6, 3, 2, 5]
        }
      ]}

      options={{
          title:{ 
           text: "No of Employees",
           style: {fontSize:15, color: '--text-color'}
          },

          subtitle:{
              text: "No of Employees",
              style: {fontSize:10, color: '--text-color'}
          },

          xaxis:{
            tickPlacement:'on',
            categories:['Frontend', 'Backend', 'UI-UX ', 'Business ', 'Project', 'Sales', 'Operation'],
          },

          legend:{
            show: 'true',
            position: 'bottom'
          }, 
      }}
      >
      </ApexChart>
     </div>                    
      </div>
      
        <div className='Board2'>
       <div className='row'>
        <div className='medium1  col-4'>
         <h2> Employee Mapping By Country </h2>
         <GoogleChart 
    chartEvents={[
    {
      className: "mapcountry",
      eventName: "select",
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 0) return;
        const region = data[selection[0].row + 1];
        console.log("Selected : " + region);
      },
    },
  ]}
   chartType="GeoChart"
   width="100%"
   height="215px"
   data={data}
/>
        </div>

      <div className='medium2  col-4'>
      <ApexChart
      className="Dashboard2"              
      type='line'
      // width={350}
      height={250}
    
      series={ [
        {
          name:"Product 1",
          data:[4, 5, 8, 3, 6]
        },

        {
          name:"Product 2",
          data:[2, 6, 9, 6, 7]
        }, 

      ]}

      options={{
          title:{ 
            text: "Primary Text",
            style: {fontSize:12, color: '--text-color'}
          },

          subtitle:{
              text: "Secondary Text",
              style: {fontSize:'10', color: '--text-color'}
          },

          xaxis:{
            tickPlacement:'on',
            categories:['Mon', 'Tue', 'Wed', 'Thur', 'Fri',],
          },

          legend:{
            show: 'true',
            position: 'bottom'
          },

      }}
      >
      </ApexChart>
                          </div>

                          <div className='medium3 col-xxl-4 col-xl-4 col-4'>

                          <ApexChart
      className="Dashboard3"              
      type='bar'
      // width={260}
       height={250}
    
      series={ [
        {
          name:"Product 1",
          data:[4, 5, 8, 3,]
        },

        {
          name:"Product 2",
          data:[2, 6, 9, 6,]
        },

        {
          name:"Product 3",
          data:[6, 8, 3, 5,]
        },

      ]}

      options={{
          title:{ 
            text: "Primary Text",
            style: {fontSize:12, color: '--text-color'}
          },

          subtitle:{
              text: "Secondary Text",
              style: {fontSize:'10', color: '000'}
          },

          xaxis:{
            tickPlacement:'on',
            categories:['Q1', 'Q2', 'Q3', 'Q4'],
          },

          legend:{
            show: 'true',
            position: 'bottom'
          },
      }}
      >
      </ApexChart>                    
                          </div>
                      </div>
                 </div>
                 </div>                 
                </div>
            </div>
        </>
    )
}

export default Board;