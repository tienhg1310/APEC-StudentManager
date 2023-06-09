import axios from "axios";
import React, { memo, useEffect, useState } from "react";

import URL from "../../Data/API";

import { useDispatch, useSelector } from "react-redux";
import { studentSelector } from "../../../redux/selector";


function ShowStudent() {
 

  const dispatch = useDispatch()

  const students = useSelector(studentSelector);
  console.log(students)


  const editRow = (id) => {
  };
  const deleteRow = (id) => {
    
  };

  return (
    <div className="show-container xl:w-9/12 lg:w-full p-7 shadow-2xl rounded-lg border border-slate-100 lg:overflow-auto overscroll-auto text-sm">
      <div className="w-full">
        <div className="flex justify-between">
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
            <div className="flex  justify-between " key={student.id}>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.last_name}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.first_name}
              </div>
              <div className="table-data w-1/12 grow  border border-solid border-slate-600 px-3 py-4">
                {student.born}
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
                  <a className=" text-center text-yellow-400">
                    Sửa
                  </a>
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
