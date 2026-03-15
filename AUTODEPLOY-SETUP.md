# Auto-Deploy Setup Guide

This guide will help you set up automatic deployment to your Debian server on every push to the `main` branch.

---

## 🎯 Overview

We're using **GitHub Actions** to automatically:

1. Detect when you push to the `main` branch
2. SSH into your Debian server
3. Pull the latest code
4. Install dependencies and build
5. Restart the web server

**No webhooks, no exposed ports, completely secure!**

---

## 📋 Prerequisites

- ✅ Git repository hosted on GitHub
- ✅ SSH access to your Debian server
- ✅ Node.js and npm installed on the server
- ✅ Web server (nginx/apache) configured to serve the `dist` folder

---

## 🔧 Setup Instructions

### Step 1: Generate SSH Key (if you don't have one)

On your **local machine** or **from the server**:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy
```

This creates two files:

- `~/.ssh/github_deploy` (private key) - **keep this secret!**
- `~/.ssh/github_deploy.pub` (public key)

### Step 2: Add Public Key to Server

Copy the public key to your server:

```bash
ssh-copy-id -i ~/.ssh/github_deploy.pub user@your-server.com
```

Or manually add it to `~/.ssh/authorized_keys` on the server.

### Step 3: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these secrets:

| Secret Name       | Value                             | Example                            |
| ----------------- | --------------------------------- | ---------------------------------- |
| `SERVER_HOST`     | Your server's IP or domain        | `203.0.113.42` or `spin-padel.com` |
| `SERVER_USER`     | SSH username                      | `root` or `deployer`               |
| `SERVER_PORT`     | SSH port (usually 22)             | `22`                               |
| `SSH_PRIVATE_KEY` | Content of `~/.ssh/github_deploy` | Copy entire private key file       |
| `DEPLOY_PATH`     | Path to your project on server    | `/var/www/spin-padel`              |

**To get the private key:**

```bash
cat ~/.ssh/github_deploy
```

Copy everything including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`

### Step 4: Configure Server Permissions

On your **Debian server**, allow the deploy user to restart nginx without a password:

```bash
# Create a sudoers file for nginx restart
sudo visudo -f /etc/sudoers.d/deploy

# Add this line (replace 'your-user' with your SSH username):
your-user ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx, /usr/sbin/service nginx restart
```

### Step 5: Configure Nginx

Make sure your nginx is configured to serve the `dist` folder:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/spin-padel/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Step 6: Test the Workflow

Commit and push to the `main` branch:

```bash
git add .
git commit -m "Add auto-deploy workflow"
git push origin main
```

Watch the deployment:

1. Go to GitHub → **Actions** tab
2. You'll see your workflow running
3. Click on it to see live logs

---

## 🔄 Alternative: Simple Webhook Receiver (Less Secure)

If you prefer not to use GitHub Actions, you can set up a simple webhook receiver on your server.

### Install webhook package:

```bash
npm install -g webhook
```

### Create webhook configuration:

```json
[
  {
    "id": "deploy-spin-padel",
    "execute-command": "/var/www/spin-padel/deploy.sh",
    "command-working-directory": "/var/www/spin-padel",
    "response-message": "Deploying...",
    "trigger-rule": {
      "match": {
        "type": "payload-hash-sha1",
        "secret": "YOUR_WEBHOOK_SECRET",
        "parameter": {
          "source": "header",
          "name": "X-Hub-Signature"
        }
      }
    }
  }
]
```

### Run webhook:

```bash
webhook -hooks hooks.json -verbose -port 9000
```

Then configure GitHub webhook to point to `http://your-server:9000/hooks/deploy-spin-padel`

---

## 🧪 Testing

After setup, test by making a small change:

```bash
# Make a change
echo "<!-- Auto-deploy test -->" >> index.html

# Commit and push
git add .
git commit -m "Test auto-deploy"
git push origin main
```

Check GitHub Actions for the deployment status!

---

## 🐛 Troubleshooting

**SSH Connection Failed:**

- Check firewall allows SSH from GitHub IPs
- Verify SSH key is correctly added to server
- Test SSH connection manually: `ssh -i ~/.ssh/github_deploy user@server`

**Permission Denied on `git pull`:**

- Ensure deploy user owns the project directory: `sudo chown -R your-user:your-user /var/www/spin-padel`

**Build Fails:**

- Check Node.js version on server: `node --version` (should be 18+)
- Verify dependencies: `npm install` manually on server

**Nginx Not Restarting:**

- Check sudoers configuration
- Test manually: `sudo systemctl restart nginx`

---

## 🎉 Done!

Your site will now automatically deploy whenever you push to the `main` branch!

**Deployment time:** ~30-60 seconds per push

**What happens:**

1. You push code → GitHub Actions triggers
2. Actions SSH to your server
3. Git pulls latest changes
4. npm builds the project
5. Nginx restarts
6. Your site is live! 🚀
