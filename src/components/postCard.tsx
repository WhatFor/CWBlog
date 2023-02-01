import type { Author, BlogPost } from "../lib/contentful"
import PostInfo from "./postInfo";
import Tag from "./tag";

interface Props {
    post: ContentlessPost;
}

export interface ContentlessPost {
    title: string;
    date: Date;
    author: Author;
    description: string;
    slug: string;
    ttr: number;
    tags: string[];
}

const PostCard = ({ post }: Props) => {
    return (
        <div className="w-full flex flex-col bg-white shadow border border-indigo-100 lg:border-l-indigo-200 lg:border-l-4 lg:rounded-md px-6 lg:px-8 py-5 lg:py-7">
            <PostInfo
                className="mb-3"
                authorName={post.author.name}
                ttr={post.ttr}
                date={post.date.toLocaleString('default', { day: 'numeric', month: 'short', year: 'numeric' })}
            />
            <a className="font-bold text-gray-900 text-2xl hover:underline"
                href={`/blog/${post.slug}/`}>
                {post.title}
            </a>
            <p className="text-gray-600 mt-3 mb-4">
                {post.description}
            </p>
            <div className="flex justify-between">
                <div className="flex space-x-3">
                    {post.tags.map(tag => (
                        <Tag tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostCard;