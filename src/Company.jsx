import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Company_Stat from './Company_Stat';

function Company({info}) {
    const [state, setState] = React.useState({
        checkedA: false,
    });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    var Placemet_company = []
    var Intern_company = []
    var Branch =[],IBranch=[]
    var global_Placement = 0, global_Intern = 0;
    function init() {
        info.forEach((item) => {
            if(item.passout_batch==="2021"){
                const Package = item.package;
                const department = item.students[0].department;
                const company = item.company_name;
                global_Placement += 1;
                if (!Placemet_company[company]) Placemet_company[company] = { total: 0, branch: [], max_package: 0 };
                if (!(Placemet_company[company].branch[department])) Placemet_company[company].branch[department] = { total: 0 }
                if (!Branch[department]) Branch[department] = { total: 0,max_package:0 };
                Placemet_company[company].total += 1;
                Placemet_company[company].max_package = Math.max(Placemet_company[company].max_package, parseFloat(Package));
                Placemet_company[company].branch[department].total += 1;
                Branch[department].total += 1;
                Branch[department].max_package = Math.max(Branch[department].max_package, parseFloat(Package));
            }
            else if(item.passout_batch==="2022"){
                const Package = item.intern_stipend;
                const department = item.students[0].department;
                const company = item.company_name;
                global_Intern += 1;
                if (!Intern_company[company]) Intern_company[company] = { total: 0, branch: [], max_package: 0 };
                if (!(Intern_company[company].branch[department])) Intern_company[company].branch[department] = { total: 0 }
                if (!IBranch[department]) IBranch[department] = { total: 0,max_package:0 };
                Intern_company[company].total += 1;
                Intern_company[company].max_package = Math.max(Intern_company[company].max_package, parseFloat(Package));
                Intern_company[company].branch[department].total += 1;
                IBranch[department].total += 1;
                IBranch[department].max_package = Math.max(IBranch[department].max_package, parseFloat(Package));
            }
        })
    }
    init();
    return (
        <div>
            <FormGroup row>
                <FormControlLabel
                    control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Internship companies"
                />
            </FormGroup>
            {
                !state.checkedA ?
                    <Company_Stat
                        Placemet_company={Placemet_company}
                        global_Placement={global_Placement}
                        Branch={Branch}
                    />
                    :
                    <Company_Stat
                        Placemet_company={Intern_company}
                        global_Placement={global_Intern}
                        Branch={IBranch}
                    />
            }
        </div>
    )
}

export default Company
