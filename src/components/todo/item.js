import { produce } from 'immer';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../atoms';
import { useForm } from '../../lib/use-form';

export function TodoItem({ as: Comp, id, name, done }) {
  const setTodoList = useSetRecoilState(todoListState);
  const [isEditing, setIsEditing] = useState(false);
  const [data, handleChange] = useForm({ name, done });

  function saveEdit(e) {
    e.preventDefault();

    setTodoList((todoList) =>
      produce(todoList, (draft) => {
        Object.assign(
          draft.find((todo) => todo.id === id),
          data
        );
      })
    );

    setIsEditing(false);
  }

  return (
    <Comp>
      {isEditing ? (
        <form onSubmit={saveEdit}>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <label htmlFor="done">Done?</label>
          <input
            type="checkbox"
            name="done"
            id="done"
            checked={data.done}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <span style={{ textDecoration: done ? 'line-through' : '' }}>
            {name}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </Comp>
  );
}
