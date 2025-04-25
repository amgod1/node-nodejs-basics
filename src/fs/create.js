import { constants } from "node:fs"
import { access, appendFile } from "node:fs/promises"

const isFileExist = async (path) => {
  let isExist = false

  try {
    await access(path, constants.F_OK)
    isExist = true
  } catch {
    isExist = false
  }

  return isExist
}

const create = async (title, data) => {
  const path = `./files/${title}`

  try {
    const isExist = await isFileExist(path)

    if (isExist) throw new Error("FS operation failed")

    appendFile(path, data)
  } catch (error) {
    console.error(error)
  }
}

const title = "fresh.txt"
const data = "I am fresh and young"

await create(title, data)
