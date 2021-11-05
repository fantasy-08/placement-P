import React from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import PieCompany from './PieCompany';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

function Company_Stat({ Placemet_company, global_Placement }) {
    const branches = [
        "COMPUTER SCIENCE AND ENGINEERING",
        "ELECTRONICS AND COMMUNICATION ENGINEERING",
        "MECHANICAL ENGINEERING",
        "CHEMICAL ENGINEERING",
        "METALLURGICAL AND MATERIALS ENGINEERING",
        "CIVIL ENGINEERING"
    ]
    var data = {
        columns: [
                {
                label: 'Company Name',
                field: 'a',
                sort: 'asc',
                width: 150
                },
                {
                label: 'Total Placed',
                field: 'b',
                sort: 'asc',
                width: 270
                },
                {
                label: 'Maximum Offer',
                field: 'c',
                sort: 'asc',
                width: 200
                },
                {
                    label: 'COMPUTER SCIENCE AND ENGINEERING',
                    field: 'e',
                    sort: 'asc',
                    width: 100 
                },
                {
                    label: 'ELECTRONICS AND COMMUNICATION ENGINEERING',
                    field: 'f',
                    sort: 'asc',
                    width: 100 
                },
                {
                    label: 'MECHANICAL ENGINEERING',
                    field: 'g',
                    sort: 'asc',
                    width: 100 
                },
                {
                    label: "CHEMICAL ENGINEERING",
                    field: 'h',
                    sort: 'asc',
                    width: 100 
                },
                {
                    label: 'METALLURGICAL AND MATERIALS ENGINEERING',
                    field: 'i',
                    sort: 'asc',
                    width: 100 
                },
                {
                    label: 'CIVIL ENGINEERING',
                    field: 'j',
                    sort: 'asc',
                    width: 100 
                }
        ],
        rows:[]
    }
    function init()
    {
        Object.keys(Placemet_company).map((key) => {
            var temp = { a: key, b:Placemet_company[key].total, c: Placemet_company[key].max_package, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0 }
            branches.map((department) => {
                var placed = 0;
                if (!(Placemet_company[key].branch[department]))
                    placed = 0;
                else
                    placed = Placemet_company[key].branch[department].total
                if (department === branches[0]) temp.e = placed;
                else if (department === branches[1]) temp.f = placed;
                else if (department === branches[2]) temp.g = placed;
                else if (department === branches[3]) temp.h = placed;
                else if (department === branches[5]) temp.i = placed;
                else temp.j = placed;
            })
            data.rows.push(temp);
        })
    }
    init();
    
    return (
        <div>
            <MDBDataTableV5
            entriesOptions={[5, 20,,40, 100]} entries={10} pagesAmount={4}
            hover
            data={data}
            />
            <PieCompany global_Placement={global_Placement} Placemet_company={ Placemet_company}/>
        </div>
    )
}

export default Company_Stat