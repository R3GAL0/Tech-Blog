const seedBlogs = require('./blogData');
const seedComments = require('./commentData');
const seedUsers = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');
  await seedBlogs();
  console.log('\n----- Blogs SEEDED -----\n');

  await seedComments();
  console.log('\n----- Comments SEEDED -----\n');


  process.exit(0);
};

seedAll();
