import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { readdir } from "node:fs/promises"

const list = async (filesPath) => {
  try {
    const files = await readdir(filesPath)

    if (!files.length) throw new Error("FS operation failed")

    console.log(files)
    return files
  } catch (error) {
    console.error(error)
  }
}

const dirname = fileURLToPath(new URL(".", import.meta.url))

const filesPath = join(dirname, "./files")

await list(filesPath)
