import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const csvPath = "/scraper/products_list.csv";

      try {
        const csvText = await readCSVFile(csvPath);
        const parsedData = await parseCSVData(csvText);

        // Convert 'Price' to a number for each item in the parsed data
        const dataWithFormattedPrice = parsedData.map((item) => ({
          ...item,
          Price: parseFloat(item.Price).toFixed(2),
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

interface Product {
  "Product Name": string;
  Price: Number;
  "Product Type": string;
  "Product Link": string;
  "Product Image": any;
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
      complete: (result: any) => resolve(result.data as Product[]),
      error: (error: any) => reject(error),
    });
  });
}
