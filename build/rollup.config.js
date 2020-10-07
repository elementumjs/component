import pkg from "../package.json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const isProd = process.env.NODE_ENV === "production";

export default [
	{
		input: "src/component.ts",
		output: [
			{ file: pkg.browser, format: "umd", name: "Component", exports: "named", sourcemap: 'inline' },
			{ file: pkg.main, format: "cjs", exports: "named", sourcemap: 'inline' },
			{ file: pkg.module, format: "es", exports: "named", sourcemap: 'inline' },
		],
		plugins: [
			typescript({ tsconfig: "./build/tsconfig.json", sourceMap: true }),
			resolve({ jsnext: true }),
			commonjs({ sourceMap: true }),
			isProd && terser()
		]
	}
];