export async function fetchUserData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return await response.json();
}
