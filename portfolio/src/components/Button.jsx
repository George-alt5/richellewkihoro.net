import { Link } from "react-router-dom";

export default function Button({
    children,
    variant = "primary",
    side = "md",
    to,
    href,
    onDark = false,
    class
}) {
    const classes = [
        "btn",
        `btn-${variant}`,
        size === 'sm' ? "btn-sm" : "",
        variant === "outline" && onDark ? "on-dark" : "",
        className,
    ]
    .filter(Boolean)
    .join(" ");

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {children}
            </Link>
        )
    }
}
