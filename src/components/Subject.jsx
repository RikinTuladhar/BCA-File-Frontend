import React, { useEffect, useState } from "react";
import SubjectCard from "./SubjectCard";
// import BreadScrum from "./BreadScrum";
import { useParams } from "react-router-dom";
import Table from "./Table";
import FilesApi from "../Apis/FilesApi";
import axios from "axios";
const Subject = () => {
  const { id } = useParams();
  const { getFiles } = FilesApi();
  console.log(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios.get(`https://bca-file-backend.onrender.com/file/subjectid/${id}`)
    getFiles(id)
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [id]);
  console.log(id);
  return (
    <>
      <Table data={data} />
    </>
  );
};

export default Subject;
