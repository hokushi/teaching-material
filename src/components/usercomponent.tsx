// src/components/UserComponent.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from './atoms';

const UserComponent: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);

  const updateUser = (u) => {
    return { ...u, ...{ age: u.age + 1 } };
  };

  return (
    <div>
      <p>user.name:{user.name}</p>
      <p>user.age:{user.age}</p>
      <button onClick={() => setUser(updateUser)}>age increment</button>
    </div>
  );
};

export default UserComponent;
