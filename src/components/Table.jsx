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
                <td className="relative px-5">
                  <a
                    onClick={(e) =>
                      recentVisited(
                        data?.id,
                        data?.name,
                        data?.filePath,
                        data?.subjectName
                      )
                    }
                    href={`${data?.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <FaEye
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "30px",
                        height: "20px",
                      }}
                    />
                  </a>
                </td>
                {token != null ? (
                  <td
                    className="relative flex h-[7vh] cursor-pointer"
                    onClick={(e) => bookMarkHanlde(data?.id)}
                  >
                    <FaBookmark
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "14px",
                        height: "25px",
                      }}
                    />
                  </td>
                ) : (
                  <td
                    className="relative h-[7vh] cursor-pointer "
                    onClick={(e) => navigate("/signin")}
                  >
                    <span className="w-full h-full">
                      <FaBookmark
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                          width: "14px",
                          height: "25px",
                        }}
                      />
                    </span>
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
