import classNames from 'classnames';

interface Props {
    ttr: number;
    date: string;
    authorName: string;
    className?: string;
}

const PostInfo = ({ ttr, date, authorName, className }: Props) => {
    return (
        <div className={classNames("flex space-x-2 text-gray-300 text-sm", className )}>
            <p>
                {authorName}
            </p>
            <span>
                &#x2022;
            </span>
            <time>
                {date}
            </time>
            <span>
                &#x2022;
            </span>
            <p className="whitespace-nowrap">
                {ttr} minute read
            </p>
        </div>
    )
};

export default PostInfo;