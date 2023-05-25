import React, { useState } from "react";

function FormStudent({ handleSetdata }) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  // render dữ liệu
  const [student, setStudent] = useState({
    maSv: "",
    tenSv: "",
    tuoi: "",
    gioitinh: "",
    ngaysinh: "",
    noisinh: "",
    diachi: "",
  });

  const handleChangeStudent = (e) => {
    const { name, value } = e.target;
    setStudent((student) => ({
      ...student,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    handleSetdata(student);
    e.preventDefault();
    // Logic xử lý khi form được submit
    console.log(student);
    // Gọi API hoặc xử lý dữ liệu theo nhu cầu  ở đây
  };

  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample" onSubmit={handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="maSv"
                  value={student.maSv}
                  onChange={handleChangeStudent}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="tenSv"
                  value={student.tenSv}
                  onChange={handleChangeStudent}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="tuoi"
                  value={student.tuoi}
                  onChange={handleChangeStudent}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  onChange={handleChangeStudent}
                  value={student.gioitinh}
                  name="gioitinh"
                >
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  onChange={handleChangeStudent}
                  name="diachi"
                >
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  defaultValue={""}
                  onChange={handleChangeStudent}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary me-2"
              onClick={toggleForm}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormStudent;
