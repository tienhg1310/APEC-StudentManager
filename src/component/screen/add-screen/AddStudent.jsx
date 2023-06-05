import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import URL from "../../Data/API";

function AddStudent() {
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    born: "",
    favorite: "",
    math_point: "",
    literature_point: "",
    english_point: "",
    sex: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStudent((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    useEffect(() => {
      axios
        .post("/user", student)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <form
      action=""
      className="add_container w-3/12  mr-4 shadow-2xl rounded-lg border border-slate-100 p-10 flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="form_item flex flex-row justify-between">
        <label className="w-4/12">Tên</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={student.first_name || ""}
          onChange={handleChange}
          className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
        ></input>
      </div>

      <br />
      <div className="form_item flex flex-row justify-between">
        <label className="w-4/12">Tên đệm</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={student.last_name || ""}
          onChange={handleChange}
          className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
        ></input>
      </div>

      <br />
      <div className="form_item flex flex-row justify-between">
        <label className="w-4/12">Ngày sinh</label>
        <input
          type="date"
          id="born"
          name="born"
          value={student.born || ""}
          onChange={handleChange}
          className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
        ></input>
      </div>

      <br />
      <div className="form_item flex flex-row justify-between">
        <label className="w-4/12">Sở thích</label>
        <input
          type="text"
          id="favorite"
          name="favorite"
          value={student.favorite || ""}
          onChange={handleChange}
          className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
        ></input>
      </div>

      <br />
      <div className="form_item flex flex-row justify-between">
        <label className="w-4/12">Điểm toán</label>
        <input
          type="text"
          id="math_point"
          name="math_point"
          value={student.math_point || ""}
          onChange={handleChange}
          className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
        ></input>
      </div>

      <br />
      <div className="form_item flex flex-row justify-between">
        <label className="w-4/12">Điểm Văn</label>
        <input
          type="text"
          id="literature_point"
          name="literature_point"
          value={student.literature_point || ""}
          onChange={handleChange}
          className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
        ></input>
      </div>

      <br />
      <div className="form_item flex flex-row justify-between">
        {" "}
        <label className="w-4/12">Điểm Tiếng Anh </label>
        <input
          type="text"
          id="english_point"
          name="english_point"
          value={student.english_point || ""}
          onChange={handleChange}
          className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
        ></input>
      </div>

      <br />
      <div className="form_item flex flex-row justify-between">
        <label className="w-4/12">Giới tính</label>
        <select
          id="sex"
          name="sex"
          value={student.sex}
          onChange={handleChange}
          className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
        >
          <option value="">--</option>
          <option value="true">Nam</option>
          <option value="false">Nữ</option>
        </select>
      </div>
      <br />
      <input
        type="submit"
        className="self-center px-3 py-1 w-4/12 border-solid border-2 rounded-lg border-black hover:border-red-400 hover:bg-red-400 hover:text-white hover:transition ease-in-out"
      ></input>
    </form>
  );
}
export default AddStudent;
