import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        navigate("/undefined", { state: err.message });
      });
  }, []);

  return (
    <div>
      {!book ? (
        <p>Yükleniyor</p>
      ) : (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-item-center">
            <img
              style={{ maxHeight: "400px" }}
              className="rounded img-fluid shadow"
              alt={book.title}
              src={book.image}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4">
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label="Açıklama" value={book.description} />
              <BookInfo label="Yıl" value={book.year} />
              <BookInfo label="Sayfa Sayısı" value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

const BookInfo = ({ value, label }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-secondary me-3">{label} </span>
      <span>{value}</span>
    </p>
  );
};
