#!/bin/bash

# Makes all scripts in this folder executable

currentDir=$(dirname $0)
cd $currentDir

chmod +x ./*.sh
