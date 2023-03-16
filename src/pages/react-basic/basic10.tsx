/*userefのインポート */
import { useRef } from "react";
import useGetElementProperty from "../../hooks/useGetElementProperty";

/*userefの使い方 */
const Basic10 = () => {
    // useRefを使うと、DOMにアクセスできる
    //usestateと同じように、useRefを使うと、値を保持できるが利点としては再レンダリングなしで値を保持できる
    // 今回は、inputタグにアクセスして、その値を取得する
    const inputRef = useRef<HTMLInputElement>(null);

    const targetRef = useRef(null);
    const { getElementProperty } =
       useGetElementProperty<HTMLDivElement>(targetRef);
    
    const handleClick = () => {
        // inputRef.currentで、inputタグにアクセスできる
        // inputRef.current.valueで、inputタグのvalueを取得できる
        if(inputRef.current){
            return(
                console.log(inputRef.current),
                console.log(inputRef.current.value),
                console.log(inputRef.current.value.length)
            )}
        else{
            return
        }
    };

    const checkDom = () => {
        console.log("height", getElementProperty("height"));
        console.log("width", getElementProperty("width"));
        console.log("x", getElementProperty("x"));
        console.log("y", getElementProperty("y"));
        console.log("top", getElementProperty("top"));
        console.log("right", getElementProperty("right"));
        console.log("bottom", getElementProperty("bottom"));
        console.log("left", getElementProperty("left"));
    };

    const changeDom = () => {
        if(inputRef.current){    
           inputRef.current.style.backgroundColor = "red";
        }else{
           return
        }
    };
    

    return (
        <>
        <div className="text-center">
            <h1 className="text-4xl font-bold">userefの使い方</h1>
            <input className="border-2" type="text" ref={inputRef} />
            <button onClick={handleClick}>表示</button>
        </div>
        <div className="text-center mt-5" ref={targetRef}>
             <h1 className="text-4xl font-bold">domの取得</h1>
             <button onClick={checkDom}>表示</button>
        </div>
        <div className="mt-5">
            <h1 className="text-4xl font-bold">直接変えるボタン1</h1>
            <button onClick={changeDom}>変更</button>
        </div>
        </>
    );
    };

export default Basic10;