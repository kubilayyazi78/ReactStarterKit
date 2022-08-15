import classNames from "classnames";

function Button({children, variant = "default" }) {
  return (
    <button
      className={classNames({
        "p-4 h-10 flex items-center rounded": true,
        "bg-gray-100": variant === "default",
        "bg-green-600": variant === "success",
      })}
    >
      {children} {variant}
    </button>
  );
}
export default Button;
