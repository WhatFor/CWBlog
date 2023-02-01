import classNames from 'classnames';

interface Props {
    ttr: number;
    date: string;
    authorName: string;
    className?: string;
}

const PostInfo = ({ ttr, date, authorName, className }: Props) => {
    return (
        <div className={classNames("flex space-x-2", className )}>
            <p className="text-gray-500 text-sm">
                {authorName}
            </p>
            <span className="text-gray-400 text-sm">
                &#x2022;
            </span>
            <time className="text-gray-500 text-sm">
                {date}
            </time>
            <span className="text-gray-400 text-sm">
                &#x2022;
            </span>
            <p className="text-gray-500 whitespace-nowrap text-sm">
                {ttr} minute read
            </p>
        </div>
    )
};

export default PostInfo;