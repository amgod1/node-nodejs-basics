import { join } from "node:path"
import { readdir, mkdir, copyFile } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const copy = async (fromPath, toPath) => {
  try {
    const isFolderExist = await isExist(toPath)
    if (isFolderExist) throw new Error("FS operation failed")

    await mkdir(toPath)

    const files = await readdir(fromPath)

    for (const file of files) {
      const srcPath = join(fromPath, file)
      const destPath = join(toPath, file)

      await copyFile(srcPath, destPath)
    }
  } catch (error) {
    console.error(error)
  }
}

const fromPath = "./files"
const toPath = "./files_copy"
await copy(fromPath, toPath)
