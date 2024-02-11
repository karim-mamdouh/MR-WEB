import React from "react";
import { Stack, Container, Box } from "@mui/material";
import { Typography } from "@mui/material";

const TermsAndConditionsPage = () => {
  const email = "domains@hostinger.com";
  const infoMail = "info@medroots.org";
  const phone = "info@medroots.org";
  const protectionOfficerEmail = " Tania.F@medroots.org";
  const protectionOfficerPhone = "+356 79302805";
  const fontStyles = {
    mainHeader: { variant: "h4", fontSize: { xs: "22px", sm: "27px" } },
    subHeader: { variant: "h5", fontSize: { xs: "16px", sm: "20px" } },
    description: { fontSize: { xs: "16px", sm: "20px" } },
    smallFont: { variant: "h6", fontSize: "14px" },
  };

  const renderFontStyle = (font, header) => {
    const style = fontStyles[font];
    if (!style) return null;

    return (
      <Typography variant={style.variant} sx={{ ...style }}>
        {header}
      </Typography>
    );
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "25px", sm: "30px" } }}>
        Privacy Policy
      </Typography>
      {renderFontStyle("mainHeader", "1. An overview of data protection")}
      {renderFontStyle("subHeader", "General information")}
      <Typography sx={{ ...fontStyles.description }}>
        The following information will provide you with an easy to navigate
        overview of what will happen with your personal data when you visit this
        website. The term “personal data” comprises all data that can be used to
        personally identify you. For detailed information about the subject
        matter of data protection, please consult our Data Protection
        Declaration, which we have included beneath this copy.
      </Typography>
      {renderFontStyle("subHeader", "Data recording on this website")}
      {renderFontStyle(
        "smallFont",
        "Who is the responsible party for the recording of data on this website (i.e., the “controller”)?"
      )}
      <Typography sx={{ ...fontStyles.description }}>
        We collect your data as a result of your sharing of your data with us.
        This may, for instance be information you enter into our contact form.s
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Other data shall be recorded by our IT systems automatically or after
        you consent to its recording during your website visit. This data
        comprises primarily technical information (e.g., web browser, operating
        system, or time the site was accessed). This information is recorded
        automatically when you access this website.
      </Typography>
      {renderFontStyle(
        "smallFont",
        "What are the purposes we use your data for?"
      )}
      <Typography sx={{ ...fontStyles.description }}>
        A portion of the information is generated to guarantee the error free
        provision of the website. Other data may be used to analyze your user
        patterns.
      </Typography>
      {renderFontStyle(
        "smallFont",
        "What rights do you have as far as your information is concerned?"
      )}
      <Typography sx={{ ...fontStyles.description }}>
        You have the right to receive information about the source, recipients,
        and purposes of your archived personal data at any time without having
        to pay a fee for such disclosures. You also have the right to demand
        that your data are rectified or eradicated. If you have consented to
        data processing, you have the option to revoke this consent at any time,
        which shall affect all future data processing. Moreover, you have the
        right to demand that the processing of your data be restricted under
        certain circumstances. Furthermore, you have the right to log a
        complaint with the competent supervising agency.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Please do not hesitate to contact us at any time if you have questions
        about this or any other data protection related issues.
      </Typography>
      {renderFontStyle("mainHeader", "2. Hosting")}
      <Typography sx={{ ...fontStyles.description }}>
        We are hosting the content of our website at the following provider:
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>Hostinger </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The Provider is the Hostinger.com - HOSTINGER operations, UAB{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Švitrigailos str. 34, Vilnius 03230 Lithuania, Phone: +37064503378{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Email:{" "}
        <Box
          component="a"
          sx={{ textDecoration: "underline !important" }}
          href={`mailto:${email}`}
        >
          {email}
        </Box>
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        For details, please visit the privacy policy of Hostinger:{" "}
        <Box
          component="a"
          sx={{ textDecoration: "underline !important" }}
          href="https://www.hostinger.com/legal/privacy-policy"
          target="_blank"
        >
          https://www.hostinger.com/legal/privacy-policy
        </Box>
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The use Hostinger is based on Art. 6(1)(f) GDPR. We have a legitimate
        interest in the most reliable representation of our website. If
        appropriate consent has been obtained, the processing is carried out
        exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG,
        insofar the consent includes the storage of cookies or the access to
        information in the user's end device (e.g., device fingerprinting)
        within the meaning of the TTDSG. This consent can be revoked at any
        time.{" "}
      </Typography>
      {renderFontStyle("smallFont", "Data processing")}
      <Typography sx={{ ...fontStyles.description }}>
        We have concluded a data processing agreement (DPA) for the use of the
        above-mentioned service. This is a contract mandated by data privacy
        laws that guarantees that they process personal data of our website
        visitors only based on our instructions and in compliance with the GDPR.
      </Typography>
      {renderFontStyle(
        "mainHeader",
        "3. General information and mandatory information"
      )}
      <Typography sx={{ ...fontStyles.description }}>
        Data protection
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The operators of this website and its pages take the protection of your
        personal data very seriously. Hence, we handle your personal data as
        confidential information and in compliance with the statutory data
        protection regulations and this Data Protection Declaration.{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Whenever you use this website, a variety of personal information will be
        collected. Personal data comprises data that can be used to personally
        identify you. This Data Protection Declaration explains which data we
        collect as well as the purposes we use this data for. It also explains
        how, and for which purpose the information is collected.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        We herewith advise you that the transmission of data via the Internet
        (i.e., through e-mail communications) may be prone to security gaps. It
        is not possible to completely protect data against third-party access.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Information about the responsible party (referred to as the “controller”
        in the GDPR)
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The data processing controller on this website is:
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Mediterranean <br /> Roots Malta
      </Typography>
      <Stack>
        <Typography sx={{ ...fontStyles.description }}>
          Phone:{" "}
          <Box
            component="a"
            sx={{ textDecoration: "underline !important" }}
            href={`tel:${phone}`}
          >
            {phone}{" "}
          </Box>
        </Typography>
        <Typography sx={{ ...fontStyles.description }}>
          E-mail:{" "}
          <Box
            component="a"
            sx={{ textDecoration: "underline !important" }}
            href={`mailto:${infoMail}`}
          >
            {infoMail}
          </Box>
        </Typography>
      </Stack>
      <Typography sx={{ ...fontStyles.description }}>
        The controller is the natural person or legal entity that
        single-handedly or jointly with others makes decisions as to the
        purposes of and resources for the processing of personal data (e.g.,
        names, e-mail addresses, etc.).
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Storage duration
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Unless a more specific storage period has been specified in this privacy
        policy, your personal data will remain with us until the purpose for
        which it was collected no longer applies. If you assert a justified
        request for deletion or revoke your consent to data processing, your
        data will be deleted, unless we have other legally permissible reasons
        for storing your personal data (e.g., tax or commercial law retention
        periods); in the latter case, the deletion will take place after these
        reasons cease to apply.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        General information on the legal basis for the data processing on this
        website
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        If you have consented to data processing, we process your personal data
        on the basis of Art. 6(1)(a) GDPR or Art. 9 (2)(a) GDPR, if special
        categories of data are processed according to Art. 9 (1) DSGVO. In the
        case of explicit consent to the transfer of personal data to third
        countries, the data processing is also based on Art. 49 (1)(a) GDPR. If
        you have consented to the storage of cookies or to the access to
        information in your end device (e.g., via device fingerprinting), the
        data processing is additionally based on § 25 (1) TTDSG. The consent can
        be revoked at any time. If your data is required for the fulfillment of
        a contract or for the implementation of pre-contractual measures, we
        process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, if
        your data is required for the fulfillment of a legal obligation, we
        process it on the basis of Art. 6(1)(c) GDPR. Furthermore, the data
        processing may be carried out on the basis of our legitimate interest
        according to Art. 6(1)(f) GDPR. Information on the relevant legal basis
        in each individual case is provided in the following paragraphs of this
        privacy policy.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Designation of a data protection officer
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        We have appointed a data protection officer:{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Tania Farah <br /> Mediterranean Roots <br /> Malta{" "}
      </Typography>
      <Stack>
        <Typography sx={{ ...fontStyles.description }}>
          Phone:{" "}
          <Box
            component="a"
            sx={{ textDecoration: "underline !important" }}
            href={`tel:${protectionOfficerPhone}`}
          >
            {protectionOfficerPhone}{" "}
          </Box>
        </Typography>
        <Typography sx={{ ...fontStyles.description }}>
          E-mail:{" "}
          <Box
            component="a"
            sx={{ textDecoration: "underline !important" }}
            href={`mailto:${protectionOfficerEmail}`}
          >
            {protectionOfficerEmail}
          </Box>
        </Typography>
      </Stack>
      <Typography sx={{ ...fontStyles.description }}>
        Recipients of personal data{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        In the scope of our business activities, we cooperate with various
        external parties. In some cases, this also requires the transfer of
        personal data to these external parties. We only disclose personal data
        to external parties if this is required as part of the fulfillment of a
        contract, if we are legally obligated to do so (e.g., disclosure of data
        to tax authorities), if we have a legitimate interest in the disclosure
        pursuant to Art. 6 (1)(f) GDPR, or if another legal basis permits the
        disclosure of this data. When using processors, we only disclose
        personal data of our customers on the basis of a valid contract on data
        processing. In the case of joint processing, a joint processing
        agreement is concluded.{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Revocation of your consent to the processing of data
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        A wide range of data processing transactions are possible only subject
        to your express consent. You can also revoke at any time any consent you
        have already given us. This shall be without prejudice to the lawfulness
        of any data collection that occurred prior to your revocation.{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Right to object to the collection of data in special cases; right to
        object to direct advertising (Art. 21 GDPR)
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF ART. 6(1)(E) OR (F)
        GDPR, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR
        PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION. THIS
        ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. TO DETERMINE
        THE LEGAL BASIS, ON WHICH ANY PROCESSING OF DATA IS BASED, PLEASE
        CONSULT THIS DATA PROTECTION DECLARATION. IF YOU LOG AN OBJECTION, WE
        WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE ARE IN A
        POSITION TO PRESENT COMPELLING PROTECTION WORTHY GROUNDS FOR THE
        PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR INTERESTS, RIGHTS AND
        FREEDOMS OR IF THE PURPOSE OF THE PROCESSING IS THE CLAIMING, EXERCISING
        OR DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION PURSUANT TO ART. 21(1)
        GDPR).
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN DIRECT
        ADVERTISING, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR
        AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH ADVERTISING AT ANY TIME.
        THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS AFFILIATED WITH
        SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL
        SUBSEQUENTLY NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES
        (OBJECTION PURSUANT TO ART. 21(2) GDPR).
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Right to log a complaint with the competent supervisory agency
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        In the event of violations of the GDPR, data subjects are entitled to
        log a complaint with a supervisory agency, in the member state where
        they usually maintain their domicile, place of work or at the place
        where the alleged violation occurred. The right to log a complaint is in
        effect regardless of any other administrative or court proceedings
        available as legal recourse.{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Right to data portability{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        You have the right to have data that we process automatically based on
        your consent or in fulfillment of a contract handed over to you or to a
        third party in a common, machine-readable format. If you demand the
        direct transfer of the data to another controller, this will be done
        only if it is technically feasible.{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Information about, rectification and eradication of data Within the
        scope of the applicable statutory provisions, you have the right to
        demand information about your archived personal data, their source, and
        recipients as well as the purpose of the processing of your data at any
        time. You may also have a right to have your data rectified or
        eradicated. If you have questions about this subject matter or any other
        questions about personal data, please do not hesitate to contact us at
        any time.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Right to demand processing restrictions
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        You have the right to demand the imposition of restrictions as far as
        the processing of your personal data is concerned. To do so, you may
        contact us at any time. The right to demand restriction of processing
        applies in the following cases:{" "}
      </Typography>
      <ul
        style={{ marginLeft: "50px", listStyleType: "disc", fontSize: "24px" }}
      >
        <li>
          {" "}
          <Typography sx={{ ...fontStyles.description }}>
            In the event that you should dispute the correctness of your data
            archived by us, we will usually need some time to verify this claim.
            During the time that this investigation is ongoing, you have the
            right to demand that we restrict the processing of your personal
            data.
          </Typography>
        </li>

        <li>
          {" "}
          <Typography sx={{ ...fontStyles.description }}>
            If the processing of your personal data was/is conducted in an
            unlawful manner, you have the option to demand the restriction of
            the processing of your data instead of demanding the eradication of
            this data.
          </Typography>
        </li>

        <li>
          {" "}
          <Typography sx={{ ...fontStyles.description }}>
            If we do not need your personal data any longer and you need it to
            exercise, defend or claim legal entitlements, you have the right to
            demand the restriction of the processing of your personal data
            instead of its eradication.
          </Typography>
        </li>
        <li>
          {" "}
          <Typography sx={{ ...fontStyles.description }}>
            If you have raised an objection pursuant to Art. 21(1) GDPR, your
            rights and our rights will have to be weighed against each other. As
            long as it has not been determined whose interests prevail, you have
            the right to demand a restriction of the processing of your personal
            data.
          </Typography>
        </li>
      </ul>
      <Typography sx={{ ...fontStyles.description }}>
        If you have restricted the processing of your personal data, these data
        - with the exception of their archiving - may be processed only subject
        to your consent or to claim, exercise or defend legal entitlements or to
        protect the rights of other natural persons or legal entities or for
        important public interest reasons cited by the European Union or a
        member state of the EU.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        SSL and/or TLS encryption
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        For security reasons and to protect the transmission of confidential
        content, such as purchase orders or inquiries you submit to us as the
        website operator, this website uses either an SSL or a TLS encryption
        program. You can recognize an encrypted connection by checking whether
        the address line of the browser switches from “http://” to “https://”
        and also by the appearance of the lock icon in the browser line.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        If the SSL or TLS encryption is activated, data you transmit to us
        cannot be read by third parties.
      </Typography>
      {renderFontStyle("mainHeader", "4. Recording of data on this website")}
      <Typography sx={{ ...fontStyles.description }}>Cookies</Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Our websites and pages use what the industry refers to as “cookies.”
        Cookies are small data packages that do not cause any damage to your
        device. They are either stored temporarily for the duration of a session
        (session cookies) or they are permanently archived on your device
        (permanent cookies). Session cookies are automatically deleted once you
        terminate your visit. Permanent cookies remain archived on your device
        until you actively delete them, or they are automatically eradicated by
        your web browser.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Cookies can be issued by us (first-party cookies) or by third-party
        companies (so-called third-party cookies). Third-party cookies enable
        the integration of certain services of third-party companies into
        websites (e.g., cookies for handling payment services).
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Cookies have a variety of functions. Many cookies are technically
        essential since certain website functions would not work in the absence
        of these cookies (e.g., the shopping cart function or the display of
        videos). Other cookies may be used to analyze user behavior or for
        promotional purposes.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Cookies, which are required for the performance of electronic
        communication transactions, for the provision of certain functions you
        want to use (e.g., for the shopping cart function) or those that are
        necessary for the optimization (required cookies) of the website (e.g.,
        cookies that provide measurable insights into the web audience), shall
        be stored on the basis of Art. 6(1)(f) GDPR, unless a different legal
        basis is cited. The operator of the website has a legitimate interest in
        the storage of required cookies to ensure the technically error-free and
        optimized provision of the operator’s services. If your consent to the
        storage of the cookies and similar recognition technologies has been
        requested, the processing occurs exclusively on the basis of the consent
        obtained (Art. 6(1)(a) GDPR and § 25 (1) TTDSG); this consent may be
        revoked at any time.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        You have the option to set up your browser in such a manner that you
        will be notified any time cookies are placed and to permit the
        acceptance of cookies only in specific cases. You may also exclude the
        acceptance of cookies in certain cases or in general or activate the
        delete-function for the automatic eradication of cookies when the
        browser closes. If cookies are deactivated, the functions of this
        website may be limited.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Which cookies and services are used on this website can be found in this
        privacy policy.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Consent with Borlabs Cookie
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Our website uses the Borlabs consent technology to obtain your consent
        to the storage of certain cookies in your browser or for the use of
        certain technologies and for their data privacy protection compliant
        documentation. The provider of this technology is Borlabs GmbH,
        Rübenkamp 32, 22305 Hamburg, Germany (hereinafter referred to as
        Borlabs).
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Whenever you visit our website, a Borlabs cookie will be stored in your
        browser, which archives any declarations or revocations of consent you
        have entered. These data are not shared with the provider of the Borlabs
        technology.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The recorded data shall remain archived until you ask us to eradicate
        them, delete the Borlabs cookie on your own or the purpose of storing
        the data no longer exists. This shall be without prejudice to any
        retention obligations mandated by law. To review the details of Borlabs'
        data processing policies, please visit{" "}
        <Box
          component="a"
          sx={{ textDecoration: "underline !important" }}
          href="https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/"
          target="_blank"
        >
          https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/
        </Box>
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        We use the Borlabs cookie consent technology to obtain the declarations
        of consent mandated by law for the use of cookies. The legal basis for
        the use of such cookies is Art. 6(1)(c) GDPR.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Server log files
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The provider of this website and its pages automatically collects and
        stores information in so-called server log files, which your browser
        communicates to us automatically. The information comprises:{" "}
      </Typography>
      <ul
        style={{ marginLeft: "50px", listStyleType: "disc", fontSize: "24px" }}
      >
        <li>
          {" "}
          <Typography sx={{ ...fontStyles.description }}>
            The type and version of browser used
          </Typography>
        </li>

        <li>
          {" "}
          <Typography sx={{ ...fontStyles.description }}>
            The used operating system
          </Typography>
        </li>

        <li>
          {" "}
          <Typography sx={{ ...fontStyles.description }}>
            Referrer URL
          </Typography>
        </li>
        <li>
          {" "}
          <Typography sx={{ ...fontStyles.description }}>
            The hostname of the accessing computer
          </Typography>
          <Typography sx={{ ...fontStyles.description }}>
            The time of the server inquiry{" "}
          </Typography>
          <Typography sx={{ ...fontStyles.description }}>
            The IP address
          </Typography>
        </li>
      </ul>
      <Typography sx={{ ...fontStyles.description }}>
        This data is not merged with other data sources.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        This data is recorded on the basis of Art. 6(1)(f) GDPR. The operator of
        the website has a legitimate interest in the technically error free
        depiction and the optimization of the operator's website. In order to
        achieve this, server log files must be recorded.{" "}
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>Contact form</Typography>
      <Typography sx={{ ...fontStyles.description }}>
        If you submit inquiries to us via our contact form, the information
        provided in the contact form as well as any contact information provided
        therein will be stored by us in order to handle your inquiry and in the
        event that we have further questions. We will not share this information
        without your consent.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The processing of these data is based on Art. 6(1)(b) GDPR, if your
        request is related to the execution of a contract or if it is necessary
        to carry out pre-contractual measures. In all other cases the processing
        is based on our legitimate interest in the effective processing of the
        requests addressed to us (Art. 6(1)(f) GDPR) or on your agreement (Art.
        6(1)(a) GDPR) if this has been requested; the consent can be revoked at
        any time.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The information you have entered into the contact form shall remain with
        us until you ask us to eradicate the data, revoke your consent to the
        archiving of data or if the purpose for which the information is being
        archived no longer exists (e.g., after we have concluded our response to
        your inquiry). This shall be without prejudice to any mandatory legal
        provisions, in particular retention periods.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        Request by e-mail, telephone, or fax
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        If you contact us by e-mail, telephone or fax, your request, including
        all resulting personal data (name, request) will be stored and processed
        by us for the purpose of processing your request. We do not pass these
        data on without your consent.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        These data are processed on the basis of Art. 6(1)(b) GDPR if your
        inquiry is related to the fulfillment of a contract or is required for
        the performance of pre-contractual measures. In all other cases, the
        data are processed on the basis of our legitimate interest in the
        effective handling of inquiries submitted to us (Art. 6(1)(f) GDPR) or
        on the basis of your consent (Art. 6(1)(a) GDPR) if it has been
        obtained; the consent can be revoked at any time.
      </Typography>
      <Typography sx={{ ...fontStyles.description }}>
        The data sent by you to us via contact requests remain with us until you
        request us to delete, revoke your consent to the storage or the purpose
        for the data storage lapses (e.g. after completion of your request).
        Mandatory statutory provisions - in particular statutory retention
        periods - remain unaffected.
      </Typography>
    </Container>
  );
};

export default TermsAndConditionsPage;
