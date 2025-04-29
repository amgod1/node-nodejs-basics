import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { unlink } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const remove = async (filePath) => {
  try {
    const isFileExist = await isExist(filePath)
    if (!isFileExist) throw new Error("FS operation failed")

    await unlink(filePath)
  } catch (error) {
    console.error(error)
  }
}

const dirname = fileURLToPath(new URL(".", import.meta.url))

const filePath = join(dirname, "files", "fileToRemove.txt")

await remove(filePath)
