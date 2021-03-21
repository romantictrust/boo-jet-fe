import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { WidgetMenuOptions } from "../constants";

export default function WidgetMenu({ widgetType, anchorEl, onClose }) {
  return (
    <Menu
      id="widget-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {WidgetMenuOptions[widgetType].map((option) => {
        return (
          <MenuItem onClick={() => option.method("option")}>
            {option.title}
          </MenuItem>
        );
      })}
    </Menu>
  );
}
