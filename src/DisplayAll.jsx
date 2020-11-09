import React from 'react'

export default function DisplayAll({Placement,batch}) {
    return (
        <div>
            <table class="table  table-striped">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Branch</th>
                <th scope="col">Package ({ batch==2021?"Lacs":"Thousand" })</th>
                <th scope="col">Company</th>        
                </tr>
                {
                    Placement.map((item) => {
                        if (item.passout_batch == batch) {
                            const name = item.students[0].student_name;
                            const branch = item.students[0].department;
                            const company = item.company_name;
                            var Package =batch==2022?item.intern_stipend:item.package;
                            return (
                                <>
                                <tr>
                                    <td scope="row">#</td>
                                    <td>{name}</td>
                                    <td>{branch}</td>
                                    <td>{Package}</td>
                                    <td>{company}</td>
                                </tr>
                                </>
                              )
                        } 
                    })       
                }    
            </thead>
            </table>
        </div>
    )
}
