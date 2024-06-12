export type DataItem = {
  type: string;
  category: string;
  name: string;
  segment: string | null;
  sqlSegment: string | null;
  needsMostFrequentValues: boolean;
  sqlFilterValue?: any;
  acceptedValues?: string;
  suggestedValuesCallback?: any;
  unionOfSegments?: string[];
  sqlFilter?: any;
  suggestedValuesApi?: string;
  option: string;
  options?: string[];
  conditions?: string[];
};
