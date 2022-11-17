import React, {useState} from 'react';
import burger from '../../image/burger.svg';
import Nav from 'react-bootstrap/Nav';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function ListExample() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={burger} className='burger__icon' alt="burger_icon" />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Nav.Link href="/shoplist">Shop</Nav.Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Nav.Link href="/reviews">Reviews</Nav.Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Nav.Link href="/basket">Basket</Nav.Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ListExample;