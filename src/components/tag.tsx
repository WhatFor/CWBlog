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
                "rounded-full whitespace-nowrap font-mono border border-gray-600 font-medium bg-gray-700 text-gray-200",
                "hover:bg-gray-800 text-sm px-2 py-0.5")}>
            {tag}
        </a>
    )
}

export default Tag;