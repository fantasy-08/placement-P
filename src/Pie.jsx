import React,{useEffect, useState} from 'react'
import { Chart } from "react-google-charts";

function Pie({ Placement, total_student_placement })
{
    function init()
    {
        var temp = [];
        Object.keys(Placement).map((key) => {
            temp = [[key,(parseFloat(Placement[key].total) / parseFloat(total_student_placement)).toFixed(2)*100]].concat(temp);
        });
        
        return temp;
    }
    var temp = init();
    temp = ['Branch', 'Placed'].concat(temp);
    console.log(temp);
    return (
        <div>
            Pie Chart goes here! 
            <Chart
            width={'1000px'}
            height={'500px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={temp}
            options={{
                title: 'Percentage Students Placed',
            }}
            rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default Pie;
