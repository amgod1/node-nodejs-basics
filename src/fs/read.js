import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { readFile } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const dirname = fileURLToPath(new URL(".", import.meta.url))

const read = async (fileName) => {
  const filePath = join(dirname, "files", fileName)

  try {
    const isFileExist = await isExist(filePath)
    if (!isFileExist) throw new Error("FS operation failed")

    const data = await readFile(filePath, "utf-8")

    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

const fileName = "fileToRead.txt"
await read(fileName)
