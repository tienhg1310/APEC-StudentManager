import React, { memo } from 'react'

function AddStudent() {
  return (
    <div>
        <label>Tên</label>
        <input type='text' id='first-name'></input>
        <br />
        <label>Tên đệm</label>
        <input type='text' id='last-name'></input>
        <br />
        <label>Ngày sinh</label>
        <input type='date' id='born'></input>
        <br />
        <label>Sở thích</label>
        <input type='text' id='favorite'></input>
        <br />
        <label>Điểm toán</label>
        <input type='text' id='math-point'></input>
        <br />
        <label>Điểm Văn</label>
        <input type='text' id='literature-point'></input>
        <br />
        <label>Điểm Tiếng Anh </label>
        <input type='text' id='english-point'></input>
        <br />
        <label>Giới tính</label>
        <input type='radio' name='sex' id='male' value={0}></input>
        <input type='radio' name='sex' id='female' value={1}></input>
        <br />
    </div>
  )
}
export default memo(AddStudent)
