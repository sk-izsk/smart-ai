import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";

export const initORM = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  return orm;
};
