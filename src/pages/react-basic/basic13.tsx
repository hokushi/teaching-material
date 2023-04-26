import Link from "next/link";
import { countState, userState,pullState } from "../../components/atoms";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import dynamic from 'next/dynamic';

const MyComponentWithPersistAtom = dynamic(() => import("../../components/usercomponent"), { ssr: false });

const Home = () => {

  //atomの値の操作を定義（read,write)
  const [count, setCount] = useRecoilState(countState);
  const pull = useRecoilValue(pullState);

  const increment =() => {
    setCount(count + 1);
  }

  //userのageをカウントアップ（機能としては意味無し）
  const updateUser = u => {
    return { ...u, ...{ age: u.age + 1 } };
  }

  return (
    <>
      <p>まずrecoilを使うためにはrecoilを使う際に適応するべき場所を＜recoilroot＞で囲む</p>
      <p>今回はcomponentフォルダのatoms.tsxにてstateを管理する</p>
      <p>そこで管理するstateをどこでも使うようにできるのがrecoilのイメージ</p>
      <p className="text-red-500 mt-5">基本的な使い方</p>
      <div>
        <p>count:{count}</p>
        <button onClick={increment}>count increment</button>
      </div>
      <p>これはuseRecoilStateを使いstateの値、更新関数を参照した</p>
      <div className="mt-10">
        <p>次はもっと簡単にuseRecoilValueを利用してstate値を利用するだけ</p>
        <p>{pull.title}</p>
        <p>{pull.name}</p>
        <p>{pull.age}</p>
        <p>{pull.postnumber}</p>
        <p>{pull.address}</p>
        <p>{pull.tel}</p>
      </div>
      <div className="mt-10 text-red-500">難しめ</div>
      <p>persistatomを使いstateの永続化をしたも。しかしrecoilpersistはライアントサイドでしか動かない。そのためサーバー側とクライアント側でレンダリングする内容に違いが生じる</p>
      <p>解決方法を表示する。</p>
      <p>dynamicを使うことでssrを実行しないようにしている</p>
      <MyComponentWithPersistAtom/>
    </>
  );
}

export default Home;