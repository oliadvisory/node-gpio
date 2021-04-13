module.exports = [
  {
    // via js
    // // script: 'api/lib/main.js',
    // script: 'api/lib/main.js',

    // via ts
    script: 'api/src/main.ts',
    // this wil watch for changes and auto restart when changes are made
    // watch memory consumption in the pm2 monitor
    watch: ['api/src'],
    restart_delay: 3000,
    // node_args : '-r dotenv/config',
    // env: {
    //   DOTENV_CONFIG_PATH: './api/.secrets/prod.env',
    // },
  }
]
