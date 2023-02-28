import type { Author } from "../lib/contentful";
import ghIcon from "../images/github-mark.svg";

interface Props {
  author: Author;
}

const AuthorBadge = ({ author }: Props) => {
  return (
    <div className="inline-flex items-center rounded-md border border-indigo-100 bg-indigo-50 p-2 shadow-md shadow-indigo-100">
      <div>
        <img
          alt={author.profilePicture.fields.description}
          className="inline-block h-12 w-12 rounded-md shadow-sm shadow-purple-800"
          src={author.profilePicture.fields.file.url}
        />
      </div>
      <div className="ml-3">
        <p className="font-mono font-medium text-gray-700">{author.name}</p>
        <a
          href={"https://github.com/" + author.gitHubHandle}
          className="flex items-center"
        >
          <img
            alt="GitHub Logo"
            src={ghIcon}
            className="mr-1 mb-0.5 inline-flex h-4 w-4"
          />
          <span className="font-mono text-sm text-purple-700 hover:text-purple-600 hover:underline">
            {author.gitHubHandle}
          </span>
        </a>
      </div>
    </div>
  );
};

export default AuthorBadge;
