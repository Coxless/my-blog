/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
	title: "Coxless Blog",
	author: "Coxless",
	headerTitle: "CoxlessBlog",
	description: "A blog created with Next.js and Tailwind.css",
	language: "en-us",
	theme: "system", // system, dark or light
	siteUrl: "https://coxless.github.io/my-blog/",
	siteRepo: "https://github.com/Coxless/my-blog",
	siteLogo: `${process.env.BASE_PATH || ""}/static/images/logo.png`,
	socialBanner: `${process.env.BASE_PATH || ""}/static/images/twitter-card.png`,
	email: "coxless.superconductor@gmail.com",
	github: "https://github.com/Coxless",
	locale: "ja-JP",
	stickyNav: false,
	analytics: {
		umamiAnalytics: {
			umamiWebsiteId: process.env.NEXT_UMAMI_ID,
		},
	},
	comments: {
		provider: "giscus",
		giscusConfig: {
			repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
			repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
			category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
			categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
			mapping: "pathname",
			reactions: "1",
			metadata: "0",
			theme: "light",
			darkTheme: "transparent_dark",
			themeURL: "",
			lang: "en",
		},
	},
	search: {
		provider: "kbar", // kbar or algolia
		kbarConfig: {
			searchDocumentsPath: `${process.env.BASE_PATH || ""}/search.json`, // path to load documents to search
		},
	},
};

module.exports = siteMetadata;
