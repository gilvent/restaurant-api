const { models,sequelize, Sequelize } = require('../../db/models');
const Op = Sequelize.Op;

const getRestaurants = async (request, response) => {

    let restaurantCondition = {}
    let scheduleCondition = {};

    if(request.query.name){
        restaurantCondition.name = {
            [Op.iLike]: `%${request.query.name}%`
        }
    }

    if(request.query.time){
        scheduleCondition[Op.or] = [
            // open_time < close_time means open hours do not pass midnight
            sequelize.literal(`(open_time < close_time) AND (open_time <= '${request.query.time}' AND close_time > '${request.query.time}')`),
            // open_time > close_time means open hours pass midnight
            sequelize.literal(`(open_time > close_time) AND (open_time <= '${request.query.time}' OR close_time > '${request.query.time}')`)
        ];
    }

    if(request.query.weekdays){
        let weekdays = request.query.weekdays.split(',');
        scheduleCondition.weekdaysRange = {
            [Op.and]: weekdays.map(weekday => {
                return {
                    [Op.contains]: weekday
                }
            })
        };
    }

    let restaurants = await models.Restaurant.findAll({
        where: restaurantCondition,
        include: {
            model: models.RestaurantSchedule,
            as: "schedules",
            where: scheduleCondition
        }
    });

    
    response.status(200).send({data: restaurants});
}

module.exports = {
    getRestaurants
}