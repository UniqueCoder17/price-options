const Link = ({route}) => {
    return (
        <div>
            <li className="ml-2 hover:bg-yellow-200">
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;