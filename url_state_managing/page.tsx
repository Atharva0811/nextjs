import Link from "next/link";

const imageUrls: any = {
  "Black Titanium":
    "https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg",
  "Blue Titanium":
    "https://m.media-amazon.com/images/I/81fxjeu8fdL._SX679_.jpg",
  "Natural Titanium":
    "https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg",
  "White Titanium":
    "https://m.media-amazon.com/images/I/81c50PU+lpL._SX679_.jpg",
};

const colorVariants: Array<string> = [
  "Black Titanium",
  "Blue Titanium",
  "Natural Titanium",
  "White Titanium",
];
const sizeVariants = ["1TB", "512GB", "256GB"];

export default function Carts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedColor = (searchParams.color || "Black Titanium") as string;
  const selectedSize = (searchParams.size || "512GB") as string;
  return (
    <div className="w-full items-center text-center">
      <div className="flex">
        <div>
          <img src={imageUrls[selectedColor]} />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex text-3xl font-semibold">iPhone 15 Pro Max</div>
          <div className="flex">
            {colorVariants.map((color, index) => (
              <Link
                key={index}
                href={`?${new URLSearchParams({
                  color,
                  size: selectedSize,
                })}`}
                className={`bg-gray-100 px-4 py-3 rounded border ${selectedColor === color ? "border-blue-400" : "border-gray-200"}`}
              >
                {color}
              </Link>
            ))}
          </div>
          <div className="flex">
          {sizeVariants.map((size, index) => (
              <Link
                key={index}
                href={`?${new URLSearchParams({
                  color:selectedColor,
                  size,
                })}`}
                className={`bg-gray-100 px-4 py-3 rounded border ${selectedSize === size ? "border-blue-400" : "border-gray-200"}`}
              >
                {size}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
