#!/bin/bash  
# Purpose of this script is to clean phaeton database and create some tranactions

if [ -z "$1" ]
  then
    echo "One required argument missing: path to folder with phaeton core app.js"
    exit 1
fi

if [ ! -f blockchain_explorer.db.gz ]; then
  wget https://downloads.phaeton.io/phaeton-explorer/dev/blockchain_explorer.db.gz
fi

pwd=`pwd`
cd $1
pm2 stop app.js
dropdb phaeton_test
createdb phaeton_test
gunzip -fcq "$pwd/blockchain_explorer.db.gz" | psql -d phaeton_test
pm2 start app.js
sleep 5
cd $pwd

