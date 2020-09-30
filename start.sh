#!/bin/sh
forever start /server/index.js
nginx -g "daemon off;"
