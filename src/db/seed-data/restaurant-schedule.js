/**
 * 
 * @param {*} restaurants Initialy seeded restaurant records. 
 */
let getRestaurantSchedules = (restaurants) => 
[
    // Kushi Tsuru
    {
      "restaurant_id": restaurants[0].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:30",
      "close_time": "21:00",
    },
    // Osakaya Restaurant
    {
      "restaurant_id": restaurants[1].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:30",
      "close_time": "21:00",
    },
    {
      "restaurant_id": restaurants[1].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:30",
      "close_time": "21:00",
    },
    {
      "restaurant_id": restaurants[1].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:30",
      "close_time": "21:30",
    },
    // The Stinking Rose
    {
      "restaurant_id": restaurants[2].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[2].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[2].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:30",
      "close_time": "23:00",
    },
    // McCormick & Kuleto's
    {
      "restaurant_id": restaurants[3].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[3].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[3].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:30",
      "close_time": "23:00",
    },
    // Mifune Restaurant
    {
      "restaurant_id": restaurants[4].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    // The Cheesecake Factory
    {
      "restaurant_id": restaurants[5].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    {
      "restaurant_id": restaurants[5].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:00",
      "close_time": "00:30",
    },
    {
      "restaurant_id": restaurants[5].id,
      "weekdays_range": '[7,7]',
      "open_time": "10:00",
      "close_time": "23:00",
    },
    // New Delhi Indian Restaurant
    {
      "restaurant_id": restaurants[6].id,
      "weekdays_range": '[1,6]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[6].id,
      "weekdays_range": '[7,7]',
      "open_time": "17:30",
      "close_time": "22:00",
    },
    // Iroha Restaurant
    {
      "restaurant_id": restaurants[7].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:30",
      "close_time": "21:30",
    },
    {
      "restaurant_id": restaurants[7].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:30",
      "close_time": "21:30",
    },
    {
      "restaurant_id": restaurants[7].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    // Rose Pistola
    {
      "restaurant_id": restaurants[8].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[8].id,
      "weekdays_range": '[5,7]',
      "open_time": "11:30",
      "close_time": "23:00",
    },
    // Alioto's Restaurant
    {
      "restaurant_id": restaurants[9].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    // Canton Seafood & Dim Sum Restaurant
    {
      "restaurant_id": restaurants[10].id,
      "weekdays_range": '[1,5]',
      "open_time": "10:30",
      "close_time": "21:30",
    },
    {
      "restaurant_id": restaurants[10].id,
      "weekdays_range": '[6,7]',
      "open_time": "10:00",
      "close_time": "21:30",
    },
    // All Season Restaurant
    {
      "restaurant_id": restaurants[11].id,
      "weekdays_range": '[1,5]',
      "open_time": "10:00",
      "close_time": "21:30",
    },
    {
      "restaurant_id": restaurants[11].id,
      "weekdays_range": '[6,7]',
      "open_time": "09:30",
      "close_time": "21:30",
    },
    // Bombay Indian Restaurant
    {
      "restaurant_id": restaurants[12].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:30",
      "close_time": "22:30",
    },
    // Sam's Grill & Seafood Restaurant
    {
      "restaurant_id": restaurants[13].id,
      "weekdays_range": '[1,5]',
      "open_time": "11:00",
      "close_time": "21:00",
    },
    {
      "restaurant_id": restaurants[13].id,
      "weekdays_range": '[6,6]',
      "open_time": "17:00",
      "close_time": "21:00",
    },
    // 2G Japanese Brasserie
    {
      "restaurant_id": restaurants[14].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[14].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[14].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    // Restaurant Lulu
    {
      "restaurant_id": restaurants[15].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:30",
      "close_time": "21:00",
    },
    {
      "restaurant_id": restaurants[15].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:30",
      "close_time": "21:00",
    },
    {
      "restaurant_id": restaurants[15].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    // Sudachi
    {
      "restaurant_id": restaurants[16].id,
      "weekdays_range": '[1,3]',
      "open_time": "17:00",
      "close_time": "12:30",
    },
    {
      "restaurant_id": restaurants[16].id,
      "weekdays_range": '[4,5]',
      "open_time": "17:00",
      "close_time": "01:30",
    },
    {
      "restaurant_id": restaurants[16].id,
      "weekdays_range": '[6,6]',
      "open_time": "15:00",
      "close_time": "01:30",
    },
    {
      "restaurant_id": restaurants[16].id,
      "weekdays_range": '[7,7]',
      "open_time": "15:00",
      "close_time": "23:30",
    },
    // Hanuri
    {
      "restaurant_id": restaurants[17].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "00:00",
    },
    // Herbivore
    {
      "restaurant_id": restaurants[18].id,
      "weekdays_range": '[1,4]',
      "open_time": "09:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[18].id,
      "weekdays_range": '[1,7]',
      "open_time": "09:00",
      "close_time": "23:00",
    },
    // Penang Garden
    {
      "restaurant_id": restaurants[19].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[19].id,
      "weekdays_range": '[5,6]',
      "open_time": "10:00",
      "close_time": "22:30",
    },
    {
      "restaurant_id": restaurants[19].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    // John's Grill
    {
      "restaurant_id": restaurants[20].id,
      "weekdays_range": '[1,6]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[20].id,
      "weekdays_range": '[7,7]',
      "open_time": "12:00",
      "close_time": "22:00",
    },
    // Quan Bac
    {
      "restaurant_id": restaurants[21].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    // Bamboo Restaurant
    {
      "restaurant_id": restaurants[22].id,
      "weekdays_range": '[1,6]',
      "open_time": "11:00",
      "close_time": "00:00",
    },
    {
      "restaurant_id": restaurants[22].id,
      "weekdays_range": '[7,7]',
      "open_time": "12:00",
      "close_time": "00:00",
    },
    // Burger Bar
    {
      "restaurant_id": restaurants[23].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[23].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[23].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:00",
      "close_time": "12:00",
    },
    // Blu Restaurant
    {
      "restaurant_id": restaurants[24].id,
      "weekdays_range": '[1,5]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[24].id,
      "weekdays_range": '[6,7]',
      "open_time": "07:00",
      "close_time": "15:00",
    },
    // Naan 'N' Curry
    {
      "restaurant_id": restaurants[25].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "04:00",
    },
    // Shanghai China Restaurant
    {
      "restaurant_id": restaurants[26].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "21:30",
    },
    // Tres
    {
      "restaurant_id": restaurants[27].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[27].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[27].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:30",
      "close_time": "23:00",
    },
    // Isobune Sushi
    {
      "restaurant_id": restaurants[28].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:30",
      "close_time": "21:30",
    },
    // Viva Pizza Restaurant
    {
      "restaurant_id": restaurants[29].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "00:00",
    },
    // Far East Cafe
    {
      "restaurant_id": restaurants[30].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    // Parallel 37
    {
      "restaurant_id": restaurants[31].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    // Bai Thong Thai Cuisine
    {
      "restaurant_id": restaurants[32].id,
      "weekdays_range": '[1,6]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    {
      "restaurant_id": restaurants[32].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    // Alhamra
    {
      "restaurant_id": restaurants[33].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    // A-1 Cafe Restaurant
    {
      "restaurant_id": restaurants[34].id,
      "weekdays_range": '[1,1]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[34].id,
      "weekdays_range": '[3,7]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    // Nick's Lighthouse
    {
      "restaurant_id": restaurants[35].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "22:30",
    },
    // Paragon Restaurant & Bar
    {
      "restaurant_id": restaurants[36].id,
      "weekdays_range": '[1,5]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[36].id,
      "weekdays_range": '[6,6]',
      "open_time": "17:30",
      "close_time": "22:00",
    },
    // Chili Lemon Garlic
    {
      "restaurant_id": restaurants[37].id,
      "weekdays_range": '[1,5]',
      "open_time": "11:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[37].id,
      "weekdays_range": '[6,7]',
      "open_time": "17:00",
      "close_time": "22:00",
    },
    // Bow Hon Restaurant
    {
      "restaurant_id": restaurants[38].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "22:30",
    },
    // San Dong House
    {
      "restaurant_id": restaurants[39].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    // Thai Stick Restaurant
    {
      "restaurant_id": restaurants[40].id,
      "weekdays_range": '[1,7]',
      "open_time": "11:00",
      "close_time": "01:00",
    },
    // Cesario's
    {
      "restaurant_id": restaurants[41].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[41].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[41].id,
      "weekdays_range": '[5,6]',
      "open_time": "11:30",
      "close_time": "22:30",
    },
    // Colombini Italian Cafe Bistro
    {
      "restaurant_id": restaurants[42].id,
      "weekdays_range": '[1,5]',
      "open_time": "12:00",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[42].id,
      "weekdays_range": '[6,7]',
      "open_time": "17:00",
      "close_time": "22:00",
    },
    // Sabella & La Torre
    {
      "restaurant_id": restaurants[43].id,
      "weekdays_range": '[1,4]',
      "open_time": "10:00",
      "close_time": "22:30",
    },
    {
      "restaurant_id": restaurants[43].id,
      "weekdays_range": '[7,7]',
      "open_time": "10:00",
      "close_time": "22:30",
    },
    {
      "restaurant_id": restaurants[43].id,
      "weekdays_range": '[5,6]',
      "open_time": "10:00",
      "close_time": "00:30",
    },
    // Soluna Cafe and Lounge
    {
      "restaurant_id": restaurants[44].id,
      "weekdays_range": '[1,5]',
      "open_time": "11:30",
      "close_time": "22:00",
    },
    {
      "restaurant_id": restaurants[44].id,
      "weekdays_range": '[6,6]',
      "open_time": "17:00",
      "close_time": "22:00",
    },
    // Tong Palace
    {
      "restaurant_id": restaurants[45].id,
      "weekdays_range": '[1,5]',
      "open_time": "09:00",
      "close_time": "21:30",
    },
    {
      "restaurant_id": restaurants[45].id,
      "weekdays_range": '[6,7]',
      "open_time": "09:00",
      "close_time": "22:00",
    },
    // India Garden Restaurant
    {
      "restaurant_id": restaurants[46].id,
      "weekdays_range": '[1,7]',
      "open_time": "10:00",
      "close_time": "23:00",
    },
    // Sapporo-Ya Japanese Restaurant
    {
      "restaurant_id": restaurants[47].id,
      "weekdays_range": '[1,6]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    {
      "restaurant_id": restaurants[47].id,
      "weekdays_range": '[7,7]',
      "open_time": "11:00",
      "close_time": "22:30",
    },
    // Santorini's Mediterranean Cuisine
    {
      "restaurant_id": restaurants[48].id,
      "weekdays_range": '[1,7]',
      "open_time": "08:00",
      "close_time": "22:30",
    },
    // Kyoto Sushi
    {
      "restaurant_id": restaurants[49].id,
      "weekdays_range": '[1,4]',
      "open_time": "11:00",
      "close_time": "22:30",
    },
    {
      "restaurant_id": restaurants[49].id,
      "weekdays_range": '[5,5]',
      "open_time": "11:00",
      "close_time": "23:00",
    },
    {
      "restaurant_id": restaurants[49].id,
      "weekdays_range": '[6,6]',
      "open_time": "11:30",
      "close_time": "23:00",
    },
    {
      "restaurant_id": restaurants[49].id,
      "weekdays_range": '[7,7]',
      "open_time": "16:30",
      "close_time": "22:30",
    },
    // Marrakech Moroccan Restaurant
    {
      "restaurant_id": restaurants[50].id,
      "weekdays_range": '[1,7]',
      "open_time": "17:30",
      "close_time": "02:00",
    },
  ]

module.exports = getRestaurantSchedules;