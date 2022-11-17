import React from "react";
import close from "../../image/x.svg";
import Product from "../Product/Product";

const ModalLook = ({ setModalLookActive }) => {

  return (
    <div  className="modal_activeLook" onClick={() => {
      setModalLookActive(false);
    }}>
      <div>
        <div className="modal_contentLook" onClick={(e) => e.stopPropagation()}>
          <div
            className="close"
            onClick={() => {
              setModalLookActive(false);
            }}
          >
            <img className="icon__close" src={close} alt='close' />
          </div>
          <h2 className="title_modal">This is your Look</h2>
          <div className="wrapper__modal">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          </div>
          {/* <button
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
            Post a feedback
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ModalLook;