<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
const data = [
  {
    heading: "Information About Us",
    memo: [
      {
        text: `Our Services are operated by Trigon Media Limited ('We', 'Us' or 'Trigon Media Limited'). We are a private limited company registered in Nigeria under the company number 1866752 and our registered office is at Plot 228, 1 (R), 32 Road FHA, Lugbe, FCT, NIGERIA.  `,
      },
    ],
  },
  {
    heading: "Other Applicable Terms",
    memo: [
      {
        text: `These Terms refer to the following additional terms, which also apply to your use of our Services:`,
      },
      {
        subtext: [
          {
            item: `Our Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our Services, you consent to such processing and you warrant that all data provided by you is accurate.
`,
          },
        ],
      },
    ],
  },
  {
    heading: "Eligibility and Services Void Where Prohibited",
    memo: [
      {
        text: `You must be 16 years or older to use our services (hereinafter: Services). Use of the Services is void where prohibited. By using the Services, you represent and warrant that you have the right, authority, and capacity to enter into this Agreement and to abide by all these Terms.`,
      },
    ],
  },
  {
    heading: "Description of Services ",
    memo: [
      {
        text: `MySpurr is a dynamic platform designed to connect creative talents with businesses and job opportunities across various industries. Through our platform, users can access a wide range of services and features aimed at facilitating the recruitment process and fostering collaboration within the creative community. `,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Talent Search and Recruitment:</strong> MySpurr provides businesses with the tools and resources to search for and recruit top creative talents from Africa and beyond. Users can browse through profiles, portfolios, and job postings to identify candidates that match their specific needs and criteria.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Job Posting and Application:</strong> Businesses can post job openings on MySpurr, detailing job descriptions, requirements, and any other relevant information. Creative talents can then browse and apply for these opportunities directly through the platform, streamlining the hiring process for both parties.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Networking and Collaboration: </strong> MySpurr serves as a networking hub where talents and businesses can connect, communicate, and collaborate on various projects and initiatives. Users can send messages, share ideas, and form professional relationships to further their creative endeavors.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Portfolio Showcase:</strong> Creative talents have the opportunity to showcase their work and achievements through personalized portfolios on MySpurr. This allows them to highlight their skills, experiences, and previous projects, making it easier for businesses to assess their suitability for specific roles.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Educational Resources: </strong> MySpurr offers educational resources and insights to support the professional development of talents within the creative industry. This may include articles, webinars, and other forms of content aimed at enhancing skills, knowledge, and career opportunities.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Secure Payment Processing: </strong> MySpurr facilitates secure payment processing for subscription fees, job postings, and other transactions conducted on the platform. We prioritize the security and privacy of our users' financial information, ensuring a safe and reliable payment experience.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Customer Support:</strong> Our dedicated customer support team is available to assist users with any inquiries, issues, or concerns they may have while using the MySpurr platform. We are committed to providing timely and effective support to ensure a positive user experience for all.`,
          },
        ],
      },
    ],
  },
  {
    heading: "Acknowledgement and Acceptance of Terms of Service",
    memo: [
      {
        text: `By accessing or using the MySpurr platform (the "Platform"), you acknowledge and agree to be bound by these Terms of Service ("Terms"). These Terms govern your use of the Platform and any services provided therein, including but not limited to browsing, posting, and interacting with content. `,
      },
      {
        text: ` You acknowledge that these Terms constitute a legally binding agreement between you and MySpurr. If you do not agree to these Terms in their entirety, you may not access or use the Platform. Your continued use of the Platform indicates your acceptance of these Terms.`,
      },
      {
        text: ` You understand and agree that MySpurr reserves the right to modify, amend, or update these Terms at any time without prior notice. It is your responsibility to review these Terms periodically to stay informed of any changes. Your continued use of the Platform after the posting of any modifications to these Terms constitutes acceptance of those changes.`,
      },
      {
        text: `You affirm that you are of legal age to enter into this agreement or that you have obtained parental or guardian consent to do so. If you are accessing or using the Platform on behalf of a company or organization, you warrant that you have the authority to bind such entity to these Terms.`,
      },
      {
        text: `By accepting these Terms, you also agree to comply with all applicable laws and regulations governing your use of the Platform. You acknowledge that you are solely responsible for your conduct while using the Platform and for any content you upload, post, or transmit through the Platform.`,
      },
      {
        text: `If you have any questions or concerns regarding these Terms of Service, please contact us at hello@myspurr.net`,
      },
    ],
  },
  {
    heading: "General Terms of Service",
    memo: [
      {
        text: ` `,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Acceptance of Terms: </strong> By accessing or using the MySpurr platform and its services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use the platform.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Eligibility: </strong>  You must be at least 18 years old and have the legal capacity to enter into agreements in your jurisdiction to use MySpurr. By using the platform, you represent and warrant that you meet these eligibility requirements.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Account Registration: </strong> To access certain features of MySpurr, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">User Conduct:  </strong> You agree to use MySpurr only for lawful purposes and in accordance with these Terms of Service. You may not engage in any conduct that violates the rights of others, infringes on intellectual property rights, or is harmful, threatening, or abusive. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Content:  </strong> MySpurr may allow users to post, submit, or transmit content, including but not limited to job postings, profiles, and messages. You retain ownership of any content you submit, but by posting content on MySpurr, you grant us a non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Intellectual Property:  </strong> The MySpurr platform, including its design, graphics, logos, and trademarks, are owned or licensed by us and are protected by copyright, trademark, and other intellectual property laws. You may not use, copy, or distribute any content from MySpurr without our prior written consent. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Privacy:  </strong> Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose your personal information when you use MySpurr. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Termination:  </strong> We reserve the right to terminate or suspend your access to MySpurr at any time and for any reason, without prior notice. Upon termination, your right to use the platform will immediately cease. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Disclaimer of Warranties: </strong>  MySpurr is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We do not warrant that the platform will be uninterrupted, error-free, or free from viruses or other harmful components. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Limitation of Liability:  </strong> In no event shall MySpurr or its affiliates be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the platform, even if we have been advised of the possibility of such damages. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Governing Law:  </strong> These Terms of Service shall be governed by and construed in accordance with the laws of Abuja, Nigeria, without regard to its conflict of law principles. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Changes to Terms:</strong>  We reserve the right to modify or update these Terms of Service at any time, without prior notice. Your continued use of MySpurr after any changes to these terms will constitute your acceptance of such changes.`,
          },
        ],
      },
      {
        text: ` If you have any questions or concerns about these Terms of Service, please contact us at [Contact Email]. Thank you for using MySpurr.`,
      },
    ],
  },
  {
    heading: "Changes To These Terms",
    memo: [
      {
        text: `MySpurr reserves the right, at its sole discretion, to modify or replace these Terms and Conditions at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.`,
      },
      {
        text: `By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
`,
      },
      {
        text: `We encourage you to periodically review these Terms and Conditions to stay informed of updates. Your continued use of the Service after the posting of any modifications to these Terms and Conditions will constitute your acceptance of such changes.`,
      },
    ],
  },
  {
    heading: "Community Guidelines",
    memo: [
      {
        text: ` At MySpurr, we value creating a safe, inclusive, and supportive community for all our users. Our community guidelines are designed to ensure that everyone can participate in a positive and respectful environment. By using MySpurr, you agree to abide by the following guidelines:`,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Respectful Conduct: </strong>Treat all members of the MySpurr community with respect and kindness. Do not engage in any form of harassment, discrimination, hate speech, or offensive behavior towards others based on their race, ethnicity, gender, sexual orientation, religion, disability, or any other characteristic. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Professionalism:  </strong>Maintain a professional demeanor in all interactions on MySpurr. This includes communicating politely and professionally, refraining from using inappropriate language or content, and conducting yourself in a manner that reflects positively on yourself and the MySpurr community. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Intellectual Property:  </strong>  Respect the intellectual property rights of others. Do not post or share content that infringes upon copyright, trademark, or other intellectual property rights without proper authorization. If you believe your intellectual property rights have been violated, please contact us immediately.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Authenticity:  </strong>Be truthful and transparent in your interactions on MySpurr. Do not misrepresent yourself, your qualifications, or your intentions. Avoid creating fake profiles, posting misleading information, or engaging in any form of deceptive practices. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Collaboration:  </strong>Foster a spirit of collaboration and cooperation within the MySpurr community. Support and encourage fellow users, offer constructive feedback, and be open to learning from others. Share your knowledge and expertise generously to contribute to the growth and success of the community as a whole. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Compliance: </strong>Adhere to all applicable laws, regulations, and MySpurr's terms of service. Do not engage in any activities that violate legal or ethical standards, including but not limited to spamming, phishing, or engaging in fraudulent behavior. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Reporting: </strong> If you encounter any behavior that violates these community guidelines or raises concerns about safety or integrity, please report it to MySpurr immediately. We take all reports seriously and will take appropriate action to address any violations and maintain the integrity of our community. `,
          },
        ],
      },
      {
        text: `By following these community guidelines, you help create a positive and welcoming environment where everyone can thrive and succeed. Thank you for being a valued member of the MySpurr community.`,
      },
    ],
  },
  {
    heading: "Pricing Errors",
    memo: [
      {
        text: `In the event that MySpurr displays an incorrect price for any service or subscription plan due to a typographical or technical error, we reserve the right to refuse or cancel any orders placed for that service or subscription plan at the incorrect price. `,
      },
      {
        text: `If your order or subscription plan is cancelled due to a pricing error, we will notify you as soon as possible and provide you with the opportunity to purchase the service or subscription plan at the correct price, if available.
`,
      },
      {
        text: `MySpurr strives to provide accurate and up-to-date pricing information at all times, but we acknowledge that errors may occasionally occur. We apologize for any inconvenience this may cause and appreciate your understanding. `,
      },
      {
        text: `Please note that pricing errors are subject to correction without notice, and MySpurr reserves the right to modify prices or discontinue services or subscription plans at any time.
`,
      },
    ],
  },
  {
    heading: "Fees & Payment for Services",
    memo: [
      {
        text: ``,
        subtext: [
          {
            text: `<strong class="font-Satoshi700 font-extrabold"> Subscription Fees:</strong> `,
            memo: [
              {
                item: `MySpurr offers subscription-based services to both talents and businesses for accessing premium features and functionalities on the platform.`,
              },
              {
                item: `Subscription fees are determined based on the selected subscription plan and are payable on a monthly or annual basis.`,
              },
              {
                item: `Users are required to provide valid payment information and authorize recurring payments for the selected subscription plan.`,
              },
            ],
          },
          {
            text: `<strong class="font-Satoshi700 font-extrabold">Job Posting Fees:</strong> `,
            memo: [
              {
                item: `Businesses have the option to post job openings on the MySpurr platform for a nominal fee per job post.`,
              },
              {
                item: `Job posting fees are charged at the time of posting and are non-refundable, regardless of the outcome of the job posting.`,
              },
            ],
          },
          {
            text: `<strong class="font-Satoshi700 font-extrabold">Transaction Fees:</strong> `,
            memo: [
              {
                item: `MySpurr may charge transaction fees for certain services facilitated through the platform, such as payments for freelance projects or collaborations.`,
              },
              {
                item: `Transaction fees are deducted from the total payment amount before disbursing funds to the recipient.`,
              },
            ],
          },
          {
            text: `<strong class="font-Satoshi700 font-extrabold">Payment Methods:</strong> `,
            memo: [
              {
                item: `Users can make payments for subscription fees, job posting fees, and transaction fees using supported payment methods, including credit/debit cards, bank transfers, and other electronic payment methods.`,
              },
              {
                item: `MySpurr may partner with third-party payment processors to facilitate secure and efficient payment processing.
`,
              },
            ],
          },

          {
            text: `<strong class="font-Satoshi700 font-extrabold">Billing and Invoicing:</strong> `,
            memo: [
              {
                item: `Users will receive invoices or billing statements for subscription fees, job posting fees, and transaction fees, detailing the amount due and the payment due date.`,
              },
              {
                item: `It is the user's responsibility to ensure timely payment of all fees and charges associated with their use of MySpurr's services.
`,
              },
            ],
          },
          {
            text: `<strong class="font-Satoshi700 font-extrabold">Currency and Taxes:</strong> `,
            memo: [
              {
                item: `All fees and charges displayed on the MySpurr platform are in the local currency of the user's region, unless otherwise specified.`,
              },
              {
                item: `Users may be subject to additional taxes, such as value-added tax (VAT) or goods and services tax (GST), depending on their location and applicable tax regulations.`,
              },
            ],
          },
          {
            text: `<strong class="font-Satoshi700 font-extrabold">Fee Changes:</strong> `,
            memo: [
              {
                item: `MySpurr reserves the right to modify subscription fees, job posting fees, transaction fees, and other charges at any time, with or without prior notice to users.`,
              },
              {
                item: `Users will be notified of any changes to fees or charges through the MySpurr platform or via email.`,
              },
            ],
          },
          {
            text: `<strong class="font-Satoshi700 font-extrabold">Refunds and Cancellations:</strong> `,
            memo: [
              {
                item: `Subscription fees and job posting fees are non-refundable, except as required by applicable law or as expressly stated in MySpurr's refund policy.`,
              },
              {
                item: `Users may cancel their subscription at any time, but no refunds will be provided for any unused portion of the subscription period.`,
              },
            ],
          },
        ],
      },
      {
        text: `By using MySpurr's services and agreeing to these Terms and Conditions, users acknowledge and accept the fees and payment terms outlined above. It is important for users to review and understand these terms before accessing or using the platform's services.`,
      },
    ],
  },
  {
    heading: "Collection of Payment",
    memo: [
      {
        text: `Accepted methods of payment include, Visa, MasterCard and American Express debit or credit cards via Stripe.`,
      },
    ],
  },
  {
    heading: "Transfer of Funds",
    memo: [
      {
        text: ``,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Consent:</strong> <br/> MySpurr facilitates the collection of subscription payments from users who opt for premium services or features on the platform. By using our payment processing services, users authorize MySpurr to initiate charges to their designated payment method on a recurring basis, according to the selected subscription plan. Users are responsible for ensuring that their payment information is accurate and up-to-date to avoid any interruption in service.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Job Posting Fees:</strong> <br/> Users who choose to post job openings on MySpurr may be required to pay a fee for each job post. MySpurr reserves the right to determine the applicable fees for job postings, which may vary based on factors such as the type of job, duration of the posting, and additional promotional features selected by the user. Payment for job postings is processed at the time of posting and is non-refundable, except as expressly provided in our refund policy.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Payment Processing:</strong><br/> MySpurr utilizes third-party payment processors to securely handle all financial transactions on the platform. Users may be required to provide payment information, such as credit card details or bank account information, to complete transactions. By providing such information, users authorize MySpurr and its payment processors to process payments on their behalf in accordance with the terms and conditions of use of the respective payment processor.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Currency and Exchange Rates:</strong><br/>All transactions on MySpurr are processed in the currency specified by the user during the payment process. Users are responsible for any currency conversion fees or exchange rate fluctuations that may apply to their transactions, as determined by their financial institution or payment provider. MySpurr is not liable for any discrepancies or additional charges incurred due to currency conversion.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Payment Disputes and Refunds:</strong><br/>In the event of a payment dispute or request for a refund, users should contact MySpurr's customer support team for assistance. MySpurr will review each request on a case-by-case basis and may issue refunds or credits at its discretion, subject to the terms outlined in our refund policy. Users agree to cooperate with MySpurr in resolving any payment-related issues promptly and in good faith.`,
          },
        ],
      },
      {
        text: `By using MySpurr's payment processing services, users agree to comply with all applicable terms and conditions, including those set forth in this section on Transfer of Funds. MySpurr reserves the right to modify or update these terms at any time, and users are encouraged to review them regularly for changes.`,
      },
    ],
  },
  {
    heading: "Chargebacks",
    memo: [
      {
        text: `In the event of a chargeback initiated by a user for a payment made to MySpurr, the user agrees to promptly contact MySpurr's customer support team to resolve the issue. MySpurr reserves the right to suspend or terminate the user's account until the chargeback dispute is resolved satisfactorily. Additionally, the user acknowledges and agrees that any chargebacks initiated without prior communication with MySpurr may result in the user being held liable for any associated fees or expenses incurred by MySpurr. Furthermore, MySpurr may pursue legal action to recover any outstanding amounts owed as a result of chargebacks, including but not limited to collection efforts and legal fees.`,
      },
    ],
  },
  {
    heading: "Cancellation Policy for Services",
    memo: [
      {
        text: ``,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Cancellation by MySpurr:</strong> <br/> MySpurr reserves the right to cancel services provided to users under certain circumstances, including but not limited to:`,
            memo: [
              {
                item: `Violation of MySpurr's terms of service or community guidelines.`,
              },
              {
                item: `Non-payment or defaulting on payment obligations.`,
              },
              {
                item: `Engagement in fraudulent activities or misuse of the platform.`,
              },
            ],
            item2: `  In the event of cancellation by MySpurr, users will be notified promptly, and any prepaid fees for services not rendered will be refunded according to the refund policy outlined in the Terms of Service.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Refund Policy:
            </strong> <br/>`,
            memo: [
              {
                item: `Refunds for cancelled services will be processed in accordance with the refund policy specified in the Terms of Service or applicable service agreement.`,
              },
              {
                item: `Users may be eligible for a partial or full refund of prepaid fees for services not rendered, depending on the timing and circumstances of the cancellation.`,
              },
              {
                item: `Refunds will be issued using the original method of payment, unless otherwise agreed upon by both parties.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Cancellation Fees:</strong> <br/>`,
            memo: [
              {
                item: `MySpurr may impose cancellation fees or charges for cancelled services, as outlined in the service agreement or subscription plan.`,
              },
              {
                item: `Users are responsible for any applicable cancellation fees or charges incurred as a result of cancelling services provided by MySpurr.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Cancellation Process:</strong> <br/>`,
            memo: [
              {
                item: `Users are required to follow the cancellation process specified by MySpurr, which may include submitting a cancellation request through the platform or contacting customer support.`,
              },
              {
                item: `MySpurr will acknowledge receipt of the cancellation request and provide confirmation of the cancellation once processed.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Effect of Cancellation:</strong> <br/>`,
            memo: [
              {
                item: `Upon cancellation of services, users may lose access to certain features or functionalities provided by MySpurr.`,
              },
              {
                item: `Users are responsible for backing up any data or content stored on the platform before cancelling services, as MySpurr may not be able to recover lost data after cancellation.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Changes to the Cancellation Policy:</strong> <br/>`,
            memo: [
              {
                item: `MySpurr reserves the right to modify or update the cancellation policy for services at any time, without prior notice.`,
              },
              {
                item: `Users will be notified of any changes to the cancellation policy through the platform or via email.`,
              },
            ],
          },
        ],
      },
      {
        text: ` By using MySpurr's services, users agree to abide by the terms and conditions of the cancellation policy outlined above. For further information or clarification regarding the cancellation policy, users may contact MySpurr's customer support team.`,
      },
    ],
  },
  {
    heading: "Accounts and Membership",
    memo: [
      {
        text: `By creating an account on MySpurr, you agree to provide accurate and complete information about yourself or your business. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must promptly notify us of any unauthorized use of your account or any other breach of security. MySpurr reserves the right to suspend or terminate your account at any time if we believe that you have violated these Terms and Conditions or engaged in any fraudulent, abusive, or illegal activities on the platform. Additionally, MySpurr may refuse service, terminate accounts, or remove or edit content at our discretion. Membership on MySpurr is subject to our approval, and we reserve the right to refuse or revoke membership to anyone for any reason at any time.`,
      },
    ],
  },
  {
    heading: "Breaches of security.",
    memo: [
      {
        text: `Breaches of security: MySpurr takes the security of our platform and user data very seriously. Any attempts to breach our security measures, including but not limited to unauthorized access to user accounts, hacking, phishing, or any other form of cyber attack, will result in immediate action. This may include suspension or termination of the user's account, notification of law enforcement authorities, and pursuit of legal action to the fullest extent permitted by law. We employ robust security protocols and continuously monitor our systems to prevent and respond to security breaches effectively. Users are also responsible for maintaining the security of their accounts and must report any suspicious activity or potential security vulnerabilities to MySpurr immediately.`,
      },
    ],
  },
  {
    heading: "User Generated Content",
    memo: [
      {
        text: `In compliance with our Terms and Conditions, User Generated Content refers to any material, including but not limited to text, images, videos, or audio files, that users contribute or post on the MySpurr platform. By submitting User Generated Content, users grant MySpurr a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and sublicensable license to use, reproduce, adapt, modify, distribute, publish, publicly display, and perform the content in connection with the operation and promotion of the MySpurr platform. Users are solely responsible for the content they submit and must ensure that it complies with applicable laws and regulations, as well as our Community Guidelines. MySpurr reserves the right to remove or refuse to publish any User Generated Content that violates our policies or may infringe upon the rights of others. We encourage users to report any inappropriate or infringing content to us promptly.`,
      },
    ],
  },
  {
    heading: "Grant of Limited License",
    memo: [
      {
        text: `Under the "Grant of Limited License" section in the MySpurr Terms and Conditions, the content could be structured as follows:`,
      },
      {
        text: `By accepting these Terms and Conditions, you are granted a limited, revocable, non-exclusive, and non-transferable license to access and use the MySpurr platform and its services solely for your personal or internal business purposes. This license does not grant you any rights to sublicense, sell, modify, reproduce, distribute, or exploit any portion of the platform or its content without prior written consent from MySpurr. Additionally, you agree not to engage in any unauthorized use of the platform, including but not limited to circumventing security measures, interfering with the functionality of the platform, or accessing the platform using automated means. MySpurr reserves the right to revoke this license at any time without notice if you violate these Terms and Conditions or engage in any prohibited activities.
`,
      },
    ],
  },
  {
    heading: "Terms of Service for Resumes and Recommended Jobs",
    memo: [
      {
        text: `By uploading your resume to MySpurr, you grant us the non-exclusive, worldwide right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display your resume in any media. You also represent and warrant that you have the right to grant such license to us, and that your resume does not violate any third-party rights or contain any unlawful material. MySpurr reserves the right to remove any resume that violates these terms or is deemed inappropriate, without prior notice. Additionally, you acknowledge that MySpurr does not guarantee the accuracy, completeness, or suitability of any resume posted on the platform, and you agree to use the information provided in resumes at your own risk.`,
      },
      {
        text: `MySpurr uses algorithms and user-provided data to recommend jobs that may be of interest to you based on your profile information, preferences, and activity on the platform. While we strive to provide relevant job recommendations, we cannot guarantee the accuracy or suitability of any recommended jobs. It is your responsibility to review and assess the job opportunities presented to you, and to apply for positions that align with your skills, qualifications, and career goals. MySpurr is not liable for any decisions made based on our job recommendations, and we encourage users to conduct their own research and due diligence before applying to any position. Additionally, you may adjust your job preferences and opt-out of job recommendations at any time through your account settings.
`,
      },
    ],
  },
  {
    heading: "Terms of Service for Job Seekers",
    memo: [
      {
        text: ``,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Eligibility:</strong> <br/> By using the MySpurr platform as a job seeker, you affirm that you are at least 18 years of age or have reached the legal age of majority in your jurisdiction. You also acknowledge that you have the legal capacity to enter into these Terms of Service.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> User Account:</strong> <br/>You are required to create a user account to access certain features of the MySpurr platform as a job seeker. You agree to provide accurate and truthful information during the registration process and to keep your account information updated. You are solely responsible for maintaining the confidentiality of your account credentials and for any activities conducted through your account.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Job Search and Applications:</strong><br/> MySpurr provides a platform for job seekers to browse and apply for job openings posted by businesses and employers. You agree to use the platform solely for lawful purposes and to comply with all applicable laws and regulations. You understand that MySpurr does not guarantee the accuracy, completeness, or availability of job listings and is not responsible for the actions or decisions of businesses or employers.
`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Communication and Interaction:</strong><br/>While using the MySpurr platform, you may have the opportunity to communicate with businesses, employers, and other users. You agree to engage in respectful and professional communication and to refrain from any unlawful, abusive, or harassing behavior. MySpurr reserves the right to remove any content or terminate accounts that violate these guidelines.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Intellectual Property:</strong><br/>All content and materials provided on the MySpurr platform, including job listings, profiles, and user-generated content, are protected by intellectual property rights. You agree not to reproduce, distribute, modify, or create derivative works based on such content without prior written consent from MySpurr or the respective rights holders.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Privacy and Data Protection:</strong><br/> MySpurr values your privacy and is committed to protecting your personal information. By using the platform, you consent to the collection, use, and disclosure of your personal data as described in the MySpurr Privacy Policy. You also acknowledge that businesses and employers may have access to certain information provided in your profile and job applications.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold"> Disclaimer of Warranties:
</strong><br/> MySpurr provides the platform on an "as is" and "as available" basis, without any warranties or representations of any kind, express or implied. We do not guarantee the accuracy, reliability, or completeness of any content or materials on the platform, and we disclaim any liability for errors or omissions.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Limitation of Liability:
</strong><br/>In no event shall MySpurr be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the platform, including but not limited to loss of profits, data, or goodwill. Our total liability to you for all claims arising under these Terms of Service shall not exceed the amount paid by you, if any, to use the platform.`,
          },
        ],
      },
    ],
  },
  {
    heading: "Terms of Service for Job Listings",
    memo: [
      {
        text: `Welcome to MySpurr! These Terms of Service govern the use of our platform for posting and managing job listings. By using our services to create, edit, or manage job listings, you agree to comply with these terms. Please read them carefully before proceeding.`,
      },
      {
        text: ``,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Job Listing Content:</strong>`,
            memo: [
              {
                item: `When posting job listings on MySpurr, you agree to provide accurate and truthful information about the job opportunity, including the job title, description, requirements, and any other relevant details.`,
              },
              {
                item: `You agree not to post any misleading, fraudulent, or deceptive job listings on our platform.
`,
              },
              {
                item: `MySpurr reserves the right to review and moderate all job listings to ensure compliance with our community guidelines and standards.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">User Responsibilities:</strong>`,
            memo: [
              {
                item: `As the user posting the job listing, you are responsible for managing and maintaining the accuracy and relevance of the listing throughout its duration.
`,
              },
              {
                item: `You agree to promptly update or remove job listings that are no longer available or have been filled to avoid misleading applicants.
`,
              },
              {
                item: `Users are responsible for adhering to all applicable laws and regulations when posting job listings on MySpurr.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Applicant Communication:</strong>`,
            memo: [
              {
                item: `By posting job listings on MySpurr, you agree to receive communications from potential applicants interested in the job opportunity.
`,
              },
              {
                item: `You agree to respond to applicant inquiries and communications in a timely and professional manner.`,
              },
            ],
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Payment and Fees:</strong>`,
            memo: [
              {
                item: `MySpurr may charge fees for posting job listings on our platform. These fees will be clearly outlined at the time of posting and are subject to change at MySpurr's discretion.`,
              },
              {
                item: `By posting a job listing, you agree to pay any applicable fees associated with the service.`,
              },
            ],
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Privacy and Data Protection:</strong><br/> MySpurr takes privacy and data protection seriously. Any personal information collected through job listings, including applicant information, will be handled in accordance with our Privacy Policy.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Termination of Listings:</strong>`,
            memo: [
              {
                item: `MySpurr reserves the right to remove or terminate any job listings that violate these Terms of Service or our community guidelines.`,
              },
              {
                item: `Users who repeatedly violate our terms may have their posting privileges revoked or their account suspended or terminated.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Disclaimer:</strong>`,
            memo: [
              {
                item: `MySpurr does not guarantee the accuracy, completeness, or suitability of job listings posted on our platform. Users are encouraged to conduct their own due diligence before applying to or accepting any job opportunities found on MySpurr.
`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Modification of Terms:</strong><br/>MySpurr reserves the right to modify or update these Terms of Service for Job Listings at any time without prior notice. Continued use of our platform constitutes acceptance of any changes made to these terms.
`,
          },
        ],
      },
    ],
  },
  {
    heading: "Terms of Service for Job Advertisements",
    memo: [
      {
        text: ``,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Accuracy of Information:
</strong><br/>MySpurr strives to ensure the accuracy of all job advertisements posted on the platform. However, we cannot guarantee the accuracy, completeness, or reliability of the information provided by employers. It is the responsibility of employers to ensure that job advertisements are truthful, accurate, and compliant with relevant laws and regulations.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Verification of Employers:</strong><br/>MySpurr conducts basic verification checks on employers who post job advertisements on the platform. However, we do not guarantee the legitimacy or credibility of all employers. Users are encouraged to exercise caution and conduct their own due diligence when interacting with employers and applying for job opportunities.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Third-Party Links and Content:
</strong><br/> Job advertisements on MySpurr may contain links to third-party websites or content. MySpurr does not endorse or assume responsibility for the content, accuracy, or policies of these third-party websites. Users access these links and content at their own risk, and MySpurr is not liable for any damages or losses incurred as a result of accessing third-party content.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Job Application Process:</strong><br/>MySpurr provides a platform for users to view and apply for job advertisements posted by employers. The job application process is facilitated through the MySpurr platform, and users may be required to provide personal information and documents as part of their application. By applying for a job through MySpurr, users consent to the collection, storage, and use of their personal information by both MySpurr and the employer.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">User Responsibilities:</strong><br/> Users are responsible for conducting their own research and due diligence before applying for job opportunities posted on MySpurr. This includes verifying the legitimacy of employers, assessing the accuracy of job descriptions, and evaluating the terms and conditions of employment. MySpurr is not responsible for any disputes, misunderstandings, or issues that may arise between users and employers.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Reporting Misconduct:</strong><br/>MySpurr takes reports of misconduct or fraudulent activity seriously. Users who encounter suspicious job advertisements, fraudulent employers, or other violations of our terms and conditions are encouraged to report them to MySpurr immediately. We will investigate reported incidents and take appropriate action in accordance with our policies.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Modification of Job Advertisements:</strong><br/>Employers have the right to modify or remove job advertisements posted on MySpurr at any time. MySpurr reserves the right to remove or suspend job advertisements that violate our terms and conditions or that are deemed inappropriate or misleading. Users will be notified of any changes or removals in accordance with our notification policies.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Modification of Terms:</strong><br/>MySpurr reserves the right to modify or update these Terms of Service for Job Listings at any time without prior notice. Continued use of our platform constitutes acceptance of any changes made to these terms.
`,
          },
        ],
      },
    ],
  },
  {
    heading: "Linked Sites",
    memo: [
      {
        text: `Linked Sites: MySpurr may contain links to third-party websites or services ("Linked Sites") that are not owned or controlled by MySpurr. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any Linked Sites. You acknowledge and agree that MySpurr shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any Linked Sites. We encourage you to read the terms and conditions and privacy policies of any Linked Sites that you visit.`,
      },
    ],
  },
  {
    heading: "Advertisers and Sponsors",
    memo: [
      {
        text: `Advertisers and Sponsors: MySpurr welcomes advertisers and sponsors to engage with our platform to reach our diverse community of creative talents and businesses. By advertising with us, you agree to adhere to our guidelines regarding the content and format of advertisements, ensuring they are relevant, non-intrusive, and respectful of our users' experience. Additionally, sponsors are expected to uphold the values and standards of MySpurr, aligning their brand messaging with our mission of empowering creative professionals worldwide. We reserve the right to review and approve all advertisements and sponsorships to maintain the integrity and authenticity of our platform.`,
      },
    ],
  },
  {
    heading: "Password and Account",
    memo: [
      {
        text: `We prioritize the security and responsibility of user accounts. Upon registration, users are required to create a password to access their accounts, and they are solely responsible for maintaining the confidentiality of this password. Users agree not to share their password with any third party and to promptly notify MySpurr of any unauthorized use of their account or any breach of security. MySpurr reserves the right to suspend or terminate user accounts if it suspects unauthorized access or misuse. By creating an account on MySpurr, users acknowledge and agree to abide by these password and account security measures to ensure the integrity of their personal information and the platform's overall security.
`,
      },
    ],
  },
  {
    heading: "Parental Permission",
    memo: [
      {
        text: `Children under the age of thirteen (13) are not permitted to use the Services, and We do not knowingly obtain personal details from children under the age of thirteen (13) years. Some of the information available may concern subjects that are not suitable for children. MySpurr reserves the right to require users under the age of 18 to obtain parental or guardian consent before viewing any content on the Services. You consent to abide by all such restrictions and not to assist others in evading them.`,
      },
    ],
  },
  {
    heading: "Data Processing",
    memo: [
      {
        text: `MySpurr is committed to protecting the privacy and security of our users' personal information. This section outlines how we collect, use, and process data through our platform.`,
      },
      {
        text: ``,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Collection</strong>`,
            memo: [
              {
                item: `When users sign up for an account on MySpurr, we collect personal information such as name, email address, and profile information to create and manage their accounts.`,
              },
              {
                item: `We may also collect additional information provided by users, including but not limited to, portfolio materials, resumes, and contact details.

`,
              },
              {
                item: `We use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, and improve the functionality of our platform. Users can manage cookie preferences through their browser settings.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Usage</strong>`,
            memo: [
              {
                item: `The personal information collected by MySpurr is used to facilitate interactions between users and to provide personalized services on our platform.
`,
              },
              {
                item: `We may use user data to match talents with job opportunities, send relevant notifications, and improve our products and services.

`,
              },
              {
                item: `Aggregate and anonymized data may be used for analytical purposes, reporting, and marketing efforts.
`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Sharing</strong>`,
            memo: [
              {
                item: `MySpurr may share user data with third-party service providers and partners to facilitate the delivery of our services, such as payment processing, analytics, and customer support.
`,
              },
              {
                item: `We may disclose user data in response to legal obligations, to protect our rights and property, or to prevent illegal activities.
`,
              },
            ],
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Security</strong>`,
            memo: [
              {
                item: `We implement industry-standard security measures to protect user data against unauthorized access, alteration, disclosure, or destruction.
`,
              },
              {
                item: `Users are responsible for safeguarding their account credentials and should report any suspected security breaches promptly.`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Data Retention
</strong>`,
            memo: [
              {
                item: `We retain user data for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.`,
              },
              {
                item: `Users have the right to request the deletion of their personal information, subject to applicable legal requirements.
`,
              },
            ],
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">International Data Transfers</strong><br/> By using MySpurr, users acknowledge and consent to the transfer of their data to countries outside their jurisdiction, including to servers located in other countries where data protection laws may differ.`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Your Rights
</strong>`,
            memo: [
              {
                item: `Users have the right to access, correct, or delete their personal information, as well as to object to or restrict certain processing activities.`,
              },
              {
                item: `Users can exercise their rights by contacting MySpurr's Data Protection Officer or by using the privacy settings available on our platform.
`,
              },
            ],
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Updates to this Policy</strong><br/>MySpurr reserves the right to update or modify this Data Processing section of our Terms and Conditions at any time. Users will be notified of any material changes, and continued use of the platform constitutes acceptance of the updated terms.
`,
          },
        ],
      },
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    memo: [
      {
        text: `In accordance with the "Disclaimer of Warranties" section of MySpurr's Terms and Conditions, users acknowledge and agree that the platform is provided on an "as is" and "as available" basis. MySpurr makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, completeness, or suitability of the platform for any purpose.
`,
      },
      {
        text: `Users expressly understand and agree that their use of MySpurr is at their own risk, and MySpurr disclaims all warranties, whether statutory, express, or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free operation.
`,
      },
      {
        text: `MySpurr does not warrant that the platform will meet users' requirements, be timely, secure, error-free, or free from harmful components such as viruses or malware. Users acknowledge that any reliance on the platform's content or services is solely at their own discretion and risk.
`,
      },
    ],
  },
  {
    heading: "Limitation of Liability",
    memo: [
      {
        text: `MySpurr shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of the platform, including but not limited to loss of profits, loss of data, or interruption of business.
`,
      },
      {
        text: `In no event shall MySpurr's total liability to any user for all claims arising under or relating to these terms and conditions exceed the amount paid by the user to MySpurr for the services provided during the six-month period preceding the event giving rise to the liability.
`,
      },
      {
        text: `Users acknowledge and agree that the limitations of liability set forth herein are fundamental elements of the agreement between MySpurr and its users, and that MySpurr would not be able to provide the services on an economically reasonable basis without such limitations.
`,
      },
    ],
  },
  {
    heading: "Applicable Laws/Jurisdiction",
    memo: [
      {
        text: `MySpurr is committed to adhering to all relevant laws and regulations governing its operations. By accessing or using our platform, you agree that any disputes arising out of or relating to these Terms and Conditions or your use of the MySpurr platform shall be governed by the laws of [Nigeria/Federal Capital Territory, Abuja], without regard to its conflict of law provisions.
`,
      },
      {
        text: `Any legal action or proceeding arising between you and MySpurr shall be brought exclusively in the courts located in [Lugbe/AMAC], [Nigeria/Federal Capital Territory, Abuja], and you consent to the jurisdiction of such courts for purposes of any such legal action or proceeding.
`,
      },
      {
        text: `If any provision of these Terms and Conditions is found to be invalid or unenforceable by a court of competent jurisdiction, the invalidity or unenforceability of such provision shall not affect the validity or enforceability of the remaining provisions of these Terms and Conditions, which shall remain in full force and effect.
`,
      },
      {
        text: `MySpurr reserves the right to modify these Terms and Conditions at any time, and such modifications shall be effective immediately upon posting on our platform. Your continued use of the MySpurr platform after any such modifications constitutes your acceptance of the revised Terms and Conditions. It is your responsibility to review these Terms and Conditions periodically to stay informed of any changes.

`,
      },
      {
        text: `If you have any questions or concerns regarding the Applicable Laws/Jurisdiction section of our Terms and Conditions, please contact us at +234 8166813812. hello@myspurr.net
`,
      },
    ],
  },
  {
    heading: "Dispute Resolution",
    memo: [
      {
        text: `At MySpurr, we strive to ensure a positive experience for all users. However, in the event of any disputes or disagreements that may arise, we have established the following procedures for resolution:`,
      },
      {
        text: ``,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Negotiation and Informal Resolution: 
</strong><br/>We encourage users to first attempt to resolve any disputes informally through direct communication with the other party involved. This approach often leads to quicker and more amicable resolutions. Users are encouraged to engage in open and respectful dialogue to address concerns and find mutually acceptable solutions.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Mediation: 
</strong><br/> If a dispute cannot be resolved informally, MySpurr may offer mediation services to facilitate communication and negotiation between the parties involved. Mediation involves the assistance of a neutral third party who helps facilitate discussions and explore potential resolutions. While mediation is non-binding, it provides an opportunity for the parties to work towards a mutually agreeable outcome.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Arbitration</strong><br/> In cases where informal resolution and mediation are unsuccessful, MySpurr may require the parties to submit the dispute to binding arbitration. Arbitration is a formal process where an impartial arbitrator or panel of arbitrators hears the arguments and evidence presented by both sides and issues a final, binding decision. Arbitration proceedings are typically less formal and more efficient than traditional litigation, providing a cost-effective means of resolving disputes.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Litigation as a Last Resort:</strong><br/>  While we strive to resolve disputes through negotiation, mediation, and arbitration, in some cases, litigation may be necessary as a last resort. If litigation becomes necessary, disputes shall be resolved exclusively through the courts of [Jurisdiction], and users agree to submit to the personal jurisdiction of such courts for the purpose of litigating any claims or disputes.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Costs and Fees:</strong><br/> Each party shall bear its own costs and expenses, including attorneys' fees, incurred in connection with any dispute resolution proceedings, unless otherwise agreed upon in writing or as required by law.`,
          },
        ],
      },
      {
        text: `By using the MySpurr platform, users agree to abide by these dispute resolution procedures and to engage in good faith efforts to resolve any disputes that may arise. We believe that open communication, cooperation, and mutual respect are essential in fostering positive relationships within our community.`,
      },
    ],
  },
  {
    heading: "Miscellaneous",
    memo: [
      {
        text: ``,
        subtext: [
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Governing Law: 
</strong><br/> These Terms and Conditions, along with any disputes arising out of or relating to them, shall be governed by and construed in accordance with the laws of the Federal Capital Territory, Abuja, Nigeria, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms and Conditions shall be brought exclusively in the federal or state courts located in Federal Capital Territory, Abuja, Nigeria, and the parties hereby consent to the personal jurisdiction and venue of such courts.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Assignment: 
</strong><br/>  You may not assign, transfer, or sublicense any of your rights or obligations under these Terms and Conditions without the prior written consent of MySpurr. MySpurr may freely assign, transfer, or delegate any of its rights or obligations under these Terms and Conditions without notice and without your consent.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Severability</strong><br/>  If any provision of these Terms and Conditions is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and Conditions and shall not affect the validity and enforceability of any remaining provisions.`,
          },

          {
            item: `<strong class="font-Satoshi700 font-extrabold">Waiver</strong><br/>  The failure of MySpurr to enforce any provision of these Terms and Conditions shall not be deemed a waiver of such provision or of the right to enforce such provision. No waiver by MySpurr of any provision of these Terms and Conditions shall be effective unless it is in writing and signed by an authorized representative of MySpurr.
`,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Entire Agreement: </strong><br/> These Terms and Conditions constitute the entire agreement between you and MySpurr regarding your use of the platform, superseding any prior agreements between you and MySpurr relating to such subject matter. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Modification: </strong><br/>  MySpurr reserves the right to modify or revise these Terms and Conditions at any time, and you agree to be bound by such modifications or revisions. Any changes will be effective immediately upon posting the revised Terms and Conditions on the MySpurr platform. It is your responsibility to review these Terms and Conditions periodically for updates or changes. `,
          },
          {
            item: `<strong class="font-Satoshi700 font-extrabold">Contact Information:</strong><br/>  If you have any questions or concerns about these Terms and Conditions, please contact us at hello@myspurr.net `,
          },
        ],
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
        Terms and Conditions
      </div>
    </div>
  </div>
  <div class="text-[#333333] container md:gap-16 md:my-16 md:items-center">
    <div>
      <p class="text-[18px] font-Satoshi400 ml-4 mb-4">
        Welcome to MySpurr, a web application that connects African talents with global
        businesses, resources and opportunities. It is our responsibility to ensure that
        in providing the services on this site, we adhere to the right ethical and legal
        practices in bringing you this site, and we ask that you use the same judgment as
        you read, use, and share the content hosted on MySpurr. When utilizing MySpurr
        content, we ask that you give credit where it’s due and don't edit our content –
        or content that belongs to others without permission. If we've made an error,
        please let us know. You can reach us at hello@myspurr.net.
      </p>
      <p class="text-[18px] font-Satoshi400 ml-4 mb-4">
        Whilst we believe you will do the right thing at all times, we require you to
        accept these Terms and Conditions. We recommend that you print a copy of this for
        future reference.
      </p>

      <h3 class="font-Satoshi500 text-lg my-8 uppercase text-black">
        PLEASE READ THE FOLLOWING TERMS AND CONDITIONS CAREFULLY.
      </h3>
      <div v-for="content in data" :key="content">
        <h3 class="font-Satoshi700 text-[25px] mb-4 mt-10">{{ content.heading }}</h3>
        <h3 class="font-Satoshi700 text-[25px] mb-4">{{ content.headingTwo }}</h3>
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
                  <p v-html="list.item" class="!mt-4"></p>
                  <p v-html="list.text" class="!mt-4"></p>

                  <ol class="list-disc !mt-3">
                    <li v-for="i in list.memo" :key="i">
                      <p v-html="i.item"></p>
                    </li>
                  </ol>
                  <p v-html="list.item2"></p>
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
