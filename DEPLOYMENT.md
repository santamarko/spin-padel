# Spin Padel - Deployment Guide

**Last Updated:** 2025-12-29

This guide will help you deploy the Spin Padel website so it's accessible 24/7 from anywhere in the world.

---

## Overview

Your website has been prepared for deployment with:
- ✅ Git repository initialized
- ✅ .gitignore configured
- ✅ Initial commit created
- ✅ Vercel CLI installed
- ✅ Production build tested

---

## Quick Deploy to Vercel (Recommended)

Vercel is the **easiest and fastest** way to deploy your React website. It's:
- **Free** for personal projects
- **Fast** with global CDN
- **Automatic** HTTPS/SSL certificates
- **Easy** continuous deployment from git

### Step 1: Login to Vercel

Open your terminal and run:

```bash
vercel login
```

This will:
1. Open a browser window
2. Ask you to sign up/login (use GitHub, GitLab, or Email)
3. Authorize the CLI

### Step 2: Deploy Your Site

Navigate to your project folder and deploy:

```bash
cd "/Users/marcoalbuquerque/Desktop/Spin Padel"
vercel
```

**Follow the prompts:**
1. "Set up and deploy?" → **Yes**
2. "Which scope?" → Choose your account
3. "Link to existing project?" → **No**
4. "What's your project's name?" → **spin-padel** (or your preferred name)
5. "In which directory is your code located?" → **./** (press Enter)
6. "Want to modify the settings?" → **No**

Vercel will:
- Upload your code
- Install dependencies
- Build your site
- Deploy to production
- Give you a live URL like: `https://spin-padel.vercel.app`

### Step 3: Access Your Live Site

Once deployed, Vercel will show:
```
✅ Production: https://spin-padel-xxxxx.vercel.app [copied to clipboard]
```

**Your website is now live and accessible from anywhere! 🎉**

---

## Production Deployment (vercel --prod)

For production deployment with custom domain:

```bash
vercel --prod
```

This deploys directly to production (no preview URL).

---

## Continuous Deployment

### Automatic Deployments with Git

1. **Push to GitHub** (recommended for auto-deploy):

```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/spin-padel.git
git branch -M main
git push -u origin main
```

2. **Connect GitHub to Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will automatically deploy on every push!

**Benefits:**
- Every `git push` triggers automatic deployment
- Preview deployments for branches
- Rollback to previous versions easily

---

## Custom Domain Setup

### Add Your Own Domain

1. **Buy a domain** (e.g., spinpadel.pt from Namecheap, GoDaddy, etc.)

2. **Add domain in Vercel:**
   - Go to your project settings
   - Click "Domains"
   - Add your domain (e.g., `spinpadel.pt`)

3. **Update DNS records** at your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for DNS propagation** (5 minutes - 48 hours)

Your site will be available at `https://spinpadel.pt` with automatic HTTPS! ✅

---

## Alternative: Deploy to Netlify

If you prefer Netlify instead:

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login

```bash
netlify login
```

### Step 3: Deploy

```bash
cd "/Users/marcoalbuquerque/Desktop/Spin Padel"
netlify deploy
```

Follow prompts:
1. "Create & configure a new site" → **Yes**
2. "Site name" → **spin-padel**
3. "Publish directory" → **dist**

### Step 4: Deploy to Production

```bash
netlify deploy --prod
```

---

## Alternative: Deploy to GitHub Pages

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Add homepage field:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/spin-padel"
}
```

### Step 3: Deploy

```bash
npm run deploy
```

Your site will be at: `https://YOUR_USERNAME.github.io/spin-padel`

---

## Environment Variables (If Needed)

If you add backend APIs later, set environment variables:

### In Vercel:
1. Go to Project Settings → Environment Variables
2. Add variables like:
   - `VITE_API_URL`
   - `VITE_API_KEY`

### In Netlify:
1. Go to Site Settings → Environment
2. Add variables

### Locally (.env file):
```bash
VITE_API_URL=https://api.spinpadel.pt
VITE_API_KEY=your_key_here
```

**Important:** Never commit `.env` to git (already in `.gitignore`)

---

## Monitoring Your Live Site

### Vercel Dashboard
- View deployments: https://vercel.com/dashboard
- Check analytics
- View build logs
- Monitor performance

### Check if Your Site is Up
- https://uptimerobot.com/ (free monitoring)
- https://www.pingdom.com/

---

## Updating Your Live Site

### Method 1: Via Vercel CLI

```bash
cd "/Users/marcoalbuquerque/Desktop/Spin Padel"

# Make your changes, then:
vercel --prod
```

### Method 2: Via Git (if connected to GitHub)

```bash
git add .
git commit -m "Update website"
git push
```

Vercel automatically detects the push and redeploys! ✅

---

## Troubleshooting

### Build Fails on Vercel

**Check build logs** in Vercel dashboard:
- Usually it's a missing dependency or build command issue
- Ensure `package.json` has all dependencies
- Verify build command is `vite build`

### Videos Not Loading

Videos are large files. Consider:
1. **Video hosting:** Upload to Cloudinary or Vimeo
2. **Compression:** Use smaller video files
3. **Update paths** in `config/site.config.js`

### 404 on Page Refresh

Add `vercel.json` in project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Then redeploy.

### Slow Load Times

1. **Optimize images:** Compress before uploading
2. **Enable caching:** Vercel does this automatically
3. **Lazy load:** Use React.lazy() for pages

---

## Cost

### Vercel Free Tier Includes:
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Custom domains

**For most small/medium websites, the free tier is enough!**

If you exceed limits:
- Pro plan: $20/month
- Only needed for high-traffic sites (100K+ visitors/month)

---

## Next Steps After Deployment

1. ✅ **Test your live site** on different devices
2. ✅ **Set up Google Analytics** for visitor tracking
3. ✅ **Configure SEO** (meta tags, sitemap.xml)
4. ✅ **Add monitoring** (UptimeRobot)
5. ✅ **Share the URL** with your team/users!

---

## Quick Reference Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View domains
vercel domains ls

# View logs
vercel logs

# Remove deployment
vercel remove [deployment-url]
```

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Need help?** Check the Vercel community or Discord

---

## Summary

Your Spin Padel website is ready for deployment! 🚀

**Recommended Steps:**
1. Run `vercel login`
2. Run `vercel`
3. Get your live URL
4. Share with the world!

**Your site will be:**
- ✅ Online 24/7
- ✅ Accessible from anywhere
- ✅ Fast with global CDN
- ✅ Secure with HTTPS
- ✅ Free to host

---

**Questions?** Refer to this guide or check Vercel documentation.

**Happy deploying! 🎾**
