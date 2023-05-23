const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {

  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
=======
await Category.deleteMany();

const categories = await Category.insertMany([
{ name: 'Action' },
{ name: 'Adventure' },
{ name: 'Role-Playing' },
{ name: 'Strategy' },
{ name: 'Simulation' }
]);

console.log('categories seeded');

await Product.deleteMany();

const products = await Product.insertMany([
{
name: 'The Witcher 3: Wild Hunt',
description:
'An open-world action role-playing game set in a dark fantasy universe.',
image: 'witcher3.jpg',
category: categories[0]._id,
price: 29.99,
quantity: 500
},
{
name: 'Assassin\'s Creed Valhalla',
description:
'Embark on a Viking adventure in this action role-playing game.',
image: 'ac-valhalla.jpg',
category: categories[0]._id,
price: 59.99,
quantity: 500
},
{
name: 'The Legend of Zelda: Breath of the Wild',
category: categories[1]._id,
description:
'Explore the vast kingdom of Hyrule in this action-adventure game.',
image: 'zelda-botw.jpg',
price: 49.99,
quantity: 20
},
{
name: 'God of War',
category: categories[1]._id,
description:
'Join Kratos on his journey in this epic action-adventure game.',
image: 'god-of-war.jpg',
price: 39.99,
quantity: 50
},
{
name: 'Civilization VI',
category: categories[3]._id,
description:
'Build an empire and lead your civilization to victory in this strategy game.',
image: 'civ6.jpg',
price: 19.99,
quantity: 100
},
{
name: 'The Sims 4',
category: categories[4]._id,
description:
'Create and control virtual people in this life simulation game.',
image: 'sims4.jpg',
price: 29.99,
quantity: 30
},
{
name: 'Red Dead Redemption 2',
category: categories[0]._id,
description:
'Experience the Wild West in this open-world action-adventure game.',
image: 'rdr2.jpg',
price: 49.99,
quantity: 30
},
{
name: 'Final Fantasy VII Remake',
category: categories[2]._id,
description:
'Relive the classic RPG with stunning visuals and new gameplay features.',
image: 'ff7-remake.jpg',
price: 59.99,
quantity: 100
},
{
name: 'Minecraft',
category: categories[4]._id,
description:
'Build and explore a blocky world in this sandbox game.',
image: 'minecraft.jpg',
price: 19.99,
quantity: 1000
},
{
name: 'Super Mario Odyssey',
category: categories[1]._id,
description:
'Join Mario on a 3D platforming adventure in this Nintendo game.',
image: 'mario-odyssey.jpg',
price: 49.99,
quantity: 1000
},
{
name: 'Stardew Valley',
category: categories[4]._id,
description:
'Farm, mine, and build a thriving life in the countryside in this simulation game.',
image: 'stardew-valley.jpg',
price: 14.99,
quantity: 100
},
{
name: 'Overwatch 2',
category: categories[0]._id,
description:
'Join the team-based multiplayer shooter and compete in exciting matches.',
image: 'overwatch2.jpg',
price: 39.99,
quantity: 600
}
]);

console.log('products seeded');

await User.deleteMany();

await User.create({
firstName: 'John',
lastName: 'Doe',
email: 'johndoe@example.com',
password: 'password12345',
orders: [
{
products: [products[0]._id, products[0]._id, products[1]._id]
}
]
});

await User.create({
firstName: 'Jane',
lastName: 'Smith',
email: 'janesmith@example.com',
password: 'password12345'
});

console.log('users seeded');

process.exit();
});

