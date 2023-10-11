export const cartList = [
  {
    product: {
      id: "65169851465464094c44f5dc",
      name: "Apple Watch Series 6",
      brand: "Apple",
      description:
        "A popular smartwatch from Apple with various health features.",
      quantity: 30,
      price: 399.99,
      imageUrl:
        "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg",
      operatingSystem: "watchOS",
      connectivity: "Bluetooth",
      category: {
        id: "6516911217d56928fbf9a3e2",
        name: "smart watch",
        description: "Electronic devices and gadgets",
      },
    },
    quantity: 1,
  },
  {
    product: {
      id: "6516981f465464094c44f5db",
      name: "Samsung Galaxy S21",
      brand: "Samsung",
      description: "A high-end smartphone with great features.",
      quantity: 50,
      price: 799.99,
      imageUrl:
        "https://i5.walmartimages.com/seo/Restored-Samsung-Galaxy-S21-5G-128GB-G991U-Fully-Unlocked-GSM-CDMA-Smartphone_8f9273d5-4f66-4747-8b50-21cb02a162cc.ad37a3228fe11c90e0aaa1d6a73d88bd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      operatingSystem: "Android",
      connectivity: "4G",
      category: {
        id: "6516911217d56928fbf9a3e2",
        name: "smart watch",
        description: "Electronic devices and gadgets",
      },
    },
    quantity: 2,
  },
];

export const userList = [
  {
    id: "651669065a704b04a1a76019",
    password: "$2a$10$nx6hODmGSx/X5KdqtYBnKewsGPQomQchF27V4elfA8EyuvOJTd1aW",
    fullName: "NguyenHao",
    email: "hao@gmail.com",
    phoneNumber: "07088889999",
    role: "ADMIN",
  },
  {
    id: "65166a5c5a704b04a1a7601a",
    password: "$2a$10$m7fbEMgFzb5SqUCGu3k3EePT7vql4naYijKvL3194v8/ZLWc9SqiO",
    fullName: "Băng Châu",
    email: "chau@gmail.com",
    phoneNumber: "07088880000",
    role: "ADMIN",
  },
  {
    id: "65167366fafcdc23fbc22abc",
    password: "$2a$10$cHqgzsKiAtSupPqgNOoAdOps8iLxhwsGNijgOUizqgn45qnr6d3DC",
    fullName: "van khoa",
    email: "khoa@gmail.com",
    phoneNumber: "07088881111",
    role: "USER",
  },
  {
    id: "6518517e35fe316d520dfa1c",
    password: "$2a$10$Jh89E7ciZNFY6yfSqGgLDODG99OqzFpNo1wAf44owv.fXQae55G1y",
    fullName: "Ngọc Vinh",
    email: "vinh@gmail.com",
    phoneNumber: "07088881119",
    role: "USER",
    address: [
      {
        street: "New Street",
        city: "New City",
        state: "New State",
        postalCode: "New Zip Code",
        country: "New Country",
      },
    ],
    paymentDetails: [
      {
        cardNumber: "5253426576476576",
        cardHolderName: "ngoc vinh",
        expirationDate: "2028-10-20",
        cvv: "New CVV",
      },
    ],
  },
];

export const ratingList = [
  {
    id: "6516fc3970cf3223d4bc6b5d",
    userId: "65167366fafcdc23fbc22abc",
    productId: "6516981f465464094c44f5db",
    rating: 5,
    createdAt: "2023-09-30T01:32:57.611",
  },
  {
    id: "6516fc7570cf3223d4bc6b5e",
    userId: "65167366fafcdc23fbc22abc",
    productId: "65169851465464094c44f5dc",
    rating: 4,
    createdAt: "2023-09-30T01:33:57.095",
  },
];

export const reviewList = [
  {
    id: "651704cd62efc5717ea6c623",
    userId: "65167366fafcdc23fbc22abc",
    productId: "6516981f465464094c44f5db",
    title: "Good product",
    comment: "Your detailed review comment here",
    createdAt: "2023-09-30T02:09:33.962",
  },
];

export const categoryList = [
  {
    id: "6516911217d56928fbf9a3e2",
    name: "smart watch",
    description: "Electronic devices and gadgets",
  },
  {
    id: "651696c8465464094c44f5d9",
    name: "Smartphones",
    description: "Mobile phones with advanced features.",
  },
  {
    id: "651696e0465464094c44f5da",
    name: "Laptops",
    description: "Portable personal computers.",
  },
];

export const orderList = [
  {
    id: "651859c335fe316d520dfa1f",
    userId: "6518517e35fe316d520dfa1c",
    items: [
      {
        productId: "6516981f465464094c44f5db",
        productName: "Samsung Galaxy S21",
        quantity: 2,
        price: 799.99,
      },
      {
        productId: "6516981f4654640da94c44f5db",
        productName: "Samsung Galaxy S22",
        quantity: 2,
        price: 799.99,
      },
      {
        productId: "6516981f46ad5464094c44f5db",
        productName: "Samsung Galaxy S23",
        quantity: 2,
        price: 799.99,
      },
    ],
    totalPrice: 4799.94,
    totalItem: 6,
    orderDate: "2023-10-01T02:24:19.742",
    status: "PENDING",
    shippingAddress: [
      {
        street: "New Street",
        city: "New City",
        state: "New State",
        postalCode: "New Zip Code",
        country: "New Country",
      },
    ],
    paymentDetails: [
      {
        cardNumber: "5253426576476576",
        cardHolderName: "ngoc vinh",
        expirationDate: "2028-10-20",
        cvv: "New CVV",
      },
    ],
  },
  {
    id: "651859css335fe316d520dfa1f",
    userId: "6518517eđc35fe316d520dfa1c",
    items: [
      {
        productId: "6516xư981f465464094c44f5db",
        productName: "Samsung Galaxy S21",
        quantity: 2,
        price: 799.99,
      },
    ],
    totalPrice: 4799.94,
    totalItem: 6,
    orderDate: "2023-10-01T02:24:19.742",
    status: "PENDING",
    shippingAddress: [
      {
        street: "New Street",
        city: "New City",
        state: "New State",
        postalCode: "New Zip Code",
        country: "New Country",
      },
    ],
    paymentDetails: [
      {
        cardNumber: "5253426576476576",
        cardHolderName: "ngoc vinh",
        expirationDate: "2028-10-20",
        cvv: "New CVV",
      },
    ],
  },
];

export const productList = [
  {
    id: "652609640eebb518f1779558",
    name: "Apple watch seri 9",
    brand: {
      id: "652600bc0eebb518f1779554",
      name: "Apple",
      imageUrl:
        "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg",
      description: "Apple Electronics Co., Ltd.",
    },
    description: "A fitness-focused smartwatch with long battery life.",
    quantity: 25,
    price: 249.99,
    imageUrl: [
      "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg",
      "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/HQWW2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1681150922615",
    ],
    operatingSystem: "IOS",
    connectivity: "Bluetooth, wifi",
    category: {
      id: "6516911217d56928fbf9a3e2",
      name: "smart watch",
      description: "Electronic devices and gadgets",
    },
  },
  {
    id: "65260a210eebb518f1779559",
    name: "Samsung watch 5",
    brand: {
      id: "6526007f0eebb518f1779553",
      name: "Samsung",
      imageUrl:
        "https://images.samsung.com/is/image/samsung/assets/us/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
      description: "Samsung Electronics Co., Ltd.",
    },
    description: "A fitness-focused smartwatch with long battery life.",
    quantity: 25,
    price: 349.99,
    imageUrl: [
      "https://images.samsung.com/is/image/samsung/p6pim/vn/2208/gallery/vn-galaxy-watch5-40mm-431117-sm-r905fzsaxxv-thumb-533192958",
    ],
    operatingSystem: "Android",
    connectivity: "Bluetooth, wifi",
    category: {
      id: "6516911217d56928fbf9a3e2",
      name: "smart watch",
      description: "Electronic devices and gadgets",
    },
  },
  {
    id: "65260e2a0eebb518f177955a",
    name: "Samsung galaxy s21",
    brand: {
      id: "6526007f0eebb518f1779553",
      name: "Samsung",
      imageUrl:
        "https://images.samsung.com/is/image/samsung/assets/us/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
      description: "Samsung Electronics Co., Ltd.",
    },
    description: "A fitness-focused Smartphone with long battery life.",
    quantity: 25,
    price: 449.99,
    imageUrl: ["https://m.media-amazon.com/images/I/61YgX12EuXL.jpg"],
    operatingSystem: "Android",
    connectivity: "Bluetooth, wifi",
    category: {
      id: "651696c8465464094c44f5d9",
      name: "Smartphones",
      description: "Mobile phones with advanced features.",
    },
  },
  {
    id: "65260ede0eebb518f177955b",
    name: "Samsung galaxy book",
    brand: {
      id: "6526007f0eebb518f1779553",
      name: "Samsung",
      imageUrl:
        "https://images.samsung.com/is/image/samsung/assets/us/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
      description: "Samsung Electronics Co., Ltd.",
    },
    description: "A fitness-focused Laptops with long battery life.",
    quantity: 25,
    price: 1049.99,
    imageUrl: ["https://m.media-amazon.com/images/I/81Gm69I-LyL.jpg"],
    operatingSystem: "Android",
    connectivity: "Bluetooth, wifi",
    category: {
      id: "651696e0465464094c44f5da",
      name: "Laptops",
      description: "Portable personal computers.",
    },
  },
  {
    id: "65260f760eebb518f177955c",
    name: "Macbook air 2020",
    brand: {
      id: "652600bc0eebb518f1779554",
      name: "Apple",
      imageUrl:
        "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg",
      description: "Apple Electronics Co., Ltd.",
    },
    description: "A fitness-focused Laptops with long battery life.",
    quantity: 50,
    price: 1149.99,
    imageUrl: [
      "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145607000",
    ],
    operatingSystem: "MacOS",
    connectivity: "Bluetooth, wifi",
    category: {
      id: "651696e0465464094c44f5da",
      name: "Laptops",
      description: "Portable personal computers.",
    },
  },
  {
    id: "65260fd50eebb518f177955d",
    name: "iphone 13 pink",
    brand: {
      id: "652600bc0eebb518f1779554",
      name: "Apple",
      imageUrl:
        "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg",
      description: "Apple Electronics Co., Ltd.",
    },
    description: "A fitness-focused iphone with long battery life.",
    quantity: 50,
    price: 1149.99,
    imageUrl: [
      "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403",
    ],
    operatingSystem: "IOS",
    connectivity: "Bluetooth, wifi",
    category: {
      id: "651696c8465464094c44f5d9",
      name: "Smartphones",
      description: "Mobile phones with advanced features.",
    },
  },
];

export const BrandList = [
  {
    id: "6526007f0eebb518f1779553",
    name: "Samsung",
    imageUrl:
      "https://images.samsung.com/is/image/samsung/assets/us/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
    description: "Samsung Electronics Co., Ltd.",
  },
  {
    id: "652600bc0eebb518f1779554",
    name: "Apple",
    imageUrl:
      "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg",
    description: "Apple Electronics Co., Ltd.",
  },
  {
    id: "652600fe0eebb518f1779555",
    name: "Xiaomi",
    imageUrl:
      "https://logowik.com/content/uploads/images/xiaomi-2021-new4988.jpg",
    description: "Xiaomi Electronics Co., Ltd.",
  },
  {
    id: "652601980eebb518f1779556",
    name: "Oppo",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/OPPO_LOGO.jpg",
    description: "Oppo Electronics Co., Ltd.",
  },
];
