const getLocalStorageItem = (key: string) => {
  const rawItemData = localStorage.getItem(key);

  if (rawItemData) return JSON.parse(rawItemData);

  return undefined;
};

const setLocalStorageItem = (key: string, item: any): void => {
  const itemToSet = JSON.stringify(item);

  localStorage.setItem(key, itemToSet);
};

export { getLocalStorageItem, setLocalStorageItem };
