exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.string('title').notNullable();
    table.string('meal_type');
    table.integer('serving_size');
    table.string('difficulty_level');
    table.integer('cooking_time_in_minutes');
    table.string('ingredients', 2000);
    table.string('instructions', 2000);
    table.string('image_url', 1000)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};




