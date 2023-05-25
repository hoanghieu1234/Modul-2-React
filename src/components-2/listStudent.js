import React, { useState } from "react";
// import EditStudent from "./EditStudent";

function ListStudent(props) {
  const [editRow, setEditRow] = useState(null);
  const dataForm = props.studens;

  const onPressEditingRow = (index) => {
    setEditRow(index);
  };

  const onSaveEditingRow = (index, updatedStudent) => {
    // Perform the save logic using the updatedStudent object
    console.log("Saving changes:", updatedStudent);
    setEditRow(null);
  };

  const onCancelEditingRow = () => {
    setEditRow(null);
  };

  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {dataForm.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    {editRow === index ? (
                      <EditStudent
                        student={data}
                        onSave={(updatedStudent) =>
                          onSaveEditingRow(index, updatedStudent)
                        }
                        onCancel={onCancelEditingRow}
                      />
                    ) : (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{data.maSv}</td>
                        <td>{data.tenSv}</td>
                        <td>{data.tuoi}</td>
                        <td>{data.gioitinh}</td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-danger btn-icon-text"
                            >
                              Xem
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning btn-icon-text"
                              onClick={() => onPressEditingRow(index)}
                            >
                              Sửa
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-icon-text"
                            >
                              Xóa
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListStudent;
