const { User, Message } = require("../../models");
const { UserInputError, AuthenticationError } = require("apollo-server");
const { Op } = require("sequelize");

module.exports = {
  Query: {
    getMessages: async (_, { from }, { user }) => {
      try {
        if (!user) throw new AuthenticationError("Unauthorize");

        const otherUser = await User.findOne({ where: { userName: from } });
        if (!otherUser) throw new AuthenticationError("User Not found");

        const userNames = [user.data, otherUser.userName];
        const messages = await Message.findAll({
          where: {
            from: { [Op.in]: userNames },
            to: { [Op.in]: userNames },
          },
          order: [["createdAt", "DESC"]],
        });

        return messages;
      } catch (e) {
        throw e;
      }
    },
  },
  Mutation: {
    sendMessage: async (_, { to, content }, { user }) => {
      try {
        if (!user) throw new AuthenticationError("Unauthorize");
        const recipient = await User.findOne({ where: { userName: to } });
        if (!recipient) throw new UserInputError("User Not found");
        if (content.trim() === "") throw new UserInputError("Message is Empty");
        const message = await Message.create({
          from: user.data,
          to,
          content,
        });
        return message;
      } catch (e) {
        throw e;
      }
    },
  },
};
