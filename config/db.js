import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "codeva.virginia-c4.cloud",
    user: "jdleonard",
    password: "Shout4_jdleonard_GO_ME",
    port: 7833,
    database: "project_codeva",
  },
});

export { pool };
