import "@/styles/components/_product-list.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductList({ data }: any) {
  const [productList, setProductList] = useState(data || []);
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [selectedBrand, setSelectedBrand] = useState("All brands");

  useEffect(() => {
    if (data && data.length > 0) {
      setProductList(data);
    }
  }, [data]);

  const sortOptions = {
    default: "Our Picks",
    asc: "Low to high",
    desc: "High to low",
  };

  const brands = ["All brands", "Rick Owens", "LOEWE", "Ami Paris"];

  const sortByPrice = (order: "asc" | "desc" | "default") => {
    if (order === "default") {
      setProductList([...data]);
    } else {
      setProductList(
        [...productList].sort((a, b) => {
          return order === "asc" ? a.Price - b.Price : b.Price - a.Price;
        })
      );
    }
    setSelectedSortOption(order);
  };

  const filterByBrand = (brand: string) => {
    setSelectedBrand(brand);
    setProductList(
      brand === "All brands"
        ? data
        : data.filter((product: any) => product["Product Name"].includes(brand))
    );
    setSelectedSortOption("default");
  };

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="flex justify-between mb-4 gap-2 text-lg">
        <div>
          <span className="mr-1.5 font-semibold">Filter by Brand:</span>
          <select
            value={selectedBrand}
            onChange={(e) => filterByBrand(e.target.value)}
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sortDropdown" className="mr-1.5 font-semibold">
            Sort By:
          </label>
          <select
            id="sortDropdown"
            value={selectedSortOption}
            onChange={(e) =>
              sortByPrice(e.target.value as "asc" | "desc" | "default")
            }
          >
            {Object.entries(sortOptions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="product-list__grid">
        {productList.map((product: any, index: number) => (
          <div className="flex flex-col" key={index}>
            <div className="product-list__image-wrapper">
              <a
                className="outline-none select-none"
                href={product["Product Link"]}
              >
                <Image
                  src={product["Product Image"]}
                  alt={product["Product Type"]}
                  className="product-list__image"
                  width={500}
                  height={500}
                />
              </a>
            </div>
            <a
              className="product-list__description-wrapper"
              href={product["Product Link"]}
            >
              <span className="font-normal text-sm tracking-tight opacity-[0.6]">
                {product["Product Type"]}
              </span>
              <div className="flex items-center justify-between">
                <span className="product-list__description">
                  {product["Product Name"]}
                </span>
                <span className="product-list__description">
                  €{product.Price}
                </span>
              </div>
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
