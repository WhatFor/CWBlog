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
                "rounded-full whitespace-nowrap font-mono border shadow border-indigo-100 shadow-indigo-100 font-medium bg-indigo-50 text-gray-700",
                "hover:bg-indigo-100 hover:underline text-sm px-2 py-0.5")}>
            {tag}
        </a>
    )
}

export default Tag;