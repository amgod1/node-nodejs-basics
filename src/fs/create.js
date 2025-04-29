import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { appendFile } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const dirname = fileURLToPath(new URL(".", import.meta.url))

const create = async (fileTitle, data) => {
  const filePath = join(dirname, "files", fileTitle)

  try {
    const isFileExist = await isExist(filePath)
    if (isFileExist) throw new Error("FS operation failed")

    appendFile(filePath, data)
  } catch (error) {
    console.error(error)
  }
}

const fileTitle = "fresh.txt"
const data = "I am fresh and young"

await create(fileTitle, data)
