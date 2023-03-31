import Link from "next/link";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { countState, userState,pullState } from "../../components/atoms";
import dynamic from 'next/dynamic';

const MyComponentWithPersistAtom = dynamic(() => import("../../components/usercomponent"), { ssr: false });


const Home = () => {

  //atomの値の操作を定義（read,write)
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);
  const pull = useRecoilValue(pullState);

  //count increment処理
  const increment = c => {
    return c + 1;
  }

  //userのageをカウントアップ（機能としては意味無し）
  const updateUser = u => {
    return { ...u, ...{ age: u.age + 1 } };
  }

  return (
    <>
      <h1>Home</h1>
      <div>
        <p>count:{count}</p>
        <button onClick={() => setCount(increment)}>count increment</button>
        <hr />
      </div>
      <MyComponentWithPersistAtom/>
      <div>
        <Link href="/about13">About</Link>
      </div>
      <div className="mt-10">
        <p>{pull.title}</p>
        <p>{pull.name}</p>
        <p>{pull.age}</p>
        <p>{pull.postnumber}</p>
        <p>{pull.address}</p>
        <p>{pull.tel}</p>
      </div>
    </>
  );
}

export default Home;