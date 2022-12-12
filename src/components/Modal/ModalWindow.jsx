import React, { useState } from "react";
import close from "../../image/x.svg";
import { useDispatch } from "react-redux";
import { PostAddedReviewsFunc } from "../../store/slices/reviewsPost";

const Modal = ({ setModalActive }) => {
  const dispatch = useDispatch();

  const [cardInfo, setCardInfo] = useState({
    comment: "",
  });

  return (
    <div
      className="modal_active"
      onClick={() => {
        setModalActive(false);
      }}
    >
      <div>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <p
            className="close"
            onClick={() => {
              setModalActive(false);
            }}
          >
            <img className="icon__close" src={close} alt="close" />
          </p>
          <h2 className="title_modal">Please write a feedback</h2>
          <textarea
            type="text"
            className="textarea"
            onChange={(e) =>
              setCardInfo({ ...cardInfo, comment: e.target.value })
            }
          ></textarea>
          <button
            className="btn_modal"
            onClick={(e) => {
              e.preventDefault();
              dispatch(PostAddedReviewsFunc(cardInfo));
              setModalActive(false);
            }}
          >
            Post a feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
