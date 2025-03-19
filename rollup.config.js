import { subFolders } from '@acq/path'
import json           from '@rollup/plugin-json'
import { readFile }   from 'fs/promises'
import { resolve }    from 'node:path'
import { fileInfo }   from 'rollup-plugin-fileinfo'

const BASE = resolve(process.cwd(), 'packages')
const PROJECTS = await subFolders(BASE)
const tasks = {}

console.info('Executing', BASE)
console.info('Projects', PROJECTS)

for await (const project of PROJECTS) {
  const path = resolve(BASE, project)
  const { dependencies } = JSON.parse(await readFile(resolve(path, 'package.json'), 'utf8'))
  tasks[project] = {
    input: resolve(path, 'src', 'index.js'),
    output: {
      file: resolve(path, 'index.js'),
      format: 'esm',
    },
    external: Object.keys(dependencies ?? {}),
    plugins: [
      json(),
      fileInfo(),
    ],
  }
}

export default Object.values(tasks)