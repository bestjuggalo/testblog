# Protokletos Blog Setup Guide

Your Astro blog is now set up and ready to customize! Here's what was configured:

## What's Been Set Up

### ✅ Astro Blog Template
- Initialized with the official Astro blog template
- Includes sample blog posts in `src/content/blog/`
- Pre-configured with MDX support for rich content

### ✅ Cloudflare Pages Deployment
- Cloudflare adapter installed and configured
- Static site generation enabled for optimal performance
- Ready to deploy to Cloudflare Pages

### ✅ Minimalist Theme
- Clean, minimal design based on Bear Blog's aesthetic
- Site title set to "Protokletos"
- Customizable theme in `src/styles/global.css`

### ✅ Analytics Structure
- Analytics component created at `src/components/Analytics.astro`
- Supports both Cloudflare Web Analytics and Plausible
- Already integrated into the site (just needs configuration)

### ✅ Comments System
- Giscus (GitHub-based) comments component created
- Located at `src/components/Comments.astro`
- Already added to blog post layout

### ✅ Tags Support
- Tags field added to blog post schema
- Tags display on blog posts
- Example tags added to first post: ['demo', 'astro', 'blog']

## Next Steps

### 1. Configure Site Settings

Edit `astro.config.mjs` and update the site URL:
```javascript
site: 'https://your-domain.com', // Replace with your actual domain
```

### 2. Set Up Comments (Giscus)

1. Visit https://giscus.app/
2. Enter your GitHub repository (e.g., `your-username/protokletos-website`)
3. Enable Discussions in your GitHub repo settings
4. Copy the configuration values from giscus.app
5. Edit `src/components/Comments.astro` and update:
   - `REPO`
   - `REPO_ID`
   - `CATEGORY`
   - `CATEGORY_ID`

### 3. Set Up Analytics

Choose one of the following:

**Option A: Cloudflare Web Analytics (Free)**
1. Go to your Cloudflare dashboard
2. Enable Web Analytics for your site
3. Copy your beacon token
4. Edit `src/components/Analytics.astro` and set `CF_BEACON_TOKEN`

**Option B: Plausible Analytics**
1. Sign up at https://plausible.io
2. Add your domain
3. Edit `src/components/Analytics.astro` and set `PLAUSIBLE_DOMAIN`

### 4. Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy!

Cloudflare Pages will automatically redeploy whenever you push to your repository.

### 5. Customize Your Content

- Edit `src/consts.ts` to update site title and description
- Replace sample blog posts in `src/content/blog/`
- Add your own content with frontmatter:
  ```yaml
  ---
  title: 'Your Post Title'
  description: 'A brief description'
  pubDate: '2024-01-01'
  tags: ['tag1', 'tag2']
  heroImage: '../../assets/your-image.jpg' # optional
  ---
  ```

## Development

Start the dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## File Structure

```
├── src/
│   ├── components/       # Reusable components
│   │   ├── Analytics.astro
│   │   └── Comments.astro
│   ├── content/
│   │   └── blog/        # Your blog posts (.md or .mdx)
│   ├── layouts/         # Page layouts
│   │   └── BlogPost.astro
│   ├── pages/           # Routes (file-based routing)
│   ├── styles/          # Global styles
│   └── consts.ts        # Site constants
├── public/              # Static assets
└── astro.config.mjs     # Astro configuration
```

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Giscus Setup](https://giscus.app/)
- [MDX Documentation](https://mdxjs.com/)

Enjoy your new blog!
