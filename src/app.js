import React from 'react';
import { TodoCreator } from './components/todo/creator';
import { TodoList } from './components/todo/list';

export function App() {
  return (
    <>
      <TodoCreator />
      <TodoList />
    </>
  );
}
