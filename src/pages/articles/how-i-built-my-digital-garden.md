---
title: "How I built my digital garden"
date: "2020-06-15"
status: 🌱
---

I learned a lot about digital gardens from [Joel Hooks](https://joelhooks.com/) and decided to build my own after watching this [panel](https://egghead.io/lessons/egghead-sector-the-future-of-mdx-and-digital-gardens). The main reason I decided to make my own digital garden was the pressure I kept putting on myself to produce perfect polished content. Instead of creating more content and learning I left my articles unpublished. If you want to read more about digital gardens and learn more about my reasoning check out my other [post](https://the-learning-project.netlify.app/digital-garden/)

## Why Gatsby?

Ever since I first learned Gatsby I really loved the technology and have made multiple personal websites and my current [portfolio](https://jenniferwilliams.dev/) uses a Gatsby Theme. It worked great for me and I was able to set everything up pretty quickly and seemlessly. One fun thing that Gatsby utilizes is GraphQL. We can use Gatsby and GraphQL to create pages for our garden from Markdown files. Now I don't need to have a backend setup and when I want to create a new post, all I have to do is create a Markdown file in my pages folder. I don't think GraphQL knowledge is required for this but if you want to learn a bit more about my favorite technology check out this [post](https://the-learning-project.netlify.app/what-is-graphql/)! I also think [Gatsby](https://www.gatsbyjs.org/tutorial/part-five/) has some of the best documentation so feel free to dive in even if you don't feel ready! We can use the 'gatsby-source-filesystem' plugin to get access to the files in our filesystem! Now we just need to access all the data instead the files and to do that we can use 'gatsby-transformer-remark'. 
