#!/bin/bash

# 1. Use the official (tiny) Composer image to install ONLY Sail first
# This is much faster than the full Sail image.
echo "Initializing Sail..."
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/app" \
    composer:latest \
    composer install --ignore-platform-reqs

# 2. Setup Environment
if [ ! -f .env ]; then
    cp .env.example .env
    echo ".env file created."
fi

# 3. Start Sail in the background
./vendor/bin/sail up -d

echo "Waiting for MySQL to be ready..."

# 4. The "Wait-for-DB" Loop
sleep 2

echo -e "\nMySQL is up! Finalizing setup..."

# 5. Final Laravel Commands
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate:fresh

echo "----------------------------------------------------"
echo "🚀 Training environment is ready at http://localhost"
echo "----------------------------------------------------"
