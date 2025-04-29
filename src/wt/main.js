import { cpus } from "node:os"
import { Worker } from "node:worker_threads"

const performCalculations = async () => {
  const numCores = cpus().length
  const workers = []

  for (let i = 0; i < numCores; i++) {
    const worker = new Worker(new URL("./worker.js", import.meta.url))

    workers.push(
      new Promise((resolve) => {
        const input = 10 + i

        worker.once("message", (result) => {
          resolve({ status: "resolved", data: result })
        })

        worker.once("error", () => {
          resolve({ status: "error", data: null })
        })

        worker.postMessage(input)
      })
    )
  }

  const allResults = await Promise.all(workers)
  console.log(allResults)
}

await performCalculations()
