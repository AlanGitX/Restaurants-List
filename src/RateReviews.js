import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";

function RateReviews(reviews) {
  const [open, setOpen] = useState(false);

  const review = reviews.reviews

  return (
   <>
         <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click to view the reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="pt-4">
         {
         review.map(item=>(
           <div>
                <p>{item.name}   on:{<span>{item.date}</span>}</p>
                <p>{item.comments}</p>
           </div>
         ))
         }
        </div>
      </Collapse>
   </>
  );
}

export default RateReviews;
