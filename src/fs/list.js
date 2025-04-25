import { readdir } from "node:fs/promises"

const list = async (path) => {
  try {
    const files = await readdir(path)

    if (!files.length) throw new Error("FS operation failed")

    console.log(files)
    return files
  } catch (error) {
    console.error(error)
  }
}

const path = "./files"
await list(path)
