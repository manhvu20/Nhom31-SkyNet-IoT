module.exports = {
  databaseUrl: "mongodb://localhost:27017/skynet",
  port: 3000,
  log: true,
  rateLimit: 10, // 10 transactions per user per secend
  plivo: {
    authId: "abc",
    authToken: "123",
  },
  redisHost: "127.0.0.1",
  redisPort: "6379",
};
