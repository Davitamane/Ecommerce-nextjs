import Link from "next/link";
import Card from "../_components/Card";

export type Product = {
  id: number;
  name: string;
  description: string;
  release_year: string;
  cover_image: string;
  images: string[];
  price: number;
  available_colors: string[];
  available_sizes: string[];
};
type ApiResponse = {
  data: Product[];
  links: unknown;
  meta: unknown;
};
export default async function page() {
  const res = await fetch(
    "https://api.redseam.redberryinternship.ge/api/products"
  );
  if (!res.ok) {
    throw new Error("Failed to fech data");
  }
  const json: ApiResponse = await res.json();
  const products = json.data;

  return (
    <div className="mx-25 flex flex-col gap-8 my-18">
      <Link href="/checkout">checkout</Link>
      <div className="grid grid-cols-4 gap-y-12 gap-x-6">
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
