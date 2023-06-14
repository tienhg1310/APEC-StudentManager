import axios from "axios";
import React, { memo, useEffect, useState } from "react";

import URL from "../../Data/URL";

import { useDispatch, useSelector } from "react-redux";
import { studentSelector } from "../../../redux/selector";

import { deleteTheStudent } from "../../../redux/studentSlice";
import { toast } from "react-toastify";

function ShowStudent() {
  // const [students, setStudents] = useState([]);
  const dispatch = useDispatch();
  const students = useSelector(studentSelector);
  const [showEdit, setShowEdit] = useState(false);
  const [selectStudent, setSelectStudent] = useState({});
  const [changeStudent, setChangeStudent] = useState({
    first_name: "",
    last_name: "",
    born: "",
    favorite: "",
    math_point: "",
    literature_point: "",
    english_point: "",
    sex: "",
  });

  const editRow = (id) => {
    const student = students.filter((student) => student.id === id);
    const std = {
      born: student[0].born,
      english_point: student[0].english_point,
      favorite: student[0].favorite,
      first_name: student[0].first_name,
      id: student[0].id,
      last_name: student[0].last_name,
      literature_point: student[0].literature_point,
      math_point: student[0].math_point,
      sex: student[0].sex,
    };
    setSelectStudent(std);
    setShowEdit(!showEdit);
  };
  const deleteRow = (id) => {
    let text = "Press a button!\nEither OK or Cancel.";
    // alert('Are u sure!')
    if (window.confirm() === true) {
      console.log("press oke");
      dispatch(deleteTheStudent(Number(id)));
      toast.error("Deleted Student!!!");
    } else {
      toast.success("You're select Cancel!!!");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "born") {
      setChangeStudent((values) => ({
        ...values,
        [name]: moment(value).format("yyyy-MM-DD"),
      }));
    } else {
      setChangeStudent((values) => ({ ...values, [name]: value }));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const timeParse = Date.parse(changeStudent.born) / 1000;
    const gender = changeStudent.sex === "true" ? true : false;
    const postChangeStudent = {
      ...changeStudent,
      born: timeParse,
      sex: gender,
    };
    
    toast.success("Add Student Success!!!");
  };

  return (
    <div className="show-container h-screen xl:w-9/12 lg:w-full px-7 shadow-2xl rounded-lg border border-slate-100 overflow-y-scroll text-sm">
      {showEdit ? (
        <div className="fixed z-30 top-0 left-0 right-0 w-screen h-screen flex justify-center items-center bg-black/30 transition ease-in-out">
          <form
            className="w-7/12 h-8/12 flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div
              className="self-end hover:text-red-400"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowEdit(!showEdit);
              }}
            >
              X
            </div>
            <div className="self-center pb-10 font-extrabold text-4xl">
              <h1>Profile Settings</h1>
            </div>
            <div className="form_item flex flex-row justify-between" value="">
              <label>First Name</label>
              <input
                type="text"
                required
                className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
                placeholder={selectStudent.first_name}
                value={changeStudent.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="form_item flex flex-row justify-between">
              <label>Last Name</label>
              <input
                type="text"
                required
                className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
                placeholder={selectStudent.last_name}
                value={selectStudent.last_name}
                onChange={handleChange}
              />
            </div>

            <div className="form_item flex flex-row justify-between">
              <label>Born</label>
              <input
                type="Date"
                required
                className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
                value={changeStudent.born}
                onChange={handleChange}
              />
            </div>
            <div className="form_item flex flex-row justify-between">
              <label>Favourite</label>
              <input
                type="text"
                required
                className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
                value={changeStudent.favorite}
                placeholder={selectStudent.favorite}
                onChange={handleChange}
              />
            </div>
            <div className="form_item flex flex-row justify-between">
              <label>Điểm Toán</label>
              <input
                type="text"
                required
                className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
                placeholder={selectStudent.math_point}
                value={changeStudent.math_point}
                onChange={handleChange}
              />
            </div>
            <div className="form_item flex flex-row justify-between">
              <label>Điểm Văn</label>
              <input
                type="text"
                required
                className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
                placeholder={selectStudent.literature_point}
                value={changeStudent.literature_point}
                onChange={handleChange}
              />
            </div>
            <div className="form_item flex flex-row justify-between">
              <label>Điểm Anh</label>
              <input
                type="text"
                required
                className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
                placeholder={selectStudent.english_point}
                value={changeStudent.english_point}
                onChange={handleChange}
              />
            </div>
            <div className="form_item flex flex-row justify-between">
              <label className="w-4/12">Giới tính</label>
              <select
                id="sex"
                name="sex"
                required
                className="px-3 py-1 w-8/12 border-solid border-2 rounded-lg border-black focus-visible:border-red-400"
                placeholder={selectStudent.sex === true ? true : false}
                value={changeStudent.sex}
                onChange={handleChange}
              >
                <option value="">--</option>
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </select>
            </div>

            <div className="self-center my-10">
              <button
                type="button"
                className="self-center px-5 py-3 border-solid border-2 rounded-xl border-black hover:border-red-400 hover:bg-red-400 hover:text-white hover:transition ease-in-out"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      ) : null}
      <div className="w-full">
        <div className="flex justify-between  sticky top-0 z-10">
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="last_name">Tên đệm</a>
          </div>
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="first_name">Tên</a>
          </div>
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="born">Ngày sinh</a>
          </div>
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="favorite">Sở thích</a>
          </div>
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="math_point">Điểm Toán</a>
          </div>
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="literature_point">Điểm Văn</a>
          </div>
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="english_point">Điểm Anh</a>
          </div>
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="sex">Giới tính</a>
          </div>
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="action">Hành động</a>
          </div>
        </div>
        <div className="table-content">
          {students.map((student) => (
            <div className="flex  justify-between py" key={student.id}>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.last_name}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.first_name}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {Date(student.born / 1000)}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.favorite}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.math_point}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.literature_point}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.english_point}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.sex ? "Nam" : "Nữ"}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600  flex justify-center items-center text-center">
                <div
                  className="cursor-pointer grow px-3 py-4 border-r border-solid border-slate-600 hover:bg-slate-500 transition"
                  onClick={() => editRow(student.id)}
                >
                  <a className=" text-center text-yellow-400">Sửa</a>
                </div>
                <div
                  className="cursor-pointer grow px-3 py-4 hover:bg-slate-500 transition"
                  onClick={() => deleteRow(student.id)}
                >
                  <a className=" grow text-red-500">Xoá</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ShowStudent);
