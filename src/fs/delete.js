import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { unlink } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const dirname = fileURLToPath(new URL(".", import.meta.url))

const remove = async (fileNameToRemove) => {
  const removePath = join(dirname, "files", fileNameToRemove)

  try {
    const isFileExist = await isExist(removePath)
    if (!isFileExist) throw new Error("FS operation failed")

    await unlink(removePath)
  } catch (error) {
    console.error(error)
  }
}

const fileName = "fileToRemove.txt"
await remove(fileName)
