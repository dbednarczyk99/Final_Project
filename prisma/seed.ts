import { PrismaClient, ProductCategory } from '@prisma/client';
const db = new PrismaClient();

function getProductImages() {
  return [
    {
      id: 'gf105467-0f0d-4a9f-bc41-c559c8a17256',
      url: 'https://example.com/img/backpack-office-20l-1.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'hf205578-1g1d-5b2f-cd52-d660d9b28367',
      url: 'https://example.com/img/backpack-office-20l-2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'if305689-2h2d-6c3g-de63-e771eab39478',
      url: 'https://example.com/img/travel-40l-1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    },
    {
      id: 'jf405790-3i3d-7d4h-ef74-f882fbc40589',
      url: 'https://example.com/img/travel-40l-2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    },
    {
      id: 'kf505891-4j4d-8e5i-fg85-g993gcd51690',
      url: 'https://example.com/img/mountain-60l-1.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    },
    {
      id: 'lf606992-5k5d-9f6j-gh96-h104hde62701',
      url: 'https://example.com/img/mountain-60l-2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    },
  ];
}

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Office Backpack 20L',
      category: ProductCategory.OFFICE_BACKPACK,
      description: 'Lightweight office backpack ideal for everyday work.',
      mainImageUrl: 'https://example.com/img/backpack-office-20l-main.jpg',
      price: 199,
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Travel Backpack 40L',
      category: ProductCategory.TRAVEL_BACKPACK,
      description: 'Large travel backpack perfect for long trips.',
      mainImageUrl: 'https://example.com/img/travel-40l-main.jpg',
      price: 349,
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Mountain Backpack 60L',
      category: ProductCategory.MOUNTAIN_BACKPACK,
      description:
        'Durable mountain backpack designed for difficult conditions.',
      mainImageUrl: 'https://example.com/img/mountain-60l-main.jpg',
      price: 499,
    },
    {
      id: 'a3b2c1d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
      name: 'Sports Backpack 30L',
      category: ProductCategory.SPORTS_BACKPACK,
      description: 'Compact sports backpack for gym and outdoor activities.',
      mainImageUrl: 'https://example.com/img/sports-30l-main.jpg',
      price: 249,
    },
    {
      id: 'b4c3d2e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7',
      name: 'Urban Backpack 25L',
      category: ProductCategory.OFFICE_BACKPACK,
      description: 'Stylish urban backpack for city life.',
      mainImageUrl: 'https://example.com/img/urban-25l-main.jpg',
      price: 219,
    },
    {
      id: 'c5d4e3f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8',
      name: 'Hiking Backpack 50L',
      category: ProductCategory.MOUNTAIN_BACKPACK,
      description: 'Reliable hiking backpack for outdoor adventures.',
      mainImageUrl: 'https://example.com/img/hiking-50l-main.jpg',
      price: 429,
    },
  ];
}

function getOrderItems() {
  return [
    {
      orderId: 'fd105551-0f0d-4a9f-bc41-c559c8a52346',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      quantity: 1,
      unitPrice: 199,
      orderItemPrice: 199,
    },
    {
      orderId: 'fd105551-0f0d-4a9f-bc41-c559c8a52346',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      quantity: 2,
      unitPrice: 349,
      orderItemPrice: 698,
    },
    {
      orderId: 'fd105551-0f0d-4a9f-bc41-c559c8a08943',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      quantity: 1,
      unitPrice: 499,
      orderItemPrice: 499,
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a52346',
      customerName: 'John Doe',
      customerPhone: '+48 123 456 789',
      customerEmail: 'john@example.com',
      customerAddress: 'Main Street 10, London',
      totalPrice: 897,
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a08943',
      customerName: 'Anna Smith',
      customerPhone: '+48 987 654 321',
      customerEmail: 'anna@example.com',
      customerAddress: 'Green Avenue 42, Warsaw',
      totalPrice: 499,
    },
  ];
}

async function seed() {
  console.log('Start seeding...');

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getProductImages().map(({ productId, ...otherData }) => {
      return db.productImage.create({
        data: {
          product: {
            connect: { id: productId },
          },
          ...otherData,
        },
      });
    }),
  );

  await Promise.all(
    getOrders().map((order) => {
      return db.order.create({ data: order });
    }),
  );

  await Promise.all(
    getOrderItems().map(({ orderId, productId, ...otherData }) => {
      return db.orderItem.create({
        data: {
          order: {
            connect: { id: orderId },
          },
          product: {
            connect: { id: productId },
          },
          ...otherData,
        },
      });
    }),
  );
}

seed();
