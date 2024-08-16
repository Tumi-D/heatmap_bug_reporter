import type { PropType as __PropType } from 'vue';
export type ReturnData = {
    definition: string;
    name: string;
    rest?: any;
};
declare const _sfc_main: import("vue").DefineComponent<{
    onToggleShowFilterMenu: {
        type: __PropType<() => void>;
        required: true;
    };
    defaultValues: {
        type: __PropType<ReturnData[] | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("filter-values" | "reset-all-filters")[], "filter-values" | "reset-all-filters", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    onToggleShowFilterMenu: {
        type: __PropType<() => void>;
        required: true;
    };
    defaultValues: {
        type: __PropType<ReturnData[] | undefined>;
        required: false;
    };
}>> & {
    "onFilter-values"?: ((...args: any[]) => any) | undefined;
    "onReset-all-filters"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
