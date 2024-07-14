import fs from 'fs'
import path from 'path'
import fsExtra from 'fs-extra'

const fsPromises = fs.promises
const targetDir = './public/images'
const postsDir = './src/assets/images'
// const targetDirs = ['./public/br/images', './public/en/images']

async function copyImagesToPublic(targetDir) {
    const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']
    const postDirFiles = await fsPromises.readdir(`${postsDir}`)
    const images = postDirFiles.filter(file => allowedImageFileExtensions.includes(path.extname(file)))

    if (images.length) {
        for (const image of images) {
            await fsPromises.copyFile(`${postsDir}/${image}`, `${targetDir}/${image}`)
        }
    }
}

// targetDirs.forEach(async e => {
await fsExtra.emptyDir(targetDir)
copyImagesToPublic(targetDir)
// })
