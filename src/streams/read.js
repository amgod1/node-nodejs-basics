import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { createReadStream } from "node:fs"

const read = async (readPath) => {
  const readStream = createReadStream(readPath, { encoding: "utf8" })

  return new Promise((resolve, reject) => {
    readStream.on("data", (chunk) => {
      process.stdout.write(chunk)
    })

    readStream.on("end", () => {
      console.log("\nFile reading complete.")
      resolve()
    })

    readStream.on("error", (error) => {
      console.error("Error reading file:", error)
      reject(error)
    })
  })
}

const dirname = fileURLToPath(new URL(".", import.meta.url))
const readPath = join(dirname, "files", "fileToRead.txt")

await read(readPath)
