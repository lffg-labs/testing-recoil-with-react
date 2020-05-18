import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../atoms';
import { TodoItem } from './item';

export function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem {...todo} key={todo.id} as="li" />
      ))}
    </ul>
  );
}
