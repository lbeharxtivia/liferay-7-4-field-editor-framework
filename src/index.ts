declare const Liferay;

import { observeFragmentConfig, observeWebContentFields } from "./observers";

const startObservers = () => {
    observeWebContentFields();
    setTimeout(observeFragmentConfig, 500); // Element we are watching is loaded client-side, and AFAIK there is no event fired when client-side is loaded.
}

Liferay.on("allPortletsReady", () => {
    startObservers();
});
Liferay.on("endNavigate", () => {
    startObservers();
});
