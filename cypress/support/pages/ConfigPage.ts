const fs = require('fs-extra')
const path = require('path')

export function getConfigurationByFile(file: File) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}