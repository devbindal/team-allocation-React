
import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';
const Employee = (props) =>{

  
  return(

    <main className="container">

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <select className="form-select form-select-lg" value={props.selectTeam} onChange={props.handleChange}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
            
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
      {
        props.employees.map((employee)=>(
          <div key={employee.id} id={employee.id} className={(employee.teamName===props.selectTeam? 'card m-2 standout':'card m-2') } style={{cursor:"pointer"}} onClick={props.handleEmployeeCardClick}>
            <img src={employee.gender==="male"? maleProfile : femaleProfile} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Full Name: {employee.fullName}</h5>
              <p className="card-text"><b>Designation:</b> {employee.designation}</p>
            </div>
          </div>
          
        ))
      }
      </div>
    </div>
      </div>
    </main>
    
  )
}
export default Employee;