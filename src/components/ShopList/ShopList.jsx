import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  GetOutermostFunc,
  GetShoesFunc,
  GetPantsFunc,
  GetAccesoriesFunc,
  GetProductFunc,
  GetAccesoriesCategoryFunc,
} from "../../store/slices/Products";
import Product from "../Product/Product";
import s from "./style.module.scss";
import ImageComponents from "../imageComponents/imageComponents";
import Spinner from "react-bootstrap/Spinner";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ModalProduct from "../Modal/ModalProduct";
import SetAcces from "../SetAcces/SetAcces";

const ShopList = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { cards, louder, accesSet } = useSelector(
    (state) => state.ProductSlice
  );
  const [modActive, setModActive] = useState(false);

  const [obj, setObj] = useState({
    gender: "",
    style: "",
  });

  const handleChangeFilter = (gender, style) => {
    setObj({ ...obj, gender, style });
  };

  useEffect(() => {
    dispatch(GetAccesoriesCategoryFunc(obj));
    handleClose();
  }, [obj]);

  useEffect(() => {
    if (pathname === "/shoplist") dispatch(GetProductFunc());
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = anchorEl2;
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <>
      <ImageComponents />
      <div className={s.shop}>
        <aside className={s.shop__aside}>
          <div
            className={s.aside__cotegory}
            onClick={() => dispatch(GetOutermostFunc())}
          >
            outermost
          </div>
          <div
            className={s.aside__cotegory}
            onClick={() => dispatch(GetShoesFunc())}
          >
            shoes
          </div>
          <div
            className={s.aside__cotegory}
            onClick={() => dispatch(GetPantsFunc())}
          >
            pants
          </div>
          <div
            className={s.aside__cotegory}
            onClick={() => dispatch(GetAccesoriesFunc())}
          >
            accesories
          </div>
          <div
            className={s.aside__cotegory}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            male accesories
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleChangeFilter("man", "classic")}>
              bussiness
            </MenuItem>
            <MenuItem onClick={() => handleChangeFilter("man", "sport")}>
              sport
            </MenuItem>
            <MenuItem onClick={() => handleChangeFilter("man", "casual")}>
              casual
            </MenuItem>
          </Menu>
          <div
            className={s.aside__cotegory}
            aria-controls={open2 ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onClick={(e) => {
              handleClick2(e);
            }}
          >
            female accesories
          </div>
          <Menu
            id="basic-menui"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleChangeFilter("woman", "classic")}>
              bussiness
            </MenuItem>
            <MenuItem onClick={() => handleChangeFilter("woman", "sport")}>
              sport
            </MenuItem>
            <MenuItem onClick={() => handleChangeFilter("woman", "casual")}>
              casual
            </MenuItem>
          </Menu>
        </aside>
        <section>
          <div className={s.shop__products}>
            {accesSet.map((card) => {
              if (card.length !== 0) {
                return <SetAcces key={card.id} looksItem={card} />;
              }
            })}
          </div>
          <div className={s.shop__products}>
            {louder ? (
              <Spinner animation="grow" />
            ) : (
              cards.map((card) => <Product key={card.id} card={card} />)
            )}
          </div>
          {modActive && <ModalProduct setModActive={setModActive} />}
        </section>
      </div>
    </>
  );
};

export default ShopList;
