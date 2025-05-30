import siteMetadata from "@/data/siteMetadata";
import type { Metadata } from "next";

interface PageSEOProps {
	title: string;
	description?: string;
	image?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: unknown;
}

export function genPageMetadata({
	title,
	description,
	image,
	...rest
}: PageSEOProps): Metadata {
	return {
		title,
		description: description || siteMetadata.description,
		openGraph: {
			title: `${title} | ${siteMetadata.title}`,
			description: description || siteMetadata.description,
			url: "./",
			siteName: siteMetadata.title,
			images: image ? [image] : [siteMetadata.socialBanner],
			locale: siteMetadata.locale,
			type: "website",
		},
		twitter: {
			title: `${title} | ${siteMetadata.title}`,
			card: "summary_large_image",
			images: image ? [image] : [siteMetadata.socialBanner],
		},
		...rest,
	};
}
