# PDP Starter

## Exercise 1:

### Create the PDP (Product Details Page) with the following criteria.

Given: A webpage displaying products.

User Story:

    Overview:
        As a user, I wish to interact with a webpage that prominently features:
            Product Item Card: Displaying the title, description, price, and category of each product.
            Grid Layout: Showcasing a collection of product item cards, specifically displaying 9 items at a time.
            Header Section: Including icons for Wishlist and Cart functionalities.

    Product Item Card Details:
        Each product item card must include a field to select the desired quantity for purchase.
        Two buttons should be present:
            Wishlist Button: Toggles the addition or removal of the item from the wishlist.
            Add to Cart Button: Adds the specified quantity of the item to the shopping cart.

    Wishlist Functionality:
        The Wishlist icon in the header should display a counter indicating the total number of items added to the wishlist.

    Cart Functionality:
        The Cart icon in the header should show a counter reflecting the total quantity of items added to the cart.
        Interacting with the Cart icon should reveal a panel or dropdown list on the right side, detailing:
            The ability to adjust the quantity of each item in the cart.
            Options to remove any item from the cart.
            The total cost of the order, dynamically updated to mirror changes in the cart.
        Upon finalizing the selection and clicking the "Order" button, the cart should empty, and a confirmation message should appear to notify the user of a successful purchase.

The example of Header icons:

![Alt text](docs/image.png)

## Data structure:

```ts
type Item = {
  title: string;
  description: string;
  price: number;
  category: string;
};
```
