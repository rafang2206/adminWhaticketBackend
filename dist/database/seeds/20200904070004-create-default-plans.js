"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("Plans", [
            {
                nombre: "Plan Vip",
                maxConnect: 1,
                maxTime: 1,
                maxUsers: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete("Plans", {});
    }
};
