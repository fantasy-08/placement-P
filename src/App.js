import React,{ useEffect, useState} from 'react'
import Header from './Header'
import Student from './Student';
import Frame from './Frame';
import Stats from './Stats';
import Company from './Company';
import {server_data} from './ServerData'

function App() {
  const [info, setInfo] = useState([]);
  const [condition, setCondition] = useState({
    year: "0",
    Increasing: false,
    HOF: true,
    old: false,
    passout_batch: "2022",
    recruitment: "Placement",
    type: "All"
  });
  const [subtask, setSubtask] = useState(false);
  const [tabs, setTabs] = useState([]);

  function SetCondition(name, val) {
    if (name === "HOF")
    {
      setCondition((prevData) => {
        var V = prevData.HOF ? false : true;
        return {
          ...prevData,
          [name] : V
        }
      })
    }
    else
    {
      setCondition((prevData) => {
        return {
          ...prevData,
          [name] : val
        }
      });
    }
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

  function setTabsOnce(data) {
    var ans = ['All', 'Companies (latest)', 'Statistics (latest)'];
    data.forEach((item) => {
      const type = item.recruitment + ' ' + item.passout_batch;
      if (ans.indexOf(type) === -1) {
        ans.push(type);
      }
    })
    setTabs(ans);
  }

  useEffect(() => {
    function fetchData() {
      fetch(
        "http://placements.mnit.ac.in/api/placements/getAll",
        { method: "POST" }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(data => {
          setInfo(data.placements);
        })
        .catch((error) => {
          setInfo(server_data.placements);
          setCondition((prevdata) => {
            return {...prevdata,old:true}
          })
          setTabsOnce(server_data.placements);
        });
      return null;
    }
    fetchData();
  }, [server_data]);

  return (
    <div >
      <h1 style={{textAlign:"center",fontFamily:'Dancing Script'}}>E-Placement Portal</h1> 
      <Header className="container" change={SetCondition} hall_of_fame={condition.HOF} subtask={subtask}
        tabs = {tabs}
        old={condition.old} />
        {
          condition.HOF ?
            <Frame info={info}/> :
            <div></div>
        }         
      <br />
      <hr />
      <br />
      <div className="container">
        <div className="row">
          {
            (() => {
              switch (condition.type) {
                case 'All':
                  return info.map((item) => {
                    const name = item.students[0].student_name;
                    const branch = item.students[0].department;
                    const company = item.company_name;
                    const profile = item.job_profile;
                    const Package = item.recruitment === "Placement" ? item.package : item.intern_stipend;
                    const department = item.students.department;
                    const date = item.recruitment_date;
                    const isInternship = item.recruitment !== "Placement";
                    const URL = `https://logo.clearbit.com/${company.replace(/\s/g, '')}.com`
                    return (
                      <div className="col-sm-4">
                        <Student name={name}
                          branch={branch}
                          company={company}
                          profile={profile}
                          Package={Package}
                          department={department}
                          date={date}
                          isInternship={isInternship}
                          URL = {URL}
                        />
                      </div>
                    )
                  })
                case "Statistics (latest)":
                  return (
                    <div className="container">
                      <Stats info={info} />
                    </div>
                  )
                case "Companies (latest)":
                  return (
                    <div className="container">
                      <Company info={info} />
                    </div>
                  )
                default:
                  return info.map((item) => {
                    const item_type = item.recruitment + ' ' + item.passout_batch
                    if(item_type===condition.type){
                      const name = item.students[0].student_name;
                      const branch = item.students[0].department;
                      const company = item.company_name;
                      const profile = item.job_profile;
                      const department = item.students.department;
                      const date = item.recruitment_date;
                      const isInternship = item.recruitment !== "Placement";
                      const Package = item.recruitment === "Placement" ? item.package : item.intern_stipend;
                      const URL = `https://logo.clearbit.com/${company.replace(' ', '')}.com`
                      return (
                        <div className="col-sm-4">
                          <Student name={name}
                            branch={branch}
                            company={company}
                            profile={profile}
                            Package={Package}
                            department={department} 
                            date={date}
                            isInternship={isInternship}
                            URL = {URL}
                          />
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
    </div>
  )
}

export default App
