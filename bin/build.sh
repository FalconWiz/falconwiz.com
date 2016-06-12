#!/bin/bash

mkdir -p dist/
npm install
cp src/assets/favicon.ico dist/favicon.ico
./node_modules/bin/webpack
