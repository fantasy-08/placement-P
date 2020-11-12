import React from 'react'
import { Chart } from "react-google-charts";

function PieCompany({ global_Placement, Placemet_company }) {
    var each_company = []
    var pie_chart_data=[]
    function init()
    {
        Object.keys(Placemet_company).map((key) => {
            var tot = 0;
            if(!each_company[key])
                each_company[key] = { total: 0, percentage: 0 };
            Object.keys(Placemet_company[key].branch).forEach((item) => {
                each_company[key].total+=Placemet_company[key].branch[item].total
            })
        })
        Object.keys(each_company).forEach((key) => {
            each_company[key].percentage = ((parseFloat(each_company[key].total) / parseFloat(global_Placement))*100)
            pie_chart_data = [[key,each_company[key].percentage]].concat(pie_chart_data);
        })
    }
    init();
    pie_chart_data = [['Company', 'percentage offer'], ...pie_chart_data];
    console.log(pie_chart_data);
    return (
        <div>
            <Chart
            width={'100%'}
            height={'500px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={pie_chart_data}
            options={{
                title: 'Percentage Students Placed',
            }}
            rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default PieCompany
