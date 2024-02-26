import React, { useCallback, useState } from "react";
import {
  Listbox,
  Popover,
  AutoSelection,
  Scrollable,
  Text,
  Button,
  Icon,
  InlineStack,
} from "@shopify/polaris";
import { ChevronDownIcon, ChevronUpIcon } from "@shopify/polaris-icons";
export function PopOver({ segments }) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);

  const handleOpenPicker = useCallback(
    () => setPickerOpen((popoverActive) => !popoverActive),
    [],
  );

  const handleClosePicker = () => {
    setPickerOpen(false);
  };

  const handleSegmentSelect = (segmentIndex) => {
    setSelectedSegmentIndex(Number(segmentIndex));
    handleClosePicker();
  };

  const activator = (
    <Button onClick={handleOpenPicker}>
      <InlineStack blockAlign="center">
        <Text as="span" variant="bodySm">
          {segments[selectedSegmentIndex].label}
        </Text>
        <Icon source={pickerOpen ? ChevronUpIcon : ChevronDownIcon} />
      </InlineStack>
    </Button>
  );

  const segmentList =
    segments.length > 0
      ? segments.map(({ label, id, value }) => {
          const selected = segments[selectedSegmentIndex].id === id;

          return (
            <Listbox.Option key={id} value={value} selected={selected}>
              <Listbox.TextOption selected={selected}>
                {label}
              </Listbox.TextOption>
            </Listbox.Option>
          );
        })
      : null;

  const listboxMarkup = (
    <Listbox
      enableKeyboardControl
      autoSelection={AutoSelection.FirstSelected}
      onSelect={handleSegmentSelect}
    >
      {segmentList}
    </Listbox>
  );

  return (
    <Popover
      active={pickerOpen}
      activator={activator}
      preferredAlignment="left"
      autofocusTarget="first-node"
      onClose={handleClosePicker}
    >
      <Popover.Pane fixed>
        <div
          style={{
            alignItems: "stretch",
            borderTop: "1px solid #DFE3E8",
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Scrollable
            shadow
            style={{
              position: "relative",
              height: "auto",
              maxHeight: "300px",
              padding: "var(--p-space-200) 0",
              borderBottomLeftRadius: "var(--p-border-radius-200)",
              borderBottomRightRadius: "var(--p-border-radius-200)",
            }}
          >
            {listboxMarkup}
          </Scrollable>
        </div>
      </Popover.Pane>
    </Popover>
  );
}
