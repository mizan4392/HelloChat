const { User } = require("../models");
const bcrypt = require('bcryptjs')
const {UserInputError} = require('apollo-server')
module.exports = {
  Query: {
    getUser: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    register: async (_, args) => {
      let { userName, email, password, confirmPassword } = args;
      let error = {}

      try {

        if(email.trim() === "") error.email = "Email must not be empty"
        if(userName.trim() === "") error.userName = "Username must not be empty"
        if(password.trim() === "") error.password = "Password must not be empty"
        if(confirmPassword.trim() === "") error.confirmPassword = "ConfirmPassword must not be empty"

        if(confirmPassword !== password) error.confirmPassword = "Password must matched"
        
        if(Object.keys(error).length > 0){
          throw error
        }

        //hash password
        password = await bcrypt.hash(password,6)
        //create user
        const user = await User.create({ userName, email, password });
        //return
        return user;
      } catch (err) {
        console.log(err)
        if(err.name === "SequelizeUniqueConstraintError"){
          err.errors.forEach(e => error[e.path.splite('.'[1])] = e.message);
        }
        throw new UserInputError("bad Input",{error}) ;
      }
    },
  },
};
