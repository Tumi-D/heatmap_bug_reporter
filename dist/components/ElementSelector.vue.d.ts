declare const _sfc_main: import("vue").DefineComponent<{}, {}, {
    isSelecting: boolean;
    selectedElements: Element[];
    originalStyles: Map<Element, string>;
    iframeDocuments: HTMLIFrameElement[];
}, {}, {
    enableSelectionMode(): void;
    selectElement(event: MouseEvent): void;
    selectElementInIframe(event: MouseEvent): void;
    highlightElement(element: Element): void;
    unhighlightElement(element: Element): void;
    finishSelection(): void;
    clearSelections(): void;
    removeElement(index: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
