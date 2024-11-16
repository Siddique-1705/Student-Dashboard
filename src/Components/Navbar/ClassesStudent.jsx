import React from 'react'
import Attendance from "../../Pages/Attendance";

function ClassesStudent () {
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

  return (
    <>
    <h1>dd</h1>
    <Attendance studentCount={studentCount} classCount={classCount} />
    </>
  )
}

export default ClassesStudent
