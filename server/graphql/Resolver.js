const { User } = require("../models");
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const {UserInputError,AuthenticationError} = require('apollo-server')
var { JWT_SECRET} = require('../config/env.json')

module.exports = {
  Query: {
    getUser: async (_,__,context) => {

      console.log("-----------",context.req.headers)

      try {
        const users = await User.findAll();
        return users;
      } catch (err) {
        throw err;
      }
    },
    login:async (_,args)=>{
      const {userName,password} = args;
      try{
        let errors = {}
        if(userName.trim() === "") error.userName = "Username must not be empty"
        if(password === "") error.password = "Password must not be empty"

        if(Object.keys(errors).length > 0){
          throw new UserInputError("User Not Found",{errors})
        }

        const user = await User.findOne({
          where:{userName}
        })
        const passMatch = await bcrypt.compare(password,user.password)
        if(!passMatch){
          errors.password = "Wrong Password"
         throw new AuthenticationError("Wrong Password",{errors})
        }


        if(!user){
          errors.userName = "User Not Found"
          throw new UserInputError("User Not Found",{errors})
        }

        const token  = jwt.sign({
          data: userName
        },JWT_SECRET, { expiresIn: 60 * 60 });
        
        return {...user.toJSON(),
          createdAt:user.createdAt.toISOString(),
          token
        }
      }catch(error){
        console.log(error)
        throw error
      }


    }
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
          err.errors.forEach(e => error[e.path.split('.')[1]] = `${e.path.split('.')[1]} already taken`);
        }else if(err.name === "SequelizeValidationError"){
          err.errors.forEach(e => error[e.path] = e.message);
        }
        throw new UserInputError("bad Input",{error}) ;
      }
    },
  },
};
