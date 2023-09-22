import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Problem1 = () => {
  const [data, setData] = useState({ name: "", status: "" });

  const [dataList, setDataList] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [show, setShow] = useState("All");

  useEffect(() => {
    let filter = dataList.filter((item) => item.status == show);
    setFilterData([...filter]);
  }, [dataList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.name === "") {
      toast("Name is Required");
    } else if (data.status == "" || data.status == "-1") {
      toast("Status is Required");
    } else {
      setDataList([...dataList, { name: data.name, status: data.status }]);
      toast("Data Insert Successful");
      setData({ name: "", status: "" });
    }
  };

  const handleFilter = (data) => {
    setShow(data);
    if (data == "All") {
      setFilterData([...dataList]);
    } else {
      let filter = dataList.filter((item) => item.status == data);
      setFilterData([...filter]);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="shadow-lg p-5 mt-2 bg-white">
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status">Status</label>
          <select
            className="form-select"
            name="status"
            id="status"
            value={data.status}
            onChange={handleChange}
          >
            <option value="-1">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <input
          className="btn btn-outline-success"
          type="submit"
          value="Submit"
        />
      </form>

      <ul className="d-flex mt-4 bg-white p-2">
        <li>
          <button
            onClick={() => handleFilter("All")}
            className={
              "btn btn-sm  ms-4 btn-outline" +
              (show == "All" ? "-success" : "-danger")
            }
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilter("Pending")}
            className={
              "btn btn-sm  ms-4 btn-outline" +
              (show == "Pending" ? "-success" : "-danger")
            }
          >
            Pending
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilter("Active")}
            className={
              "btn btn-sm  ms-4 btn-outline" +
              (show == "Active" ? "-success" : "-danger")
            }
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilter("Completed")}
            className={
              "btn btn-sm  ms-4 btn-outline" +
              (show == "Completed" ? "-success" : "-danger")
            }
          >
            Completed
          </button>
        </li>
      </ul>

      <table className="table border table-striped table-primary mt-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => (
            <tr key={index}>
              <th>{item.name}</th>
              <th>{item.status}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problem1;
