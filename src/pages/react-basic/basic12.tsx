import { Dispatch, SetStateAction, createContext,useState } from 'react';
import { useContext} from 'react'
import { TodoProvider } from "../components/basic12context";
import { Todo } from "../components/basic12todo";

export const UserCount = createContext(0)
export const User2Count = createContext<UserCountContextType>(
    {
        count2: 0,
        setCount2: () => {},
    }
)

interface UserCountContextType {
  count2: number;
  setCount2: Dispatch<SetStateAction<number>>;
}


const Basic12 = () => {
    const [count2, setCount2] = useState(100);
    const value = {
      count2,
      setCount2,
    };
    return (
        <div>
            <h1 className="text-4xl font-bold">usecontextの基本使い方</h1>
            <p className="mt-10 text-xl font-bold">
                今回はusecontextの基本的な使い方を学びます。
            </p>
            <p className="mt-10 text-xl font-bold">
                まずはusecontextを使うためには、まずはcontextを作成します。
            </p>
            <p className="mt-10 text-xl font-bold">
                今回は、usecontextを使って、ユーザーの名前を表示させるということをやってみます。
            </p>
            <div className='mt-10'>
              <UserCount.Provider value={100}>
              <ComponentA/>
              </UserCount.Provider>
              <User2Count.Provider value={value}>
                <ComponentD/>
              </User2Count.Provider>
            </div>
            <div className='mt-10'>
                <TodoProvider>
                    <Todo />
                </TodoProvider>
            </div>
        </div>
    )
}

export default Basic12


const ComponentA = () => {
    return (
        <div>
            <p>Componet A</p>
            <ComponentB />
        </div>
    )
}

const ComponentB = () => {
    return (
        <div>
            <p>Componet B</p>
            <ComponentC />
        </div>
    )
}

const ComponentC = () => {
    const count = useContext(UserCount)

    return (
        <div>
            <p>Componet C</p>
            <p>{count}</p>
        </div>
    )
}

const ComponentD = () => {
    return (
        <div>
            <p>Componet D</p>
            <ComponentE />
        </div>
    )
}

const ComponentE = () => {
    return (
        <div>
            <p>Componet E</p>
            <ComponentF />
        </div>
    )
}

const ComponentF = () => {
    const { count2, setCount2 } = useContext(User2Count);

    return (
        <div>
            <p>Componet F</p>
            <p>{count2}</p>
            <button onClick={() => setCount2(count2 + 1)}>カウントアップ</button>
        </div>
    )
}
