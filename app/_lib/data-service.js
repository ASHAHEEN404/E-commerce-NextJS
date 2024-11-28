const BASE_URL = "http://localhost:5000/api";

// Categore Handling
export async function fetchCategories() {
  try {
    const res = await fetch(`${BASE_URL}/category/get-categories`);
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return []; // Return an empty array if there's an error
  }
}
