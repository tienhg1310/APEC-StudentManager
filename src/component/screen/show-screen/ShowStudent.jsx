import React, { memo, useEffect, useState } from "react";
import URL from "../../Data/API";
import axios from "axios";
import './ShowStudent.css'

function ShowStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/students`)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
        {/* <div>
          <tr>
            <th>Tên</th>
            <th>Tên đệm</th>
            <th>Ngày sinh</th>
            <th>Sở thích</th>
            <th>Điểm Toán</th>
            <th>Điểm Văn</th>
            <th>Điểm Anh</th>
            <th>Giới tính</th>
          </tr>
        </div>
        <div>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.born}</td>
              <td>{student.favorite}</td>
              <td>{student.math_point}</td>
              <td>{student.literature_point}</td>
              <td>{student.english_point}</td>
              <td>{student.sex ? "Nam" : "Nữ"}</td>
            </tr>
          ))}
        </div> */}

<div className="table">
        <div className="table-header">
          <div className="header__item"><a id="first_name">Tên</a></div>
          <div className="header__item"><a id="last_name" >Tên đệm</a></div>
          <div className="header__item"><a id="born" >Ngày sinh</a></div>
          <div className="header__item"><a id="favorite" >Sở thích</a></div>
          <div className="header__item"><a id="math_point" >Điểm Toán</a></div>
          <div className="header__item"><a id="literature_point" >Điểm Văn</a></div>
          <div className="header__item"><a id="english_point" >Điểm Anh</a></div>
          <div className="header__item"><a id="sex" >Giới tính</a></div>
        </div>
        <div className="table-content">	
          <div className="table-row">		
            <div className="table-data">Tom</div>
            <div className="table-data">2</div>
            <div className="table-data">0</div>
            <div className="table-data">1</div>
            <div className="table-data">5</div>
          </div>
          
        </div>	
      </div>
    </div>
  );
}

export default memo(ShowStudent);
