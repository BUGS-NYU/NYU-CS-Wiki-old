<h1 align="center">
  NYU CS Wiki
</h1>
<p align="center">
  <a href="https://bugs-nyu.github.io">
    <img alt="NYU CS Wiki Logo" src="https://raw.githubusercontent.com/BUGS-NYU/cs-resources/main/src/images/svg/logo.svg" width="150" />
  </a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6a28e10-ca2d-4fd9-a679-051d66667ea1/deploy-status)](https://app.netlify.com/sites/keen-mayer-1607ef/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# What is this❓

CS has become increasingly competitive. We create this website as a way to help students identify resources to further their education and career.

The website consists of:

- Course Testimonials
- Career Guides from current students and alumni
- Career Prep Resources
- Tech Clubs at NYU
- Fellowship
- Startup in NYC

BUGS@NYU believes these resources should be available to the CS community at NYU both at CAS and Tandon for students to prepare for their career. Please help by creating posts to better NYU CS community!

# 👨‍💻👩‍💻 Contributing

This is a centralized hub for NYU CS students to find opportunities. Please take a look at our [contribution](https://github.com/BUGS-NYU/cs-resources/tree/main/contributing) directory for more information.

# 🚀🚀 Quick Start Guide

Here's a quicker start guide:

## 💻 Development

Clone the repository

```
git clone https://github.com/YOUR-USER-NAME/nyu-wiki.github.io.git
```

### ⚡ [Algolia](https://www.algolia.com/)

Create a free account to have access.

Create an index called `Posts`

Go to your root directory, create a `.env` file and copy the API keys into it. It should look like this:

```
GATSBY_ALGOLIA_APP_ID=xxxxx
GATSBY_ALGOLIA_SEARCH_KEY=xxxxx
ALGOLIA_ADMIN_KEY=xxxxx
```

###  MacOS

```
brew install node
brew install yarn

# Installing dependencies
yarn install

# Start developing
gatsby develop

Go to http://localhost:8000 and start coding!!!
```

## ✏️ Creating a Post

To create a guide:

1. Fork the repository
2. If you want to create a post under `Academics/Clubs`, go to `src/content/academics/clubs` and create a `.md` file.
3. When you are done writing, make a PR!

# Contributors

<img alt="contributors" src="https://contrib.rocks/image?repo=BUGS-NYU/NYU-CS-Wiki"/>

# Credit

We want to credit [Pitt CS](https://github.com/PittCSWiki/pittcswiki) for the inspiration and idea.
