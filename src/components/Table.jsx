import React, { useContext } from "react";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
const Table = ({ data, recentVisited, bookMarkHanlde }) => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(data)
  return (
    <div className="w-full min-h-[50vh] table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">View</th>
            <th scope="col">BookMark</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data?.name}</td>
                <td>{data?.subjectName}</td>
                <td>
                  <a
                    onClick={(e) =>
                      recentVisited(data?.id, data?.name, data?.filePath, data?.subjectName)
                    }
                    href={`${data?.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                   <FaEye style={{width:"30px",height:"20px"}} />
                  </a>
                </td>
                {token != null ? (
                  <td
                    className="flex items-center justify-center py-2 cursor-pointer"
                    onClick={(e) => bookMarkHanlde(data?.id)}
                  >
                  <FaBookmark style={{width:"14px",height:"25px"}} />
                  </td>
                ):(
                  <td
                  className="flex items-center justify-center cursor-pointer"
                  onClick={(e) => navigate("/signin")}
                >
                <FaBookmark style={{width:"14px",height:"25px"}} />
                </td>
                )}


              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-lg text-center text-red-700 md:text-2xl"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
