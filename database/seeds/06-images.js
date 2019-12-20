
exports.seed = function(knex) {
  return knex('images').insert([
    {url: 'https://cooktoria.com/wp-content/uploads/2015/04/Sweet-Crepes-1.jpg'}, //1
    {url: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273477_8.jpg?itok=6VhpTntM'}, //2
    {url: 'https://www.onceuponachef.com/images/2013/01/banana-pancakes-2.jpg'}, //3
    {url: 'https://littlesunnykitchen.com/wp-content/uploads/2014/01/IMG_4361_Fotor-1.jpg'}, //4
    {url: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1273456_8.jpg?itok=g5CULmyI'}, //5
    {url: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps9336_DHC1145894C14.jpg'}, //6
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxdBveJ1Y8AJFYIvc-tfNipY0gQyIpCgxlm0uIvfODW7hQ7Mdy'}, //7
    {url: 'http://foodwhine.com/wp-content/uploads/2011/02/IMG_0752.jpg'}, //8
    {url: 'https://img.taste.com.au/n6tHtnRc/w720-h480-cfill-q80/taste/2016/11/simple-crepe-recipe-98541-1.jpeg'}, //9
    {url: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/03/chapatis.jpg?itok=g06BOwVn'}, //10
    {url: 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/09/Roti-1-1842x1212-920x605.jpg'}, //11
    {url: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Homemade-Tortillas_EXPS_CIW19_48431_B08_30_7b.jpg'}, //12
    {url: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chicken_fajitas_with_07231_16x9.jpg'}, //13
    {url: 'https://images-gmi-pmc.edge-generalmills.com/0342cc33-18fe-4a46-9701-d7d63cd0ffc8.jpg'}, //14
    {url: 'https://s23209.pcdn.co/wp-content/uploads/2019/01/Weeknight-Chicken-EnchiladasIMG_8178.jpg'}, //15
    {url: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Chicken-Soft-Tacos_EXPS_SCSCBZ17_32237_B03_08_4b.jpg'} //16
  ]);
};
