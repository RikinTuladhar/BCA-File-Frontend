import React from "react";

const Table = ({data}) => {
  // console.log(data)
  return (
    
    <div className="w-full table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Download</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
           {data?.length > 0 ? data.map((data,i)=>
              <tr key={i}>
                <td>{i+1}</td>
                <td>{data?.name}</td>
                <td><a href={`${data?.filePath}`} download>Download</a></td>
                <td><a href={`${data?.filePath}`} target="_blank" rel="noopener noreferrer">View</a></td>
              </tr>
           ) : (
            <tr>
              <td colSpan="4" className="text-lg text-center text-red-700 md:text-2xl">
                No Data Found
              </td>
            </tr>
           ) }
          </tbody>
        </table>
    </div>
  );
};

export default Table;
