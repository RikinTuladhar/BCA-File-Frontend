import React, { useContext } from "react";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
import { useNavigate } from "react-router-dom";

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
                  >
                    View
                  </a>
                </td>
                {token != null ? (
                  <td
                    className="cursor-pointer"
                    onClick={(e) => bookMarkHanlde(data?.id)}
                  >
                    Book Mark
                  </td>
                ):(
                  <td
                  className="cursor-pointer"
                  onClick={(e) => navigate("/signin")}
                >
                  Book Mark
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
