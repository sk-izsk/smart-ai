import { EntitySchema } from "@mikro-orm/core";

export const User = new EntitySchema({
  name: "User",
  properties: {
    id: { type: "number", primary: true },
    email: { type: "string" },
    password: { type: "string" },
    name: { type: "string", nullable: true },
    createdAt: { type: "Date", nullable: true },
  },
});
