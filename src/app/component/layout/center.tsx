type CenterProps = {
    children: React.ReactNode;
};
function Center(props: CenterProps) {
    return <div className="h-full w-full center-item">{props.children}</div>;
}

export default Center;
