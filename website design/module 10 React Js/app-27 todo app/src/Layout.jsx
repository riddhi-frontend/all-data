import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AddTask from "./AddTask";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Layout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts`).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/posts/${id}`).then(() => {
      setData(data.filter((item) => item.id !== id));
    });
  };

  return (
    <>
      <Container className="p-5 bg-white mt-5 border border-5 border-success w-50">
        <AddTask />

        <h1>
          To do List
          <button type="button" className="btn btn-lg bg-dark text-white ms-5">
            Total Task <span className="badge badge-danger text-white bg-dark">{data.length}</span>
          </button>
          <button type="button" className="btn btn-lg bg-dark text-white ms-5" data-bs-target="#add-task" data-bs-toggle="modal">
            Add Task
          </button>
        </h1>

        {data && data.map((row) => {
          return (
            <Container className="shadow mt-5 p-4" key={row.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span>{row.tname}</span> - <span>{row.priority}</span> - <span>{row.date}</span>
                </div>
                <div>
                  <button type="button" className="btn bg-danger text-white btn-sm" onClick={() => handleDelete(row.id)}>
                    <span className="bi bi-trash"></span>
                  </button>
                  <button type="button" className="btn btn-primary bg-primary text-white btn-sm ms-2">
                    <span className="bi bi-pencil"></span>
                  </button>
                </div>
              </div>
            </Container>
          );
        })}
      </Container>
    </>
  );
};

export default Layout