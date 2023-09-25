import React, { useState } from "react";
import "./Sidepanel.css";
import { Button } from "@mui/material";
import SidePanel from "./Sidepanel";

function SidePanelWithToggle({ SideData }) {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="buttonSide">
      <Button onClick={toggleSidePanel}>Side Panel</Button>
      <SidePanel SideData={SideData} open={isSidePanelOpen} />
    </div>
  );
}

export default SidePanelWithToggle;