import React, { useEffect, useState } from "react";
// import { act } from "react-dom/test-utils";
import Papa from "papaparse";

const StateWise = () => {

  const [csvData , setCsvData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data/state1.csv"); // Adjust the path to your CSV file
      const reader = response.body.getReader();
      const result = await reader.read();

      const text = new TextDecoder().decode(result.value);
      const { data } = Papa.parse(text, { header: true });

      setCsvData(data);
    }

    fetchData();
  }, []);


  return (
    <>
  
      <div className="container mt-5">
      <div className="main-heading">
          <h1  className="mb-5 text-center"> <span className="font-weight-bold">India </span>Covid- Data</h1>
      </div>
      <div className="table-responsive">
      <table className="table table-hover">
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
          {csvData.map((row, index) => (
            <tr key={index}>
              <td>{row.State}</td>
              <td>{row.Confirmed}</td>
              <td>{row.Recovered}</td>
              <td>{row.Deceased}</td>
              <td>{row.Other}</td>
              <td>{row.Tested}</td>
              
           
            </tr>
          ))}
        </tbody>
         
      </table>

      </div>

      </div>
    </>
  );
}

export default StateWise;
