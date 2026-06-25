const { execSync } = require('child_process')

const forPages = process.argv.includes('--pages')
const env = { ...process.env }

if (forPages) {
  env.NEXT_PUBLIC_BASE_PATH = env.NEXT_PUBLIC_BASE_PATH || '/adess-test'
} else {
  delete env.NEXT_PUBLIC_BASE_PATH
}

execSync('next build', { stdio: 'inherit', env })
