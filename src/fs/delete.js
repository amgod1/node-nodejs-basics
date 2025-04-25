import { join } from "node:path"
import { unlink } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const remove = async (fileNameToRemove) => {
  const removePath = join("files", fileNameToRemove)

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
