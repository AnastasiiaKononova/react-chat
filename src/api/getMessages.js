const API_BASE = 'https://dummyjson.com/';

export const getMessages = async () => {
  const responce = await fetch(`${API_BASE}/comments`);
  return responce.json();
};
