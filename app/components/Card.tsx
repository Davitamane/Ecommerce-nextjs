import Image from "next/image";
import Link from "next/link";
import { Product } from "../products/page";

type CardProps = {
  data: Product;
};

function Card({ data }: CardProps) {
  return (
    <Link href={`/products/${data.id}`}>
      <div className="w-full overflow-hidden hover:shadow-md  rounded-b-2xl transition-shadow duration-300">
        <Image
          src={data.cover_image || "/fallback.jpg"} // fallback image in public folder
          alt={data.name}
          width={400}
          height={400}
          className="w-full object-cover object-center h-fit"
        />

        <div className="m-4">
          <h1 className="text-md">{data.name}</h1>
          <p className="text-sm">$ {data.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
