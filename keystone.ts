import { config } from "@keystone-next/keystone/schema";
import { statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { lists } from "./schema";

const { withAuth } = createAuth({
  listKey: "Person",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

const session = statelessSessions({
  secret: "uh,]YenFBb5@GG@7fR9,dZbJ#1%}6wqA",
});

export default withAuth(config({
  db: {
    provider: "postgresql",
    url: "postgres://postgres:1234567890@localhost:5432/blog_db",
  },
  lists,
  session,
}));
