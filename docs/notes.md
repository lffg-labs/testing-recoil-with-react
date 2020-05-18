# Recoil Notes

## Atoms

> Atoms contain the source of truth for our application state.

Example:

```js
const todoListState = atom({
  key: 'todoListState',
  default: []
});
```

An atom _must_ have an unique `key` and a default value.

- The `useRecoilValue` may be used to _read_ an atom's value.
- The `useSetRecoilState` hook returns a function that may be used to change the atom's value.
