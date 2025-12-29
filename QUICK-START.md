# 🚀 QUICK START - Deploy Your Site in 2 Minutes!

## Step 1: Login to Vercel

Open your terminal and run:

```bash
vercel login
```

This will open your browser. Choose one of these options:
- **Continue with GitHub** (recommended)
- **Continue with GitLab**
- **Continue with Email**

After authenticating, close the browser and return to the terminal.

---

## Step 2: Deploy!

```bash
cd "/Users/marcoalbuquerque/Desktop/Spin Padel"
npm run deploy
```

**Answer the prompts:**
1. **"Set up and deploy?"** → Press Enter (Yes)
2. **"Which scope?"** → Choose your account
3. **"Link to existing project?"** → Type `n` and press Enter
4. **"What's your project's name?"** → Type `spin-padel` (or any name you want)
5. **"In which directory is your code located?"** → Press Enter (uses current directory)
6. **"Want to modify settings?"** → Type `n` and press Enter

---

## Step 3: Done! 🎉

Vercel will:
- ⏳ Upload your files
- ⏳ Install dependencies
- ⏳ Build your site
- ⏳ Deploy to production

After ~1-2 minutes, you'll see:

```
✅ Production: https://spin-padel-xxxxx.vercel.app
```

**Your site is now LIVE and accessible 24/7 from anywhere!** 🌍

---

## Test Your Live Site

Click the URL or visit it in your browser:
```
https://spin-padel-xxxxx.vercel.app
```

Share this URL with anyone - they can access it from anywhere in the world!

---

## Update Your Live Site Later

Whenever you make changes:

```bash
cd "/Users/marcoalbuquerque/Desktop/Spin Padel"
npm run deploy
```

Vercel will redeploy with your latest changes in ~1-2 minutes.

---

## Troubleshooting

**"Error: The specified token is not valid"**
- Run: `vercel login` first

**Build fails?**
- Check: `npm run build` works locally first
- View error logs in Vercel dashboard

**Need more help?**
- See full guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## What's Next?

### Get Your Custom Domain (Optional)

1. Buy a domain like `spinpadel.pt`
2. Add it in Vercel dashboard → Your Project → Settings → Domains
3. Update DNS records at your domain provider
4. Done! Your site will be at `https://spinpadel.pt`

### Monitor Your Site

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Analytics:** Built into Vercel (free)
- **Uptime Monitor:** https://uptimerobot.com/ (free)

---

**That's it! Your Spin Padel website is now online! 🎾**
