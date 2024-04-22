<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
const data = [
  {
    heading: "Introduction",
    headingTwo: `Important information and who we are:
`,
    memo: [
      {
        text: `Welcome to MySpurr's Privacy Policy. MySpurr is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our platform and services. By accessing or using MySpurr, you agree to the terms of this Privacy Policy.`,
      },
      {
        text: `<strong class="font-Satoshi700 font-extrabold">Controller:</strong>  MySpurr is the data controller responsible for your personal information collected through our platform and services.`,
      },
      {
        text: `<strong class="font-Satoshi700 font-extrabold">Contact Information: </strong> If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at hello@myspurr.net`,
      },
      {
        text: `<strong class="font-Satoshi700 font-extrabold">Purpose of this Policy:</strong>  This Privacy Policy aims to provide transparency regarding the types of personal information we collect, how we use and disclose it, and your rights regarding your information.`,
      },
      {
        text: `<strong class="font-Satoshi700 font-extrabold">Changes to this Policy:</strong> <br/> We may update this Privacy Policy from time to time, and any changes will be posted on this page. It is your responsibility to review this Privacy Policy periodically for updates.`,
      },
      {
        text: `<strong class="font-Satoshi700 font-extrabold">Legal Basis for Processing: </strong> <br/> We process personal information based on various legal grounds, including your consent, contractual necessity, compliance with legal obligations, and legitimate interests pursued by MySpurr or third parties.`,
      },
    ],
  },
  {
    heading: "Your Data Controller",
    memo: [
      {
        text: `At MySpurr, we take the protection of your personal information seriously. As the data controller responsible for your personal information collected through our platform and services, we are committed to ensuring that your data is handled in accordance with applicable data protection laws and regulations.
Our responsibilities as the data controller include:
`,
      },

      {
        // text: `p`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Collection:</strong> We collect personal information from you when you use our platform, create an account, or interact with our services. This information may include your name, email address, contact details, and other relevant information necessary to provide our services.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Use:</strong> We use your personal information for various purposes, including to provide and improve our services, communicate with you, customize your experience, and comply with legal obligations.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Sharing:</strong> We may share your personal information with third-party service providers, business partners, or affiliates who assist us in providing our services or conducting our business operations. We ensure that any third parties with whom we share your information are bound by contractual obligations to protect your privacy and only use your information for specified purposes.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Retention:</strong>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law. We regularly review our data retention practices to ensure that we only retain information for as long as necessary.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Data Subject Rights:</strong>  You have certain rights regarding your personal information, including the right to access, rectify, delete, or restrict the processing of your data. You also have the right to object to the processing of your data and the right to data portability.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Contact Information:</strong>  If you have any questions or concerns regarding the handling of your personal information or would like to exercise your data subject rights, please contact us at hello@myspurr.net
As your data controller, we are committed to maintaining the privacy and security of your personal information and ensuring that your rights are respected. Thank you for entrusting us with your data.
`,
          },
        ],
      },
    ],
  },
  {
    heading:
      "Processing data on behalf of a Controller and processors’ responsibility to you",
    memo: [
      {
        text: `As a processor acting on behalf of a controller, MySpurr is committed to ensuring the privacy and security of your personal data. Here's what you need to know about how we handle your information:`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Controller-Processor Relationship: </strong> MySpurr acts as a processor when we process personal data on behalf of a controller, who determines the purposes and means of the processing. This typically occurs when you use our platform and services, and your data is processed to fulfill the controller's objectives, such as job postings, talent searches, or communication with users.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legal Obligations: </strong> As a processor, we have a legal obligation to process your personal data in accordance with the controller's instructions and applicable data protection laws. We do not use your data for any purposes other than those specified by the controller, unless required by law.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Security:</strong> We implement robust technical and organizational measures to ensure the security and confidentiality of your personal data. This includes encryption, access controls, regular security assessments, and employee training on data protection best practices.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Confidentiality:</strong> Our employees and any third parties engaged in processing your data are bound by strict confidentiality obligations. We ensure that only authorized individuals have access to your data, and they are required to maintain its confidentiality at all times.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Transfers:</strong>If your data is transferred to third parties or subprocessors located outside the Africa or other regions with data protection regulations, we ensure that appropriate safeguards are in place to protect your data, such as standard contractual clauses or binding corporate rules.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Data Subject Rights:</strong>  YAs a data subject, you have rights regarding your personal data, including the right to access, rectify, delete, or restrict its processing. If you wish to exercise any of these rights or have questions about how your data is processed, please contact the controller, who is responsible for handling your requests.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Compliance:</strong> We comply with all legal and contractual requirements related to data processing, including data protection impact assessments, data breach notification obligations, and cooperation with supervisory authorities.
`,
          },
        ],
      },
    ],
  },
  {
    heading: "Legal Basis for Data Collection ",
    headingTwo: `Types of data / Privacy policy scope`,
    memo: [
      {
        text: `MySpurr collects and processes personal data based on various legal grounds, ensuring compliance with applicable data protection laws. The legal basis for data collection depends on the specific circumstances of the processing and may include:`,
      },
      {
        // text: `p`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Consent:</strong> We may collect and process your personal data based on your explicit consent, which you provide voluntarily when using our platform or services. You have the right to withdraw your consent at any time, although this may affect the availability or functionality of certain features.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Contractual Necessity:</strong> We may collect and process your personal data to fulfill our contractual obligations or take steps at your request before entering into a contract. This includes processing data necessary for account creation, providing requested services, or facilitating transactions.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legal Obligations:</strong> We may collect and process your personal data to comply with legal obligations or regulatory requirements. This includes fulfilling legal obligations related to tax reporting, anti-money laundering, or responding to lawful requests from law enforcement authorities.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legitimate Interests:</strong>  We may collect and process your personal data based on our legitimate interests or the legitimate interests of third parties, provided that such interests are not overridden by your rights and interests. Our legitimate interests may include improving our services, conducting analytics, preventing fraud, or ensuring the security of our platform.
`,
          },
        ],
      },
    ],
  },
  {
    heading: "Types of Data / Privacy Policy Scope",
    memo: [
      {
        text: `The scope of our Privacy Policy encompasses various types of data that we collect and process, including but not limited to:
`,
      },
      {
        // text: `p`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Personal Information:</strong> This includes information that identifies you as an individual or can be reasonably linked to you. Examples include your name, email address, contact details, and demographic information.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Account Information:</strong>  Information related to your MySpurr account, such as login credentials, profile information, preferences, and settings.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Transactional Data: </strong> Information related to transactions you conduct through our platform, including job postings, payments, and communications with other users.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Usage Data: </strong>  Information about how you interact with our platform, such as your browsing history, search queries, clicks, and other usage patterns.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Device Information: </strong>   Information about the devices you use to access our platform, including device identifiers, IP addresses, browser types, and operating systems.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Location Data: </strong>   Information about your approximate location, derived from your IP address or other geolocation data.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Communications: </strong>  Information contained in communications between you and MySpurr, including messages, feedback, and support inquiries.


`,
          },
        ],
      },
      {
        text: `Our Privacy Policy applies to all personal data collected and processed by MySpurr, whether obtained directly from you or from other sources. It outlines our practices regarding data collection, use, disclosure, retention, and your rights regarding your personal information. It's important to review the Privacy Policy in its entirety to understand how we handle your data and your rights in relation to it.`,
      },
    ],
  },
  {
    heading: "The Legal Basis for Collecting That Data",
    memo: [
      {
        text: ` The legal basis for collecting personal data varies depending on the specific circumstances of the data processing. Below are common legal bases for collecting personal data, along with examples of how each basis may apply to different types of data collected by MySpurr:`,
      },
      {
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Consent:</strong> 
`,
            memo: [
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Legal Basis:</strong> Data collection is based on the individual's explicit consent, which is given voluntarily and can be withdrawn at any time.
`,
              },
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Example:</strong> MySpurr collects personal data such as email addresses and phone numbers when users sign up for an account. By providing this information and agreeing to the terms of service, users give their consent for MySpurr to process their data for the purpose of creating and managing their account.

`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Contractual Necessity</strong> 
`,
            memo: [
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Legal Basis:</strong> Data collection is necessary for the performance of a contract with the individual or to take pre-contractual steps at the individual's request.

`,
              },
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Example:</strong>  MySpurr collects personal data such as billing information when users subscribe to premium services. This data is necessary to fulfill the contractual obligation of providing the subscribed services and processing payments.


`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legal Obligations</strong> 
`,
            memo: [
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Legal Basis:</strong> Data collection is necessary for compliance with legal obligations to which MySpurr is subject.

`,
              },
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Example:</strong>  MySpurr collects personal data such as tax identification numbers from users who are businesses or independent contractors. This data is required for tax reporting purposes, in compliance with applicable tax laws and regulations.


`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legitimate Interests</strong> 
`,
            memo: [
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Legal Basis:</strong> Data collection is necessary for the legitimate interests pursued by MySpurr or third parties, provided that such interests are not overridden by the individual's rights and interests.
`,
              },
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Example:</strong>  MySpurr collects usage data and device information for analytical purposes to improve the platform's performance, enhance user experience, and prevent fraud. These activities are based on the legitimate interest of maintaining and optimizing the platform's functionality.

`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Vital Interests:</strong> 
`,
            memo: [
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Legal Basis:</strong> Data collection is necessary to protect the vital interests of the individual or another natural person.

`,
              },
              {
                item: `<strong class="font-Satoshi700 font-extrabold">Example:</strong> In rare emergency situations, MySpurr may collect and process personal data, such as location information, to facilitate emergency response and ensure the safety and well-being of individuals.

`,
              },
            ],
          },
        ],
      },
      {
        text: ` These legal bases provide the framework for lawful data collection by MySpurr, ensuring that personal data is collected and processed in a transparent, fair, and lawful manner, consistent with applicable data protection laws and regulations.
`,
      },
    ],
  },
  {
    heading: "How We Use Your Personal Data",
    headingTwo: `Our data uses`,
    memo: [
      {
        text: `At MySpurr, we are committed to using your personal data responsibly and transparently. Below are the primary ways in which we use your personal data:
`,
      },
      {
        // text: `p`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Providing Services:</strong> We use your personal data to provide you with access to our platform and services, including creating and managing your account, facilitating job postings, connecting talents with opportunities, and facilitating communication between users.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Improving Services: </strong> We analyze usage data and feedback to understand how you interact with our platform and services. This helps us identify areas for improvement, enhance user experience, and develop new features and functionalities.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Personalization: </strong> We may use your personal data to personalize your experience on our platform, such as tailoring recommendations, job suggestions, and content based on your preferences, interests, and past interactions.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Communications:</strong>  We use your contact information to communicate with you about your account, transactions, inquiries, updates to our services, and promotional offers. You can manage your communication preferences or opt out of promotional communications at any time.

`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Analytics: </strong> We collect and analyze data about how you use our platform, such as page views, clicks, and session duration. This helps us understand user behavior, trends, and patterns, and optimize the performance and usability of our platform.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Security and Fraud Prevention: </strong> We use personal data to ensure the security of our platform, prevent fraudulent activities, detect and resolve technical issues or violations of our terms of service, and protect the rights, property, and safety of our users and MySpurr.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legal Compliance:</strong> We may use personal data to comply with legal obligations, such as tax reporting, regulatory requirements, or responding to lawful requests from law enforcement authorities or government agencies.


`,
          },
        ],
      },
    ],
  },
  {
    headingTwo: `Our data uses`,
    memo: [
      {
        text: `At MySpurr, we are committed to using your personal data responsibly and transparently. Below are the primary ways in which we use your personal data:
`,
      },
      {
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Account Creation:</strong> We use personal data such as your name, email address, and password to create and manage your MySpurr account, authenticate your identity, and provide secure access to our platform.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Job Postings:  </strong> When you post a job on MySpurr, we use personal data provided in the job posting, such as job title, description, and requirements, to match talents with relevant opportunities and facilitate the recruitment process.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Talent Matching: </strong> We use personal data provided in talent profiles, such as skills, experience, and preferences, to match talents with job opportunities that align with their qualifications and interests.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Communications:</strong>  We use personal data such as email addresses and phone numbers to communicate with you about your account, transactions, support inquiries, and promotional offers.

`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Analytics: </strong> We collect and analyze data about how you interact with our platform, such as page views, clicks, and session duration, to understand user behavior, improve our services, and optimize the performance of our platform.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Marketing:</strong> With your consent, we may use personal data to send you promotional communications about our products, services, and special offers. You can manage your communication preferences or opt out of marketing communications at any time.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Payment Processing:</strong> We use personal data such as billing information to process payments for premium services and subscriptions, verify transactions, and prevent fraudulent activities.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Customer Support:</strong>We use personal data provided in support inquiries to assist you with any issues or questions you may have, troubleshoot technical problems, and provide timely and effective customer support.



`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legal Compliance:</strong> We may use personal data to comply with legal obligations, such as tax reporting, regulatory requirements, or responding to lawful requests from law enforcement authorities or government agencies.


`,
          },
        ],
      },
    ],
  },
  {
    headingTwo: `Marketing and content updates`,
    memo: [
      {
        text: `At MySpurr, we believe in keeping our users informed about the latest developments, updates, and relevant content that can enhance their experience on our platform. Here's how we use your personal data for marketing and content updates:

`,
      },
      {
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Email Marketing:</strong> With your consent, we may use your email address to send you marketing communications, such as newsletters, product announcements, special offers, and promotional campaigns. These communications may contain valuable content, tips, and insights related to creativity, talent recruitment, job opportunities, and industry trends.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Personalized Recommendations:</strong> We may analyze your interactions with our platform, such as job searches, profile views, and engagement with content, to provide personalized recommendations and suggestions tailored to your interests, preferences, and past interactions. This may include recommending relevant job opportunities, talent profiles, blog articles, or events that align with your interests and expertise.
`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Content Updates: </strong> We regularly update our platform with new features, improvements, and content to enrich your experience and provide valuable resources. We may use your personal data to notify you about these updates and inform you of any changes or enhancements that may affect your use of our platform or services.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Targeted Advertising: </strong> We may use personal data to deliver targeted advertising or sponsored content that is relevant to your interests, preferences, and demographic characteristics. This helps us ensure that the advertising and content you see on our platform are tailored to your needs and interests.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Surveys and Feedback:</strong> We may invite you to participate in surveys, polls, or feedback requests to gather insights, opinions, and suggestions about our platform, services, and content. Your participation in these activities helps us understand your preferences, identify areas for improvement, and tailor our offerings to better meet your needs.

`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Opt-Out Options: </strong>You have the right to opt out of receiving marketing communications from us at any time. You can manage your communication preferences by updating your account settings or using the unsubscribe link provided in our marketing emails. Even if you opt out of marketing communications, you may still receive transactional or service-related communications that are necessary for the operation of our platform and services.

`,
          },
        ],
      },
    ],
  },

  {
    headingTwo: `Change of purpose`,
    memo: [
      {
        text: `At MySpurr, we are committed to ensuring transparency and accountability in our data processing practices, including any changes to the purposes for which we collect and use your personal data. Here's how we handle changes of purpose:
`,
      },
      {
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Notification:</strong>  If we intend to use your personal data for a new purpose not previously disclosed in our Privacy Policy, we will notify you before proceeding with the new processing activities. This notification may be provided through email, a notification on our platform, or other appropriate means.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Purpose Compatibility:</strong>We will assess whether the new purpose for processing your personal data is compatible with the original purpose for which it was collected. In determining compatibility, we consider factors such as the nature of the data, the context of the processing, and any reasonable expectations you may have regarding the use of your data.

`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legal Basis:  </strong>We will ensure that we have a valid legal basis for the new processing activities, as required by applicable data protection laws and regulations. This may include obtaining your consent, fulfilling contractual obligations, complying with legal obligations, or pursuing legitimate interests that are not overridden by your rights and interests.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Impact Assessment:  </strong> We will conduct a data protection impact assessment (DPIA) to evaluate the potential risks and implications of the new processing activities on your privacy rights and freedoms. If the assessment reveals significant risks, we will take appropriate measures to mitigate those risks and protect your data.

`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Opt-Out Options: </strong>If you object to the new purpose for processing your personal data, you have the right to object, and we will respect your preferences. In such cases, we will refrain from processing your data for the new purpose, unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Updated Privacy Policy:</strong> We will update our Privacy Policy to reflect any changes in the purposes for processing your personal data, along with any other relevant information about the new processing activities. It is important to review the updated Privacy Policy to understand how your data will be used and your rights in relation to it.


`,
          },
        ],
      },
    ],
  },
  {
    heading: "Your Rights and How You Are Protected by Us",
    headingTwo: `Your legal rights`,
    memo: [
      {
        text: `At MySpurr, we are dedicated to safeguarding your privacy and ensuring that you have control over your personal data. We respect your legal rights regarding your personal information, and we are committed to upholding these rights in accordance with applicable data protection laws and regulations. Here's an overview of your legal rights and how we protect them:

`,
      },
      {
        // text: `p`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Right to Information:</strong> You have the right to be informed about how your personal data is collected, used, and processed. Our Privacy Policy provides detailed information about our data processing practices, including the types of data we collect, the purposes for which we use your data, and your rights in relation to your data.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Right to Access: </strong>  You have the right to access your personal data held by us and receive information about how it is processed. If you would like to exercise this right, you can submit a request to us, and we will provide you with access to your data in a structured, commonly used, and machine-readable format.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Right to Rectification: </strong> You have the right to request the correction or updating of any inaccurate or incomplete personal data we hold about you. If you believe that any of your data is inaccurate or outdated, you can contact us to request rectification, and we will promptly update your information as necessary.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Right to Erasure: </strong> You have the right to request the deletion or removal of your personal data in certain circumstances, such as when the data is no longer necessary for the purposes for which it was collected or if you withdraw your consent for processing. We will assess your request and, if appropriate, delete your data in accordance with applicable legal requirements.

`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Right to Restriction of Processing: </strong> You have the right to request the restriction of processing of your personal data under certain conditions, such as when you contest the accuracy of the data or object to its processing. If processing is restricted, we will only continue to store your data and will not carry out any further processing activities without your consent.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Right to Object:</strong> You have the right to object to the processing of your personal data in certain situations, such as when the processing is based on legitimate interests or for direct marketing purposes. If you object to processing, we will assess your objection and, if appropriate, stop processing your data for the specified purposes.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Right to Data Portability: </strong> You have the right to receive a copy of your personal data in a structured, commonly used, and machine-readable format and to transmit that data to another controller, where technically feasible. This right applies to personal data that you have provided to us and that is processed based on your consent or for the performance of a contract.



`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Right to Withdraw Consent: </strong> If we rely on your consent as the legal basis for processing your personal data, you have the right to withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.


`,
          },
        ],
      },
    ],
  },
  {
    headingTwo: `How You Are Protected by Us:
`,
    memo: [
      {
        // text: `p`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. This includes encryption, access controls, regular security assessments, and employee training on data protection best practices.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Confidentiality:  </strong> Our employees and any third parties engaged in processing your data are bound by strict confidentiality obligations. We ensure that only authorized individuals have access to your data, and they are required to maintain its confidentiality at all times.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Legal Compliance: </strong> We comply with all legal and regulatory requirements related to data protection, including the General Data Protection Regulation (GDPR) and other applicable laws and regulations. We regularly review our data processing practices to ensure compliance with legal obligations and industry standards.



`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Transparency: </strong> We are committed to transparency in our data processing practices and provide clear and comprehensive information about how your personal data is collected, used, and protected in our Privacy Policy. We strive to communicate openly and transparently with our users about our data processing activities and any changes that may affect your privacy rights.


`,
          },
        ],
      },
    ],
  },
  {
    heading: "Your control over New Comma Ltd’s use of your ",
    headingTwo: `Personal Data`,
    memo: [
      {
        text: `At MySpurr, we understand the importance of giving you control over your personal data. We empower you to make informed decisions about how your information is collected, used, and shared. Here's how you can exercise control over MySpurr's use of your personal data:
`,
      },
      {
        // text: `p`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Consent:</strong> We obtain your consent before collecting and processing your personal data for specific purposes. You have the right to give or withdraw your consent at any time. If you choose to withdraw your consent, it may affect the availability or functionality of certain features on our platform.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Account Settings:  </strong>  You can manage your account settings to control the information you provide to us and how it is used. This includes updating your profile information, communication preferences, and privacy settings. You can choose to opt out of certain types of communications or data processing activities.

`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Access: </strong> You have the right to access the personal data we hold about you. You can request a copy of your data and information about how it is processed. We provide tools and mechanisms for you to access your data, review its accuracy, and request corrections or updates as needed.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Deletion:  </strong> You can request the deletion or removal of your personal data from our systems in certain circumstances. If you no longer wish to use our platform or have your data processed, you can request that we delete your account and associated data. However, please note that we may retain certain information as required by law or for legitimate business purposes.


`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Portability: </strong> You have the right to receive a copy of your personal data in a structured, commonly used, and machine-readable format and to transmit that data to another controller, where technically feasible. We provide tools and mechanisms for you to export your data and transfer it to other platforms or services.


`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Communication Preferences:</strong>You can manage your communication preferences to control the types of messages you receive from us. You can choose to opt in or opt out of promotional communications, newsletters, and marketing emails. We respect your preferences and strive to communicate with you in accordance with your wishes.



`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Privacy Controls: </strong>We offer privacy controls and settings that allow you to customize your privacy preferences and control who can access your information. You can adjust your privacy settings to limit the visibility of your profile, restrict access to certain information, or manage your interactions with other users.




`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Protection Rights: </strong>  You have legal rights regarding your personal data, including the right to rectification, restriction of processing, and objection to processing. If you have any questions, concerns, or requests regarding your data protection rights, you can contact us at any time, and we will assist you in exercising your rights.


`,
          },
        ],
      },
    ],
  },
  {
    heading: "How MySpurr Ltd protects customers' Personal Data",
    memo: [
      {
        text: `At MySpurr, we prioritize the protection of our customers' personal data through comprehensive measures designed to ensure its confidentiality, integrity, and security. We employ robust technical and organizational safeguards to safeguard against unauthorized access, disclosure, alteration, and destruction of personal information. These measures include encryption, access controls, regular security assessments, and employee training on data protection best practices. Additionally, we adhere strictly to applicable data protection laws and regulations, regularly review and update our policies and procedures to maintain compliance, and collaborate with trusted partners who share our commitment to privacy and security. Our unwavering dedication to protecting our customers' personal data underscores our commitment to fostering trust, transparency, and confidence in our platform and services.

`,
      },
    ],
  },
  {
    heading: "Opting out of marketing promotions",
    memo: [
      {
        text: `If you prefer not to receive marketing promotions from MySpurr, you can easily opt out by adjusting your communication preferences in your account settings. Simply navigate to the "Notifications" or "Email Preferences" section of your account dashboard, where you'll find options to manage your subscription settings. You can choose to unsubscribe from promotional emails, newsletters, and other marketing communications by deselecting the relevant checkboxes or clicking the "Unsubscribe" link provided in the footer of our emails. Please note that even if you opt out of marketing promotions, you may still receive transactional or service-related communications that are necessary for the operation of our platform and services. If you have any questions or need assistance with managing your communication preferences, feel free to contact us at [Contact Email Address]. We respect your choices and are here to support you.


`,
      },
    ],
  },
  {
    heading: "How to request your data and the process for obtaining it",
    memo: [
      {
        text: `To request your data from MySpurr, you can initiate the process by contacting our Data Protection Officer or Privacy Team through email or our designated communication channels. Please provide sufficient information to verify your identity and specify the details of your request, including the specific data you wish to access and the purpose of your request. Once we receive your request, we will promptly acknowledge receipt and guide you through the process of verifying your identity and confirming your request details. Upon successful verification, we will provide you with access to your data in a structured, commonly used, and machine-readable format, along with information about how it is processed. We strive to fulfill data access requests in a timely manner, usually within 30 days of receipt, although this timeframe may vary depending on the complexity of the request and applicable legal requirements. If you have any questions or need assistance with your data request, please do not hesitate to reach out to us, and we will be happy to assist you.

`,
      },
    ],
  },
  {
    heading: "Your Data and Third Parties ",
    headingTwo: `Sharing your data with third parties`,

    memo: [
      {
        text: `At MySpurr, we prioritize the protection and privacy of your data and are committed to handling it responsibly. We do not share your personal data with third parties for their marketing purposes without your explicit consent. However, to provide and improve our services, we may engage trusted third-party service providers, business partners, and affiliates who assist us in delivering our platform and services, such as hosting, analytics, customer support, payment processing, and marketing. We ensure that any third parties with whom we share your data are bound by contractual obligations to protect your privacy and only use your information for specified purposes consistent with our Privacy Policy and applicable data protection laws. We also may share aggregated or anonymized data for analytical purposes and industry insights, but such data does not identify you personally. If you have any questions or concerns about how your data is shared with third parties, please contact us at hello@myspurr.net, and we will be happy to assist you.

`,
      },
    ],
  },
  {
    headingTwo: "Third-Party Links",

    memo: [
      {
        text: `While using MySpurr's platform and services, you may encounter links to third-party websites, applications, or services that are not operated or controlled by us. These third-party links are provided for your convenience and may include content or services that are independent of MySpurr's offerings. We do not endorse or assume any responsibility for the content, privacy practices, or security of third-party websites or services. Your interactions with third-party links are governed by the terms of use and privacy policies of those sites, which may differ from MySpurr's policies. We encourage you to review the privacy practices of any third-party sites or services before providing them with your personal information.
`,
      },
    ],
  },
  {
    headingTwo: "How Long We Retain Your Data",

    memo: [
      {
        text: `At MySpurr, we retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, as outlined in our Privacy Policy, or as required by applicable laws and regulations. The specific retention period for your data depends on various factors, including the type of data, the purposes for which it is processed, and any legal or contractual obligations. We regularly review our data retention practices to ensure that we only retain personal data for as long as necessary to achieve the purposes for which it was collected. Once your data is no longer needed for the purposes for which it was collected, we will securely delete or anonymize it in accordance with our data retention policies and procedures.
`,
      },
    ],
  },
  {
    headingTwo: "Age Limit For Our Users",

    memo: [
      {
        text: `At MySpurr, our platform is intended for use by individuals who are at least 18 years old or the age of majority in their jurisdiction, whichever is higher. We do not knowingly collect personal information from individuals under the age of 18 without parental consent. If we become aware that we have inadvertently collected personal data from an individual under the applicable age limit without proper consent, we will take steps to promptly delete the information from our records. We encourage parents and guardians to supervise their children's online activities and to help us enforce our age restrictions.
`,
      },
    ],
  },
  {
    headingTwo: "International Transfer of Data",

    memo: [
      {
        text: `At MySpurr, we may transfer your personal data to countries outside of your country of residence, including countries that may have different data protection laws than those in your jurisdiction. When we transfer your data internationally, we take appropriate measures to ensure that your information is adequately protected in accordance with applicable data protection laws. This may include implementing standard contractual clauses, obtaining your explicit consent, or relying on other legal mechanisms recognized by relevant authorities to ensure the lawful transfer of data. Regardless of where your data is transferred, we remain committed to safeguarding your privacy rights and protecting your personal information with the highest standards of security and confidentiality. If you have any questions or concerns about international data transfers or how your data is protected, please contact us at [Contact Email Address].
`,
      },
    ],
  },
  {
    headingTwo: "Notification of Changes and Acceptance of Policy",

    memo: [
      {
        text: `We will notify you of any changes to our Privacy Policy through email, notifications on our platform, or other appropriate means, and by updating the "Last Updated" date at the top of the Privacy Policy. By continuing to use our platform after the changes come into effect, you indicate your acceptance of the revised Privacy Policy. It's important to review the Privacy Policy periodically to stay informed about how we collect, use, and protect your personal data. If you do not agree with any changes to the Privacy Policy, you should discontinue using our platform and contact us with any concerns.
`,
      },
    ],
  },
  {
    headingTwo: "Interpretation",

    memo: [
      {
        text: `Interpretation of this section on "Your Control Over MySpurr's Use of Your Personal Data" signifies the paramount importance placed on empowering users with autonomy and agency regarding their personal information within the MySpurr platform. By delineating various avenues through which users can exercise control, such as consent management, account settings, data access, deletion requests, data portability, communication preferences, privacy controls, and data protection rights, the section underscores MySpurr's commitment to transparency, user-centricity, and data privacy. It embodies a proactive approach to data governance, aiming to foster trust, accountability, and respect for user privacy by providing users with the tools and mechanisms needed to make informed decisions about the handling of their personal data.
`,
      },
    ],
  },
  {
    headingTwo: "Terms of Use",

    memo: [
      {
        text: `Please also see our Terms of Use  <a href="/terms-and-conditions"
      >(https://myspurr.net/terms-and-conditions)</a
    >
 which set out the terms, disclaimers, and limitations of liability governing your use of MySpurr.
If you have any questions about this Privacy Policy, please contact us at hello@myspurr.net

`,
      },
    ],
  },
];
</script>

<template>
  <Navbar />
  <div
    class="lg:h-[406px] px-8 py-12 lg:p-0 bg-[#00474F] lg:flex lg:justify-center items-center mb-16"
  >
    <div class="lg:w-4/6">
      <div class="text-gray-100 text-center mb-8 font-Satoshi700 text-2xl lg:text-5xl">
        Privacy Policy
      </div>
    </div>
  </div>
  <div class="text-[#333333] container md:gap-16 md:my-16 md:items-center">
    <div>
      <p class="text-[18px] font-Satoshi400 ml-4 mb-4">
        This Privacy Policy governs the manner in which MySpurr collects, uses, maintains,
        and discloses information collected from users (each, a "User") of the MySpurr
        website (the "Site") and any related services, features, or content provided by
        MySpurr (collectively, the "Service").
      </p>
      <div v-for="content in data" :key="content">
        <h3 class="font-Satoshi700 text-[25px] !mb-4 !mt-10">{{ content.heading }}</h3>
        <h3 class="font-Satoshi700 text-[22px] !mb-4">{{ content.headingTwo }}</h3>
        <div>
          <ol class="pl-2 justify list-none">
            <li
              class="!mb-4 font-Satoshi400 text-[18px] leading-7"
              v-for="memotxt in content.memo"
              :key="memotxt"
            >
              <p class="!mt-4" v-html="memotxt.text"></p>
              <h3 class="font-Satoshi700 text-[20px]">{{ memotxt.textTwo }}</h3>
              <ol class="list-decimal">
                <li v-for="list in memotxt.subtext" :key="list">
                  <p v-html="list.item"></p>
                  <ol class="list-disc !mt-3">
                    <li v-for="i in list.memo" :key="i" v-html="i.item"></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
