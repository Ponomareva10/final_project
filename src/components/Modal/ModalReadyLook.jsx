import React from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../../image/x.svg";
import Spinner from "react-bootstrap/esm/Spinner";
import Product from "../Product/Product";
import { PostAddedReviewsFunc } from "../../store/slices/reviewsPost";

const ModalLook = ({ setModalLookActive, looksItem }) => {
  const dispatch = useDispatch();
  const { louder } = useSelector((state) => state.lookSlice);

  return (
    <div
      className="modal_activeLook"
      onClick={() => {
        setModalLookActive(false);
      }}
    >
      <div>
        <div className="modal_contentLook" onClick={(e) => e.stopPropagation()}>
          <div
            className="close"
            onClick={() => {
              setModalLookActive(false);
            }}
          >
            <img className="icon__close" src={close} alt="close" />
          </div>
          <h2 className="title_modal">This is your Look</h2>
          <div className="wrapper__modal">
            {louder ? (
              <Spinner animation="grow" />
            ) : (
              looksItem.map((card) => <Product key={card.id} card={card} />)
            )}
          </div>
          <button
            className="btn_modal"
            onClick={(e) => {
              e.preventDefault();
              dispatch(PostAddedReviewsFunc());
              setModalLookActive(false);
            }}
          >
            Post a feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLook;
