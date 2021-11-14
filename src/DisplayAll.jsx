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
                },
                {
                    label: 'Batch',
                    field: 'batch',
                    sort: 'asc',
                    width: 50
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
            const batch = item.passout_batch;
            var Package = batch === "2022" ? item.intern_stipend : item.package;
            if (Package === undefined || isNaN(Package) || Package == 0)
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
                    company: company,
                    batch: 
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