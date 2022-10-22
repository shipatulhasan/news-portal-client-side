import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";

import { Link } from "react-router-dom";

const NewsSummeryCard = ({ news }) => {
  const { _id, title, image_url, author, details,rating,total_view } = news;

  const date = new Date(author.published_date);

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <Image
            className="rounded-circle"
            style={{ height: "60px", width: "60px" }}
            src={author.img}
            alt=""
          />
          <div>
            <h6 className="mb-0">
              {author.name ? author.name : "No Data Found"}
            </h6>
            <small>{date ? date.toDateString() : "No Data Found"}</small>
          </div>
        </div>
        <div className="d-flex gap-2">
          <BsBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body className="px-3">
        <Card.Title>{title}</Card.Title>
        <Card.Img className="py-3" variant="top" src={image_url} />

        {details?.length > 200 ? (
          <Card.Text className="py-2">
            {details.slice(0, 250) + "..."}
            <Link to={`/news/${_id}`} className="text-danger fw-bold"> Read More</Link>
          </Card.Text>
        ) : (
          <Card.Text className="py-2">{details}</Card.Text>
        )}
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between'>
        <small className="fw-bold fs-6 text-dark"><sup><FaStar /></sup> {rating.number}</small>
        <small className="fw-bold fs-6 text-dark"><FaEye /> {total_view ? total_view : '1000'}k</small>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummeryCard;
