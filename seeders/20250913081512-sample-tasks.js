"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {}); // First, clear the Tasks table

    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "Finish project proposal",
          dueDate: new Date("2025-09-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Team meeting",
          dueDate: new Date("2025-09-17"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Code review",
          dueDate: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Update documentation",
          dueDate: new Date("2025-09-20"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Refactor legacy code",
          dueDate: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
