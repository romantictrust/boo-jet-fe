import React from "react";
import { useDispatch } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { WidgetMenuOptions } from "../constants";

export default function WidgetMenu({ widgetType, data, anchorEl, onClose }) {
  const dispatch = useDispatch();
  return (
    <Menu
      id="widget-menu"
      style={{left: '-4em'}}
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {typeof widgetType === "number"
        ? WidgetMenuOptions[widgetType].map((option, key) => {
            return (
              <MenuItem
                key={key}
                onClick={() => option.method(widgetType, data, dispatch)}
              >
                {option.title}
              </MenuItem>
            );
          })
        : "No Options"}
    </Menu>
  );
}
