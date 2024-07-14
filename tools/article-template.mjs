import fs from 'fs'
import { parseISO, format } from 'date-fns'

const fsPromises = fs.promises

const ARTICLES_PATH = './src/articles'
const date = parseISO(new Date().toISOString())
const LANGUAGES = ['br', 'en']
const [commandLineArgument] = process.argv.slice(2)

async function createArticleTemplate(lang) {
    const name = commandLineArgument
    const FINAL_ARTICLE_PATH = `${ARTICLES_PATH}/${lang}/${name}.mdx`
    const articleName = name
        .split('-')
        .reduce((prev, curr) => (prev += ` ${curr[0].toLocaleUpperCase()}${curr.slice(1)}`), '')
        .trim()
    const template = `---
title: ${articleName}
description: 
createdAt: ${format(date, 'yyyy-MM-dd HH:mm')}
author: John Doe
image: /images/${name}.png
lang: ${lang}
tags: 
---
![${articleName}](/images/${name}.png)

    `

    fsPromises.writeFile(FINAL_ARTICLE_PATH, template)
}

LANGUAGES.forEach(lang => {
    createArticleTemplate(lang)
})
