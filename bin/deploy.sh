#!/bin/bash

USAGE="./bin/deploy name"

if [ -z "$1" ]; then
  echo $USAGE
  exit
fi

tar -czvf ${1}.tar.gz _build
aws s3 cp ${1}.tar.gz s3://falconwiz.com/${1}.tar.gz
