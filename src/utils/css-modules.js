import CSSModules from 'react-css-modules';

export default function (styles, options) {
    return CSSModules(styles, {
        allowMultiple: true,
        errorWhenNotFound: false,
        ...options
    });
}