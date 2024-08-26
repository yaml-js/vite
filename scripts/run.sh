#!/bin/bash

shopt -s nullglob

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <folder_glob1> <folder_glob2> ... <command>"
  exit 1
fi

command="${@: -1}"
folder_globs=("${@:1:$#-1}")

for folder_glob in "${folder_globs[@]}"; do
  for folder in $folder_glob; do
    if [ -d "$folder" ]; then
      echo "Executing command in $folder"
      (cd "$folder" && eval "$command")
    fi
  done
done
