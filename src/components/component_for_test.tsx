import React from 'react';

interface Props {
    name: string;
}

interface Props2 {
    name: string;
    age: number;
}


const Greeting: React.FC<Props> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

const HibaraAge:React.FC<Props2>=({name,age})=>{
    return <div>{name}は{age}歳です</div>;
}

export {Greeting, HibaraAge};