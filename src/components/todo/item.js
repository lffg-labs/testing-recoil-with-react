import React from 'react';

export function TodoItem({ as: Comp, done, name }) {
  return (
    <Comp>
      <span
        style={{
          textDecoration: done ? 'line-through' : ''
        }}
      >
        {name}
      </span>
    </Comp>
  );
}
