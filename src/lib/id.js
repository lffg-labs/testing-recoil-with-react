export function createIdGenerator(key = 'global', b64 = true) {
  let i = 0;

  return function genId() {
    const rawId = `${key}:${++i}`;
    const id = b64 ? btoa(encodeURI(rawId)) : rawId;

    return id;
  };
}
