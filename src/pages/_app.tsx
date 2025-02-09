import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Papa from "papaparse";

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
  };
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const csvPath = "/scraper/products_list.csv";

      try {
        const csvText = await readCSVFile(csvPath);
        const parsedData = await parseCSVData(csvText);

        const dataWithFormattedPrice = parsedData.map((item: Product) => ({
          ...item,
          Price: Number(item.Price).toFixed(2),
        }));

        setData(dataWithFormattedPrice);
      } catch (error) {
        console.error("Error fetching or parsing CSV data", error);
      }
    }

    fetchData();
  }, []);
  return <Component {...pageProps} data={data} />;
}

async function readCSVFile(path: string): Promise<string> {
  try {
    const response = await fetch(path);
    const text = await response.text();
    return text;
  } catch (error) {
    throw new Error(`Error reading CSV file: ${error}`);
  }
}

async function parseCSVData(csvText: string): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (result: Papa.ParseResult<Product>) => resolve(result.data),
      error: (error: Papa.ParseError) => reject(error),
    });
  });
}
