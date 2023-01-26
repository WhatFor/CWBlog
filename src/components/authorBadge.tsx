import type { Author } from "../lib/contentful";
import ghIcon from "../../public/images/github-mark.svg";

interface Props {
    author: Author;
}

const UserBadge = ({ author }: Props) => {
    return (
        <div className="bg-slate-50 p-2 rounded-md inline-flex items-center shadow">
            <div>
                <img
                    alt={author.profilePicture.fields.description}
                    className="inline-block rounded-md shadow-sm shadow-purple-800 w-12 h-12"
                    src={author.profilePicture.fields.file.url}
                />
            </div>
            <div className="ml-3">
                <p className="font-medium font-mono text-gray-700">
                    {author.name}
                </p>
                <a
                    href={"https://github.com/" + author.gitHubHandle}
                    className="flex items-center"
                >
                    <img alt="GitHub Logo" src={ghIcon} className="inline-flex w-4 h-4 mr-1 mb-0.5" />
                    <span className="text-sm font-mono text-purple-700 hover:underline hover:text-purple-600">{author.gitHubHandle}</span>
                </a>
            </div>
        </div>
    )
};

export default UserBadge;