import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { readdir } from "node:fs/promises"

const dirname = fileURLToPath(new URL(".", import.meta.url))

const list = async (path) => {
  try {
    const files = await readdir(join(dirname, path))

    if (!files.length) throw new Error("FS operation failed")

    console.log(files)
    return files
  } catch (error) {
    console.error(error)
  }
}

const path = "./files"
await list(path)
