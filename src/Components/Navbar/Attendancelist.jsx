
import styled from "styled-components"

const Attendancelist = () => {

    const studentsdata = [
        {
            name: 'Siddique',
            Admissionnum: 'AD9834566',
            rollno: 8956, 
            class: 'IV',
            section: 'B',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },
        {
            name: 'Vicky',
            Admissionnum: 'AD9834567',
            rollno: 8957,
            class: 'V',
            section: 'A',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },
        {
            name: 'Naren',
            Admissionnum: 'AD9834568',
            rollno: 8958,
            class: 'X',
            section: 'C',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },{
            name: 'Praveen',
            Admissionnum: 'AD9834569',
            rollno: 8960,
            class: 'XI',
            section: 'A',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },{
            name: 'Prasanth',
            Admissionnum: 'AD9834570',
            rollno: 8961,
            class: 'XII',
            section: 'D',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },{
            name: 'Nathim',
            Admissionnum: 'AD9834571',
            rollno: 8962,
            class: 'IV',
            section: 'B',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },
        {
            name: 'Sam',
            Admissionnum: 'AD9834572',
            rollno:8963,
            class: 'V',
            section: 'A',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },
        {
            name: 'Sathish kumar',
            Admissionnum: 'AD9834573',
            rollno: 8963,
            class: 'X',
            section: 'C',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },
        {
            name: 'Pavish',
            Admissionnum: 'AD9834574',
            rollno: 8964,
            class: 'XI',
            section: 'D',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },
        {
            name: 'Harinisha',
            Admissionnum: 'AD9834575',
            rollno: 8965,
            class: 'XII',
            section: 'A',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },{
            name: 'Hari',
            Admissionnum: 'AD9834576',
            rollno: 8967,
            class: 'V',
            section: 'B',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },{
            name: 'Santhosh',
            Admissionnum: 'AD9834577',
            rollno: 8968,
            class: 'IV',
            section: 'C',
            absent: 'Absent',
            present: 'Present',
            halfday: 'Half day',
            leave: 'Leave'
        },
    ]

  return (
    <Attendancestyle>
    <div className="Attendancelist-container-pad">
        <div className="Attendancelist-container">
          <div className="Attendance-container-one">
            <label><b>Attendance List</b></label>
            <div className="padding-one">
            <input type="text" placeholder="Search By Title" />
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
            <select><option>Today</option></select>
            <select><option>Classes</option></select>
            <select><option>Filter</option></select>
            <button><i class="fa-regular fa-circle-plus"></i>Add New</button>
            </div>
          </div>

            <div className="form-table">
                <table>
                    <tr className="tr-one">
                        <th><input type="checkbox" /></th>
                        <th>Name</th>
                        <th>Admission No</th>
                        <th>Roll No</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Attendance</th>
                        <th style={{color:'#cae6e4'}}>Attendance</th>
                        <th style={{color:'#cae6e4'}}>Attendance</th>
                        <th style={{color:'#cae6e4'}}>Attendance</th>

                    </tr>
                    {studentsdata.map((value) =>
                    <tr>
                        <th id="th-one"><input type="checkbox" /></th>
                        <td style={{width:'90px',fontSize:'15px'}}><b>{value.name}</b></td>
                        <td style={{color:'#2c9add',fontSize:'14px'}}>{value.Admissionnum}</td>
                        <td style={{fontSize:'14px'}}>{value.rollno}</td>
                        <td style={{fontSize:'14px'}}>{value.class}</td>
                        <td style={{fontSize:'14px'}}>{value.section}</td>
                        <td><button id="absent">{value.absent}</button></td>
                        <td><button id="present">{value.present}</button></td>
                        <td><button id="halfday">{value.halfday}</button></td>
                        <td><button id="leave">{value.leave}</button></td>
                    </tr>)}

                </table>
            </div>
          

            
         
        </div>
    </div>
    </Attendancestyle>
  )
}

export default Attendancelist

const Attendancestyle = styled.div`

    .Attendancelist-container-pad{
        padding: 1.5rem;
    }
    .Attendancelist-container{
        background-color: #ffffff;
        padding: 1.5rem;
        border-radius: 10px;
        min-width: 1000px;
    }
    .Attendance-container-one{
        display: flex;
        gap: 22.5rem;
        padding-bottom: 1.5rem;
    }
    .Attendance-container-one label{
        font-size: 18px;
        padding-top: 0.7rem;
    }
    .Attendance-container-one input{
        padding: 10px 5px;
        padding-left: 2rem;
        width: 110px;
        border-radius: 10px;
        border: 2px solid #ffffff;
        background-color: lightgray;
        outline: #ffffff;
        position: relative;
        z-index: 1;
    }
    .Attendance-container-one span{
        z-index: 2;
        position: relative;
        right: 9.7rem;
        top: 0.7rem;
        font-size: 14px;
        color: gray;
    }
    .Attendance-container-one select{
        padding: 10px 8px;
        padding-right: 1rem;
        border-radius: 10px;
        border: 2px solid #ffffff;
        background-color: lightgray;
        outline: #ffffff;
    }
    .Attendance-container-one button{
        padding: 10px 10px;
        border-radius: 10px;
        border: 2px solid #ffffff;
        background-color: lightgray;
        flex-direction: column;
        background-color:#71a2c0;
        cursor: pointer;
    }
    .padding-one{
        gap: 1rem;
        display: flex;
        gap: 1rem;
    }
    @media (width < 1450px) {
    .Attendancelist-container-pad{
      display: none;
    }
    }
    .fa-circle-plus{
        padding-right: 0.5rem;
    }
    
    .form-table table th{
        background-color: #cae6e4;
        padding: 16px 1rem;
        border-radius: 6px 6px 0px 0px;
        border: 2px solid #d9cece;
        border-left: 0ch;
        border-top: 0ch;
        border-right: 0ch;
    }
    .form-table table td{
        background-color: white;
        padding: 16px 15px;
        border-radius: 6px 6px 0px 0px;
        border: 2px solid #d9cece;
        border-left: 0ch;
        border-top: 0ch;
        border-right: 0ch;
        text-align: center;
    }
    #th-one{
        background-color: white;
    }
    .form-table table td button{
        padding:5px 1.5rem;
        border-radius: 44px;
        border: 2px solid white;
        background-color: lightgray;
        font-size: 14px;
        cursor: pointer;
    }
    #absent:hover{
        background-color: orange;
    }
    #present:hover{
        background-color: lightgreen;
    }
    #halfday:hover{
        background-color: lightblue;
    }
    #leave:hover{
        background-color: violet;
    }
       
`