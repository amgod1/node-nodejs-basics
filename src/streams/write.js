import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { createWriteStream } from "node:fs"

const write = async (writePath) => {
  const writeStream = createWriteStream(writePath)

  process.stdin.pipe(writeStream)

  return new Promise((resolve, reject) => {
    writeStream.on("finish", () => {
      console.log("\nFile writing complete.")
      resolve()
    })
    writeStream.on("error", (error) => {
      console.error("Error writing file:", error)
      reject(error)
    })
  })
}

const dirname = fileURLToPath(new URL(".", import.meta.url))
const writePath = join(dirname, "files", "fileToWrite.txt")
await write(writePath)
