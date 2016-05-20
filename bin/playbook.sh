#!/bin/bash

USAGE="./bin/playbook.sh branch"

if [ -z "$1" ]; then
  echo $USAGE
  exit
fi

ansible-playbook -i inf/${1}/hosts playbooks/${1}.yml
