# run from ~/repos/xlear-trade via:
#   `sh api/pm2-start.sh`

# IMPORTANT: For first time installs of pm2 install typescript
#   `pm2 install typescript`


# start node app
pm2 start api/ecosystem.config.js
# start monitor
pm2 monit

# NOTE: us `pm2 kill` to end all processes