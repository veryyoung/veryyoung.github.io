import Head from './_head.js';
import Aside from './_aside.js';
import { classnames } from './_utils.js';
const LayoutBase = (props) => {
    const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains('is_dark'));
    return (React.createElement("html", { className: classnames({ is_dark: isDark }) },
        React.createElement(Head, { ...props, isDark: isDark }),
        React.createElement("body", null,
            React.createElement(Aside, { ...props, isDark: isDark, setIsDark: setIsDark }),
            React.createElement(props.Main, { ...props }),
            props.footer,
            props.script)));
};
export default LayoutBase;
