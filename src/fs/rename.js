import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { rename as rename_fs } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const dirname = fileURLToPath(new URL(".", import.meta.url))

const rename = async (fromPath, toPath) => {
  try {
    const isFromExist = await isExist(fromPath)
    const isToExist = await isExist(toPath)

    if (!isFromExist || isToExist) throw new Error("FS operation failed")

    await rename_fs(fromPath, toPath)
  } catch (error) {
    console.error(error)
  }
}

const fromPath = join(dirname, "files", "wrongFilename.txt")
const toPath = join(dirname, "files", "properFilename.md")

await rename(fromPath, toPath)
