#!/bin/bash

# Exporting the environment variables
export $(egrep -v '^#' .env | xargs)