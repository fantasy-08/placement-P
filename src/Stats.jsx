import React, { useEffect } from 'react'
import Display from './Display';
import DisplayAll from './DisplayAll.jsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Pie from './Pie';

function Stats({ info }) {
    const [state, setState] = React.useState({
        gilad: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });

    };
    var Placement = [], Intern = [];
    var global_Placement = { total: 0, package: 0, maximum: 0 },
        global_Intern = { total: 0, package: 0, maximum: 0 };
    var total_student_placement = 0, total_student_intern = 0;
    function init() {
        var year = "0000"
        info.forEach((item) => {
            if (item.passout_batch > year)
                year = item.passout_batch;
        })
        info.forEach((item) => {
            if (item.passout_batch === year && item.recruitment === "Placement") {
                const Package = item.package;
                const department = item.students[0].department;
                global_Placement.total += 1;
                global_Placement.package += parseInt(Package, 10);
                global_Placement.maximum = Math.max(global_Placement.maximum, parseInt(Package, 10));
                if (!Placement[department]) Placement[department] = { total: 0, package: 0, maximum: 0 };
                Placement[department].total += 1;
                Placement[department].package += parseInt(Package, 10);
                Placement[department].maximum = Math.max(parseInt(Package, 10), parseInt(Placement[department].maximum, 10));
                total_student_placement += 1;
            }
            if (item.passout_batch === year && item.recruitment !== "Placement") {
                const Package = item.intern_stipend;
                const department = item.students[0].department;
                global_Intern.total += 1;
                global_Intern.package += parseInt(Package, 10);
                global_Intern.maximum = Math.max(global_Intern.maximum, parseInt(Package, 10));
                if (!Intern[department]) Intern[department] = { total: 0, package: 0, maximum: 0 };
                Intern[department].total += 1;
                Intern[department].package += parseInt(Package, 10);
                Intern[department].maximum = Math.max(parseInt(Package, 10), parseInt(Intern[department].maximum, 10));
                total_student_intern += 1;
            }
        })
        return Placement;
    }
    init();
    return (
        <>
            <h6 style={{textAlign: 'center'}}>Total students with <b>{!state.gilad ? 'placement' : 'internship' }</b> offer : { !state.gilad ? total_student_placement : total_student_intern }</h6>
            <FormControlLabel
                control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
                label="Second Year"
            />
            {
                state.gilad ?
                    <Display Placement={Intern} />
                    :
                    <Display Placement={Placement} />
            }
            {
                state.gilad ?
                    <Pie Placement={Intern} total_student_placement={total_student_intern} />
                    :
                    <Pie Placement={Placement} total_student_placement={total_student_placement} />
            }
            {
                state.gilad ?
                    <DisplayAll Placement={info} batch={"2022"} />
                    :
                    <DisplayAll Placement={info} batch={"2021"} />
            }
        </>
    )
}

export default Stats
