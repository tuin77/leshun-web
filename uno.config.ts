// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		}
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// ...
			}
		})
	],
	rules: [
		// 你的自定义CSS规则
		["animate-move", { animation: "move 1s forwards" }]
	],
	transformers: [transformerDirectives(), transformerVariantGroup()]
});
