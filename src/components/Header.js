import React from "react";
import { useState } from "react";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as GB } from "../images/gb.svg";
import { ReactComponent as CRO } from "../images/hr.svg";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const options = [
  <GB key={1} className="flagIcon" />,
  <CRO key={2} className="flagIcon" />,
];

const Header = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (switchCheck) => {
    setChecked(switchCheck);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    console.log(anchorRef);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <header>
      <div className="headerLeft">
        <div className="themeChanger">
          <FontAwesomeIcon icon={faMoon} className="moonIcon" />
          <Switch
            onChange={handleChange}
            checked={checked}
            className="themeSwitch"
            height={20}
            width={50}
          />
          <FontAwesomeIcon icon={faSun} className="sunIcon" />
        </div>

        <div className="flag" ref={anchorRef}>
          {options[selectedIndex]}
          <FontAwesomeIcon
            icon={faChevronDown}
            className="chevronIcon"
            onClick={handleToggle}
          />
        </div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={index}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>

      <h1>PRAPP</h1>
      <button>Login</button>
    </header>
  );
};

export default Header;
