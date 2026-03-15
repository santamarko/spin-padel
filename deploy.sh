#!/bin/bash

# Spin Padel - Auto-Deploy Script
# This script is executed automatically when code is pushed to the main branch

set -e  # Exit on any error

echo "🚀 Starting deployment..."

# Navigate to project directory
cd "$(dirname "$0")"

# Pull latest changes
echo "📥 Pulling latest changes from Git..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Restart web server (adjust based on your setup)
echo "🔄 Restarting web server..."
if command -v systemctl &> /dev/null; then
    sudo systemctl restart nginx
elif command -v service &> /dev/null; then
    sudo service nginx restart
else
    echo "⚠️  Please restart your web server manually"
fi

echo "✅ Deployment complete!"
echo "🌐 Site should be live at your domain"
