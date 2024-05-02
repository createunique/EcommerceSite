# E-commerce Site

This repository contains the source code for a responsive e-commerce website. The website displays product cards fetched from an API and allows users to filter products by category.

## Project Structure

The project consists of three main files:

1. `index.html`: This is the main HTML file that structures the webpage and includes links to the CSS and JavaScript files.

2. `style.css`: This file contains all the CSS styles used to design and layout the webpage. It includes media queries to make the site responsive on different screen sizes.

3. `script.js`: This JavaScript file contains the logic for fetching product data from an API, creating product cards dynamically, and filtering products based on the selected category.

## Key Features

- **Dynamic Product Cards:** The product cards are created dynamically in JavaScript based on the data fetched from the API. Each card displays the product image, title, vendor, price, and a button to add the product to the cart.

- **Product Filtering:** Users can filter products by category. When a category button is clicked, only the products belonging to that category are displayed.

- **Responsive Design:** The website is designed to be responsive and provides a good user experience on devices of all sizes. The layout of the product cards changes depending on the screen size.


## How to Access and Run the Project

1. **Clone the Repository:** First, you will need to clone the repository from GitHub to your local machine. You can do this by running the following command in your terminal (you will need to have Git installed):

    ```bash
    git clone https://github.com/createunique/EcommerceSite.git
    ```

2. **Navigate to the Project Directory:** Once the repository has been cloned, navigate into the project directory by running:

    ```bash
    cd EcommerceSite
    ```

3. **Open the Project:** Now, you can open the `index.html` file in your web browser to view the website. If you're using a Mac, you can do this from the terminal by running:

    ```bash
    open index.html
    ```

    If you're using Windows, you can navigate to the project directory in File Explorer and double-click on the `index.html` file.

Please note that this project is a static website and doesn't require a server to run. However, if you're fetching data from an external API (like in this project), you might need to set up a local server due to CORS restrictions in your browser. You can do this easily with Python or Node.js, or use an IDE like Visual Studio Code that has a built-in live server extension.


## Future Improvements

- Add functionality to the "Add to Cart" button.
- Display a message when no products match the selected category.
- Improve error handling for the API fetch operation.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue.

## License

This project is licensed under the terms of the MIT license.
