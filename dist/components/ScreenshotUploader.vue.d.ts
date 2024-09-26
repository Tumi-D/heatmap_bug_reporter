interface Screenshot {
    preview: string;
    file: File | null;
}
declare const _sfc_main: import("vue").DefineComponent<{}, {
    screenshots: import("vue").Ref<{
        preview: string;
        file: {
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
            stream: () => ReadableStream<Uint8Array>;
            text: () => Promise<string>;
        } | null;
    }[], Screenshot[] | {
        preview: string;
        file: {
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
            stream: () => ReadableStream<Uint8Array>;
            text: () => Promise<string>;
        } | null;
    }[]>;
    isSelecting: import("vue").Ref<boolean, boolean>;
    dragging: import("vue").Ref<boolean, boolean>;
    isDragging: import("vue").Ref<boolean, boolean>;
    selectionBoxStyle: import("vue").ComputedRef<{
        left: string;
        top: string;
        width: string;
        height: string;
    }>;
    startSelecting: () => void;
    triggerFileInput: () => void;
    handleFileUpload: (event: Event) => void;
    handleDrop: (event: DragEvent) => void;
    removeScreenshot: (index: number) => void;
    startDrag: (event: MouseEvent) => void;
    onDrag: (event: MouseEvent) => void;
    endDrag: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
