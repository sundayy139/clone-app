import { Box, Button, Icon, InlineStack, Text } from "@shopify/polaris";
import React from "react";
import { AlertCircleIcon, XIcon, ChatIcon } from "@shopify/polaris-icons";

const ChatBar = () => {
  return (
    <Box
      borderRadius="400"
      background="bg-surface-info"
      padding={200}
      borderColor="border"
      borderWidth="025"
    >
      <InlineStack align="space-between" blockAlign="start" wrap={false}>
        <InlineStack gap={100} blockAlign="start" wrap={false}>
          <Icon source={AlertCircleIcon} tone="base" />
          <InlineStack blockAlign="center">
            <Text as="p" variant="bodyMd">
              Would you like to personalize the form more like change the font,
              color and background?
            </Text>
            <InlineStack gap={100} blockAlign="center" wrap={false}>
              <Icon source={ChatIcon} tone="info" />
              <Button variant="plain" textAlign="left">
                Chat now!
              </Button>
            </InlineStack>
          </InlineStack>
        </InlineStack>
        <InlineStack>
          <Button variant="monochromePlain">
            <Icon source={XIcon} tone="base" />
          </Button>
        </InlineStack>
      </InlineStack>
    </Box>
  );
};

export default ChatBar;
