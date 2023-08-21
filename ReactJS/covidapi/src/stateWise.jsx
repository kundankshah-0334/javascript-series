import React, { useEffect } from "react";

const StateWise = () => {

    const getCovidData = async () => {
       const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
       const actual_data = await res.json();
       console.log(actual_data)
    }

    useEffect(()=>{
        // getCovidData();
    })
  return (
    <>
  
      <div className="container mt-5">
      <div className="main-heading">
          <h1  className="mb-5"> <span className="font-weight-bold">India </span>Covid- Data</h1>
      </div>
      <div className="table-responsive">
      <div className="table table-hover">
        <thead className="thead-dark">
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Updtaed</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>State</td>
            <td>Confirmed</td>
            <td>Recovered</td>
            <td>Deaths</td>
            <td>Active</td>
            <td>Updtaed</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>State</td>
            <td>Confirmed</td>
            <td>Recovered</td>
            <td>Deaths</td>
            <td>Active</td>
            <td>Updtaed</td>
          </tr>
        </tbody>
      </div>

      </div>

      </div>
    </>
  );
}

export default StateWise;
