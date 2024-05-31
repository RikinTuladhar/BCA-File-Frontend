import React, { useContext, useEffect, useState } from "react";
import FilesApi from "../Apis/FilesApi";
import { useOutletContext } from "react-router-dom";
const AllFiles = () => {
  const { getAllFiles, deleteFile } = FilesApi();
  const { reload, setReload } = useOutletContext();
  const [files, setFiles] = useState([]);

  // console.log(reload);

  const handleDelete = (id) => {
    const done = confirm("Are you sure you want to delete?");
    // setReload((reload) => !reload);

    if (done) {
      deleteFile(id)
        .then((res) => {
          // alert("Delete file");
          setReload((prev) => !prev);
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
      // setReload(false);
    } else {
      setReload(true);
      setReload(false);
      return;
    }
  };

  useEffect(() => {
    getAllFiles().then((res) => {
      // console.log(res);
      setFiles(res);
      // console.log(reload);
      // alert(res)
    });
  }, [reload]);
  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-lg text-black  bg-gray-50 dark:bg-gray-700 dark:text-gray-300 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                File Name
              </th>
              <th scope="col" class="px-6 py-3">
                Subject
              </th>

              <th scope="col" class="px-6 py-3">
                View
              </th>
              <th scope="col" class="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {files?.length > 0
              ? files?.map((file, index) => (
                  <tr class=" border-b dark:bg-gray-800 ">
                    <th class="px-6 py-4"> {index + 1}</th>
                    <th class="px-6 py-4"> {file.name}</th>
                    <th class="px-6 py-4"> {file.subjectName}</th>
                    <th class="px-6 py-4">
                      {" "}
                      <a target="_blank" href={`${file.filePath}`}>
                        View
                      </a>
                    </th>
                    <th
                      class="px-6 py-4 cursor-pointer "
                      onClick={(e) => handleDelete(file.id)}
                    >
                      {" "}
                      Delete
                    </th>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllFiles;
