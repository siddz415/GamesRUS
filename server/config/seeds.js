const db = require('./connection');
const { User, Game, Category } = require('../models');

db.once('open', async () => {

    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Action' },
        { name: 'Adventure' },
        { name: 'Role-Playing' },
        { name: 'Strategy' },
        { name: 'Simulation' }
    ]);

    console.log('categories seeded');

    await Game.deleteMany();

    const games = await Game.insertMany([
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

    console.log('games seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password12345',
        orders: [
            {
                games: [games[0]._id, games[0]._id, games[1]._id]
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

