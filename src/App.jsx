import { useState,useEffect  } from 'react';
import './App.css'

import Employee from './Employee';
import NotFound from './NotFound';
import SharedLayout from './SharedLayout';
import GroupedTeams from './GroupedTeams';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

export default function App() {
    const [selectTeam ,setTeam]=useState(JSON.parse(localStorage.getItem('selectTeam'))|| "TeamB");
  const [employees,setEmployees]=useState(JSON.parse(localStorage.getItem('employeList')) || [{id: 1,fullName: "Bob Jones",designation: "JavaScript Developer",gender: "male",teamName: "TeamA"},{id: 2,fullName: "Jill Bailey",designation: "Node Developer",gender: "female",teamName: "TeamA"},{id: 3,fullName: "Gail Shepherd",designation: "Java Developer",gender: "female",teamName:"TeamA"},{id: 4,fullName: "Sam Reynolds",designation: "React Developer",gender: "male",teamName: "TeamB"},
{
  id: 5,
  fullName: "David Henry",
  designation: "DotNet Developer",
  gender: "male",
  teamName: "TeamB"
},
{
  id: 6,
  fullName: "Sarah Blake",
  designation: "SQL Server DBA",
  gender: "female",
  teamName: "TeamB"
},
{
  id: 7,
  fullName: "James Bennet",
  designation: "Angular Developer",
  gender: "male",
  teamName: "TeamC"
},
{
  id: 8,
  fullName: "Jessica Faye",
  designation: "API Developer",
  gender: "female",
  teamName: "TeamC"
},
{
  id: 9,
  fullName: "Lita Stone",
  designation: "C++ Developer",
  gender: "female",
  teamName: "TeamC"
},
{
  id: 10,
  fullName: "Daniel Young",
  designation: "Python Developer",
  gender: "male",
  teamName: "TeamD"
},
{
  id: 11,
  fullName: "Adrian Jacobs",
  designation: "Vue Developer",
  gender: "male",
  teamName: "TeamD"
},
{
  id: 12,
  fullName: "Devin Monroe",
  designation: "Graphic Designer",
  gender: "male",
  teamName: "TeamD"
}]);

  function handleChange(event) {
    console.log(event.target.value);
    setTeam(event.target.value);
    
    
  }
  function handleEmployeeCardClick(event){
    const transformData=employees.map((emp)=>emp.id===parseInt(event.currentTarget.id)?(emp.teamName===selectTeam)?{...emp,teamName:''}:{...emp,teamName:selectTeam}:emp);

    setEmployees(transformData);
    
  }

  useEffect(()=>{
    localStorage.setItem('employeList',JSON.stringify(employees));
  },[employees]);


  useEffect(()=>{
    localStorage.setItem('selectTeam',JSON.stringify(selectTeam));
  },[selectTeam]);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout selectTeam={selectTeam} teamCount={employees.filter((emp)=>emp.teamName===selectTeam).length} />} >
          <Route index element={<Employee employees={employees} selectTeam={selectTeam} handleChange={handleChange} handleEmployeeCardClick={handleEmployeeCardClick} />} />
          <Route path='/GroupedTeams' element={<GroupedTeams selectTeam={selectTeam}  employees={employees} setTeam={setTeam}/>} />
          <Route path="*" element={<NotFound />} />
        
        </Route>
      
      </Routes>
    
    </Router>
    
    
  );
}
