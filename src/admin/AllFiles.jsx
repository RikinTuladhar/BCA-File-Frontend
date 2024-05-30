import React, { useEffect, useState } from "react";
import FilesApi from "../Apis/FilesApi";
const AllFiles = () => {
  const { getAllFiles } = FilesApi();
  const [files, setFiles] = useState([
    {
      id: "",
      name: "",
      filePath: "",
      subjectName: "",
    },
  ]);

  const handleDelete=(e)=>{

  }

  useEffect(() => {
    getAllFiles().then((res) => {
      console.log(res);
      setFiles(res);
    });
  }, []);
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
            {files?.map((file, index) => (
              <tr class=" border-b dark:bg-gray-800 ">
                <th class="px-6 py-4"> {index}</th>
                <th class="px-6 py-4"> {file.name}</th>
                <th class="px-6 py-4"> {file.subjectName}</th>
                <th class="px-6 py-4">
                  {" "}
                  <a target="_blank" href={`${file.filePath}`}>View</a>
                </th>
                <th class="px-6 py-4 cursor-pointer " onClick={handleDelete}> Delete</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllFiles;
