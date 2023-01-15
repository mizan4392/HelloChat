import { config } from 'dotenv';
config();
export const environment = {
  mongoUrl: process.env.DB_URL,
  jwtSecrete: 'my-secrete',
  redis: {
    port: process.env.NX_REDIS_PORT,
  },
  email: {
    defaultSender: `<no-reply>HelloChat <info@helloChat.com>`,
  },
};
