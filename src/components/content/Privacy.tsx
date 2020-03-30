import React from "react";
import { Box, Typography } from "@material-ui/core";

class PrivacyPolicy extends React.PureComponent {
  render = () => {
    return (
      <Box paddingBottom={4}>
        <Typography variant="body1">
          The protection of your personal data is very important to us. We treat
          this topic with a great deal of care and therefore inform you in the
          following about the handling of your personal data when visiting our
          website.
        </Typography>
        <Typography variant="body1">
          Personal data means any information relating to an identified or
          identifiable natural person, such as name, address and e-mail address.
        </Typography>
        <Typography variant="h2">
          1. Controller and data protection officer
        </Typography>
        <Typography variant="body1">
          The responsible controller according to Art. 4 para. 7 of the General
          Data Protection Regulation (GDPR) is COMING SOON!
        </Typography>
        <Typography variant="body1">
          You can contact our data protection officer by e-mail
          (datenschutz@data4life.care) or by sending a letter to our postal
          address (to the attention of &quot;the data protection officer&quot;).
        </Typography>
        <Typography variant="h2">
          2. Purpose and legal basis for the processing of personal data
        </Typography>
        <Typography variant="h3">a. When visiting our website</Typography>
        <Typography variant="body1">
          While visiting our website and if you do not register for our
          newsletter or contact us via our contact form, we only collect the
          data that your browser transmits to our server.
        </Typography>
        <Typography variant="body1">
          This is the following information required to display our website to
          you and to ensure stability and security: IP address, date and time of
          the request, content of the request (specific page), access
          status/HTTP status code, amount of data transferred in each case,
          website from which the request comes, browser, operating system and
          its interface, language and version of the browser software. Please
          note that we cannot draw any conclusions about individual persons on
          the basis of this data.
        </Typography>
        <Typography variant="body1">
          The data is stored by us for technical security reasons, e.g. to
          prevent attacks on our web server; however, the data is anonymized
          after seven days at the latest by shortening the IP address at domain
          level, so that it is no longer possible to establish any reference to
          the individual website user. The legal basis for the processing
          described above is Art. 6 para. 1 sentence 1 lit. f GDPR (processing
          is necessary in relation with controller’s legitimate interests).
        </Typography>
        <Typography variant="h3">b. Registering for our Newsletter</Typography>
        <Typography variant="body1">
          With your consent, you can subscribe to our newsletter, in which we
          inform you – approximately once a month- about updates about
          Data4Life, in particular about the launch of the Data4Life platform
          and eventual possibilities of a beta test for users.
        </Typography>
        <Typography variant="body1">
          For the registration to our newsletter we have implemented the
          so-called double opt-in procedure. This means that after you
          registered for the newsletter, we will send you an e-mail to the
          specified e-mail address in which we ask you for your confirmation
          that you would like to receive the newsletter. If you do not confirm
          the registration within three days, your information will be blocked
          and automatically deleted after one month.
        </Typography>
      </Box>
    );
  };
}

export default PrivacyPolicy;
