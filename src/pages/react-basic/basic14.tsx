import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Basic14 = ({todos}) => {
  useEffect(() => {
    console.log(todos)},
    []);

  return (
    <>
      <h1 className="text-red-500">SSRとは</h1>
      <p>普段はフロントエンド側でhtml.css.js部分を表示していた部分をパフォーマンスの観点からサーバー側で構築しようというもの</p>
      <p>各リクエストごとに構築されるので最新の情報が入ってくる</p>
      <p>実際にページ速度を確認してみよう</p>
      <Link href="https://developers.google.com/speed/pagespeed/insights/ ">ここで確認</Link>
      <p>ssrを使っていないページとの比較</p>
      <Link href="/react-basic/basic15">ssrを使ってないページ</Link>
      <div className="mt-5">
      {todos.map((todo) => {
        return (
            <div key={todo.id}>
                <p>{todo.title}</p>
            </div>
            );
        })
       }
       </div>
    </>
  );
};

export async function getServerSideProps() {
    // サーバーサイドでデータを取得し、初期幅を設定

    const URL = "https://jsonplaceholder.typicode.com/todos";
    let todos = [];

    try {
      const res = await axios.get(URL);
      todos = res.data;
    } catch (err) {
      console.log(err);
    }
    // データをprops経由でページに渡す
    return {
      props: {
        todos,
      },
    };
  }

  export default Basic14;