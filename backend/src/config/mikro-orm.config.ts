// import { Options } from "@mikro-orm/core";
import { Creation } from "../entities/Creation";
import { User } from "../entities/User";
import { ENV } from "./env";

const mikroOrmConfig = {
  entities: [User, Creation],
  clientUrl: ENV.DATABASE_URL,
  debug: process.env.NODE_ENV !== "production",
};

export default mikroOrmConfig;
