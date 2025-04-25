const parseEnv = () => {
  const envVariables = process.env

  const rssEnvVariables = Object.keys(envVariables)
    .map((key) => `RSS_${key}=${envVariables[key]}`)
    .join("; ")

  console.log(rssEnvVariables)
}

parseEnv()
