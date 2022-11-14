import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

const Modal = ({ setModalActive }) => {
  //   const dispatch = useDispatch();
  //   const selector = useSelector((state) => state.card);
  const [cardInfo, setCardInfo] = useState({
    name: "",
    description: "",
    date: "",
  });

  return (
    <div  className="modal_active" onClick={() => {
      setModalActive(false);
    }}>
      <div>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <p
            className="close"
            onClick={() => {
              setModalActive(false);
            }}
          >
            X
          </p>
          <h2 className="title_modal">Please write a review</h2>
          <textarea
            type="text"
            className="textarea"
            onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
          ></textarea>
          <button
            className="btn_modal"
            //   onClick={(e) => {
            //     e.preventDefault();
            //     dispatch({
            //       type: "newGet",
            //       payload: { ...cardInfo, id: Date.now() },
            //     });
            //     setActive(false);
            //   }}
          >
            Post a review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
