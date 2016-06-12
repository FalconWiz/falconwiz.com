#!/bin/bash

mkdir -p dist/
npm install
npm install -g webpack
cp src/assets/favicon.ico dist/favicon.ico
webpack
