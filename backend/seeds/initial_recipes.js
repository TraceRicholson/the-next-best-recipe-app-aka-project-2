
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'PB&J Overnight Oats', meal_type: 'Breakfast', serving_size: 2, difficulty_level: 'Beginner', cooking_time_in_minutes: 15,
        ingredients: '⅔ cup rolled oats(65 g)\n⅔ cup milk(160 mL)\nof your choice \n½ cup vanilla greek yogurt(120 g)\n1 tablespoon strawberry jam\n3 tablespoons nut butter\n½ teaspoon vanilla extract\n1 teaspoon chia seed, optional\nstrawberry, quartered, to serve',
        instructions: 'In a mason jar or sealable container, add the oats, milk, yogurt, jam, nut butter, vanilla extract, chia seeds, and strawberries, and stir together.\nSeal and place in the refrigerator overnight for up to five days.\nTop with additional strawberries,if desired. Enjoy!',
        image_url: 'https://minimalistbaker.com/wp-content/uploads/2015/07/Peanut-Butter-Overnight-Oats-SQUARE.jpg'},
        {id: 2, title: 'Curry Noodle Soup', meal_type: 'Lunch', serving_size: 6, difficulty_level: 'Intermediate', cooking_time_in_minutes: 30,
        ingredients: '2 tablespoons refined coconut oil\n3 cloves garlic, minced\n1 tablespoon ginger, minced\n2 ½ tablespoons red curry paste\n15 oz coconut milk (440 mL), 1 can\n3 cups vegetable broth (720 mL) \n1 tablespoon agave \n8 oz rice noodle (225 g)\n7 oz tofu (200 g), cubed\n2 cups broccoli floret (300 g)\n1 red bell pepper, thinly sliced\n1 tablespoon lime juice\nsalt, to taste\nfresh cilantro, to serve',
        instructions: 'In a large pot, melt the coconut oil over medium heat. Once the oil begins to shimmer, add the garlic and ginger and cook for 2-3 minutes, until fragrant.\nAdd the red curry paste and cook another 2-3 minutes. \nAdd the coconut milk and stir well until the curry paste is evenly distributed. Add the vegetable broth and bring to a boil.\nOnce boiling, add the agave and rice noodles, and cook for 2 minutes, stirring frequently to prevent the noodles from sticking together.\nAdd the tofu, broccoli, and bell pepper, and stir to combine. Cook for 3-5 more minutes, until the noodles are cooked and the broccoli is tender.\nStir in the lime juice and add salt to taste.\nGarnish with cilantro and serve immediately.\nEnjoy!',
        image_url: 'https://lepetiteats.com/wp-content/uploads/2020/03/IMG_8149.jpg'},
        {id: 3, title: 'Teriyaki Chicken', meal_type: 'default', serving_size: 1, difficulty_level: 'Beginner', cooking_time_in_minutes: 1, ingredients: 'default', instructions: 'default',
        image_url: 'https://princesspinkygirl.com/wp-content/uploads/2021/05/crockpot-teriyaki-chicken-57-square-1200.jpg'},
        {id: 4, title: 'Sushi', meal_type: 'default', serving_size: 1, difficulty_level: 'Beginner', cooking_time_in_minutes: 1, ingredients: 'default', instructions: 'default',
        image_url: 'https://www.irishtimes.com/polopoly_fs/1.4404396.1604957315!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'},
        {id: 5, title: 'Fish Tacos', meal_type: 'default', serving_size: 1, difficulty_level: 'Beginner', cooking_time_in_minutes: 1, ingredients: 'default', instructions: 'default',
        image_url: 'https://www.freshcravings.com/wp-content/uploads/2019/09/FC_easyfishtacos-1480x1480@2x.jpg'},
        {id: 6, title: 'Chicken Curry', meal_type: 'default', serving_size: 1, difficulty_level: 'Beginner', cooking_time_in_minutes: 1, ingredients: 'default',
        instructions: 'default',
        image_url: 'https://asapchops.com/wp-content/uploads/2021/03/Easy-Chicken-Curry-square-FS-117.jpg'},
      ]);
    });
};
