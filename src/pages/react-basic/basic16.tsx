import React from "react";
import { Greeting,HibaraAge } from "../../components/component_for_test";


export function sum(a: number, b: number): number {
    return a + b;
}

export function minus(a: number, b: number): number|string {
    if(a>=b){
      return a - b;
    }else{
      return "aはbより大きい値を入れてください";
    }
}

const Basic16 = () => {
   return (
        <>
            <h1 className="text-red-500">テストとは</h1>
            <p>テストとは、プログラムの動作を確認する作業のこと</p>
            <p>テストの種類は大きく分けて、単体テスト（ユニットテスト）、結合テスト、総合テストの3種類がある</p>
            <p>単体テストとは、プログラムの最小単位である関数やクラスなどの単体をテストすること</p>
            <p>結合テストとは、複数の単体を組み合わせてテストすること</p>
            <p>総合テストとは、システム全体をテストすること</p>
            <p>今回は単体テストを行う</p>
            <a className="text-red-500" href="https://typescriptbook.jp/tutorials/jest">わかりやすい記事</a>
            <p>テストを行うには、テスト対象の関数やクラスを作成する必要がある</p>
            <p className="text-red-500">まずは簡単な関数のみのテスト</p>
            <p>src/pages/react-basic/basic16.tsxにある関数を作成する</p>
            <p>テストはtests/basic16.test.tsxにコードが書かれてある</p>
            <p>テストを行うには、npm run testを行う</p>
            <p>テストが通ればOK</p>
            <div className="mt-5">
             <Greeting name="Hibara"/>
             <HibaraAge name="Hibara" age={20}/>
            </div>
            <p className="mt-5">上の２つはコンポーネントだがコンポーネントもユニットテストできる</p>
            <p>コンポーネント自体はcomponent_for_test.tsxに書いてある。</p>
            <p>テストはtests/basic16.test.tsxにコードが書かれてある</p>
            
        </>
   );
};

export default Basic16;

  