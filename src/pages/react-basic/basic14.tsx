import React, { useState, useEffect } from "react";
import axios from "axios";

const Basic14 = ({ initialWidth,todos}) => {
  const [number, setNumber] = useState(1);
  const [width, setWidth] = useState(initialWidth); // SSRの問題を引き起こす

  useEffect(() => {
    setNumber(2);
    setWidth(window.innerWidth);
    console.log(todos)},
    []);

  return (
    <>
      <h1>useStateの基本</h1>
      <p>number: {number}</p>
      <p>window width: {width}</p>
    </>
  );
};

export async function getServerSideProps() {
    // サーバーサイドでデータを取得し、初期幅を設定
    const initialWidth = 0; // ここではデフォルト値として0を使用
  
    const URL = "https://jsonplaceholder.typicode.com/todos";
    let todos = [];
  
    try {
      const res = await axios.get(URL);
      todos = res.data;
    } catch (err) {
      console.log(err);
    }
  
    return {
      props: {
        initialWidth,
        todos,
      },
    };
  }

  export default Basic14;

