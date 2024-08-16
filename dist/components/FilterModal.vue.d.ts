import type { PropType as __PropType } from 'vue';
import { type CombinedFilter } from "./@types";
declare const _sfc_main: import("vue").DefineComponent<{
    closeSelectModal: {
        type: __PropType<() => void>;
        required: true;
    };
    data: {
        type: __PropType<CombinedFilter | undefined>;
        required: false;
    };
    savedFilters: {
        type: __PropType<string[] | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "item-selected"[], "item-selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    closeSelectModal: {
        type: __PropType<() => void>;
        required: true;
    };
    data: {
        type: __PropType<CombinedFilter | undefined>;
        required: false;
    };
    savedFilters: {
        type: __PropType<string[] | undefined>;
        required: false;
    };
}>> & {
    "onItem-selected"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
