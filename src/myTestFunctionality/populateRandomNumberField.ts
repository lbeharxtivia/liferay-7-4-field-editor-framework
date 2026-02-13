import { getFieldByLabel } from "../util";
import { handleRandomNumberClick } from "./handleRandomNumberClick";

type LogTestInputArgs = {
    observer?: MutationObserver;
    shouldDestroyObserver?: boolean;
}
export const populateRandomNumberField = ({ observer, shouldDestroyObserver = false }: LogTestInputArgs) => {

    const input = getFieldByLabel("My Random Number");

    if (input) {
        const randomNumberButton = document.createElement("button");
        randomNumberButton.className = "btn btn-secondary random-number-button";
        randomNumberButton.type = "button";
        randomNumberButton.innerHTML = "Generate Number";
        randomNumberButton.addEventListener("click", handleRandomNumberClick);
        const formFieldContainer = (input as HTMLInputElement).closest(
            ".page-editor__sidebar__fieldset__field, .col-ddm",
        );
        // styling for web content
        if (
            formFieldContainer &&
            formFieldContainer.classList.contains("col-ddm") &&
            randomNumberButton
        ) {
            randomNumberButton.style.height = "2.5rem";
            randomNumberButton.style.alignSelf = "center";
            randomNumberButton.style.marginBottom = "1.375rem";
        }
        if (
            formFieldContainer &&
            !formFieldContainer.querySelector("random-number-button")
        ) {
            formFieldContainer.after(randomNumberButton);
            if (observer && !!shouldDestroyObserver) { // this will only disconnect on web content
                observer.disconnect?.();
            }
        }
    }
};