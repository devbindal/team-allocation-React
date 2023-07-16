import { useState } from "react";
const GroupedTeams =({selectTeam,employees,setTeam})=>{

  const [groupedEmployees,setGroupedData]=useState(groupTeamMembers());

  function groupTeamMembers(){
    
  

  const TeamAgroup=employees.filter((emp)=>emp.teamName==='TeamA');
  const TeamBgroup=employees.filter((emp)=>emp.teamName==='TeamB');
  const TeamCgroup=employees.filter((emp)=>emp.teamName==='TeamC');
  const TeamDgroup=employees.filter((emp)=>emp.teamName==='TeamD');

  const groupTeams=[
    {team:'TeamA',members:TeamAgroup,collapsed:selectTeam==='TeamA'?false:true},{team:'TeamB',members:TeamBgroup,collapsed:selectTeam==='TeamB'?false:true},{team:'TeamC',members:TeamCgroup,collapsed:selectTeam==='TeamC'?false:true},{team:'TeamD',members:TeamDgroup,collapsed:selectTeam==='TeamD'?false:true}
  ];
    return groupTeams;

  }
  function handleTeamClick(event) {
    var newGroupedData=groupedEmployees.map((data)=>data.team===event.currentTarget.id?        
               {...data,collapsed:!data.collapsed} : {...data,collapsed:true});

    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);
    
  }

  
  return(
    <main className="container">
      {
        groupedEmployees.map((item)=>{
          return (
            <div key={item.team } className="card mt-2" style={{cursor:"pointer"}}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              Team Name: {item.team}
              </h4>
              <div id={"colapse_" +item.team} className={item.collapsed===true?"collapse":""}>
                <hr/>
                {
                  item.members.map(member=>{
                    return(
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
              
              </div>
            </div>
          )
        })
      }
    
    </main>
  );
}

export default GroupedTeams;