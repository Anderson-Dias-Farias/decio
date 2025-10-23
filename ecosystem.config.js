module.exports = {
  apps: [
    {
      name: "schedule-posts",
      script: "ts-node",
      args: "./scripts/schedule-posts.ts",
      cron_restart: "0 0 * * *", // Roda à meia-noite todo dia
      watch: false,
      autorestart: true,
    },
  ],
};
