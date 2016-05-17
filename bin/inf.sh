#!/bin/bash

USAGE="./bin/inf.sh branch_name"

if [ -z "$1" ]; then
  echo $USAGE
  exit
fi

terraform apply inf/${1}/