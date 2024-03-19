import requests
import pandas as pd
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
}

# website specific url here
url = ""

r = requests.get(url, headers=headers)

soup = BeautifulSoup(r.content, 'lxml')

# website base url here
base_url = ""

names = soup.find_all('div', class_='name')
prices = soup.find_all('span', class_='price')
types = soup.find_all('div', class_='type')
links = soup.find_all('a', class_='link')
images = soup.find_all("img", class_='image')

# Extracting data from the elements and formating it
product_names = [name.get_text().split() for name in names]
product_prices = [price.get_text().replace('€', '').replace('.', '') for price in prices]
product_types = [ptype.get_text().split() for ptype in types]

product_links = []

for link in links:
    href = link.get('href')
    product_links.append(base_url + href)

image_sources = []
protocol = 'https:'

for image in images:
    src = image.get('src')
    if src:
        full_url = protocol + src
        image_sources.append(full_url)
    
# Delete every second element in product_links
product_links = product_links[1::2]

min_length = min(len(product_names), len(product_prices), len(product_types), len(product_links), len(image_sources))

# Creating the DataFrame
df = pd.DataFrame({
    'Product Name': [' '.join(name) for name in product_names[:min_length]],
    'Price': product_prices[:min_length],
    'Product Type': [' '.join(ptype) for ptype in product_types[:min_length]],
    'Product Link': product_links[:min_length],
    'Product Image': image_sources[:min_length],
})

website_path = 'public/scraper/products_list.csv'

df.to_csv(website_path, encoding='utf-8', index=False)