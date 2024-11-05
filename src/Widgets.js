import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticles = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticles("React JS is back", "Top news - 8909 readers")}
      {newsArticles("Australia a tough IT market", "7News - 1020 readers")}
      {newsArticles("Tesla hits new highs", "Cars & Auto - 809 readers")}
      {newsArticles("USA election result", "Politics - 92 readers")}
      {newsArticles("React Native 0.76", "Techiee - 9963 readers")}
      {newsArticles("Is Redux too good?", "Code - 809 readers")}
    </div>
  );
}

export default Widgets;
