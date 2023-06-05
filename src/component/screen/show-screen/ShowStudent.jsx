import axios from "axios";
import React, { memo, useEffect, useState } from "react";

import URL from "../../Data/API";

import './ShowStudent.css'

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
    <div className="show-container w-7/12 p-7 shadow-2xl rounded-lg border border-slate-100">
      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a id="first_name">Tên</a>
          </div>
          <div className="header__item">
            <a id="last_name">Tên đệm</a>
          </div>
          <div className="header__item">
            <a id="born">Ngày sinh</a>
          </div>
          <div className="header__item">
            <a id="favorite">Sở thích</a>
          </div>
          <div className="header__item">
            <a id="math_point">Điểm Toán</a>
          </div>
          <div className="header__item">
            <a id="literature_point">Điểm Văn</a>
          </div>
          <div className="header__item">
            <a id="english_point">Điểm Anh</a>
          </div>
          <div className="header__item">
            <a id="sex">Giới tính</a>
          </div>
          <div className="header__item">
            <a id="action">Hành động</a>
          </div>
        </div>
        <div className="table-content">
          {students.map((student) => (
            <div className="table-row" key={student.id}>
              <div className="table-data">{student.first_name}</div>
              <div className="table-data">{student.last_name}</div>
              <div className="table-data">
                {student.born.toLocaleDateString()}
              </div>
              <div className="table-data">{student.favorite}</div>
              <div className="table-data">{student.math_point}</div>
              <div className="table-data">{student.literature_point}</div>
              <div className="table-data">{student.english_point}</div>
              <div className="table-data">{student.sex ? "Nam" : "Nữ"}</div>
              <div className="table-data flex justify-between items-center">
                <div><a className="cursor-pointer px-4 text-yellow-400  border-r-2 border-black">Sửa</a></div>
                <div><a className="cursor-pointer px-4 text-red-500">Xoá</a></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ShowStudent);
