import React from "react";
import Nav from "../Nav";
import s from "./style.module.scss";

export const Box: React.FC<{
  top: React.ReactNode;
  content: React.ReactNode;
}> = ({ top, content }) => {
  return (
    <div className={s.box}>
      <div className={s.boxTop}>{top}</div>
      <div className={s.boxContent}>{content}</div>
    </div>
  );
};

const Columns: React.FC<{ col1: React.ReactNode; col2: React.ReactNode }> = ({
  col1,
  col2,
}) => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <Nav />
        <div className={s.columns}>
          <div className={s.column}>{col1}</div>
          <div className={s.column}>{col2}</div>
        </div>
      </div>
    </div>
  );
};

export default Columns;
