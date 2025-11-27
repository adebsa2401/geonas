import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import tailwindConfig from "../../tailwind.config.ts";

type NewMessageNotificationEmailProps = {
  senderName: string;
  senderEmail: string;
  interestedIn: string;
  message: string;
};

const NewMessageNotificationEmail = ({
  senderName,
  senderEmail,
  interestedIn,
  message,
}: NewMessageNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className="bg-white font-airbnb">
          <Preview>
            New message from {senderName} regarding {interestedIn}
          </Preview>
          <Container className="mx-auto py-5 pb-12 w-[580px] max-w-full">
            <Section>
              <Img
                src="https://i.ibb.co/YvhHjYg/logo.png"
                width="96"
                height="96"
                alt="Geonas's logo"
                className="mx-auto mb-4 rounded-full"
              />
            </Section>
            <Section className="pb-5">
              <Row>
                <Text className="text-[32px] leading-[1.3] font-bold text-[#484848]">
                  You&apos;ve got a new message from {senderName}
                </Text>

                <Text className="text-lg leading-[1.4] text-[#484848]">
                  {senderName} is interested in{" "}
                  <strong className="font-semibold">{interestedIn}</strong>.
                </Text>

                <Text className="text-lg leading-[1.4] text-[#484848] p-6 bg-[#f2f3f3] rounded">
                  {message}
                </Text>

                <Button
                  className="bg-[#F4540FFF] rounded-sm text-white text-[18px] py-[19px] px-[30px] no-underline text-center block"
                  href={`mailto:${senderEmail}`}
                >
                  Reply to {senderName}
                </Button>
              </Row>
            </Section>

            <Hr className="border-[#cccccc] my-5" />

            <Section>
              <Row>
                <Text className="text-[#9ca299] text-[14px] leading-[24px] mb-2.5">
                  Geonas, Rue de Bruxelles 79, 5000 Namur, Belgium
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export { NewMessageNotificationEmail, type NewMessageNotificationEmailProps };
