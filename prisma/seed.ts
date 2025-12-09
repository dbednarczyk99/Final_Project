import { PrismaClient, ProductCategory } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      name: 'City Office 20L',
      category: ProductCategory.OFFICE_BACKPACK,
      shortDescription: 'Elegancki plecak do pracy i na uczelnię.',
      longDescription:
        'City Office 20L to lekki i praktyczny plecak stworzony z myślą o codziennych obowiązkach. Wyposażony w dedykowaną kieszeń na laptop, wewnętrzny organizer oraz zabezpieczone zamki, zapewnia wygodę i bezpieczeństwo podczas przemieszczania się. Jego minimalistyczny design pasuje zarówno do stroju biznesowego, jak i casualowego. Mocne materiały chronią zawartość, a wyprofilowane szelki gwarantują komfort przez cały dzień.',
      mainImageUrl:
        'http://localhost:8000/uploads/images/products/office-backpack_1.jpg',
      price: 199,
    },
    {
      name: 'Voyager Travel 40L',
      category: ProductCategory.TRAVEL_BACKPACK,
      shortDescription: 'Uniwersalny plecak na krótkie wyjazdy.',
      longDescription:
        'Voyager Travel 40L to pojemny model zaprojektowany z myślą o podróżnikach ceniących funkcjonalność. Przemyślany układ komór pozwala łatwo uporządkować rzeczy, a szeroko otwierana klapa ułatwia szybki dostęp do wnętrza. Plecak posiada regulowany pas piersiowy i biodrowy, dzięki czemu stabilnie leży na plecach podczas dłuższych wędrówek. Trwałe tkaniny oraz solidne zamki sprawdzą się w zmiennych warunkach.',
      mainImageUrl:
        'http://localhost:8000/uploads/images/products/travel-backpack_1.jpg',
      price: 349,
    },
    {
      name: 'Peak Pro 60L',
      category: ProductCategory.MOUNTAIN_BACKPACK,
      shortDescription: 'Duży plecak na wymagające wyprawy.',
      longDescription:
        'Peak Pro 60L został zaprojektowany dla osób planujących dłuższe, górskie wyprawy. Dzięki dużej pojemności i licznym punktom troczenia umożliwia wygodne przenoszenie sprzętu. Wzmocniony system nośny z wentylacją pleców odciąża kręgosłup i poprawia komfort marszu. Plecak wykonano z odpornej na przetarcia tkaniny, co gwarantuje trwałość w trudnych warunkach. Liczne kieszenie pomagają utrzymać porządek i szybki dostęp do najpotrzebniejszych rzeczy.',
      mainImageUrl:
        'http://localhost:8000/uploads/images/products/mountain-backpack_1.jpg',
      price: 499,
    },
    {
      name: 'Active Sport 30L',
      category: ProductCategory.SPORTS_BACKPACK,
      shortDescription: 'Lekki plecak do codziennej aktywności.',
      longDescription:
        'Active Sport 30L to wygodny plecak przeznaczony do treningów i sportowych wyjazdów. Optymalna pojemność pozwala spakować odzież, obuwie oraz akcesoria, a oddychający panel tylny zapewnia dobrą cyrkulację powietrza. Elastyczne kieszenie boczne mieszczą butelkę lub bidon, a trwałe zamki gwarantują bezproblemowe użytkowanie. To model, który sprawdzi się na siłowni, podczas jazdy na rowerze i w drodze do pracy.',
      mainImageUrl:
        'http://localhost:8000/uploads/images/products/sports-backpack_1.jpg',
      price: 249,
    },
    {
      name: 'Metro Urban 25L',
      category: ProductCategory.OFFICE_BACKPACK,
      shortDescription: 'Stylowy plecak na co dzień w mieście.',
      longDescription:
        'Metro Urban 25L łączy nowoczesny wygląd z praktycznymi rozwiązaniami. Idealny do pracy, szkoły lub na krótkie wypady. Wewnętrzna przegroda chroni laptop, a liczne kieszenie ułatwiają organizację drobiazgów. Plecak wykonano z lekkiej i odpornej tkaniny, która sprawdza się w codziennym użytkowaniu. Wygodne szelki i wyprofilowany tył zwiększają komfort noszenia nawet przy pełnym obciążeniu.',
      mainImageUrl:
        'http://localhost:8000/uploads/images/products/urban-backpack_1.jpg',
      price: 219,
    },
    {
      name: 'Trail Hiker 50L',
      category: ProductCategory.MOUNTAIN_BACKPACK,
      shortDescription: 'Trwały plecak na dłuższe wędrówki.',
      longDescription:
        'Trail Hiker 50L to solidny plecak trekkingowy przeznaczony do wielodniowych wycieczek. Jego pojemność pozwala zmieścić sprzęt biwakowy, odzież i prowiant. System wentylacji pleców ogranicza nagrzewanie, a regulowane pasy pomagają dopasować plecak do sylwetki. Model oferuje liczne kieszenie oraz miejsce na bukłak z wodą. Wytrzymałe materiały sprawiają, że plecak doskonale radzi sobie w zróżnicowanych warunkach terenowych.',
      mainImageUrl:
        'http://localhost:8000/uploads/images/products/hiking-backpack_1.jpg',
      price: 429,
    },
  ];
}

function getProductImages() {
  return [
    {
      url: 'http://localhost:8000/uploads/images/products/office-backpack_1.jpg',
      productName: 'City Office 20L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/office-backpack_2.jpg',
      productName: 'City Office 20L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/office-backpack_3.jpg',
      productName: 'City Office 20L',
    },

    {
      url: 'http://localhost:8000/uploads/images/products/travel-backpack_1.jpg',
      productName: 'Voyager Travel 40L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/travel-backpack_2.jpg',
      productName: 'Voyager Travel 40L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/travel-backpack_3.jpg',
      productName: 'Voyager Travel 40L',
    },

    {
      url: 'http://localhost:8000/uploads/images/products/mountain-backpack_1.jpg',
      productName: 'Peak Pro 60L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/mountain-backpack_2.jpg',
      productName: 'Peak Pro 60L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/mountain-backpack_3.jpg',
      productName: 'Peak Pro 60L',
    },

    {
      url: 'http://localhost:8000/uploads/images/products/sports-backpack_1.jpg',
      productName: 'Active Sport 30L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/sports-backpack_2.jpg',
      productName: 'Active Sport 30L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/sports-backpack_3.jpg',
      productName: 'Active Sport 30L',
    },

    {
      url: 'http://localhost:8000/uploads/images/products/urban-backpack_1.jpg',
      productName: 'Metro Urban 25L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/urban-backpack_2.jpg',
      productName: 'Metro Urban 25L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/urban-backpack_3.jpg',
      productName: 'Metro Urban 25L',
    },

    {
      url: 'http://localhost:8000/uploads/images/products/hiking-backpack_1.jpg',
      productName: 'Trail Hiker 50L',
    },
    {
      url: 'http://localhost:8000/uploads/images/products/hiking-backpack_2.jpg',
      productName: 'Trail Hiker 50L',
    },
  ];
}

function getOrders() {
  return [
    {
      customerName: 'John Doe',
      customerPhone: '+48 123 456 789',
      customerEmail: 'john@example.com',
      customerAddress: 'Main Street 10, London',
      totalPrice: 897,
    },
    {
      customerName: 'Anna Smith',
      customerPhone: '+48 987 654 321',
      customerEmail: 'anna@example.com',
      customerAddress: 'Green Avenue 42, Warsaw',
      totalPrice: 499,
    },
  ];
}

function getOrderItems() {
  return [
    {
      customerName: 'John Doe',
      productName: 'City Office 20L',
      quantity: 1,
    },
    {
      customerName: 'John Doe',
      productName: 'Voyager Travel 40L',
      quantity: 2,
    },
    {
      customerName: 'Anna Smith',
      productName: 'Peak Pro 60L',
      quantity: 1,
    },
  ];
}

async function seed() {
  console.log('Start seeding...');

  await db.orderItem.deleteMany();
  await db.order.deleteMany();
  await db.productImage.deleteMany();
  await db.product.deleteMany();

  const products = await Promise.all(
    getProducts().map((p) => db.product.create({ data: p })),
  );

  await Promise.all(
    getProductImages().map(({ productName, ...otherData }) => {
      const product = products.find((p) => p.name === productName);
      if (!product) throw new Error(`Product not found: ${productName}`);
      return db.productImage.create({
        data: { ...otherData, product: { connect: { id: product.id } } },
      });
    }),
  );

  const orders = await Promise.all(
    getOrders().map((o) => db.order.create({ data: { ...o, totalPrice: 0 } })),
  );

  for (const order of orders) {
    const items = getOrderItems().filter(
      (i) => i.customerName === order.customerName,
    );
    let total = 0;

    for (const item of items) {
      const product = products.find((p) => p.name === item.productName);
      if (!product)
        throw new Error(`Product not found for orderItem: ${item.productName}`);

      const orderItem = await db.orderItem.create({
        data: {
          order: { connect: { id: order.id } },
          product: { connect: { id: product.id } },
          quantity: item.quantity,
          unitPrice: product.price,
          orderItemPrice: product.price * item.quantity,
        },
      });

      total += orderItem.orderItemPrice;
    }

    await db.order.update({
      where: { id: order.id },
      data: { totalPrice: total },
    });
  }

  console.log('Seeding finished!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
