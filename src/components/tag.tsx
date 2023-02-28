import classNames from "classnames";

interface Props {
  tag: string;
}

const Tag = ({ tag }: Props) => {
  return (
    <a
      key={tag}
      href={"/tags/" + tag}
      className={classNames(
        "whitespace-nowrap rounded-full border border-gray-600 bg-gray-700 font-mono font-medium text-gray-200",
        "px-2 py-0.5 text-sm hover:bg-gray-800"
      )}
    >
      {tag}
    </a>
  );
};

export default Tag;
