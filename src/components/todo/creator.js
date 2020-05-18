import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../atoms';
import { createIdGenerator } from '../../lib/id';

const genTodoId = createIdGenerator('todo');

export function TodoCreator() {
  const [name, setName] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  function changeName(e) {
    setName(e.target.value);
  }

  function createTodo(e) {
    e.preventDefault();

    setName('');
    setTodoList((todoList) => [
      ...todoList,
      { id: genTodoId(), done: false, name }
    ]);
  }

  return (
    <form onSubmit={createTodo} autoComplete="off">
      <fieldset>
        <legend>Create a new todo</legend>

        <section>
          <label htmlFor="name">Todo name:</label>
          <input id="name" value={name} onChange={changeName} />
        </section>

        <button type="submit">Create New Todo</button>
      </fieldset>
    </form>
  );
}
