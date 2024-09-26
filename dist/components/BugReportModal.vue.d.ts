interface BugForm {
    title: string;
    description: string;
    selectedElements: string[];
    screenshots: string[];
    metadata?: {
        siteUrl: string;
        idsite: string | null;
    };
}
declare const _sfc_main: import("vue").DefineComponent<{}, {
    isVisible: import("vue").Ref<boolean, boolean>;
    form: import("vue").Ref<{
        title: string;
        description: string;
        selectedElements: string[];
        screenshots: string[];
        metadata?: {
            siteUrl: string;
            idsite: string | null;
        } | undefined;
    }, BugForm | {
        title: string;
        description: string;
        selectedElements: string[];
        screenshots: string[];
        metadata?: {
            siteUrl: string;
            idsite: string | null;
        } | undefined;
    }>;
    closeModal: () => void;
    openModal: () => void;
    handleElementSelection: (elements: string[]) => void;
    handleScreenshots: (screenshots: string[]) => void;
    submitBugReport: () => Promise<void>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, Record<string, import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
