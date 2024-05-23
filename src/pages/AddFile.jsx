import React, { useContext, useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import {
  Container,
  InputField,
  SelectComponent,
  Button,
} from "../Imports/ImportAll";
import NavBar from "../components/NavBar";
import { reloadConext } from "../GlobalContext/ReloadProvider";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
import SubjectApi from "../Apis/SubjectApi";
import axios from "axios";

const AddFile = () => {
  const { reload, setReload } = useContext(reloadConext);
  const { userDetails, token } = useContext(UserContext);
  const { getSubjectAll } = SubjectApi();
  const { id } = userDetails;
  const [imageUpload, setImageUpload] = useState(null);
  const [data, setData] = useState({
    name: "",
    filePath: "",
  });
  console.log(userDetails);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };

  const [subjectId, setSubjectId] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectsFromApi, setSubjectsFromApi] = useState([]);
  const [selectedSem, setSelectedSem] = useState(1);
  console.log(subjects);
  console.log(subjectsFromApi);
  console.log(selectedSem);
  console.log(subjectId);
  //subjects fetched from api
  useEffect(() => {
    getSubjectAll()
      .then((res) => {
        setSubjectsFromApi(res);
      })
      .catch((err) => console.log(err));
  }, [reload]);

  useEffect(() => {
    const filtered = subjectsFromApi.filter(
      (item) => item.semesterId === parseInt(selectedSem)
    );
    setSubjects(filtered.length > 0 ? filtered : []);
  }, [selectedSem, subjectsFromApi,reload]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUpload === null) return alert("Upload File Please ");
    const imageRef = ref(storage, `BCAFiles/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("Uploaded");
        console.log(url);
        return axios.post(
          `https://bca-file-backend.onrender.com/file/${subjectId}/${userDetails?.id}`,
          {...data,filePath:url},
          config
        );
        // Do something with the URL (e.g., save it to the state)
      }).then((res)=>{
        setReload(!reload);
        setImageUpload(null);
        setData({
          name: "",
          filePath: "",
        });
        setSelectedSem(1);
        setSubjectId("");
        setSubjects([]);
        setSubjectsFromApi([]);
      });
    });
  };

  return (
    <Container className={"flex-col"}>
      <NavBar />
      <h1 className="text-2xl font-bold">File Upload</h1>
      <hr />
      <form className="w-full md:w-[auto]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <InputField label={"File Name"} onChange={handleChange} name="name" />
          <SelectComponent
            label={"Semester"}
            name={"semester"}
            onChange={(e) => setSelectedSem(e.target.value)}
            options={[
              { id: 1, name: "Semester 1" },
              { id: 2, name: "Semester 2" },
              { id: 3, name: "Semester 3" },
              { id: 4, name: "Semester 4" },
              { id: 5, name: "Semester 5" },
              { id: 6, name: "Semester 6" },
              { id: 7, name: "Semester 7" },
              { id: 8, name: "Semester 8" },
            ]}
          />
          <label
            className="inline-block text-lg font-semibold md:text-xl"
            htmlFor={"subject"}
          >
            Subject
          </label>
          <select
            onChange={(e) => setSubjectId(e.target.value)}
            name="subject"
            className="px-2 py-2 font-semibold rounded-lg"
            disabled={!selectedSem}
          >
            <option value="" selected disabled>
              Select Semester First
            </option>
            {subjects?.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div className="w-[auto] md:w-full my-4">
          <input
            type="file"
            onChange={(e) => setImageUpload(e.target.files[0])}
          />
        </div>
        <Button type="submit" text="Submit" className="mb-3" />
      </form>
    </Container>
  );
};

export default AddFile;
