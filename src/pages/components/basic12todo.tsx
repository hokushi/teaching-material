import { useContentContext, useTodoContext } from "../components/basic12context";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  // 設定したものを取得する
  const [todos, setTodos] = useTodoContext();
  const [content, setContent] = useContentContext();

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      content: content
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setContent("");
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
           <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <input
        className="border border-gray-300"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={addTodo}>+</button>
    </>
  );
};