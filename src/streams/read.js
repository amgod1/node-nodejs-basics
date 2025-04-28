import { join } from "node:path"
import { createReadStream } from "node:fs"

const read = async (readPath) => {
  const readStream = createReadStream(readPath)

  return new Promise((resolve, reject) => {
    readStream.on("data", (chunk) => {
      process.stdout.write(chunk)
    })

    readStream.on("end", resolve)
    readStream.on("error", reject)
  })
}

const readPath = join("files", "fileToRead.txt")
await read(readPath)
