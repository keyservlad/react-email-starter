import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NotionMagicLinkEmailProps {
  promoCode?: string;
  firstname?: string;
  expirationDate?: string;
}

export const NotionMagicLinkEmail = ({
  promoCode,
  firstname,
  expirationDate,
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>JOYEUX ANNIVIN ' SAIRE</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>JOYEUX ANNIVIN ' SAIRE</Heading>
        <Text style={{ ...text, marginBottom: "0" }}>Cher {firstname},</Text>
        <Text style={{ ...text, marginBottom: "14px", marginTop: "0" }}>
          Chez EMOVIN, nous tissons des liens de confiance et de fidélité au fil
          des années. C'est le mois de votre anniversaire, alors aujourd'hui,
          c'est CADEAU ! Nous vous souhaitons un joyeux anniversaire plein de
          douceur et de partage !
        </Text>
        <code style={code}>{promoCode}</code>
        <Text
          style={{
            ...text,
            color: "#A83D72",
            marginTop: "14px",
            marginBottom: "16px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          15 € offerts sur votre prochain achat
        </Text>
        <Text style={{ ...text, marginBottom: "14px", marginTop: "0" }}>
          Ce code de réduction est valable jusqu'au {expirationDate}.
        </Text>
        <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          Offre valable sur toute la gamme des offres EMOVIN. (hors Abonnement).
          <br />
          Ce code est à usage unique et est utilisable à l'étape de paiement.
        </Text>
        <Link
          href="https://www.emovin.fr"
          target="_blank"
          style={{ ...link, color: "#898989" }}
        >
          <Img
            src={`https://www.emovin.fr/images/logo_emovin-05.svg`}
            width="100"
            height="35"
            alt="Logo Emovin"
          />
        </Link>

        <Text style={footer}>
          <Link
            href="https://www.emovin.fr"
            target="_blank"
            style={{ ...link, color: "#898989" }}
          >
            Emovin.fr
          </Link>
          , le plaisir de partager
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionMagicLinkEmail.PreviewProps = {
  promoCode: "cagnotte-c1edbc4fd3",
  firstname: "Arnaud",
  expirationDate: "30 février 2025",
} as NotionMagicLinkEmailProps;

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
