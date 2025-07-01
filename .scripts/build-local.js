import { build } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'
import minimist from 'minimist'

const __dirname = import.meta.dirname
const args = minimist(process.argv)

const folderName = args.path.split('/').slice(-2, -1)[0];
const entries = [
  {
    name: folderName,
    entry: path.resolve(__dirname, '..', args.path)
  }
]


async function buildExtensions() {
  for (const { name, entry } of entries) {
    console.log(`🔨 Buildando ${name}...`)

    await build({
      plugins: [vue()],
      build: {
        lib: {
          entry,
          name,
          fileName: (format) => `${name}.${format}.js`,
          formats: ['umd']
        },
        rollupOptions: {
          external: ['vue', 'vuetify'],
          output: {
            globals: {
              vue: 'Vue',
              vuetify: 'Vuetify'
            }
          }
        },
        outDir: `build-local/${name}`,
        emptyOutDir: true
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src')
        }
      }
    })
  }

  console.log('✅ Build completo!')
}

buildExtensions().catch((err) => {
  console.error(err)
  process.exit(1)
})
