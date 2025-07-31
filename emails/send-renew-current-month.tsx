import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface Customer {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  expirationdate?: { value: string };
  isDomicile?: { value: string };
  carte?: { value: string };
  plateforme?: { value: string };
  points?: { value: string };
}

interface CustomersEmailProps {
  customersCurrent: Customer[];
  customersNext: Customer[];
}

var customersCurrent = [
  {
    id: "gid://shopify/Customer/6452230193301",
    firstName: "Arnaud",
    lastName: "Guilhamat",
    email: "arnaud.guilhamat@emovin.fr",
    phone: "+33222222221",
    expirationdate: { value: "2024-02-13" },
    isDomicile: { value: "true" },
    carte: { value: "prestige" },
    plateforme: null,
    points: { value: "162" },
  },
  {
    id: "gid://shopify/Customer/7047546405013",
    firstName: "arnaudq",
    lastName: "Guilhamat",
    email: "guilhamat.arnaud@gmail.com",
    phone: "+33222222221",
    expirationdate: { value: "2025-01-16" },
    birthDay: { value: "1" },
    isDomicile: { value: "false" },
    carte: { value: "prestige" },
    plateforme: { value: "Rambouillet" },
    points: { value: "309" },
  },
];

var customersNext = [
  {
    id: "gid://shopify/Customer/7079861092501",
    firstName: null,
    lastName: null,
    email: "arnaud.guilhamat@sfr.fr",
    phone: null,
    expirationdate: { value: "2025-02-13" },
    birthDay: null,
    isDomicile: null,
    carte: null,
    plateforme: null,
    points: null,
  },
  {
    id: "gid://shopify/Customer/7907046228117",
    firstName: null,
    lastName: null,
    email: "arnaud.guilhaamat@emovin.fr",
    phone: null,
    expirationdate: null,
    birthDay: null,
    isDomicile: null,
    carte: null,
    plateforme: null,
    points: null,
  },
  {
    id: "gid://shopify/Customer/8037130862741",
    firstName: "Orange",
    lastName: "Orange",
    email: "arnaud.guilhamat.ext@orange.com",
    phone: null,
    expirationdate: { value: "2025-01-31" },
    birthDay: null,
    isDomicile: null,
    carte: { value: "prestige" },
    plateforme: { value: "Rambouillet" },
    points: null,
  },
  {
    id: "gid://shopify/Customer/8046498447509",
    firstName: "test",
    lastName: "test",
    email: "test@test.com",
    phone: null,
    expirationdate: { value: "2025-03-13" },
    birthDay: null,
    isDomicile: null,
    carte: null,
    plateforme: null,
    points: null,
  },
];

const CustomersEmail = ({ customersCurrent, customersNext }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[600px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Liste des clients à renouveller sur les deux prochains mois
            </Heading>

            <Section>
              <Heading className="text-black text-[20px] font-normal text-center p-0 my-[30px] mx-0">
                Renouvellements sur le mois en cours
              </Heading>
              {customersCurrent.map((customer) => (
                <Row key={customer.id} className="my-[20px]">
                  <Column className="flex-1">
                    <Text className="text-black text-[14px] leading-[24px]">
                      <strong>Prénom:</strong> {customer.firstName || "N/A"}
                    </Text>
                    <Text className="text-black text-[14px] leading-[24px]">
                      <strong>Nom:</strong> {customer.lastName || "N/A"}
                    </Text>
                    <Text className="text-black text-[14px] leading-[24px]">
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${customer.email}`}
                        className="text-blue-600 no-underline"
                      >
                        {customer.email}
                      </a>
                    </Text>
                    <Text className="text-black text-[14px] leading-[24px]">
                      <strong>Tel:</strong> {customer.phone}
                    </Text>

                    {customer.expirationdate && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Date d'expiration:</strong>{" "}
                        {customer.expirationdate.value}
                      </Text>
                    )}
                    {customer.isDomicile && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Livraison à domicile :</strong>{" "}
                        {customer.isDomicile.value}
                      </Text>
                    )}
                    {customer.carte && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Carte:</strong> {customer.carte.value}
                      </Text>
                    )}
                    {customer.plateforme && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Plateforme:</strong> {customer.plateforme.value}
                      </Text>
                    )}
                    {customer.points && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Points:</strong> {customer.points.value}
                      </Text>
                    )}
                  </Column>
                  <Hr style={{ borderColor: "#e6ebf1", margin: "20px 0" }} />
                </Row>
              ))}
            </Section>
            <Section>
              <Heading className="text-black text-[20px] font-normal text-center p-0 my-[30px] mx-0">
                Renouvellements sur le prochain mois
              </Heading>
              {customersNext.map((customer) => (
                <Row key={customer.id} className="my-[20px]">
                  <Column className="flex-1">
                    <Text className="text-black text-[14px] leading-[24px]">
                      <strong>Prénom:</strong> {customer.firstName || "N/A"}
                    </Text>
                    <Text className="text-black text-[14px] leading-[24px]">
                      <strong>Nom:</strong> {customer.lastName || "N/A"}
                    </Text>
                    <Text className="text-black text-[14px] leading-[24px]">
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${customer.email}`}
                        className="text-blue-600 no-underline"
                      >
                        {customer.email}
                      </a>
                    </Text>
                    <Text className="text-black text-[14px] leading-[24px]">
                      <strong>Tel:</strong> {customer.phone}
                    </Text>

                    {customer.expirationdate && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Date d'expiration:</strong>{" "}
                        {customer.expirationdate.value}
                      </Text>
                    )}
                    {customer.isDomicile && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Livraison à domicile :</strong>{" "}
                        {customer.isDomicile.value}
                      </Text>
                    )}
                    {customer.carte && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Carte:</strong> {customer.carte.value}
                      </Text>
                    )}
                    {customer.plateforme && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Plateforme:</strong> {customer.plateforme.value}
                      </Text>
                    )}
                    {customer.points && (
                      <Text className="text-black text-[14px] leading-[24px]">
                        <strong>Points:</strong> {customer.points.value}
                      </Text>
                    )}
                  </Column>
                  <Hr style={{ borderColor: "#e6ebf1", margin: "20px 0" }} />
                </Row>
              ))}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

CustomersEmail.PreviewProps = { customersCurrent, customersNext };

export default CustomersEmail;
