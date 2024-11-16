import React from 'react'
import styled from 'styled-components'
import { Mainmenu } from '../Components/Navbar/Mainmenu'
import Home from '../Components/Navbar/Home'
import Attendancelist from '../Components/Navbar/Attendancelist'
import Navbar from '../Components/Navbar/Navbar'

function Attendance() {

  const class_V = [
    {
        name: 'Siddique',
        Admissionnum: 'AD9834566',
        rollno: 8956,
        class: 'V',
        section: 'A',
        absent: 'Absent',
        present: 'Present',
        halfday: 'Half day',
        leave: 'Leave'
    },
    {
        name: 'vikky',
        Admissionnum: 'AD9834566',
        rollno: 8956,
        class: 'V',
        section: 'A',
        absent: 'Absent',
        present: 'Present',
        halfday: 'Half day',
        leave: 'Leave'
    }
];

const class_VI = [
    {
        name: 'naren',
        Admissionnum: 'AD9834566',
        rollno: 8956,
        class: 'VI',
        section: 'B',
        absent: 'Absent',
        present: 'Present',
        halfday: 'Half day',
        leave: 'Leave'
    },
    {
        name: 'sam',
        Admissionnum: 'AD9834566',
        rollno: 8956,
        class: 'VI',
        section: 'B',
        absent: 'Absent',
        present: 'Present',
        halfday: 'Half day',
        leave: 'Leave'
    }
];
  
const classes = [class_V, class_VI];

const studentCount = classes.flat().length;
const classCount = classes.length;

  const Studentdetails = [
    {
      name:'Total Students',
      percentage:'+37.88%',
      present: studentCount,
      lastyear:'Compare from last year',
      icons:<i class="fa-regular fa-user-graduate"></i>,
    },
    {
      name:'Total Classes',
      percentage:'+20%',
      present: classCount,
      lastyear:'Compare from last year',
      icons:<i class="fa-solid fa-memo"></i>,
    },
    {
      name:'Total Present',
      percentage:'-12%',
      present:1759,
      lastyear:'Compare from last year',
      icons:<i class="fa-regular fa-user-group"></i>,
    },
    {
      name:'Total Absent',
      percentage:'+20.88%',
      present:50,
      lastyear:'Compare from last year',
      icons:<i class="fa-regular fa-user-group"></i>,
    }
]

  return (
    <Stylecomponent>
    <div className='width-container'>
    <div className='flex-container'>
      <div className='Attendence-container-flex'>
      <div className='Attendence-container'>
       <div className='container-a-one'>
          <h3>Attendance</h3>
          <p>Show :</p>
          <select>
            <option for="name">The Month</option>
            <option id='name' name='name'>The Month</option>
          </select>
       </div>
       <div className='student-boxes-flex'>
       <div className='student-boxes'>
          {Studentdetails.map((value) =>
          <div className='container-a-two'>
            <div className='students-container'>
              <div className='students-one'>
                <span>{value.icons}</span>
                <h4>{value.name}</h4>
                <p>{value.percentage}</p>
              </div>
              <div className='students-present'>
                <h1>{value.present}</h1>
                <p>{value.lastyear}</p>
              </div>
            </div>
          </div>)}
        </div>
        </div>
      </div>
      <div className='graph-container-table'>    
        <div className='button'><button><i class="fa-solid fa-circle-down"></i><b>Genenate Report</b></button></div> 
        <div className='graph-container'>
          <Home />
        </div>
      </div>
      <Attendancelist />
      </div>
     
    </div>
    </div>
    </Stylecomponent>
  )
}

export default Attendance

const Stylecomponent = styled.div`
    .width-container{
      margin: auto;
      max-width: 1530px;
    }
    .flex-container{
      display:flex;
      background-color: #f2f2f2;
    }
   .Attendence-container{
      padding: 1.5rem 1.5rem;
   }
   .container-a-one{
      display: flex;
      gap: 1rem;
      padding-bottom: 1.2rem;
   }
    .container-a-one h3{
      font-size: 16px;
    }
    .container-a-one p{
      padding-top: 4.5px;
      font-size: 14px;
    }
    .container-a-one select{
      padding-top: 3px;
      font-size: 14px;
      background-color: #f2f2f2;
      border: 2px solid #f2f2f2;
      outline: #f2f2f2;
    }
    .container-a-two{
      width: 280px;
      height: 136px;
      background-color: white;
      padding: 5px 1rem;
      border-radius: 10px;
    }
    .students-one{
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
    }
    .students-one h4{
      font-size: 14px;
    }
    .students-one p{
      font-size: 10px;
      border: 2px solid #75ba75;
      padding:1px 4px;
      border-radius: 20px;
      background-color: #75ba75;
      position: absolute;
      right: 2px;
    }
    .students-present {
      padding-left: 2.5rem;
    }
    .students-present h1{
      position: relative;
      bottom: 28px;
      font-size: 40px;
    }
    .students-present p{
      font-size: 14px;
      color: grey;
      position: relative;
      bottom: 48px;
    }
    .student-boxes{
      max-width: 640px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    @media (width < 600px) {
    .Main_menu{
      display: none;
    }
    .Attendence-container{
      padding-left: 5rem;
    }
}
    @media (width < 950px) {
    .Main_menu{
      display: none;
    }
    .Attendence-container{
      margin: auto;
    }
    .student-boxes-flex{
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    } 
    .graph-container-table{
      margin: auto;
    }
    .button{
      position: relative;
      right: 7.5rem;
    }
}
    @media (width < 1400px) {
    .Attendence-container{
      margin: auto;
    }
    .student-boxes-flex{
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    } 
    .graph-container-table{
      margin: auto;
    }
}
    .graph-container-table{
      padding: 2rem 0.1rem;
    }
    .graph-container{
      width: 450px;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      padding: 8px;
      border-radius: 10px;
    }
    .graph-container h3{
      padding-left: 1.8rem;
      padding-bottom: 1rem;
    }
    .graph-container-table button{
      padding: 8px 1rem;
      border-radius: 8px;
      border: 2px solid #71a3c1;
      background-color: #71a3c1;
      outline: #71a3c1;
      font-size: 16px;
      color: white;
    }
    .button{
      padding-bottom: 1.8rem;
      padding-left: 16.8rem;
    }
    .Attendence-container-flex{
      display: flex;
      flex-wrap: wrap;
      margin: auto;
      position: relative;
      right: 0.5rem;
      padding: 15px;
    }
    .fa-circle-down{
      padding-right: 0.5rem;
    }
`
