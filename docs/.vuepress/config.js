module.exports = {
	base: "/",
	locales: {
		"/": {
			lang: "en-US", // this will be set as the lang attribute on <html>
			title: "Loreal Training",
			description: "Vue.js framework",
		}
	},

	themeConfig: {
		locales: {
			"/": {
				selectText: "Languages",
				label: "English",
				sidebar: [
					"/",
					"/presentation/",
					"/tooling/",
					"/views/",
					"/directives/",
					"/components/",
					"/reactivity/",
					"/state/",
					"/routing/",
					"/http/",
					"/tests/",
					"/reusability/",
					"/ecosystem/",
				],
			},
			"/en/": {
				selectText: "Language",
				label: "English1",
				sidebar: [
					"/",
					"/presentation/",
					"/tooling/",
					"/views/",
					"/directives/",
					"/components/",
					"/reactivity/",
					"/state/",
					"/routing/",
					"/http/",
					"/tests/",
					"/reusability/",
					"/ecosystem/",
				],
			}
		},
	},

	plugins: [
		require("./plugins/copy-code/"),
		"vuepress-plugin-global-toc",
		["live"],
	],
}