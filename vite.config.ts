import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	resolve: {
		alias: {
			cesium: path.resolve(__dirname, "node_modules/cesium"),
		},
	},
	define: {
		CESIUM_BASE_URL: JSON.stringify("/cesium"),
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	server: {
		port: 3000,
	},
});
