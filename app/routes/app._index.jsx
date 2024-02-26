import { Page, Text, Box, InlineStack, Layout } from "@shopify/polaris";
import { PopOver } from "./Dashboard/components/PopOver";
import ChatBar from "./Dashboard/components/ChatBar";
import SetupGuide from "./Dashboard/components/SetupGuide";

const languages = [
  {
    label: "English",
    id: "gid://shopify/CustomerSegment/1",
    value: "0",
  },
  {
    label: "German",
    id: "gid://shopify/CustomerSegment/2",
    value: "1",
  },
  {
    label: "Italian",
    id: "gid://shopify/CustomerSegment/3",
    value: "2",
  },
  {
    label: "Vietnamese",
    id: "gid://shopify/CustomerSegment/4",
    value: "3",
  },
  {
    label: "France",
    id: "gid://shopify/CustomerSegment/5",
    value: "4",
  },
  {
    label: "Pakistan",
    id: "gid://shopify/CustomerSegment/6",
    value: "5",
  },
  {
    label: "Spanish",
    id: "gid://shopify/CustomerSegment/7",
    value: "6",
  },
  {
    label: "Polish",
    id: "gid://shopify/CustomerSegment/8",
    value: "7",
  },
  {
    label: "Japanese",
    id: "gid://shopify/CustomerSegment/9",
    value: "8",
  },
  {
    label: "Chinese",
    id: "gid://shopify/CustomerSegment/10",
    value: "9",
  },
  {
    label: "Korean",
    id: "gid://shopify/CustomerSegment/11",
    value: "10",
  },
  {
    label: "Turkish",
    id: "gid://shopify/CustomerSegment/12",
    value: "11",
  },
];

export default function Index() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Box>
            <InlineStack align="space-between">
              <Text variant="headingLg" as="h3" fontWeight="bold">
                Dashboard
              </Text>
              <InlineStack blockAlign="center" align="end" gap="100">
                <Text variant="bodyMd" as="span">
                  Language:
                </Text>
                <PopOver segments={languages} />
              </InlineStack>
            </InlineStack>
          </Box>
        </Layout.Section>
        <Layout.Section>
          <ChatBar />
        </Layout.Section>
        <Layout.Section>
          <SetupGuide />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
