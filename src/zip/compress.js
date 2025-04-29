import { join } from "node:path"
import { createReadStream, createWriteStream } from "node:fs"
import { createGzip } from "node:zlib"

const compress = async () => {
  const sourcePath = join("files", "fileToCompress.txt")
  const destPath = join("files", "archive.gz")

  const readStream = createReadStream(sourcePath)
  const writeStream = createWriteStream(destPath)
  const gzip = createGzip()

  return new Promise((resolve, reject) => {
    readStream
      .pipe(gzip)
      .pipe(writeStream)
      .on("finish", resolve)
      .on("error", reject)
  })
}

await compress()
