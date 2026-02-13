import { setReactDomInputValue } from "../util";

export const handleRandomNumberClick = (e: MouseEvent) => {
    const number = Math.random().toFixed(3);
    const field = (e.target as HTMLButtonElement)?.previousSibling as HTMLInputElement;
    if (field && number) {
        setReactDomInputValue(field, number);
    }
}
