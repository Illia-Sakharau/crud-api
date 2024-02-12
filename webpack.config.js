import path, {dirname} from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const config = {
    target: 'node',
    entry: './src/index.ts',
    mode: 'production',
    output: {
        filename: 'main.cjs',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};

export default config
