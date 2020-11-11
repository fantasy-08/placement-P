import React from 'react'
import { MDBDataTable } from 'mdbreact';

export default function DisplayAll({ Placement, batch }) {
    var data = {
        columns: [
                {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
                },
                {
                label: 'Branch',
                field: 'branch',
                sort: 'asc',
                width: 270
                },
                {
                label: 'Package',
                field: 'package',
                sort: 'asc',
                width: 200
                },
                {
                    label: 'Company',
                    field: 'company',
                    sort: 'asc',
                    width: 100
                }
        ],
        rows:[]
    }

    function init()
    {
        var temp = [];
        Placement.forEach((item) => {
            const name = item.students[0].student_name;
            const branch = item.students[0].department;
            const company = item.company_name;
            var Package = batch === "2022" ? item.intern_stipend : item.package;
            if (Package === undefined || isNaN(Package))
            {
                return null;
            }
            else
            {
                var T =
                {
                    name: name,
                    branch: branch,
                    package: Package,
                    company:company
                }
                temp.push(T);
            }
        })
        data.rows = temp;
        return null;
    }

    init(); 
    console.log(data);
    return (
        <div>
            <MDBDataTable
            striped
            bordered
            small
            data={data}
            />
        </div>
    )
}


// <table class="table  table-striped">
//             <thead class="thead-dark">
//                 <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Branch</th>
//                 <th scope="col">Package ({ batch==2021?"Lacs":"Thousand" })</th>
//                 <th scope="col">Company</th>        
//                 </tr>
//                 {
//                     Placement.map((item) => {
//                         if (item.passout_batch == batch) {
//                             const name = item.students[0].student_name;
//                             const branch = item.students[0].department;
//                             const company = item.company_name;
//                             var Package =batch==2022?item.intern_stipend:item.package;
//                             return (
//                                 <>
//                                 <tr>
//                                     <td scope="row">#</td>
//                                     <td>{name}</td>
//                                     <td>{branch}</td>
//                                     <td>{Package}</td>
//                                     <td>{company}</td>
//                                 </tr>
//                                 </>
//                               )
//                         } 
//                     })       
//                 }    
//             </thead>
//             </table>