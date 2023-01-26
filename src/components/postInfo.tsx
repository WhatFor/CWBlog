interface Props {
    ttr: number;
    date: string;
    tags: string[];
}

const PostInfo = ({ ttr, date, tags }: Props) => {
    return (
        <div className="flex space-x-3 my-3">
            <time className="">
                {date}
            </time>
            <p className="text-gray-600 whitespace-nowrap">{ttr} minute read</p>
            {tags.map(tag => (
                <a
                    href={"/tags/" + tag}
                    className="rounded-full whitespace-nowrap font-mono shadow shadow-purple-200 font-medium bg-gray-100 text-gray-500 hover:bg-purple-100 hover:underline text-sm px-2 py-0.5"
                >
                    {tag}
                </a>
            ))}
        </div>
    )
};

export default PostInfo;