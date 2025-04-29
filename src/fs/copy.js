import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { readdir, mkdir, copyFile } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const copy = async (fromPath, toPath) => {
  try {
    const isFolderExist = await isExist(toPath)

    if (isFolderExist) throw new Error("FS operation failed")

    if (!isFolderExist) {
      await mkdir(toPath, { recursive: true })
    }

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

const dirname = fileURLToPath(new URL(".", import.meta.url))

const fromPath = join(dirname, "./files")
const toPath = join(dirname, "./files_copy")

await copy(fromPath, toPath)
