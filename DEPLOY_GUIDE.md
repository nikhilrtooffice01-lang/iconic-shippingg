# ICONIC SHIPPING SERVICES — Deploy Guide

## 1. Prerequisites
- PostgreSQL database (Render managed or external)
- Node.js 20+
- Domain (optional but recommended)

## 2. Environment Variables (.env)

```bash
# Database
DATABASE_URL=postgresql://user:password@host:5432/iconic

# Auth
JWT_SECRET=your-32-character-or-longer-secret-key-here

# Cookies (production)
COOKIE_SECURE=true
NODE_ENV=production

# Email (Brevo recommended)
BREVO_API_KEY=your-brevo-api-key
MAIL_FROM=verified@yourdomain.com
NOTIFY_EMAIL=admin@yourdomain.com
APP_URL=https://yourdomain.com

# Optional SMTP fallback
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

# Admin seed (only for create-admin script)
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=strong-password-here
```

## 3. First-time Setup

```bash
cd backend
cp .env.example .env
# Edit .env with real values

npm install
npm run db:init          # creates tables + seed services
npm run admin:create     # creates first admin user
npm start
```

## 4. Render Deploy (recommended)

1. Push code to GitHub
2. Create new **Web Service** on Render → Docker
3. Connect repo
4. Add all env variables from above in Render dashboard
5. Set **Health Check Path**: `/api/health`
6. Deploy
7. After first deploy, open Shell and run:
   ```bash
   npm run db:init
   npm run admin:create
   ```

## 5. Post-Deploy Checklist

- [ ] Replace `G-XXXXXXXXXX` in `frontend/index.html` with real Google Analytics ID
- [ ] Replace `YOUR_SEARCH_CONSOLE_CODE` with Search Console verification meta
- [ ] Update domain in `frontend/robots.txt` and `frontend/sitemap.xml`
- [ ] Test enquiry form submission
- [ ] Test admin login + quotation PDF
- [ ] Test password reset email
- [ ] Submit sitemap in Google Search Console
- [ ] Run Google Rich Results Test on homepage + one port page

## 6. Useful URLs after deploy

| Page | URL |
|------|-----|
| Homepage | `/` |
| Enquiry | `/enquiry.html` |
| About | `/about.html` |
| Port example | `/port.html?id=kandla` |
| Service example | `/service.html?id=1` |
| Admin | `/admin.html` |
| Customer Login | `/login.html` |
| Privacy | `/privacy.html` |
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |
| Health | `/api/health` |

## 7. Analytics & Search Console

1. **Google Analytics**
   - Create property → get Measurement ID (`G-XXXXXXX`)
   - Replace in `frontend/index.html`

2. **Search Console**
   - Add property → HTML tag method
   - Copy verification code
   - Replace `YOUR_SEARCH_CONSOLE_CODE` in all HTML files
   - Submit `/sitemap.xml`

## 8. Notes

- SSR is active for `/port.html` and `/service.html` (content is in initial HTML)
- Admin and login pages are `noindex`
- Brevo free tier works for transactional emails
- Database backups recommended on Render
