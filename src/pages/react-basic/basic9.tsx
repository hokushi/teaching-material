import { useState, useEffect } from "react";

const Syncronization = () => {
  let int1 = 0;
  let int2 = 0;

  /* 非同期のまま */
  const set_int = (a:number, b:number) => {
    setTimeout(() => {
      int1 = a;
      int2 = b;
    }, 1000);
  };


  const merge_int = () => {
    set_int(1, 2);
    alert(int1 + int2);
  };

  /* コールバックを使った同期 */
  /* 非同期の中に同期を入れちゃうイメージ */
  const set_int2 = (a:number, b:number, callback:any) => {
    setTimeout(() => {
      int1 = a;
      int2 = b;
      callback();
    }, 1000);
  };

  const sum_int2 = () => {
    alert(int1 + int2);
  };

  /* promiseを使った関数 */

  const check = () => {
    const set_int3 = (a:number, b:number) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          int1 = a;
          int2 = b;
          resolve("成功"); // 処理完了
          reject("失敗"); // 処理失敗
        }, 1000);
      });
    };

    const sum_int3 = () => {
      alert(int1 + int2);
    };

    set_int3(1, 2).then((answer) => {
      console.log(answer)
      sum_int3();
    }).catch((error) => {
      console.log(error)
      alert("...err");
    });
  };

  /* promiseを使った確認２ */
  const [number, setNumber] = useState(0);

  const checkmain2 = () => {
    const checksub2 = () => {
      return new Promise((resolve, reject) => {
        setNumber(2)
        
        // 1秒待つ
        setTimeout(() => {
          
        }, 1000);

        resolve("成功");
        reject();
      });
    };
    checksub2().then((answer) => {
      console.log(answer);
      console.log(number);
    }).catch(() => {
      console.log("...err");
    });
  };

  /* async,await関数を使う */
    const set_init4 = async(a:number,b:number):Promise<boolean> => {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        int1 = a;
        int2 = b;
        resolve(true);
        reject(false);
        }, 1000);
      });}
    
    const sum_int4=()=>{
        alert(int1 + int2);
    }
    
    const checksub4 = async () => {
      const answer=await set_init4(1, 2);
      console.log(answer)
      sum_int4();
    };
    
    //asyncとは、関数の前に付けると、その関数が非同期であることを示す
    //awaitとは、非同期処理が終わるまで待つことを示す
    //awaitは、async関数内でしか使えない

  return (
    <>
      <button className="mt-5" onClick={merge_int}>
        非同期のまま
      </button>
      <br />
      <button
        className="mt-5"
        onClick={() => {
          set_int2(1, 2, sum_int2);
        }}
      >
        コールバックを使った同期
      </button>
      <br />
      <button className="mt-5" onClick={check}>
        promiseを使った同期
      </button>
      <br />
      <button className="mt-5" onClick={checkmain2}>
        promiseを使った同期2
      </button>
      <br/>
      <button className="mt-5" onClick={checksub4}>
        async,awaitを使った同期
      </button>
    </>
  );
};

export default Syncronization;
