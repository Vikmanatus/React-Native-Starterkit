#!/usr/bin/env bash

user_platform="$(uname)"

if [ $user_platform == "Darwin" ]; then
    cd ios/ && pod install
fi
