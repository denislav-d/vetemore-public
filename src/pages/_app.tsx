import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Product {
  "Product Name": string;
  Price: string;
  "Product Type": string;
  "Product Link": string;
  "Product Image": string;
}

interface CustomAppProps extends AppProps {
  pageProps: {
    data?: Product[];
    isLoading?: boolean;
    error?: string;
  };
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const csvPath = "/scraper/products_list.csv";
      setIsLoading(true);
      setError(null);

      try {
        const csvText = await readCSVFile(csvPath);
        const parsedData = await parseCSVData(csvText);

        const dataWithFormattedPrice = parsedData.map((item: Product) => ({
          ...item,
          Price: Number(item.Price).toFixed(2),
        }));

        setData(dataWithFormattedPrice);
      } catch (err) {
        console.error("Error fetching or parsing CSV data", err);
        setError(
          err instanceof Error ? err.message : "Failed to load product data"
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <LoadingSpinner text="Loading Vetemòre..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-medium tracking-tight mb-4">
            Failed to load application
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-black text-white font-medium tracking-tight hover:bg-gray-800 transition-colors"
          >
            Reload page
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Component
        {...pageProps}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </ErrorBoundary>
  );
}

async function readCSVFile(path: string): Promise<string> {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch CSV file: ${response.status} ${response.statusText}`
      );
    }

    const text = await response.text();

    if (!text.trim()) {
      throw new Error("CSV file is empty");
    }

    return text;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error reading CSV file: ${error.message}`);
    }
    throw new Error("Unknown error reading CSV file");
  }
}

async function parseCSVData(csvText: string): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<Product>(csvText, {
      header: true,
      skipEmptyLines: true,
      worker: false,
      complete(results) {
        if (results.errors.length > 0) {
          reject(
            new Error(
              `CSV parsing errors: ${results.errors
                .map((e) => e.message)
                .join(", ")}`
            )
          );
          return;
        }

        if (!results.data || results.data.length === 0) {
          reject(new Error("No data found in CSV file"));
          return;
        }

        resolve(results.data);
      },
      error(error: Error) {
        reject(new Error(`CSV parsing failed: ${error.message}`));
      },
    });
  });
}
