#!/bin/bash
freshInstall=$1

# Install dependencies
if [ $freshInstall == true ]; then    
    echo "Fresh installing all dependencies"
    rm -rf node_modules/
else
    echo "Skipping fresh install"
fi

npm install

# Setting up DB and queues for the local environment
npm run pre-scripts

# Starting the server
nodemon index.js

# ######################################################################


# helpFunction()
# {
#    echo ""
#    echo "Usage: $0 -fi freshInstall"
#    echo -fi "\t-fi Fresh install dependencies"
#    exit 1 # Exit script after printing help
# }

# while getopts "fi:" opt
# do
#     case "$opt" in
#         fi ) freshInstall="$OPTARG" ;; 
#         h ) helpFunction ;;
#     esac
# done

# if [ -z "$freshInstall" ]
# then
#     echo "Some or all of the parameters are empty";
#     helpFunction
# fi