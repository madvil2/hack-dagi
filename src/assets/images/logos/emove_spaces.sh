#!/bin/sh

for file in *; do
    if [ -f "$file" ]; then
        new_name="${file#?}"  # Remove the first character
        mv "$file" "$new_name"
    fi
done

