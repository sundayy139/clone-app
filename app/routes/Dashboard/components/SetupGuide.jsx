import {
  ActionList,
  Box,
  Button,
  Card,
  Collapsible,
  InlineGrid,
  InlineStack,
  Popover,
  ProgressBar,
  Text,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import {
  MenuHorizontalIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@shopify/polaris-icons";

const SetupGuide = () => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button
      icon={MenuHorizontalIcon}
      onClick={togglePopoverActive}
      variant="tertiary"
    ></Button>
  );
  return (
    <Card padding="0">
      <>
        <Box padding={400}>
          <InlineGrid gap={150} columns="1">
            <InlineStack align="space-between" blockAlign="center">
              <Text variant="headingMd" as="h3">
                Setup guide
              </Text>
              <InlineStack align="center" blockAlign="start" gap={400}>
                <Popover
                  ariaHaspopup="listbox"
                  preferredAlignment="center"
                  active={popoverActive}
                  activator={activator}
                  autofocusTarget="first-node"
                  onClose={togglePopoverActive}
                >
                  <ActionList
                    actionRole="menuitem"
                    items={[{ content: "Dismiss" }]}
                  />
                </Popover>
                <Button
                  icon={open ? ChevronDownIcon : ChevronUpIcon}
                  variant="tertiary"
                  onClick={handleToggle}
                  ariaExpanded={open}
                  ariaControls="basic-collapsible"
                ></Button>
              </InlineStack>
            </InlineStack>
            <Text variant="bodyMd" as="p">
              Follow the steps below to get Globo Product Options up and running
            </Text>
            <InlineStack gap={200} blockAlign="center">
              <Text variant="bodyMd" as="span">
                3/3 completed
              </Text>
              <div style={{ width: 100 }}>
                <ProgressBar progress={100} size="small" tone="primary" />
              </div>
            </InlineStack>
          </InlineGrid>
        </Box>
        <Collapsible
          open={open}
          id="basic-collapsible"
          transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
          expandOnPrint
        >
          <Box padding={200}>
            <p>
              Your mailing list lets you contact customers or visitors who have
              shown an interest in your store. Reach out to them with exclusive
              offers or updates about your products.
            </p>
          </Box>
        </Collapsible>
      </>
    </Card>
  );
};

export default SetupGuide;

const CollapsibleTab = () => {
  return (
    <Collapsible
      open
      id="basic-collapsible"
      transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
      expandOnPrint
    >
      <Box padding={200}>
        <p>
          Your mailing list lets you contact customers or visitors who have
          shown an interest in your store. Reach out to them with exclusive
          offers or updates about your products.
        </p>
      </Box>
    </Collapsible>
  );
};
