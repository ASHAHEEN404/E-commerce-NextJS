import CategoriesNavigationMenu from "@/components/NavigationMenu";

const BASE_URL = "http://localhost:5000/api";

// This will run on the server side, so the data is fetched once and rendered server-side.
export default async function CategoriesPage() {
  const res = await fetch(`${BASE_URL}/category/get-categories`, {
    next: { revalidate: 60 },
  });
  const categories = await res.json();

  return (
    <div className="flex justify-center mt-10">
      <CategoriesNavigationMenu categories={categories} />
    </div>
  );
}
