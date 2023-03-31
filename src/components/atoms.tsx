import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();


//count
export const countState = atom({
    key: "count",
    default: 0
});

//user
export const userState = atom({
    key: "user",
    default: {
        name: "hoge",
        age: 11
    },
    effects_UNSTABLE: [persistAtom]
});

export const pullState = atom({
    key: "pull",
    default: {
        title:"記入一覧",
        name: "名前",
        age: "年齢",
        postnumber: "郵便番号",
        address: "住所",
        tel: "電話番号"
    }
});



