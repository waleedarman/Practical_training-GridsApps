import { fetchUserData } from './fetcher.js';
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const user = await fetchUserData();
    console.log("User name:", user.name);
    alert(`User name is: ${user.name}`);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to load user data.");
  }
});
