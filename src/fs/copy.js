import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { readdir, mkdir, copyFile } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const dirname = fileURLToPath(new URL(".", import.meta.url))

const copy = async (fromPath, toPath) => {
  try {
    const isFolderExist = await isExist(join(dirname, toPath))

    if (isFolderExist) throw new Error("FS operation failed")

    if (!isFolderExist) {
      await mkdir(join(dirname, toPath), { recursive: true })
    }

    const files = await readdir(join(dirname, fromPath))

    for (const file of files) {
      const srcPath = join(dirname, fromPath, file)
      const destPath = join(dirname, toPath, file)

      await copyFile(srcPath, destPath)
    }
  } catch (error) {
    console.error(error)
  }
}

const fromPath = "./files"
const toPath = "./files_copy"
await copy(fromPath, toPath)
