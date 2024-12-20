import devConfig from "./config/dev.config";
import prodConfig from "./config/prod.config";
import enUS from "./locales/en-US";
import frFR from "./locales/fr-FR";
import zhCN from "./locales/zh-CN";

const isProd = process.env.VERCEL_ENV === "production";
const baseUrl = isProd
	? "https://nuxt3-template-jsulpis.vercel.app"
	: `https://${process.env.VERCEL_URL || "localhost:3000"}`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	appConfig: isProd ? prodConfig : devConfig,
	srcDir: "src",
	css: ["@unocss/reset/tailwind.css", "@/styles/main.scss"],
	modules: [
		"@vueuse/nuxt",
		"@nuxtjs/i18n",
		"@pinia/nuxt",
		"nuxt-icon",
		"@unocss/nuxt",
		"@nuxtjs/robots",
		"@nuxtjs/plausible"
	],
	runtimeConfig: {
		public: {
			baseUrl
		}
	},
	experimental: {
		inlineSSRStyles: false // avoid duplicating the styles (inline + external css files)
	},
	robots: {
		rules: {
			Sitemap: `${baseUrl}/sitemap.xml`
		}
	},
	sitemap: {
		hostname: baseUrl,
		urls: () => ["/dynamic-page", "/fr/page-dynamique"]
	},
	plausible: {
		apiHost: baseUrl
	},
	i18n: {
		baseUrl,
		locales: [
			{ code: "cn", iso: "zh-CN", name: "中文" },
			{ code: "fr", iso: "fr-FR", name: "Français" },
			{ code: "en", iso: "en-US", name: "English" }
		],
		defaultLocale: "en",
		detectBrowserLanguage: {
			useCookie: true
		},
		vueI18n: {
			legacy: false,
			locale: "cn",
			messages: {
				cn: zhCN,
				en: enUS,
				fr: frFR
			}
		}
	},
	compatibilityDate: "2024-11-21",
	nitro: {
		handlers: process.env.MOCK
			? [{ route: "", handler: "./__mocks__/mocks.handlers" }]
			: undefined,
		prerender: {
			routes: ["/", "/fr", "/get-started", "/fr/demarrage"]
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "src/styles/abstract" as *;'
				}
			}
		}
	}
});
