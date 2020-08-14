module.exports = {
  Query: {
    getUser: () => {
      console.log("Hi");
      const user = [
        {
          email: "mizan4392@gmail.com",
          userName: "Mizan",
        },
        {
          email: "mizan3079@gmail.com",
          userName: "Mizan1",
        },
      ];

      return user;
    },
  },
};
