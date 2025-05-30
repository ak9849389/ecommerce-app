// # Utility functions (e.g. price format, validators)

// utils/helpers.js

// Generate a random order ID (example: ORD-938475)
export const generateOrderId = () => {
    return 'ORD-' + Math.floor(Math.random() * 1000000);
  };
  
  // Format price to 2 decimal places
  export const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };
  
  // Validate email format
  export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  // Capitalize the first letter of a string
  export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  // Calculate total price from cart items
  export const calculateCartTotal = (products) => {
    return products.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
// Check if a string is empty  