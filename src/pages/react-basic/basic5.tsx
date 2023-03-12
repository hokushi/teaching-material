import type { ReactNode } from 'react';

const Component = () => {
  return (
    <div className="mt-5">
      <h1>普通のコンポーネント</h1>
    </div>
  );
};

const Props = ({ children, css }:{children:ReactNode , css: string}) => {
  return <div className={css}>{children}</div>;
};

const Basic5 = () => {
  return (
    <>
      <Component />
      <Props css={"mt-5 bg-red-400"}>
        <h1>k</h1>
      </Props>
      <Props css={"mt-5 bg-red-800"}>
        <h1>propsの使い方</h1>
        <p>propsは親から子に値を渡すことができる</p>
      </Props>
    </>
  );
};

export default Basic5;
