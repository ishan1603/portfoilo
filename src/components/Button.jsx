import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, href, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (!href) return;

    if (href.startsWith("mailto:")) {
      // Force Gmail to open (works in Arc/Chrome)
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${href.replace(
          "mailto:",
          ""
        )}`,
        "_blank"
      );
    } else {
      window.open(href, "_blank"); // Normal links
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
