import { Main } from "@/components/Main";
import { allBlogs } from "contentlayer/generated";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer";

export default async function Page() {
	const sortedPosts = sortPosts(allBlogs);
	const posts = allCoreContent(sortedPosts);
	return <Main posts={posts} />;
}
