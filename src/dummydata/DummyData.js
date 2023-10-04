export const userList = [
  { id: 1, name: "User 1", email: "user1@example.com", role: "ADMIN" },
  { id: 2, name: "User 2", email: "user2@example.com", role: "USER" },
  { id: 3, name: "User 3", email: "user3@example.com", role: "USER" },
  { id: 4, name: "User 4", email: "user4@example.com", role: "SHIPPER" },
  { id: 5, name: "User 5", email: "user5@example.com", role: "USER" },
  { id: 6, name: "User 6", email: "user6@example.com", role: "ADMIN" },
  { id: 7, name: "User 7", email: "user7@example.com", role: "SHIPPER" },
  { id: 8, name: "User 8", email: "user8@example.com", role: "USER" },
  { id: 9, name: "User 9", email: "user9@example.com", role: "SHIPPER" },
  { id: 10, name: "User 10", email: "user10@example.com", role: "USER" },
  { id: 11, name: "User 11", email: "user11@example.com", role: "ADMIN" },
  { id: 12, name: "User 12", email: "user12@example.com", role: "USER" },
  { id: 13, name: "User 13", email: "user13@example.com", role: "USER" },
  { id: 14, name: "User 14", email: "user14@example.com", role: "SHIPPER" },
  { id: 15, name: "User 15", email: "user15@example.com", role: "USER" },
  { id: 16, name: "User 16", email: "user16@example.com", role: "ADMIN" },
];

export const categoryList = [
  { id: 1, name: "Smart watch", description: "cheap smart watches" },
  { id: 2, name: "Smart phone", description: "cheap phone watches" },
  { id: 3, name: "Laptop", description: "cheap Laptop watches" },
];

export const productList = [
  {
    id: 1,
    name: "Smartwatch A1",
    brand: "BrandX",
    description:
      "All-day battery life is based on the following use: 90 time checks, 90 notifications, 45 minutes of app use, and a 60-minute workout with music playback from Apple Watch via Bluetooth, over the course of 18 hours; Apple Watch Series 9 (GPS) usage includes connection to iPhone via Bluetooth during the entire 18-hour test; Apple Watch Series 9 ",
    quantity: 20,
    price: 49.99,
    imageUrl:
      "https://images.macrumors.com/t/c96sXgJ-lcz2Agp1EimXz2CwYMM=/800x0/smart/article-new/2022/09/apple-watch-ultra-1.jpg?lossy",
    operatingSystem: "Custom OS",
    connectivity: "Bluetooth",
    category: {
      id: 1,
      name: "Smart watch",
      description: "cheap smart watches",
    },
    reviews: [
      {
        id: 1,
        username: "user1",
        text: "Great value for the price!",
        rating: 4,
      },
      { id: 2, username: "user2", text: "Simple and functional.", rating: 3 },
    ],
    ratings: [
      { id: 1, stars: 4, count: 5 },
      { id: 2, stars: 3, count: 2 },
    ],
  },
  {
    id: 2,
    name: "Smartphone B2",
    brand: "BrandY",
    description: "High-end smartphone with advanced features.",
    quantity: 15,
    price: 799.99,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403",
    operatingSystem: "Android 12",
    connectivity: "5G, Wi-Fi 6, Bluetooth 5.2",
    category: {
      id: 2,
      name: "Smart phone",
      description: "premium smartphones",
    },
    reviews: [
      { id: 3, username: "user3", text: "Absolutely amazing!", rating: 5 },
      {
        id: 4,
        username: "user4",
        text: "Best phone I've ever had.",
        rating: 5,
      },
    ],
    ratings: [
      { id: 3, stars: 5, count: 10 },
      { id: 4, stars: 4, count: 8 },
    ],
  },
  {
    id: 3,
    name: "Smartphone B2",
    brand: "BrandY",
    description: "High-end smartphone with advanced features.",
    quantity: 15,
    price: 799.99,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403",
    operatingSystem: "Android 12",
    connectivity: "5G, Wi-Fi 6, Bluetooth 5.2",
    category: {
      id: 2,
      name: "Smart phone",
      description: "premium smartphones",
    },
    reviews: [
      { id: 3, username: "user3", text: "Absolutely amazing!", rating: 5 },
      {
        id: 4,
        username: "user4",
        text: "Best phone I've ever had.",
        rating: 5,
      },
    ],
    ratings: [
      { id: 3, stars: 5, count: 10 },
      { id: 4, stars: 4, count: 8 },
    ],
  },
  {
    id: 4,
    name: "Laptop C3",
    brand: "BrandZ",
    description: "Powerful laptop for work and gaming.",
    quantity: 10,
    price: 1299.99,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
    operatingSystem: "Windows 11",
    connectivity: "Wi-Fi 6, Bluetooth 5.0",
    category: { id: 3, name: "Laptop", description: "premium laptops" },
    reviews: [
      { id: 5, username: "user5", text: "Great for gaming!", rating: 4 },
      { id: 6, username: "user6", text: "Fast and reliable.", rating: 5 },
    ],
    ratings: [
      { id: 5, stars: 4, count: 7 },
      { id: 6, stars: 5, count: 12 },
    ],
  },
  {
    id: 5,
    name: "Smartwatch D4",
    brand: "BrandX",
    description: "Stylish smartwatch with fitness tracking.",
    quantity: 25,
    price: 79.99,
    imageUrl:
      "https://images.macrumors.com/t/c96sXgJ-lcz2Agp1EimXz2CwYMM=/800x0/smart/article-new/2022/09/apple-watch-ultra-1.jpg?lossy",
    operatingSystem: "Custom OS",
    connectivity: "Bluetooth",
    category: {
      id: 1,
      name: "Smart watch",
      description: "cheap smart watches",
    },
    reviews: [
      { id: 7, username: "user7", text: "Looks great on my wrist!", rating: 4 },
      {
        id: 8,
        username: "user8",
        text: "Easy to use fitness features.",
        rating: 4,
      },
    ],
    ratings: [
      { id: 7, stars: 4, count: 6 },
      { id: 8, stars: 4, count: 5 },
    ],
  },
  {
    id: 6,
    name: "Smartphone E5",
    brand: "BrandY",
    description: "Mid-range smartphone with good camera.",
    quantity: 30,
    price: 399.99,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403",
    operatingSystem: "Android 11",
    connectivity: "4G LTE, Wi-Fi 5, Bluetooth 5.1",
    category: {
      id: 2,
      name: "Smart phone",
      description: "affordable smartphones",
    },
    reviews: [
      { id: 9, username: "user9", text: "Value for money.", rating: 4 },
      {
        id: 10,
        username: "user10",
        text: "Camera quality is decent.",
        rating: 3,
      },
    ],
    ratings: [
      { id: 9, stars: 4, count: 8 },
      { id: 10, stars: 3, count: 4 },
    ],
  },
  {
    id: 7,
    name: "Laptop F6",
    brand: "BrandZ",
    description: "Budget-friendly laptop for everyday tasks.",
    quantity: 18,
    price: 599.99,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
    operatingSystem: "Windows 10",
    connectivity: "Wi-Fi 5, Bluetooth 4.2",
    category: { id: 3, name: "Laptop", description: "budget laptops" },
    reviews: [
      { id: 11, username: "user11", text: "Great for students.", rating: 4 },
      { id: 12, username: "user12", text: "Decent performance.", rating: 3 },
    ],
    ratings: [
      { id: 11, stars: 4, count: 6 },
      { id: 12, stars: 3, count: 5 },
    ],
  },
  {
    id: 8,
    name: "Laptop F6",
    brand: "BrandZ",
    description: "Budget-friendly laptop for everyday tasks.",
    quantity: 18,
    price: 599.99,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
    operatingSystem: "Windows 10",
    connectivity: "Wi-Fi 5, Bluetooth 4.2",
    category: { id: 3, name: "Laptop", description: "budget laptops" },
    reviews: [
      { id: 11, username: "user11", text: "Great for students.", rating: 4 },
      { id: 12, username: "user12", text: "Decent performance.", rating: 3 },
    ],
    ratings: [
      { id: 11, stars: 4, count: 6 },
      { id: 12, stars: 3, count: 5 },
    ],
  },
  {
    id: 9,
    name: "Laptop F6",
    brand: "BrandZ",
    description: "Budget-friendly laptop for everyday tasks.",
    quantity: 18,
    price: 599.99,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
    operatingSystem: "Windows 10",
    connectivity: "Wi-Fi 5, Bluetooth 4.2",
    category: { id: 3, name: "Laptop", description: "budget laptops" },
    reviews: [
      { id: 11, username: "user11", text: "Great for students.", rating: 4 },
      { id: 12, username: "user12", text: "Decent performance.", rating: 3 },
    ],
    ratings: [
      { id: 11, stars: 4, count: 6 },
      { id: 12, stars: 3, count: 5 },
    ],
  },
];
