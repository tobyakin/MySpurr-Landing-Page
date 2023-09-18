import { defineStore } from 'pinia'
import SampleThree from "@/assets/img/sampleThree.png";

const useFaqStore = defineStore('help', {
  state: () => {
    return {
      blogPost: [
        {
          slug: 1,
          cover_image: SampleThree,
          title: 'How to Build a Successful Career in the Creative Industry',
          blog_category: 'career development',
          blog_description:
            "n today's digital age, having a strong online presence is essential for any business to thrive. With so many businesses competing for attention online, it's important to stand out from the crowd and make your mark. Here are 10 ways to boost your business online presence and help you reach your target audience.",
          created_at: '16 Jul 2018'
        },
        {
          slug: 2,
          cover_image: SampleThree,
          title: 'How to Build a Successful Career in the Creative Industry',
          blog_category: 'Company news',
          blog_description:
            "n today's digital age, having a strong online presence is essential for any business to thrive. With so many businesses competing for attention online, it's important to stand out from the crowd and make your mark. Here are 10 ways to boost your business online presence and help you reach your target audience.",
          created_at: '16 Jul 2018'
        },
        {
          slug: 3,
          cover_image: SampleThree,
          title: 'How to Build a Successful Career in the Creative Industry',
          blog_category: 'Creativity and Design',
          blog_description:
            "n today's digital age, having a strong online presence is essential for any business to thrive. With so many businesses competing for attention online, it's important to stand out from the crowd and make your mark. Here are 10 ways to boost your business online presence and help you reach your target audience.",
          created_at: '16 Jul 2018'
        }
      ],
      help: [
        {
          topic: 'Opening a Kavlr account',
          content: 'Setting up your Kavlr account',
          url: 'opening-a-kavlr-account',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: 'Invoices with Kavlr',
          content: 'How to create and send invoices using Kavlr',
          url: 'invoices-with-kavlr',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: 'Payments with Kavlr',
          content: 'Accepting payments through Kavlr',
          url: 'payments-with-kavlr',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: 'Expenses with Kavlr',
          content: 'Expense tracking with Kavlr',
          url: 'expenses-with-kavlr',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: 'Bookkeeping with Kavlr',
          content: 'Managing bookkeeping tasks with Kavlr',
          url: 'bookkeeping-with-kavlr',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: "Kavlr's web presence",
          content: 'Setting up your Kavlr business profile and web presence',
          url: 'kavlrs-web-presence',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: 'Kavlr currencies',
          content: 'Multi-currency banking with Kavlr',
          url: 'kavlr-currencies',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: 'Kavlr Cards',
          content: "Using Kavlr's virtual and visible card features",
          url: 'kavlr-cards',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: 'Kavlr payments integration',
          content: 'How to integrate Kavlr with other payment platforms',
          url: 'kavlr-payments-integration',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        },
        {
          topic: 'Troubleshooting',
          content: 'Troubleshooting common issues with Kavlr',
          url: 'trobleshooting',
          icon: null,
          articles: [
            {
              name: 'How do I create a Kavlr account?',
              url: 'how-do-i-create-a-kavlr-account?',
              content: ''
            },
            {
              name: 'What information do I need to provide to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'Is there a minimum balance requirement to open a Kavlr account?',
              url: 'What-information-do-i-need-to-provide-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: "Can I open a Kavlr account if I'm not based in the UK?",
              url: 'can-i-open-a-kavlr-account-if-im-not-based-in-the-uk',
              content: ''
            },
            {
              name: 'How long does it take to open a Kavlr account?',
              url: 'how-long-does-it-take-to-open-a-kavlr-account',
              content: ''
            },
            {
              name: 'What do I do if I have trouble opening a Kavlr account?',
              url: 'what-do-i-do-if-i-have-trouble-opening-a-kavlr-account',
              content: ''
            },
            {
              name: 'Can I have multiple Kavlr accounts for different businesses?',
              url: 'can-i-have-multiple-kavlr-accounts-for-different-businesses',
              content: ''
            },
            {
              name: 'Are there any fees associated with opening a Kavlr account?',
              url: 'are-there-any-fees-associated-with-opening-a-kavlr-account?',
              content: ''
            },
            {
              name: 'How do I close my Kavlr account?',
              url: 'how-do-i-close-my-kavlr-account?',
              content: ''
            },
            {
              name: 'Can I reopen a closed Kavlr account?',
              url: 'can-i-reopen-a-closed-kavlr-account?',
              content: ''
            }
          ]
        }
      ],
      faqs: [
        {
          name: 'What is Kavlr?',
          content:
            'Kavlr is an all-in-one financial platform designed to empower businesses and individuals with secure business accounts, management tools, and payment solutions. It offers a range of features including invoicing, expense management, business accounts, multi-currency capabilities, cards (virtual/physical), API integration, and more.',
          showContent: false
        },
        {
          name: 'How can Kavlr benefit my business?',
          content: 'Kavlr provides numerous benefits for businesses, including:',
          sub_content: [
            {
              heading: `Streamlined financial management:`,
              content: `Easily manage invoices, expenses, and business accounts all in one place.`
            },
            {
              heading: `Secure banking:`,
              content: `Enjoy the peace of mind that comes with secure and reliable banking services.`
            },
            {
              heading: `Payment processing:`,
              content: `Accept payments from customers through various channels, including online and in-person.`
            },
            {
              heading: `Business growth:`,
              content: `Leverage tools like crowd pooling, bookkeeping, and appointments to drive growth and expand your business.`
            },
            {
              heading: `Customization and integration:`,
              content: `Tailor Kavlr to fit your unique business needs by leveraging APIs for seamless integration with existing systems.`
            },
            {
              heading: `Efficient checkout experience:`,
              content: `Utilize the No Code Checkout feature for a smooth and frictionless payment experience for your customers.`
            }
          ],
          showContent: false
        },
        {
          name: 'How do I sign up for Kavlr?',
          content: `Signing up for Kavlr is quick and easy. Simply visit your preferred app stores and download the Kavlr mobile app. Follow the prompts to create your account, provide the necessary information, and choose the plan that best suits your needs.`,
          showContent: false
        },
        {
          name: 'Is Kavlr suitable for freelancers and small businesses?',
          content: `Absolutely! Kavlr is designed to cater to the needs of freelancers, small businesses and single director limited liability companies. Our platform offers tools that simplify financial management, enhance productivity, and facilitate growth for businesses of all sizes.`,
          showContent: false
        },
        {
          name: "Is Kavlr's banking feature secure?",
          content: `Yes, security is a top priority for Kavlr. We implement industry-standard encryption and security measures to safeguard your financial data and transactions. Rest assured that your information is protected and kept confidential.`,
          showContent: false
        },
        {
          name: 'Can I accept payments in multiple currencies with Kavlr?',
          content: `Yes, Kavlr supports multi-currency capabilities, allowing you to accept payments in various currencies and convert them seamlessly.`,
          showContent: false
        },
        {
          name: 'Can I integrate Kavlr into my website?',
          content: `Absolutely! Kavlr offers API, plugins and no code options, enabling you to connect our platform into your website`,
          showContent: false
        },
        {
          name: 'How can I get support if I have any questions or issues?',
          content: `Kavlr provides comprehensive support to its users. You can visit our Help Center, which offers a knowledge base with tutorials, guides, and frequently asked questions. Additionally, you can reach out to our customer support team via email or live chat for personalized assistance and prompt resolution of any issues.`,
          showContent: false
        },
        {
          name: 'What payment methods are supported by Kavlr?',
          content: `Kavlr supports various payment methods, including card processing, PayPal integration, and other online payment gateways. This ensures flexibility for businesses and enables them to cater to their customers' preferred payment options.`,
          showContent: false
        },
        {
          name: 'Can I switch between Kavlr plans?',
          content: `Yes, you have the flexibility to switch between Kavlr plans based on your evolving business needs. Whether you are an individual just looking to have a grasp of your money or a freelancer starting out or a scaling business, Kavlr offers different plans to accommodate your requirements. Simply navigate to your account settings to make the necessary changes.`,
          showContent: false
        },
        {
          name: 'What fees and charges are associated with Kavlr?',
          content: `Kavlr offers transparent pricing with different subscription plans tailored to meet your specific business needs. Our fees and charges vary depending on the plan you choose. You can find detailed information about our pricing structure on our website or within your Kavlr account. Rest assured, we strive to provide cost-effective solutions that deliver exceptional value for your business.`,
          showContent: false
        },
        {
          name: 'Are there any hidden charges or transaction fees with Kavlr?',
          content: `Kavlr aims to be transparent with our fees, and we do not have any hidden charges. However, please note that certain transactions or payment processing services may incur standard transaction fees or third-party charges. These fees will be clearly communicated to you during the transaction process, ensuring full visibility and transparency.`,
          showContent: false
        },
        {
          name: 'How do Kavlr subscriptions work?',
          content: `Kavlr operates on a subscription-based model. When you sign up for Kavlr, you will choose a subscription plan that best suits your business requirements. Subscription fees are billed on a recurring basis, typically monthly or annually, depending on your chosen plan. You can manage your subscription and make changes to your plan within your Kavlr account settings.`,
          showContent: false
        },
        {
          name: 'Can I upgrade or downgrade my Kavlr subscription?',
          content: `Yes, you have the flexibility to upgrade or downgrade your Kavlr subscription as your business needs evolve. You can easily make changes to your subscription plan within your account settings. If you choose to upgrade, any applicable prorated charges will be adjusted accordingly.`,
          showContent: false
        },
        {
          name: 'What happens if I cancel my Kavlr subscription?',
          content: `If you decide to cancel your Kavlr subscription, your account will remain active until the end of your current billing cycle. After that, you will no longer have access to the features and services associated with your subscription plan. Please note that we do not offer refunds for any unused portion of your subscription.`,
          showContent: false
        },
        {
          name: 'Do I need to sign a long-term contract with Kavlr?',
          content: `No, Kavlr does not require you to sign a long-term contract. We believe in providing flexibility to our users, and our subscription plans operate on a month-to-month basis. You have the freedom to cancel or make changes to your subscription at any time.`,
          showContent: false
        },
        {
          name: 'Are there any additional charges for customer support or assistance?',
          content: `No, customer support and assistance are included as part of your Kavlr subscription. We provide comprehensive support through our Help Center, email, and live chat channels. Our dedicated support team is here to assist you with any questions or issues you may encounter while using Kavlr.`,
          showContent: false
        },
        {
          name: 'Are there any setup fees when starting with Kavlr?',
          content: `No, there are no setup fees associated with starting your Kavlr account. Simply sign up and choose the subscription plan that suits your business needs, and you can begin utilizing the platform's features and benefits without any additional setup costs.`,
          showContent: true
        },
        {
          name: 'Can I get a refund if I am not satisfied with Kavlr?',
          content: `At Kavlr, we strive to provide an exceptional experience for our users. If you encounter any issues or are unsatisfied with our services, please reach out to our customer support team, and we will work to address your concerns. However, please note that we do not offer refunds for subscription fees once they have been charged. But if the account is closed, we will look for a way to get your funds to you.`,
          showContent: false
        },
        {
          name: 'How can I view a breakdown of the charges and fees associated with my Kavlr account?',
          content: `Within your Kavlr account, you can access a detailed breakdown of the charges and fees associated with your subscription plan. This information is available in your account settings or billing section, allowing you to stay informed and have complete visibility into your account's financial details.`,
          showContent: false
        }
        // {
        //     name:"How does Kavlr work?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"What are the benefits of using Kavlr?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I create an account?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I update my account information?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I reset my password?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I set up payment processing for my business? ",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"What payment methods are supported by Kavlr?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How long does it take to receive payments through Kavlr?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I create and send an invoice?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I customize my invoices?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"Can I set up recurring billing?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I track my business expenses using Kavlr?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"Can I link my bank accounts to Kavlr?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I categorize my expenses?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I set up bookings and appointments through Kavlr?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I customize my booking page?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"Can I send reminders to customers?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How does Kavlr protect my business and personal information?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"Is my data encrypted and secure?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"What compliance regulations does Kavlr follow? expenses?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"What do I do if I encounter an error or issue on the Kavlr platform?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // },
        // {
        //     name:"How do I contact Kavlr customer support?",
        //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        //     showContent:false
        // }
      ]
    }
  },
  getters: {
    getHelpTopics() {
      return this.help
    },
    getBlog() {
      return this.blogPost
    }
  },
  actions: {
    getHelpTopicByUrl(url) {
      return this.help.find((item) => item.url == url)
    },
    toogleFaq(index) {
      this.faqs.map((item) => {
        item.showContent = false
      })

      this.faqs[index].showContent = !this.faqs[index].showContent
    }
  }
})

export default useFaqStore
