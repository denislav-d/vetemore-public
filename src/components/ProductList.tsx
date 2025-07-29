import "@/styles/components/_product-list.scss";
import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { sortOptions, filterBrands } from "@/data/content";
import LoadingSpinner from "./LoadingSpinner";
import ErrorBoundary from "./ErrorBoundary";

interface Product {
  Price: number;
  "Product Name": string;
  "Product Link": string;
  "Product Image": string;
  "Product Type": string;
}

interface ProductListProps {
  data: Product[];
  isLoading?: boolean;
  error?: string;
}

function ProductListContent({ data, isLoading, error }: ProductListProps) {
  const [productList, setProductList] = useState<Product[]>(data || []);
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [selectedBrand, setSelectedBrand] = useState("All brands");

  useEffect(() => {
    if (data && data.length > 0) {
      setProductList(data);
    }
  }, [data]);

  const sortByPrice = useCallback(
    (order: "asc" | "desc" | "default") => {
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
    },
    [data, productList]
  );

  const filterByBrand = useCallback(
    (brand: string) => {
      setSelectedBrand(brand);
      setProductList(
        brand === "All brands"
          ? data
          : data.filter((product: Product) =>
              product["Product Name"].includes(brand)
            )
      );
      setSelectedSortOption("default");
    },
    [data]
  );

  const productGrid = useMemo(() => {
    return productList.map((product: Product, index: number) => (
      <div
        className="flex flex-col"
        key={`${product["Product Name"]}-${index}`}
      >
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
              loading="lazy"
              onError={(e) => {
                console.error(
                  `Failed to load image: ${product["Product Image"]}`
                );
                // Set a fallback image or hide the image
                e.currentTarget.style.display = "none";
              }}
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
            <span className="product-list__description">€{product.Price}</span>
          </div>
        </Link>
      </div>
    ));
  }, [productList]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h3 className="text-xl font-medium tracking-tight mb-2">
          Failed to load products
        </h3>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-black text-white font-medium tracking-tight hover:bg-gray-800 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner text="Loading products..." />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h3 className="text-xl font-medium tracking-tight mb-2">
          No products found
        </h3>
        <p className="text-gray-600">Check back later for new arrivals.</p>
      </div>
    );
  }

  return (
    <>
      <section className="flex justify-between mb-4 gap-2 text-lg">
        <div>
          <span className="mr-1.5 font-semibold">Filter by Brand:</span>
          <select
            value={selectedBrand}
            onChange={(e) => filterByBrand(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
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
            className="border border-gray-300 rounded px-2 py-1"
          >
            {Object.entries(sortOptions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="product-list__grid">{productGrid}</section>
    </>
  );
}

export default function ProductList(props: ProductListProps) {
  return (
    <ErrorBoundary>
      <ProductListContent {...props} />
    </ErrorBoundary>
  );
}
