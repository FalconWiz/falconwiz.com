#!/bin/bash

mkdir -p dist/
npm install --silent --progress=false
npm run build
