import React from 'react'

function Display({ Placement, isInternship }) {
    var unit = isInternship ? 'thousand/month' : 'lacs/annum'
    return (
        <div>
        <table class="table  table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Total Placed</th>
                    <th scope="col">Average Package { unit }</th>
                    <th scope="col">Maximum Package { unit }</th>        
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(Placement).map((key) => {
                        return (
                            <>
                            <tr>
                                <th scope="row">#</th>
                                <td>{key}</td>
                                <td>{Placement[key].total}</td>
                                <td>{(Placement[key].package / Placement[key].total).toFixed(2)}</td>
                                <td>{Placement[key].maximum}</td>
                            </tr>
                            </>
                        )    
                })            
            }    
            </tbody>
        </table> 
        </div>
    )
}

export default Display
