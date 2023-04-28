import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Basic15 = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(URL);
        setTodos(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-red-500">SSRとは</h1>
      <p>普段はフロントエンド側でhtml.css.js部分を表示していた部分をパフォーマンスの観点からサーバー側で構築しようというもの</p>
      <p>各リクエストごとに構築されるので最新の情報が入ってくる</p>
      <p>実際にページ速度を確認してみよう</p>
      <Link href="https://developers.google.com/speed/pagespeed/insights/ ">ここで確認</Link>
      <p>ssrを使っているページとの比較</p>
      <div className="mt-5">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Basic15;
