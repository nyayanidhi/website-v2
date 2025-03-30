# Nyayanidhi Website v2

## Blog Post Requirements

### Directory Structure
- Blog posts: `/content/*.mdx`
- Images: `/public/blog/*.{png,jpg,jpeg,webp}`

### File Naming
- Blog files must use `.mdx` extension
- Use kebab-case for file names: `your-blog-title.mdx`
- Image names should match the blog post name when possible

### Required Frontmatter

Every blog post must include the following frontmatter:

```markdown
---
title: "Your Blog Title"
publishedAt: "YYYY-MM-DD"
summary: "A brief description of your blog post (150 characters max)"
author: "adithya"
image: "/blog/your-image.png"
---
```

### Frontmatter Fields

- `title`: The main title of your blog post
- `publishedAt`: Publication date in YYYY-MM-DD format
- `summary`: A concise description of the post content
- `author`: The name of the post author
- `image`: Path to the featured image (must be in /public/blog directory)

Example:
```markdown
---
title: "Understanding Legal Tech in 2024"
publishedAt: "2024-01-15"
summary: "A comprehensive guide to how technology is transforming legal practice in India"
author: "adithya"
image: "/blog/legal-tech-2024.png"
---
```
