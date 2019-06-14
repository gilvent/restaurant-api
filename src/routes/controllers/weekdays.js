const { models } = require('../../db/models');

const getWeekdays = async (request,response) => {
    let weekdays = await models.Weekday.findAll();
    response.status(200).send({
        data: weekdays
    });
}

module.exports = {
    getWeekdays
}