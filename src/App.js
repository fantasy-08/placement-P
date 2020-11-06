import React,{ useEffect, useState} from 'react'
import Header from './Header'
import Student from './Student';
import Frame from './Frame';

function App() {

  const [info, setInfo] = useState([]);
  const [condition, setCondition] = useState({
    year: "0",
    Increasing: false
  })

  function SetCondition(name,val){
    setCondition((prevData) => {
      return {
        ...prevData,
        [name] : val
      }
    });
    
    if (name==="Increasing" && val===true)
    {
      setInfo((prevInfo) => {
        var NewInfo = prevInfo;
        NewInfo.sort((A, B) => {
          var AP;
          if (A.recruitment === "Internship") AP = parseFloat(A.intern_stipend);
          else AP = parseFloat(A.package);

          var BP;
          if (A.recruitment === "Internship") BP = parseFloat(B.intern_stipend);
          else BP = parseFloat(B.package);

          return AP - BP;
        })
        NewInfo.reverse();
        console.log("HERE");
        return NewInfo;
      })  
    }
    else
    {
      setInfo((prevInfo) => {
        var NewInfo = prevInfo;
        NewInfo.sort(()=>Math.random()-0.5);
        return NewInfo;
      })  
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/http://placements.mnit.ac.in/api/placements/getAll",
        { method: "POST" }
      );
      const data = await res.json();
      // console.log(data.placements);
      setInfo(data.placements);
      return data;
    }
    fetchData();
  },[]);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>E-Placement Portal</h1> 
      <Header className="container" change={SetCondition} />
    
      <Frame info={info}/>
      <br />
      <hr />
      <br />
      <div className="row">
      {
        (function ()
        {
          if (condition.year==="0")
          {
            return info.map((item) => {
              const name = item.students[0].student_name;
              const branch = item.students[0].department;
              const company = item.company_name;
              const profile = item.job_profile;
              var Package=0;
              if (item.recruitment === "Placement") {
                Package = item.package;
              }
              else {
                Package = item.intern_stipend;
              }
              const department = item.students.department;
              const date = item.recruitment_date;
              return(
              <div className="col-sm-3">
                <Student name={name}
                        branch={branch}
                        company={company}
                        profile={profile}
                        Package={Package}
                        department={department} 
                    date={date}
                  />
                </div>
              )
              })
          }  
          else if (condition.year === "2")
          {
            return info.map((item) => {
              if(item.passout_batch==="2022"){
                const name = item.students[0].student_name;
                const branch = item.students[0].department;
                const company = item.company_name;
                const profile = item.job_profile;
                const Package = item.intern_stipend;
                const department = item.students.department;
                const date = item.recruitment_date;
                return (
                  <div className="col-sm-3">
                    <Student name={name}
                            branch={branch}
                            company={company}
                            profile={profile}
                            Package={Package}
                            department={department} 
                            date={date}/>
                    </div>
                  )
              }
              return;
            })
          }
          else if (condition.year === "3")
          {
            return info.map((item) => {
              if(item.passout_batch==="2021"){
                const name = item.students[0].student_name;
                const branch = item.students[0].department;
                const company = item.company_name;
                const profile = item.job_profile;
                const Package = item.package;
                const department = item.students.department;
                const date = item.recruitment_date;
                return (
                  <div className="col-sm-3">
                    <Student name={name}
                            branch={branch}
                            company={company}
                            profile={profile}
                            Package={Package}
                            department={department} 
                            date={date}/>
                    </div>
                  )
              }
              return;
            })
          }
        })()
      }
      </div>
    </div>
  )
}

export default App
