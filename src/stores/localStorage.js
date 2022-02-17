const getRefCode = () => {
  const storage = window.localStorage;
  let id = storage.getItem("id");
  return id;
}

export { getRefCode };