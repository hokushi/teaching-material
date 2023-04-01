import React, { useState, useEffect } from "react";

const Basic14 = ({ initialWidth }) => {
  const [number, setNumber] = useState(1);
  const [width, setWidth] = useState(initialWidth); // SSRの問題を引き起こす

  useEffect(() => {
    setNumber(2);
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <h1>useStateの基本</h1>
      <p>number: {number}</p>
      <p>window width: {width}</p>
    </>
  );
};

export function getServerSideProps() {
    // サーバーサイドでデータを取得し、初期幅を設定
    const initialWidth = 0; // ここではデフォルト値として0を使用
  
    return {
      props: {
        initialWidth,
      },
    };
  }
  
  export default Basic14;

