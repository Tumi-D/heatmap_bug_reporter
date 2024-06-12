<template>
  <div
    class="filter_modal"
    :class="{ full_screen: data?.name === 'Create Custom Filter' }"
    @click="handleClickOutside"
  >
    <div class="filter_wrapper" @click.stop>
      <header class="filter_header">
        <div class="filter_header_left">
          <img
            v-if="data?.iconSrc"
            class="filter_image"
            :src="getImagePath(data.iconSrc)"
            alt=""
          />
          <p class="filter_header_text">{{ data?.name }}</p>
        </div>
        <close-svg @click="closeSelectModal" />
      </header>
      <div
        class="filter_content"
        :class="{ allow_scroll: data?.name === 'Create Custom Filter' }"
      >
        <div class="filter_content_wrapper">
          <div
            v-if="data?.name === 'Create Custom Filter'"
            class="filter_content_dropdown"
          >
            <p class="dropdown_title">Filter Name</p>
            <div class="dropdown_body_wrapper">
              <input
                class="dropdown_body"
                :type="'text'"
                :placeholder="SecondPlaceholderMap(data?.name)"
                v-model="filterName"
                @input="validateFilterName"
              />
              <!-- <div class="absolute_placehopder">$</div> -->
              <p v-if="filterNameError" class="error_message">
                {{ filterNameErrorMessage }}
              </p>
            </div>
            <div class="horizontal_line" />
          </div>
          <template v-for="(item, index) in allData" :key="item.index">
            <!-- <div
              v-if="data?.name === 'Create Custom Filter' && index"
              class="remove_custom_filter"
            >
              <div
                class="remove_custom"
                @click="removeCustomFilter(item.index)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9 3L3 9"
                    stroke="#B71E2D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 3L9 9"
                    stroke="#B71E2D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Remove Filter</p>
              </div>
            </div> -->
            <div v-if="index" class="condition_indicator">
              <div class="condition">
                <div>{{ item.condition }}</div>
              </div>
            </div>
            <div
              v-if="data?.name === 'Create Custom Filter'"
              class="filter_content_dropdown"
            >
              <div class="remove_action_wrapper">
                <p class="dropdown_title">Action</p>
              </div>
              <div class="dropdown_body_wrapper">
                <div
                  v-if="noDropdown(data?.name)"
                  class="arrow_button_wrapper"
                  :class="{ we_have_error: item.actionError }"
                  @click="toggleDropdown('action', item.index)"
                >
                  <arrow-svg :isDropdownOpen="item.actionOpen" />
                </div>
                <input
                  class="dropdown_body"
                  :type="'text'"
                  :placeholder="'Select'"
                  @focus="openDropdown('action', item.index)"
                  @input="filterItems('action', item.index)"
                  v-model="item.action"
                />
                <p v-if="item.actionError" class="error_message">
                  {{ item.actionErrorMsg }}
                </p>
                <transition name="dropdown">
                  <ul
                    id="accordion"
                    v-show="item.actionOpen && noDropdown(data?.name)"
                    class="dropdown_menu_wrapper"
                  >
                    <li
                      v-for="(itemsToLoop, category) in actionItems"
                      :key="category"
                    >
                      <label
                        :for="String(category) + item.index"
                        class="dropdown_menu_item action"
                        :class="{
                          activeClass: category === selectedItem['action'],
                        }"
                      >
                        <p>
                          {{ category }}
                        </p>
                        <arrow-svg :id="'inner_arrow'" />
                      </label>
                      <input
                        type="checkbox"
                        name="accordion"
                        :id="String(category) + item.index"
                        hidden
                      />
                      <ul class="content">
                        <li
                          v-for="innerItem in itemsToLoop"
                          :key="innerItem.name"
                          class="dropdown_menu_item inner_items"
                          :class="{
                            activeClass: innerItem.name === actionValue?.name,
                          }"
                          @click="innerItemSelected(innerItem, item.index)"
                        >
                          <p>
                            {{ innerItem.name }}
                          </p>
                          <div
                            v-if="
                              innerItem.needsMostFrequentValues &&
                              innerItem.acceptedValues
                            "
                            :title="innerItem.acceptedValues"
                          >
                            <img
                              class="filter_image"
                              :src="getImagePath(question)"
                              alt=""
                            />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div class="filter_content_dropdown">
              <p class="dropdown_title">{{ labelMap(data?.name) }}</p>
              <div class="dropdown_body_wrapper">
                <div
                  v-if="noDropdown(data?.name)"
                  class="arrow_button_wrapper"
                  :class="{ we_have_error: item.conditionError }"
                  @click="toggleDropdown('default', item.index)"
                >
                  <arrow-svg :isDropdownOpen="item.defaultOpen" />
                </div>
                <input
                  class="dropdown_body"
                  :type="numberInput(data?.name) ? 'number' : 'text'"
                  :placeholder="placeholderMap(data?.name)"
                  @blur="handleBlur()"
                  @focus="openDropdown('default', item.index)"
                  @input="filterItems('default', item.index)"
                  v-model="item.default"
                />
                <p v-if="item.conditionError" class="error_message">
                  {{ item.conditionErrorMsg }}
                </p>
                <transition name="dropdown">
                  <ul
                    v-show="item.defaultOpen && noDropdown(data?.name)"
                    class="dropdown_menu_wrapper"
                  >
                    <li
                      v-for="condition in actionValue?.conditions ||
                      dropdownItems"
                      :key="condition"
                      class="dropdown_menu_item"
                      :class="{
                        activeClass: condition === selectedItem['default'],
                      }"
                      @click="
                        selectItem(condition, 'default', item.index, data)
                      "
                    >
                      {{ condition }}
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div v-if="data?.showSign" class="filter_content_dropdown">
              <p class="dropdown_title">{{ SecondLabelMap(data?.name) }}</p>
              <div class="dropdown_body_wrapper">
                <div
                  v-if="actionValue?.options?.length"
                  class="arrow_button_wrapper"
                  :class="{ we_have_error: item.valueError }"
                  @click="toggleDropdown('value', item.index)"
                >
                  <arrow-svg :isDropdownOpen="item.valueOpen" />
                </div>
                <input
                  class="dropdown_body"
                  :class="{ second_one: data?.name === 'Average Order Value' }"
                  :type="
                    actionValue?.options?.length
                      ? 'text'
                      : actionValue?.option === 'number'
                      ? 'number'
                      : 'text'
                  "
                  :placeholder="SecondPlaceholderMap(data?.name)"
                  v-model="item.value"
                  @input="validateInput"
                  @blur="handleBlur()"
                  @focus="openDropdown('value', item.index)"
                />
                <div
                  v-if="data?.name === 'Average Order Value'"
                  class="absolute_placehopder"
                >
                  $
                </div>
                <p v-if="item.valueError" class="error_message">
                  {{ item.valueErrorMsg }}
                </p>
                <transition name="dropdown">
                  <ul
                    v-show="item.valueOpen && actionValue?.options?.length"
                    class="dropdown_menu_wrapper"
                  >
                    <li
                      v-for="option in actionValue?.options"
                      :key="option"
                      class="dropdown_menu_item"
                      :class="{ activeClass: option === selectedItem['value'] }"
                      @click="selectItem(option, 'value', item.index, data)"
                    >
                      {{ option }}
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div
              v-if="data?.name === 'Create Custom Filter' && allData.length > 1"
              class="remove_custom_filter"
            >
              <div
                class="remove_custom"
                @click="removeCustomFilter(item.index)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9 3L3 9"
                    stroke="#B71E2D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 3L9 9"
                    stroke="#B71E2D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Remove Filter</p>
              </div>
            </div>
          </template>
        </div>
        <div
          v-if="data?.name === 'Create Custom Filter'"
          class="add_custom_filter_wrapper"
          @click="addCustomFilter('and')"
        >
          <div class="add_custom_filter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33301 8H12.6663"
                stroke="#00936F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 3.3335V12.6668"
                stroke="#00936F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="add_custom_filter_text">Add Additional Filter</p>
          </div>
        </div>
      </div>
      <footer class="filter_footer">
        <div class="footer_buttons">
          <div class="footer_button" @click="cancel">
            <p class="footer_button_text">Cancel</p>
          </div>
          <div
            class="footer_button primary_button"
            :class="{ disabled_me: Boolean(!selectedItem.default) }"
            @click="next"
          >
            <p class="footer_button_text">
              {{ data?.name === "Create Custom Filter" ? "Save" : "Next" }}
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import ArrowSvg from "./icons/ArrowSvg.vue";
import CloseSvg from "./icons/CloseSvg.vue";
import question from "../assets/images/question.svg";

import { _data, segmentValues } from "./data";

import { type CombinedFilter } from "./FilterComponent.vue";
import { type DataItem } from "./@types";

type GroupedData = {
  [category: string]: DataItem[];
};

type allData = {
  condition: "and" | "or";
  index: number;
  action: string;
  default: string;
  value: string | number;
  actionError: boolean;
  actionErrorMsg: string;
  conditionError: boolean;
  conditionErrorMsg: string;
  valueError: boolean;
  valueErrorMsg: string;
  actionOpen: boolean;
  defaultOpen: boolean;
  valueOpen: boolean;
  segment?: string | null;
};

interface CustomRequestInit extends RequestInit {
  redirect: RequestRedirect;
}

const options = {
  number: {
    "==": "Equal To",
    "<": "Less Than",
    ">": "Greater Than",
  },
  integer: {
    "==": "Equal To",
    ">": "Greater Than",
  },
  matches: {
    "==": "Equal To",
  },
  text: {
    "==": "Equal To",
    "&&": "Contains",
  },
};

const conditions = {
  "Equal To": "==",
  "Less Than": "<",
  "Greater Than": ">",
  Contains: "&&",
};

const items = [
  "menu item 1",
  "menu item 2",
  "menu item 3",
  "menu item 4",
  "menu item 5",
  "menu item 6",
  "menu item 7",
  "menu item 8",
];

const props = defineProps<{
  closeSelectModal: () => void;
  data?: CombinedFilter;
}>();

const emit = defineEmits(["item-selected"]);

// const isDropdownOpen = ref({ default: false, action: false, value: false });
const dropdownItems = ref(items);
const selectedItem = ref({ default: "", action: "", value: "" });
const inputValue = ref<number | string>("");
// const secondInputError = ref(false);
// const secondInputErrorMessage = ref("");
const filterName = ref<string>();
const filterNameError = ref(false);
const filterNameErrorMessage = ref("");
const loading = ref<boolean>(false);
// const actionInputError = ref(false);
// const actionInputErrorMessage = ref("");
// const defaultInputError = ref(false);
// const defaultInputErrorMessage = ref("");
const actionValue = ref<DataItem>();
const allData = ref<allData[]>([
  {
    condition: "and",
    index: 0,
    action: selectedItem.value.action,
    default: selectedItem.value.default,
    value: selectedItem.value.value,
    actionError: false,
    actionErrorMsg: "",
    conditionError: false,
    conditionErrorMsg: "",
    valueError: false,
    valueErrorMsg: "",
    actionOpen: false,
    defaultOpen: false,
    valueOpen: false,
  },
]);

const fieldToUpdate = (what: "default" | "action" | "value") =>
  what === "action"
    ? "actionOpen"
    : what === "default"
    ? "defaultOpen"
    : "valueOpen";

const toggleDropdown = (
  what: "default" | "action" | "value",
  index: number
) => {
  // closeDropdown();
  allData.value = allData.value.map((data) =>
    data.index === index
      ? { ...data, [fieldToUpdate(what)]: !data[fieldToUpdate(what)] }
      : data
  );
};

const openDropdown = (what: "default" | "action" | "value", index: number) => {
  closeDropdown();
  allData.value = allData.value.map((data) =>
    data.index === index ? { ...data, [fieldToUpdate(what)]: true } : data
  );
};

const closeDropdown = () => {
  allData.value = allData.value.map((data) => ({
    ...data,
    valueOpen: false,
    defaultOpen: false,
    actionOpen: false,
  }));
};

const handleClickOutside = () => {
  closeDropdown();
  closeDropdown();
  closeDropdown();
};

const handleBlur = () => {
  setTimeout(() => closeDropdown(), 100); // Delay to allow item selection
};

const selectItem = (
  item: string,
  what: "default" | "action" | "value",
  index: number,
  actionValue?: CombinedFilter
) => {
  if (props.data?.name === "Create Custom Filter") {
    allData.value = allData.value.map((data) =>
      data.index === index ? { ...data, [what]: item } : data
    );
  } else {
    allData.value = allData.value.map((data) =>
      data.index === index
        ? { ...data, [what]: item, segment: actionValue?.definition }
        : data
    );
  }

  if (inputValue.value) {
    selectedItem.value[what] = `${inputValue.value}`;
  } else {
    selectedItem.value[what] = item;
  }
  if (what === "value") {
    inputValue.value = item;
    validateInput();
  }
  closeDropdown();
  validateDefaultInput();
};

const innerItemSelected = (item: DataItem, index: number) => {
  allData.value = allData.value.map((data) =>
    data.index === index
      ? { ...data, action: item.name, segment: item.segment }
      : data
  );

  selectedItem.value.default = "";
  actionValue.value = item;
  selectedItem.value["action"] = item.name;
  closeDropdown();
  // console.log(actionValue.value);
  validateActionInput();
};

const cancel = () => {
  props.closeSelectModal();
};

const getImagePath = (filename: string) => {
  return filename;
};

switch (props.data?.name) {
  case "Average Order Value":
  case "Create Custom Filter":
    dropdownItems.value = ["Equal To", "Less Than", "Greater Than"];
    break;
  case "custom":
    break;
  default:
    break;
}

const next = () => {
  validateDefaultInput();
  // console.log(allData.value);

  if (props.data?.name === "Create Custom Filter") {
    validateActionInput();
    const returnData = allData.value
      .map(
        (data) =>
          data.segment +
          conditions[data.default as keyof typeof conditions] +
          encodeURI(String(data.value))
      )
      .join(";");
    // console.log({ name: filterName.value, definition: returnData });

    emit(
      "item-selected",
      { name: filterName.value, definition: returnData },
      true
    );
  } else {
    let returnData = "";
    if (props.data?.name === "Average Order Value") {
      returnData = allData.value
        .map(
          (data) =>
            data.segment +
            conditions[data.default as keyof typeof conditions] +
            encodeURI(String(data.value))
        )
        .join(";");
      // console.log({ name: props.data?.name, definition: returnData });
    } else {
      returnData = allData.value
        .map((data) => data.segment + encodeURI(String(data.default)))
        .join(";");
      // console.log({ name: props.data?.name, definition: returnData });
    }

    emit("item-selected", { name: props.data?.name, definition: returnData });
  }
  props.closeSelectModal();
};

const handleDocumentClick = (event: MouseEvent) => {
  if (
    !event
      .composedPath()
      .includes(document.querySelector(".filter_wrapper") as Node)
  ) {
    closeDropdown();
    closeDropdown();
    closeDropdown();
  }
};

const filterItems = (what: "default" | "action" | "value", index: number) => {
  const searchText = selectedItem.value[what].toLowerCase();
  dropdownItems.value = items.filter((item) =>
    item.toLowerCase().includes(searchText)
  );
  openDropdown(what, index);
};

const noDropdown = (filter?: string) => {
  return filter !== "Total Pages Visited";
};

const numberInput = (filter?: string) => {
  return filter === "Total Pages Visited";
};

const validateInput = () => {
  // secondInputError.value = String(inputValue.value).trim() === "";
  // if (typeof inputValue.value === "string" && inputValue.value.trim() === "") {
  //   secondInputErrorMessage.value = "Invalid input: Missing input";
  // }
  // secondInputErrorMessage.value = "Invalid input: Please enter a numeric value";
};

const validateFilterName = () => {
  filterNameError.value = (filterName.value?.length || 0) < 3;
  if (filterName?.value?.trim() === "") {
    filterNameErrorMessage.value =
      "Invalid input: Please enter a name for the filter.";
  } else if ((filterName?.value?.length || 0) < 3) {
    filterNameErrorMessage.value =
      "Invalid input: Filter name must be more then 3 characters";
  } else if ((filterName?.value?.length || 0) > 50) {
    filterNameErrorMessage.value =
      "Invalid input: Filter name cannot exceed 50 characters.";
  }
};

const validateActionInput = () => {
  // actionInputError.value = selectedItem.value.action.trim().length === 0;
  // actionInputErrorMessage.value =
  //   "Invalid input: Please select an action first";
};

const validateDefaultInput = () => {
  // defaultInputError.value = selectedItem.value.default.trim().length === 0;
  // defaultInputErrorMessage.value =
  //   "Invalid input: Please select an action first";
  // defaultInputErrorMessage.value =
  //   "Invalid input: Please enter a numeric value";
};

const addCustomFilter = (condition: "and" | "or") => {
  validateActionInput();
  validateDefaultInput();
  validateInput();
  validateFilterName();

  const index = allData.value[allData.value.length - 1].index + 1;
  allData.value = [
    ...allData.value,
    {
      condition,
      index,
      action: "",
      default: "",
      value: "",
      actionError: false,
      actionErrorMsg: "",
      conditionError: false,
      conditionErrorMsg: "",
      valueError: false,
      valueErrorMsg: "",
      actionOpen: false,
      defaultOpen: false,
      valueOpen: false,
    },
  ];
};

const removeCustomFilter = (index: number) => {
  console.log(index);
  allData.value = allData.value.filter((d) => d.index !== index);
};

const groupDataByCategory = (data: DataItem[]): GroupedData => {
  return data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as GroupedData);
};

const addOptionsToData = () =>
  _data.map((d) => ({
    ...d,
    options: segmentValues[d.segment as keyof typeof segmentValues] || [],
    conditions: Object.values((options as any)[d.option as any]) || [],
  }));

function convertOptionToArray(data: DataItem[]) {
  return data.map((item) => {
    if (typeof item.options === "object" && !Array.isArray(item.options)) {
      if (item.options) {
        item["options"] = Object.values(item.options) || [];
      } else {
        item["options"] = [];
      }
    }
    return item;
  });
}

const dataWithConvertedOptions = convertOptionToArray(
  addOptionsToData() as DataItem[]
);
const groupedData = groupDataByCategory(dataWithConvertedOptions);
const actionItems = ref(groupedData);

// console.log(groupedData);

const labelMap = (inputType?: string) => {
  const map: { [x: string]: string } = {
    "Entry Page": "Referrer URL",
    "Traffic Source": "Referrer URL",
    "Total Pages Visited": "Number of visits",
    "Viewed Page": "Action URL",
    "Average Order Value": "Condition",
    "Create Custom Filter": "Condition",
  };
  return map[inputType || ""];
};

const placeholderMap = (inputType?: string) => {
  const map: { [x: string]: string } = {
    "Entry Page": "Select",
    "Traffic Source": "Select",
    "Total Pages Visited": "Enter value",
    "Viewed Page": "Select",
    "Average Order Value": "Equals",
    "Create Custom Filter": "Equals",
  };
  return map[inputType || ""];
};

const SecondLabelMap = (inputType?: string) => {
  const map: { [x: string]: string } = {
    "Entry Page": "Value",
    "Traffic Source": "",
    "Total Pages Visited": "",
    "Average Order Value": "Value",
    "Create Custom Filter": "Value",
  };
  return map[inputType || ""];
};

const SecondPlaceholderMap = (inputType?: string) => {
  const map: { [x: string]: string } = {
    "Entry Page": "Select",
    "Traffic Source": "",
    "Total Pages Visited": "",
    "Average Order Value": "0.00",
    "Create Custom Filter": "Enter value",
  };
  return map[inputType || ""];
};

// https://early-release.heatmap.com/index.php?date=2024-06-03&module=API&format=json&method=API.getSuggestedValuesForSegment&segmentName=entryPageUrl&segment=&idSite=2011&period=month
const fetchSegmentData = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    module: "API",
    format: "json",
    method: "API.getSuggestedValuesForSegment",
    segmentName: "entryPageUrl",
  });

  const requestOptions: CustomRequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch("https://early-release.heatmap.com/index.php", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (!result) {
        loading.value = false;
        return;
      }
      console.log(result);
      loading.value = false;
    })
    .catch((error) => {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
  fetchSegmentData();
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});

watch(inputValue, () => {
  validateInput();
});

watch(filterName, () => {
  validateFilterName();
});
</script>

<style scoped>
* {
  font-family: Montserrat;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease-in-out;
  /* transform: translateY(-10px); */
}

.dropdown-enter, .dropdown-leave-to /* .dropdown-leave-active in <2.1.8 */ {
  opacity: 0;
  /* transform: translateY(-10px); */
}

input:focus,
input:visited,
input:focus-visible,
input:focus-within,
input:target {
  border-radius: var(--corner-med, 8px);
  border: 1px solid var(--Info-03-Main, #449ff4) !important;
  background: var(--Grey-White, #fff);
  box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
}

.filter_modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: var(--horizontal-padding-lg, 12px);
  background: rgba(52, 64, 75, 0.1);

  &.full_screen {
    position: fixed;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background: rgba(31, 32, 34, 0.5) !important;
    border-radius: 0;
  }

  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  .filter_wrapper {
    display: flex;
    min-width: 425px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: var(--horizontal-padding-lg, 12px);
    border: 1px solid var(--Grey-200, #e6e7e8);
    background: var(--Grey-White, #fff);
    box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
    /* overflow: hidden; */

    .filter_header {
      position: sticky;
      top: 0;
      background: #fff;
      z-index: 9;
      display: flex;
      padding: var(--vertical-padding-lg, 24px)
        var(--vertical-padding-med, 20px) 16px var(--vertical-padding-med, 20px);
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
      align-self: stretch;
      border-bottom: 1px solid var(--Grey-200, #e6e7e8);

      .filter_header_left {
        display: flex;
        align-items: center;
        gap: var(--corner-med, 8px);
      }

      img {
        width: var(--vertical-padding-med, 20px);
        height: var(--vertical-padding-med, 20px);
      }

      #close_button {
        cursor: pointer;
      }

      .filter_header_text {
        flex: 1 0 0;
        color: var(--Grey-800, #34404b);
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
      }
    }

    .filter_content {
      display: flex;
      padding: var(--vertical-padding-lg, 24px);
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
      align-self: stretch;
      /* max-height: 300px; */
      /* overflow-y: auto; */

      &.allow_scroll {
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-gutter: stable both-edges;
        height: 60vh;
        padding: var(--vertical-padding-lg, 16px);
      }

      .filter_content_wrapper {
        display: flex;
        /* padding: var(--vertical-padding-lg, 24px); */
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
      }

      .filter_content_dropdown {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;

        .dropdown_title {
          align-self: stretch;
          color: var(--Grey-800, #34404b);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 142.857% */
        }

        .dropdown_body_wrapper {
          position: relative;
          width: 100%;

          .absolute_placehopder {
            position: absolute;
            left: 13px;
            top: 10px;
            color: var(--Grey-600, #677078);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
          }

          .arrow_button_wrapper {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            cursor: pointer;

            &.we_have_error {
              top: 32%;
            }
          }

          .arrow_button_wrapper svg {
            transition: transform 0.3s ease;
          }

          .arrow_button_wrapper svg.rotated {
            transform: rotate(180deg);
          }

          .dropdown_body {
            display: flex;
            width: calc(100% - 24px);
            padding: 8px 12px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
            border-radius: var(--corner-med, 8px);
            border: 1px solid var(--Grey-200, #e6e7e8);
            background: var(--Grey-White, #fff);
            box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
            margin: 0;
            height: 30px;

            color: var(--Grey-800, #34404b);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */

            &.second_one {
              text-align: right;
            }
          }

          .dropdown_body::placeholder {
            color: var(--Grey-800, #999fa5);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
          }

          .dropdown_menu_wrapper {
            position: absolute;
            width: 100%;
            border-radius: var(--corner-med, 10px);
            background: var(--Grey-White, #fff);
            border: 1px solid var(--Grey-200, #e6e7e8);
            box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
            list-style: none;
            padding: 0;
            margin-top: 4px;
            max-height: 300px;
            overflow-y: auto;
            z-index: 10;
            /* transition: all 3s ease-in-out; */

            .dropdown_menu_item {
              display: flex;
              padding: var(--corner-med, 8px) var(--horizontal-padding-lg, 12px);
              align-items: flex-start;
              align-self: stretch;
              cursor: pointer;

              &.action {
                display: flex;
                padding: 10px 14px 10px var(--horizontal-padding-lg, 12px);
                justify-content: space-between;
                align-items: center;
                align-self: stretch;
                background: var(--Grey-100, #f6f6f6);
              }

              color: var(--Grey-800, #34404b);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px; /* 142.857% */
              &:not(:last-child) {
                border-bottom: 1px solid var(--Grey-200, #e6e7e8);
              }
              &.activeClass {
                color: var(--Grey-800, #fff) !important;
                background: #03c191 !important;
              }

              &.inner_items {
                display: flex;
                padding: var(--horizontal-padding-lg, 12px)
                  var(--vertical-padding-lg, 24px);
                align-items: center;
                justify-content: space-between;
                align-self: stretch;
                font-weight: 600;
                line-height: 18px; /* 138.462% */
                transition: all 0.3s ease-in-out;
                &:hover {
                  background: #fff3f3da;
                }
              }
            }

            .dropdown_menu_item:hover {
              background: #e6e7e8;
            }
          }
        }
      }
    }
  }
}

.filter_footer {
  position: sticky;
  bottom: 0;
  background: #fff;
  z-index: 9;
  display: flex;
  padding: var(--horizontal-padding-lg, 12px) var(--vertical-padding-med, 20px);
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  border-radius: 0px 0px var(--horizontal-padding-lg, 12px)
    var(--horizontal-padding-lg, 12px);
  background: var(--Grey-White, #fff);
  border-top: 1px solid #e6e7e8;

  .footer_buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;

    .footer_button {
      display: flex;
      padding: var(--Padding-Horizontal-padding, 6px)
        var(--Padding-Vertical-padding, 16px);
      align-items: flex-start;
      gap: 10px;
      border-radius: var(--Padding-Corner, 6px);
      background: var(--Grey-200, #e6e7e8);
      box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
      cursor: pointer;

      &.disabled_me {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .footer_button_text {
        color: var(--Grey-600, #677078);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 200% */
      }
    }

    .footer_button.primary_button .footer_button_text {
      color: var(--Grey-White, #fff);
    }

    .footer_button.primary_button {
      background: var(--Primary-03-Main, #00936f);
    }
  }

  .button-group {
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e6e7e8;

    .footer_button {
      border-radius: 0;
      background: transparent;

      .footer_button_text {
        color: #34404b;
        font-size: 14px;
      }
    }
  }
}
.remove_action_wrapper {
  display: flex;
  width: 100%;
  /* margin-top: 8px; */
  align-items: center;
  justify-content: space-between;
}

.condition_indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 16px;

  .condition {
    width: 200px;
    height: 1px;
    background: var(--Grey-200, #e6e7e8);
    position: relative;

    div {
      display: inline-flex;
      padding: 4px var(--corner-med, 8px);
      justify-content: center;
      align-items: center;
      gap: 10px;
      background: var(--Grey-White, #fff);
      color: #34404b;
      font-weight: 900;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.error_message {
  color: var(--Error-04-Dark, #b71e2d);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-top: 8px !important;
}

.horizontal_line {
  width: 360px;
  height: 1px;
  background: var(--Grey-200, #e6e7e8);
  margin-top: 24px;
  margin-bottom: 8px;
}

.add_custom_filter_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .add_custom_filter {
    display: flex;
    padding: var(--Padding-Horizontal-padding, 6px)
      var(--Padding-Vertical-padding, 16px);
    align-items: center;
    gap: 4px;
    border-radius: var(--Padding-Corner, 6px);
    border: 1px solid var(--Primary-03-Main, #00936f);
    box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
    cursor: pointer;

    .add_custom_filter_text {
      color: var(--Primary-03-Main, #00936f);
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 128.571% */
    }
  }
}

.remove_custom_filter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;

  .remove_custom {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px var(--corner-med, 8px);
    background: var(--Grey-White, #fff);
    cursor: pointer;

    p {
      color: var(--Error-04-Dark, #b71e2d);
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }
  }
}

#accordion {
  display: flex;
  flex-direction: column;
  max-height: 1000px;
  /* transition: max-height 0.5s ease-out; */

  .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    scrollbar-gutter: stable both-edges;
  }
}
#accordion label + input[type="checkbox"]:checked + .content {
  max-height: 400px;
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
}

#accordion input[type="checkbox"]:checked + label {
  transform: rotate(180deg);
}

#inner_arrow {
  margin-right: 2px;
}
</style>
