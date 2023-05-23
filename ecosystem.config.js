module.exports = {
  apps: [{
    name: "Reinkraft Web",
    script: "app.js",
    args: "",
    env_development: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
