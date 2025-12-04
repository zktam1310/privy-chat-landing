import React, { useEffect } from "react";
import "./LegalPage.css";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>PrivyChat Terms of Service</h1>
        <p>Last Updated: December 2025</p>

        <p>
          These Terms of Service (“Terms”) govern your access to and use of the
          services made available by the PrivyChat Team (referred to as “we”,
          “our”, “PrivyChat”) including services that we provide via the
          PrivyChat website and in connection with the PrivyChat Private
          Messenger applications (the “PrivyChat App”), including Linux,
          Windows, Mac OS, Android and iOS (collectively referred to as the
          “Services”).
        </p>
        <p>
          These Terms and the PrivyChat Privacy Policy form the End User
          Agreement between you and PrivyChat.
        </p>

        <h2>1. Who can use the Services</h2>
        <p>
          Anyone who is not barred from using the Services under the laws of any
          applicable jurisdiction, and is at least 18 years of age (or the age
          of majority, if older, in any applicable jurisdiction) can use the
          Services.
        </p>
        <p>
          By using these Services, you agree to form a binding agreement between
          you and PrivyChat.
        </p>

        <h2>2. Our Privacy Policy</h2>
        <p>
          Privacy is central to our purpose and mission. For more details,
          please refer to the PrivyChat Privacy Policy.
        </p>

        <h2>3. Our Services</h2>
        <p>
          Our Services are intended to inform you and educate you about using
          the PrivyChat application, a private and secure communications app,
          and to facilitate private and secure communications between two or
          more parties, within a group, or within a community.
        </p>
        <p>
          <strong>Availability of Our Services:</strong> Our Services may be
          interrupted, including for maintenance, upgrades, or network or
          equipment failures. We may discontinue some or all of our Services,
          including certain features and the support for certain devices and
          platforms, at any time.
        </p>

        <h3>3.1. Using the PrivyChat Website</h3>
        <p>
          The purpose of the PrivyChat Website is primarily to provide you with
          information about the PrivyChat App. We have done our best to make
          sure this information is accurate and up-to-date, however, there may
          be unintentional errors that may mislead you. Therefore, we encourage
          you to contact us for any clarifications you may need. PrivyChat does
          not accept any liability for any accuracy or omission.
        </p>

        <h3>3.2. Using the PrivyChat App</h3>
        <p>
          The purpose of the PrivyChat App is to facilitate private and secure
          communications, without capturing or sharing any meta-data. It was
          created for use by individuals who require anonymity and security.
        </p>
        <p>
          <strong>What do we mean by ‘private’?</strong> The PrivyChat App does
          not require you to identify yourself or associate your personally
          identifiable information to use the service. The PrivyChat App does
          not attempt to gather information or individually identify users
          through their use of the service.
        </p>
        <p>
          <strong>What do we mean by ‘secure’?</strong> The messages you create
          on your PrivyChat App are encrypted and only the destination PrivyChat
          ID can decrypt the message. The encrypted messages are wrapped in
          multiple layers of onion encryption and routed from the PrivyChat App
          through our distributed onion network before reaching their
          destination.
        </p>

        <h2>4. Your Responsibilities and Rights</h2>
        <p>
          <strong>Software and account</strong> — You are responsible for
          keeping your device, PrivyChat App and your account up-to-date, safe
          and secure, including being responsible for any passwords or recovery
          phrases.
        </p>
        <p>
          <strong>Legal and Acceptable Use</strong> — You agree to use our
          Services only for legal, authorised, and acceptable purposes. You will
          not use (or assist others in using) our Services in ways that: (a)
          violate or infringe the rights of PrivyChat, our users, or others,
          including privacy, publicity, intellectual property, or other rights;
          (b) involve sending illegal or impermissible communications such as
          bulk messaging, auto-messaging, and auto-dialing.
        </p>
        <p>
          <strong>Harm to PrivyChat</strong> — You must not (or assist others
          to) access, use, modify, distribute, transfer, or exploit our Services
          in unauthorised manners, or in ways that harm PrivyChat, our Services,
          or systems.
        </p>

        <h2>5. Content Policy</h2>
        <p>
          PrivyChat cannot be used to glorify violence, promote terrorism, or
          for child sexual exploitation. We reserve the right to block access to
          our services for violations of these policies.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
