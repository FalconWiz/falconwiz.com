#!/bin/bash

USAGE="./bin/inf.sh deployment_group"

if [ -z "$1" ]; then
  echo $USAGE
  exit
fi

terraform apply inf/${1}/
