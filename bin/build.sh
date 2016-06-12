#!/bin/bash

mkdir -p dist/
cp src/assets/favicon.ico dist/favicon.ico
./node_modules/bin/webpack
