/// <reference types="vite/client" />

declare module "*.tsx" {
    import type { JSX } from "react";
    const component: JSX<typeof JSX>;
    export default component;
}

declare module "@/store" {
    import type { RootState } from "./store";
    const RootState: RootState;
    export { RootState };
}
