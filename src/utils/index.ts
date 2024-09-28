export function css(...arg: (string | boolean)[]) {
    return arg.filter(Boolean).join(' ');
}