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
        "rainbow-hover rainbow-hover-rounded rainbow-hover-quick",
        "whitespace-nowrap rounded-full border border-gray-700",
        "bg-transparent font-mono font-medium text-gray-100",
        "px-2.5 py-0.5 text-sm"
      )}
    >
      <span>{tag}</span>
    </a>
  );
};

export default Tag;
