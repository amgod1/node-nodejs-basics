import { join } from "node:path"
import { createWriteStream } from "node:fs"

const write = async (writePath) => {
  const writeStream = createWriteStream(writePath)

  process.stdin.pipe(writeStream)

  return new Promise((resolve, reject) => {
    writeStream.on("finish", resolve)
    writeStream.on("error", reject)
  })
}

const writePath = join("files", "fileToWrite.txt")
await write(writePath)
