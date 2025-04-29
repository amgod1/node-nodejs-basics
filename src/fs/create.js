import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { appendFile } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const create = async (filePath, data) => {
  try {
    const isFileExist = await isExist(filePath)
    if (isFileExist) throw new Error("FS operation failed")

    appendFile(filePath, data)
  } catch (error) {
    console.error(error)
  }
}

const dirname = fileURLToPath(new URL(".", import.meta.url))

const filePath = join(dirname, "files", "fresh.txt")
const data = "I am fresh and young"

await create(filePath, data)
