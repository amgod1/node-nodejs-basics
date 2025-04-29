import { join } from "node:path"
import { createReadStream, createWriteStream } from "node:fs"
import { createGunzip } from "node:zlib"

const decompress = async () => {
  const archivePath = join("files", "archive.gz")
  const outputPath = join("files", "fileToCompress.txt")

  const readStream = createReadStream(archivePath)
  const writeStream = createWriteStream(outputPath)
  const gunzip = createGunzip()

  return new Promise((resolve, reject) => {
    readStream
      .pipe(gunzip)
      .pipe(writeStream)
      .on("finish", resolve)
      .on("error", reject)
  })
}

await decompress()
