import "@/styles/components/_product-list.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sortOptions, filterBrands } from "@/data/content";

interface Product {
  Price: number;
  "Product Name": string;
  "Product Link": string;
  "Product Image": string;
  "Product Type": string;
}

interface ProductListProps {
  data: Product[];
}

export default function ProductList({ data }: ProductListProps) {
  const [productList, setProductList] = useState<Product[]>(data || []);
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [selectedBrand, setSelectedBrand] = useState("All brands");

  useEffect(() => {
    if (data && data.length > 0) {
      setProductList(data);
    }
  }, [data]);

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
        : data.filter((product: Product) =>
            product["Product Name"].includes(brand)
          )
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
            {filterBrands.map((brand) => (
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
        {productList.map((product: Product, index: number) => (
          <div className="flex flex-col" key={index}>
            <div className="product-list__image-wrapper">
              <Link
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
              </Link>
            </div>
            <Link
              className="product-list__description-wrapper"
              href={product["Product Link"]}
            >
              <span className="font-normal text-sm tracking-tight opacity-60">
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
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
