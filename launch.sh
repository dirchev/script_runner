#!/bin/bash

currentDir=$(dirname $0)
cd $currentDir

# make scripts executable
chmod +x ./example_scripts/*.sh

./node_modules/.bin/electron ./app
