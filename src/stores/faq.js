import { defineStore } from 'pinia'
import SampleThree from "@/assets/img/sampleThree.webp";

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
        },
        {
          slug: 4,
          cover_image: SampleThree,
          title: 'How to Build a Successful Career in the Creative Industry',
          blog_category: 'Creativity and Design',
          blog_description:
            "n today's digital age, having a strong online presence is essential for any business to thrive. With so many businesses competing for attention online, it's important to stand out from the crowd and make your mark. Here are 10 ways to boost your business online presence and help you reach your target audience.",
          created_at: '16 Jul 2018'
        },
        {
          slug: 5,
          cover_image: SampleThree,
          title: 'How to Build a Successful Career in the Creative Industry',
          blog_category: 'Creativity and Design',
          blog_description:
            "n today's digital age, having a strong online presence is essential for any business to thrive. With so many businesses competing for attention online, it's important to stand out from the crowd and make your mark. Here are 10 ways to boost your business online presence and help you reach your target audience.",
          created_at: '16 Jul 2018'
        },
        {
          slug: 6,
          cover_image: SampleThree,
          title: 'How to Build a Successful Career in the Creative Industry',
          blog_category: 'Creativity and Design',
          blog_description:
            "n today's digital age, having a strong online presence is essential for any business to thrive. With so many businesses competing for attention online, it's important to stand out from the crowd and make your mark. Here are 10 ways to boost your business online presence and help you reach your target audience.",
          created_at: '16 Jul 2018'
        },
        {
          slug: 7,
          cover_image: SampleThree,
          title: 'How to Build a Successful Career in the Creative Industry',
          blog_category: 'Creativity and Design',
          blog_description:
            "n today's digital age, having a strong online presence is essential for any business to thrive. With so many businesses competing for attention online, it's important to stand out from the crowd and make your mark. Here are 10 ways to boost your business online presence and help you reach your target audience.",
          created_at: '16 Jul 2018'
        },
        {
          slug: 8,
          cover_image: SampleThree,
          title: 'How to Build a Successful Career in the Creative Industry',
          blog_category: 'Creativity and Design',
          blog_description:
            "n today's digital age, having a strong online presence is essential for any business to thrive. With so many businesses competing for attention online, it's important to stand out from the crowd and make your mark. Here are 10 ways to boost your business online presence and help you reach your target audience.",
          created_at: '16 Jul 2018'
        },
        {
          slug: 9,
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
          name: 'What is MySpurr?',
          content: `<p>MySpurr is a digital platform that connects creative talents and businesses to opportunities, resources, and networks to help them grow and succeed.</p>`,
          showContent: false
        },
        {
          name: 'How can I sign up for MySpurr?',
          content: `<p>You can sign up for MySpurr by visiting our website and clicking the "Sign Up" button. You'll be prompted to create an account and fill out some basic information about yourself or your business.</p>`,
          showContent: false
        },
        {
          name: 'Is MySpurr only for creatives in Nigeria?',
          content: `<p>No, MySpurr is open to creatives and businesses from all over the world.</p>`,
          showContent: false
        },
        {
          name: 'How much does it cost to use MySpurr?',
          content: `<p>MySpurr offers both free and paid plans, depending on your needs. Our pricing and subscription </p>`,
          showContent: false
        },
        {
          name: 'How does MySpurr protect my privacy and data?',
          content: `<p>MySpurr takes data privacy and security seriously. We use industry-standard security measures to protect your information and comply with all relevant data protection regulations.</p>`,
          showContent: false
        },
        {
          name: 'Can I showcase my work on MySpurr?',
          content: `<p>Yes, you can create a portfolio and showcase your work on MySpurr. You can also search for opportunities and connect with potential clients or collaborators.</p>`,
          showContent: false
        },
        {
          name: 'How can I find job or project opportunities on MySpurr?',
          content: `<p>MySpurr has a job board and project board where you can search for opportunities that match your skills and interests. You can also set up job alerts to receive notifications when new opportunities are posted.</p>`,
          showContent: false
        },
        {
          name: 'Does MySpurr offer any training or mentorship programs?',
          content: `<p>Yes, MySpurr partners with industry experts and organizations to provide training and mentorship programs for creative talents. You can check our Events and Learning page for upcoming programs.</p>`,
          showContent: false
        },
        {
          name: 'Can I get paid for my work through MySpurr?',
          content: `<p>Yes, you can negotiate payment terms with your clients or collaborators on MySpurr. MySpurr does not take a cut of your earnings.</p>`,
          showContent: false
        },
        {
          name: 'How can I improve my chances of being hired through MySpurr?',
          content: `<p>You can improve your chances of being hired on MySpurr by creating a strong portfolio, networking with other creatives and businesses, and showcasing your skills and expe</p>`,
          showContent: false
        },
        {
          name: 'How can MySpurr help my business find the right creative talent?',
          content: `<p>MySpurr has a database of creative talents with diverse skills and experience. You can search for talents based on specific criteria and view their portfolios and work history. You can also post job or project opportunities to attract talents.</p>`,
          showContent: false
        },
        {
          name: 'How can I ensure that the creative talent I hire is a good fit for my business?',
          content: `<p>MySpurr offers a rating and review system that allows you to see feedback from other businesses who have worked with the same talent. You can also conduct interviews and request samples of work before hiring.</p>`,
          showContent: false
        },
        {
          name: 'How much does it cost to post a job or project on MySpurr?',
          content: `<p>MySpurr offers both free and paid plans for businesses to post job or project opportunities. Our pricing and subscription options are available on our website.</p>`,
          showContent: false
        },
        {
          name: 'Can I negotiate payment terms with creative talents on MySpurr?',
          content: `<p>Yes, you can negotiate payment terms with creative talents on MySpurr. MySpurr does not take a cut of your payments.</p>`,
          showContent: false
        },
        {
          name: 'How can I collaborate with other businesses on MySpurr?',
          content: `<p>MySpurr has a collaboration board where you can post collaboration opportunities or respond to collaboration requests from other businesses. You can also network with other businesses through our community forums.</p>`,
          showContent: false
        },
        {
          name: 'What payment methods are accepted for MySpurr subscription?',
          content: `<p>MySpurr accepts payment via credit/debit cards, bank transfers, and mobile payments.</p>`,
          showContent: false
        },
        {
          name: 'Can I cancel my MySpurr subscription at any time?',
          content: `<p>Yes, you can cancel your subscription at any time. However, there may be certain conditions for cancellation depending on the subscription plan you have chosen.</p>`,
          showContent: false
        },
        {
          name: 'How do I change my subscription plan?',
          content: `<p>To change your subscription plan, simply log in to your MySpurr account, go to the Subscription page, and choose the new plan you want to switch to.</p>`,
          showContent: false
        },
        {
          name: 'Can I get a refund for my subscription payment?',
          content: `<p> MySpurr does not offer refunds for subscription payments. However, you can cancel your subscription at any time.</p>`,
          showContent: false
        },
        {
          name: 'How will I be charged for my MySpurr subscription?',
          content: `<p>MySpurr offers both monthly and annual subscription plans. You will be charged the subscription fee on a recurring basis depending on the plan you have chosen.</p>`,
          showContent: false
        },
        {
          name: 'Is my payment information secure with MySpurr?',
          content: `<p>Yes, MySpurr takes the security of your payment information seriously and uses industry-standard encryption to protect your data.</p>`,
          showContent: false
        },
        {
          name: `I can't seem to log in to my MySpurr account, what should I do?`,
          content: `<p>If you're having trouble logging in, try resetting your password or contacting our technical support team for assistance.</p>`,
          showContent: false
        },
        {
          name: 'How do I upload my portfolio on MySpurr?',
          content: `<p>To upload your portfolio, log in to your account, go to your profile, and click on "Add Portfolio". You can upload your portfolio in various formats such as images, videos, and documents.</p>`,
          showContent: false
        },
        {
          name: 'My video content is not playing on MySpurr, what should I do?',
          content: `<p> If your video content is not playing, ensure that you have a stable internet connection and that your browser is up to date. If the problem persists, contact our technical support team for assistance.</p>`,
          showContent: false
        },
        {
          name: 'How do I edit my profile on MySpurr?',
          content: `<p>To edit your profile, log in to your account and click on your profile picture. Select "Edit Profile" and make the necessary changes. Remember to save your changes.</p>`,
          showContent: false
        },
        {
          name: `I'm having trouble navigating the MySpurr platform, what should I do?`,
          content: `<p>MySpurr is designed to be user-friendly, but if you're having difficulty navigating the platform, contact our technical support team for assistance. We'll guide you through the process step by step.</p>`,
          showContent: false
        },
        {
          name: 'Can I use MySpurr on my mobile device?',
          content: `<p>Yes, you can access MySpurr on your mobile device through our website or mobile app. Our platform is optimized for both desktop and mobile use, giving you seamless access to our services.</p>`,
          showContent: false
        },
        {
          name: 'What kind of personal information does MySpurr collect from users?',
          content: `<p>MySpurr collects users' basic information such as name, email, and phone number. We may also collect information about users' location, IP address, and browser information.</p>`,
          showContent: false
        },
        {
          name: 'How does MySpurr protect user data?',
          content: `<p>We take the security and privacy of user data seriously. We use various security measures such as encryption, firewalls, and two-factor authentication to protect user data from unauthorized access, disclosure, or alteration.</p>`,
          showContent: false
        },
        {
          name: 'Will MySpurr share my personal information with third parties?',
          content: `<p>We do not sell, rent, or share user data with third parties without users' consent, except when required by law. We may share user data with our trusted partners who assist us in providing our services.</p>`,
          showContent: false
        },
        {
          name: 'How long does MySpurr keep user data?',
          content: `<p>We keep user data for as long as it is necessary to provide our services and for legal or regulatory compliance purposes. We may also retain user data for a reasonable period for research or analysis purposes.</p>`,
          showContent: false
        },
        {
          name: 'Can users delete their data from MySpurr?',
          content: `<p>Yes, users can request to delete their data from MySpurr by contacting our support team. We will delete the data within a reasonable time, subject to legal or regulatory obligations.</p>`,
          showContent: false
        },
        {
          name: 'How does MySpurr comply with data protection regulations?',
          content: `<p>We comply with relevant data protection regulations such as GDPR, CCPA, and other applicable laws. We have implemented appropriate measures to ensure compliance, such as data protection impact assessments, privacy policies, and user consent mechanisms.</p>`,
          showContent: false
        },
        {
          name: 'What are the community guidelines for MySpurr?',
          content: `<p>Our community guidelines ensure that MySpurr is a safe and inclusive space for all members. This includes refraining from hate speech, harassment, and discriminatory behavior. For a full list of our community guidelines, please refer to our Terms of Service.</p>`,
          showContent: false
        },
        {
          name: 'How do I report inappropriate behavior on MySpurr?',
          content: `<p>If you encounter inappropriate behavior on MySpurr, you can report it to us by clicking on the report button located on the post, comment, or message. Our team will review the report and take appropriate action.</p>`,
          showContent: false
        },
        {
          name: 'Can I promote my own products or services on MySpurr?',
          content: `<p>We encourage our members to share their work and connect with potential clients on MySpurr. However, please refrain from excessive self-promotion or spamming. Our team may remove posts or comments that violate this policy.</p>`,
          showContent: false
        },
        {
          name: `What is MySpurr's policy on intellectual property rights?`,
          content: `<p>MySpurr respects the intellectual property rights of others and expects our members to do the same. Please do not post content that infringes on the intellectual property rights of others. If you believe your intellectual property rights have been violated on MySpurr, please contact us immediately.</p>`,
          showContent: false
        },
        {
          name: `What happens if I violate MySpurr's community guidelines or policies?`,
          content: `<p>If you violate our community guidelines or policies, our team may take appropriate action, such as removing your posts or comments, temporarily suspending your account, or permanently banning your account. We reserve the right to take whatever action we deem necessary to ensure the safety and integrity of our community.</p>`,
          showContent: false
        },
        {
          name: `How does MySpurr handle user data and privacy?`,
          content: `<p>MySpurr takes the privacy and security of our users' data very seriously. We collect only the minimum amount of data necessary to provide our services, and we do not share user data with third parties without permission. For more information on our data privacy policies, please refer to our Privacy Policy.</p>`,
          showContent: false
        }
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
