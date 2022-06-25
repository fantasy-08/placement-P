import React, { useEffect, useState } from "react";
import Header from "./Header";
import Student from "./Student";
import Frame from "./Frame";
import Stats from "./Stats";
import Company from "./Company";
import { server_data } from "./ServerData";

function App() {
  const [info, setInfo] = useState([]);
  const [condition, setCondition] = useState({
    year: "0",
    Increasing: false,
    HOF: true,
    old: false,
    passout_batch: "2022",
    recruitment: "Placement",
    type: "All",
  });
  const [subtask, setSubtask] = useState(false);
  const [tabs, setTabs] = useState([]);

  function SetCondition(name, val) {
    if (name === "HOF") {
      setCondition((prevData) => {
        var V = prevData.HOF ? false : true;
        return {
          ...prevData,
          [name]: V,
        };
      });
    } else {
      setCondition((prevData) => {
        return {
          ...prevData,
          [name]: val,
        };
      });
    }
    if (name === "Increasing" && val === true) {
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
        });
        NewInfo.reverse();
        return NewInfo;
      });
    } else {
      setInfo((prevInfo) => {
        var NewInfo = prevInfo;
        NewInfo.sort(() => Math.random() - 0.5);
        return NewInfo;
      });
    }
  }

  function setTabsOnce(data) {
    var ans = ["All", "Companies (latest)", "Statistics (latest)"];
    data.forEach((item) => {
      const type = item.recruitment + " " + item.passout_batch;
      if (ans.indexOf(type) === -1) {
        ans.push(type);
      }
    });
    setTabs(ans);
  }

  useEffect(() => {
    function fetchData() {
      fetch("https://placements.mnit.ac.in/api/placements/getAll", {
        method: "POST",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          setInfo(data.placements);
        })
        .catch((error) => {
          setInfo(server_data.placements);
          setCondition((prevdata) => {
            return { ...prevdata, old: true };
          });
          setTabsOnce(server_data.placements);
        });
      return null;
    }
    fetchData();
  }, [server_data]);

  function getURL(company) {
    let url = "";
    switch (company) {
      case "Jpmc":
        url = "https://www.crwflags.com/fotw/images/u/us$jpmch.gif";
        break;
      case "Hpcl":
        url =
          "https://bsmedia.business-standard.com/media-handler.php?mediaPath=http://bsmedia.business-standard.com/_media/bs/img/article/2013-09/22/full/1379849324-2914.jpg&width=1200";
        break;
      case "Box 8":
        url = "https://assets.box8.co.in/images/Box8.jpg";
        break;
      case "Deutsche Bank":
        url =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACeCAMAAAB0DSNzAAAAkFBMVEX///8AAJkAAJQAAJMAAJuAgL+np9asrNMSEp8hIaJJSayKistMTK6BgcNqarW0tNnj4/Pb2++7u9/o6PbNzehbW7TBweJ3d7+Xl8xiYrc1NaUKCpzk5PPy8vrS0uo8PKhDQ6v4+P3Pz+nFxeNycr1UVK/t7fecnNBoaLl8fMAvL6Wjo9M6OqiQkMocHKAoKKNrCUfxAAALZ0lEQVR4nO2deXuqOhDGIeGoVXtVXKq1uNS61uX7f7sLM0kIMCBIzzn3uc77l0vI8iOZTAJJHIfFYrFYLBaLxWKxWCwW6z+nzeuvP6Xj6G8X9nfoW/wxyebfLuzvUMP9YxIMkAFmxQBrigHWFAOsKQZYUwywphhgTTHAmmKANcUAayoN0Gv9tObPBbD74yl0xFMBbP94CgywphhgTTHAmmKANcUAa4oB1hQDrCkGeF/DrD7W+k8GeFdLmZVn/mWA99SRbkbtRfw3AyxWJ4vPlQPrfwZYqL5I0wv5Ta0ADLBQkxeCn2+HYIBFCoj2K8aJIAywQOtltgGn+DHAIr0RBtDbJcMwwHw1CQfmtEkFYoC5mhL1T6T5McBcNQl+boYfA8xT/z2LT75mwzHAHLWIDnhFhGOApIIzwW9GhWSApLaEAZyvqZAMkJJPODDikwzKAKmrKH45y0AYYFaDa5af18gJzAAz8udpeqEDk8ePAWb1TnTAdAcSiQGm1aEcwFx+DDAt6hGIFxSEZ4DJCwh+btEFDDAhygEsXobJAG3tiEcg4lJ4CQO01PeI+lfMjwFaWlMOTCe/AwYxwFjUIySv6IJIDNDoSHQgt/69FBigCUo5MLv88EoMUKlH8fNzgxsxQNSwsgOoxABBH8QjJHEokwIDBM2IDvjrvgF0GCCKeoTUvuMAKjHAUAfiEVK7YAbGFgN0HD+Lz5Vld8JigM6AeoTUK5sCAxy1CH4lHEClpwc4pN4h+iqfwtMDJF6iLOcAKj07wDHRfk+lHEClJwe4JzqQ84KMKkfPDZAYgLiiSv17coDUKhrRqZbCMwMkZxCIl1AL9cQAgznRAVfeWOZ5AQ6IlyjFsXIKzwvwlXoJdZAfVY6eFuBeEntBV3JgUM8KcLj/zmhfvf49L8AfEwOsKQZYUwywphhgTTHAmmKANcUAa+rJAP78JrSX5wI4f/lpmWd6zwHwN4oBMkBCDLCmGGBNMcCaYoA1xQBrigHWFAOsKQZYUwywphhgTTW8P6b/J0AWi8VisVis36ODG/tR19Vh+lluienvExyXeXenjnzZZ3felttXv+Sazxy9RvG5BW/d/ZN4S1QI6X498o7ezwl33nn8+tSyEyHl4e6+HwWCt2hlaYCY5KHeTaunugCJ167z9268rwcAhim6D7xom9Lm0Sh+HmAIoPTS2YxKAlzNxrPx2ZU6dVmT4KArJw9e+iMAW7NxqNnWUw1aPNymygHUpR32ltqE1GnF/bF0/y7As/42wt1sH2/EJQHGq5sn6pZtH00xbL1RRf67AN/N1zXER2+BXkaVATo73EFX0ptel9FEuv8dgM43/LB8NLrqANUGBql71h8MPsqmuQGAmWMrdv3+kAjd/xwNbHtxH2CYFyoipTRAyE0K4DoobaEeAKgWEAnjUQeXEx4m2I4nLIffzWazYSBNGuHX7zBXfq/nw/t6ohN+7OkAfR3F7ZJYytpQZxbOX83tMQCbXVfKl9fkfdtdbnhFN69jTQOE9mCtgF+8Yla8cSOm6Ov89zun0HM8XcxfSYC9KFxjb+MnAH7APTNV6GL6ZlfO9VYko2iVkTQbG4zha+iwemHWMLiAYsK/61kche2U+a6Mf9ZrNBXAj6tUf9iLXztWXq60p5AG+GX3kk6wMjGEGTbr8rYq/18m85pIAiCurZLfdnoEQOcEcaiz77rYogXGrD2qEdzXN30FLJuOAKZ2QIXzt4auSESh6/FUxwy/K9gI0BvGccjYmKySeSHNbAogbAkn9PcAsxLdW4jpquoSbDsg+qvYidSR2wBxezm5T6RHAYRdIARWL9hSSLidRmOMly8KASYPUcG+HHoludo3pif8d21lR7w1m18Y8yUGeD2HlcDFUrrmjsPiTuFdGo0tXkGN0SCJmw/q7cEtE662mZBPsdwMhxuM7N0C6HajkazQrSIDcGRnsxAgngUFNQItCG4jvsG8FQKcbbfbFaS/Cj9tozYC2yoKhHCEcGAHAowNqsAA68XaAAwviAzNpGWXBSsTVtRJbt+qaidI1e2ltrsBIFBO4sFq22rjC/kakh7d8HMvBRAX12fOJKIA4mFQp+jji1Vl0CPAsHkAAXSyF8a7jp+HUC5owx3buFzimBGgWrWJW8qouLBxO/YVxO5QmaHce+wPTMDUKSsEpl78sgAq46Jcx7ckwB38KjP72eQDjKraAhLRlXYNv4/vAUz5gZA5qTrTSSgfPs/tKjSAkl0MJrNtAnQBWH3hvghtgHbwB7G9TAbgvG26rdHscDjMdJdqYUKAevDwHbdAA3AN9ZJIkALYMIYY77Pp7t5NfawAUC2rbiS34gBvU3dUTjCOSjY1AI11g3uJwX7ZaTgOjNHmeQD1Mc5Yg73sWWoqJRugoYCecBIg9C/pQynzAKIN3JqIR33UEKwbNLsKABfKHxHLziZ2oHoJ7yJVrNiRnsScl9i0dV6gRsisR43mpz9YRBpNXxChldCwd3mbrd5v13QNNDdnmAHYP1iV8j7AuBe+Jm6n6hQ31QA6X7pfE1K8X1QgrNvEeNFL1CwLoEflJRtB2g882j1/WKVPum9x0wCF9tkzAAV6IIIaAFEAoaVCrl1CgKYKwJggQDysY4DEECkXYG5eigE6bVOa0FS86+agnMkEQM0nWwM3OEFA9foEQLwe8ubFyRlB4EoAnVHXuuviZe1krGtpgKm8lADox4PhtWrQ5+O+0WikbWABwD76gILYU44AiEunZGSvwItpRaPaWM1hZYBhnpqzqxnkRV3ZFO9sBYDwx43Iyx2AaIM9Q8N9V/V+Xh7gQJ0SQ8wrZgGq7fy2JmLqEVkaoHsHYKTd5KgaXqA6Eep1qlyA0IlcibwklQGI0zGREVzDB0+bwwo1cKCSJ9pMBmDwYlkX9HbNvMxiFCn6hABNjb6VARhFDsPsqOItkhF40Yq3N10sEiD0BvEc0WeUFaITygDEatdytOv0S+dFVAKo6lXmbKLMjLQ6kQzHO6Mki1bU/cEIZZGYZdvJfIDr1ul0umkHyofkehpUy86yiB1pCiDYsnjsAf3x6j5AHCbC9Ca64roVLqxGVAKgsqUi3ZHYAIPFXvVSBgYUR2ezD0nCHFCQQIZ7UCYAGh9ZebbqS8+YvjfbEWykhnIUQMd4p3HxiX3eRHz7o3yqF2Qhoc+E3RlXq4G6lLHdsgC680ieiJ/K6foDMwFqAK3aH9aBM4Q7Ra7TWh3DpQEqq629KnSKcDg4BPsA7RDuhjuHTOM4U8STCSRAmP5SkyF4chDVi2N5lqib6vzxWF0EIwZxbJUAOmqWIdmR0M+F494RjpgR5+/N5uLZVVidfi5WX+PQtbjaAAOV6e3XYRbndDltfqM/r6ZIFfbOZIIxS8SUD1BZ2lVjtOlgCtTIgCiPK9S59jgUFUffn2qHsApAtdlh8rbdezMhwBk+oXyQeGpN790uIkf9LTFO7eq/kPZVAdUzpysVTLn3esCqzGQBwJ2XzMucerJBAJQnlemNnuUOIxDniE0lgPrAE89+f8gGGHmm8tpJTlOut/Z8/MpMCQQ3Pb6QNzVvri/8cPUVwCo4J0Yi8f52FztmM6UfFct4TtghmTmHtrQi6pJPhqy0VIlOsbMUb9gqXoLoiwIIs6syMZQTuLkDHLJjRky4YWmiI+m0u0azt4tPPHsbjdUI1J0lHN+LK6P8uaFV6qzCy5fGq93NBM6FKJPvb10JYWXr1b49H0dPPVQ6mp8xKybtZfhlFVudyRZjlt4hZ6f4c1ye7vbwNp0kfO3RUsLMWZTpXpjpFZrUY9vO/y6Ko40u1hRKpnO3xniXyVn9+1oPJv7kM8v2MxwM0I92gsVksuhbVb2/6fX8UXbg0B/5/qj0E9OCvJTVxyTMdNlt+lksFovFYrFYrKz+BakbypiChKNpAAAAAElFTkSuQmCC";
        break;
      case "Mercados Energy Market Pvt Ltd":
        url = "https://mercadosemi.in/images/Mercados_Logo.png";
        break;
      case "Rivigo Services Private Limited":
        url =
          "data:image/png;base64,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";
        break;
      case "Dassault":
        url =
          "https://images.dassault-aviation.com/f_auto,q_auto,g_center,dpr_auto/wp-auto-upload/2/files/2019/09/dassault-aviation-logo-800.jpg";
        break;
      case "Bluepi Consulting Pvt Ltd":
        url =
          "https://cutshort.io/horizontal-og-image?img=https://cdn.cutshort.io/public/companies/570742a9b9078e907d21df4c/bluepi-consulting-pvt-ltd-logo";
        break;
      case "Tata Steel Bsl":
        url =
          "data:image/png;base64,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";
      case "BPCL":
        url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Official_BPCL_LOGO_with_tagline_Energising_Lives.pdf/page1-1200px-Official_BPCL_LOGO_with_tagline_Energising_Lives.pdf.jpg"
      case "Adani Group":
        url = "data:image/png;base64,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"
      case "L&T":
        url = "https://bsmedia.business-standard.com/_media/bs/img/article/2021-08/11/full/1628686751-7355.jpg?im=Resize,width=480"
      case "Mercedes Benz Research And Development India":
        url = "https://media-exp1.licdn.com/dms/image/C560BAQFwOM2CTIiZvw/company-logo_200_200/0/1628598235735?e=2147483647&v=beta&t=gWOapSDkT2i6SvHzjoO7-amZwrXciKls9EcqI-d7fm4"
      default:
        url = `https://logo.clearbit.com/${company.replace(/\s/g, "")}.com`;
    }
    return url;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Dancing Script" }}>
        E-Placement Portal
      </h1>
      <Header
        className="container"
        change={SetCondition}
        hall_of_fame={condition.HOF}
        subtask={subtask}
        tabs={tabs}
        old={condition.old}
      />
      {condition.HOF ? <Frame info={info} /> : <div></div>}
      <br />
      <hr />
      <br />
      <div className="container">
        <div className="row">
          {(() => {
            switch (condition.type) {
              case "All":
                return info.map((item) => {
                  const name = item.students[0].student_name;
                  const branch = item.students[0].department;
                  const company = item.company_name;
                  const profile = item.job_profile;
                  const Package =
                    item.recruitment === "Placement"
                      ? item.package
                      : item.intern_stipend;
                  const department = item.students.department;
                  const date = item.recruitment_date;
                  const isInternship = item.recruitment !== "Placement";
                  const URL = getURL(company);
                  return (
                    <div className="col-sm-4">
                      <Student
                        name={name}
                        branch={branch}
                        company={company}
                        profile={profile}
                        Package={Package}
                        department={department}
                        date={date}
                        isInternship={isInternship}
                        URL={URL}
                      />
                    </div>
                  );
                });
              case "Statistics (latest)":
                return (
                  <div className="container">
                    <Stats info={info} />
                  </div>
                );
              case "Companies (latest)":
                return (
                  <div className="container">
                    <Company info={info} />
                  </div>
                );
              default:
                return info.map((item) => {
                  const item_type = item.recruitment + " " + item.passout_batch;
                  if (item_type === condition.type) {
                    const name = item.students[0].student_name;
                    const branch = item.students[0].department;
                    const company = item.company_name;
                    const profile = item.job_profile;
                    const department = item.students.department;
                    const date = item.recruitment_date;
                    const isInternship = item.recruitment !== "Placement";
                    const Package =
                      item.recruitment === "Placement"
                        ? item.package
                        : item.intern_stipend;
                    const URL = getURL(company);
                    return (
                      <div className="col-sm-4">
                        <Student
                          name={name}
                          branch={branch}
                          company={company}
                          profile={profile}
                          Package={Package}
                          department={department}
                          date={date}
                          isInternship={isInternship}
                          URL={URL}
                        />
                      </div>
                    );
                  }
                  return;
                });
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
