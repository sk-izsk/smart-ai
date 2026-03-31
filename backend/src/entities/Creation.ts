import { EntitySchema } from "@mikro-orm/core";

export const Creation = new EntitySchema({
  name: "Creation",
  properties: {
    id: { type: "number", primary: true },
    user_id: { type: "string" },
    prompt: { type: "string" },
    content: { type: "string" },
    type: { type: "string" },
    publish: { type: "boolean", nullable: true },
    likes: { type: "string[]", nullable: true },
    createdAt: { type: "Date", nullable: true },
  },
});
