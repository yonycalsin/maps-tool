import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { ConfigEnv, loadEnv, UserConfig } from 'vite'

export default function (config: ConfigEnv): UserConfig {
  const env = loadEnv(config.mode, process.cwd(), '')

  const port = Number(env.PORT) || 3000

  const plugins = [reactRefresh()]

  return {
    plugins,
    server: {
      port: port,
      open: true,
    },
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  }
}
