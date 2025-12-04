import React, { useEffect } from "react";
import "./LegalPage.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>PrivyChat Privacy Policy</h1>

        <h2>PrivyChat App</h2>
        <p>
          PrivyChat is designed so that it doesn't store any information which
          could be used to track you. We don’t store any identifying information
          about your device, such as your IP address or your user agent. You
          also don't need a phone number, e-mail, or any information tied to
          your real identity to make a PrivyChat account. We did this so that
          you can remain private and anonymous whenever you’re using PrivyChat.
        </p>
        <p>
          You don't need to jump through hoops or tweak special settings to make
          PrivyChat private — it’s private by default.
        </p>
        <p>
          The first time you use PrivyChat, you need to connect to a seed node
          which serves you the list of servers in the network. Your IP address
          can be seen by the seed node, but your IP is not recorded. You can
          also shield your real IP by using a virtual private network or similar
          technology. The seed node will never see who you’re talking to or what
          you’re talking about.
        </p>

        <h2>PrivyChat website</h2>
        <p>
          The PrivyChat website never attempts to link your usage of the website
          to your real identity or create a user profile based on your activity.
        </p>
        <p>
          We don’t want to collect or store any of your information that isn’t
          strictly necessary, so all information is deleted within 6 months of
          being collected. All the data we do collect is to help improve the
          website, and anything older than this is unlikely to be useful, so
          it’s better for both of us if it is deleted.
        </p>
        <p>
          The PrivyChat website stores some limited data to make sure it is
          easy-to-use and fast-to-load.
        </p>

        <h2>Get in touch!</h2>
        <p>
          This is the way the PrivyChat app and website treat your privacy. If
          you would like more information, have suggestions about how PrivyChat
          can better protect your privacy, or just want to say hello — please
          send an email to support@privychat.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
