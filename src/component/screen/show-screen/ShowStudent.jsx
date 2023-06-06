import axios from "axios";
import React, { memo, useEffect, useState } from "react";

import URL from "../../Data/API";

// import './ShowStudent.css'
import moment from "moment/moment";
import AddStudent from "../add-screen/AddStudent";

function ShowStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/students`)
      .then((res) => {
        setStudents(
          res.data.map((item) => ({
            ...item,
            born: new Date(item.born * 1000),
          }))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="show-container xl:w-9/12 lg:w-full p-7 shadow-2xl rounded-lg border border-slate-100 lg:overflow-auto">
      <div className="w-full">
        <div className="flex justify-between">
          <div className="header__item w-1/12 grow bg-slate-500 border border-solid border-slate-600 px-3 py-4 text-center font-bold">
            <a id="last_name" >Tên đệm</a>
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
            <div className="flex  justify-between " key={student.id}>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">{student.last_name}</div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">{student.first_name}</div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.born.toLocaleDateString()}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">{student.favorite}</div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">{student.math_point}</div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.literature_point}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">{student.english_point}</div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.sex ? "Nam" : "Nữ"}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4 flex justify-between items-center">
                <div>
                  <a className="cursor-pointer text-yellow-400">Sửa</a>
                </div>
                <div>
                  <a className="cursor-pointer text-yellow-400">|</a>
                </div>
                <div>
                  <a className="cursor-pointer text-red-500">Xoá</a>
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
