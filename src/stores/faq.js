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
          content: '',
          showContent: false
        },
        {
          name: 'How do you find different criteria in your process?',
          content: '',
          showContent: false
        },
        {
          name: 'How does MySpurr work for creatives?',
          content: '',
          showContent: false
        },
        {
          name: 'How does MySpurr work for businesses?',
          content: '',
          showContent: false
        },
        {
          name: 'How much does it cost to use MySpurr?',
          content: '',
          showContent: false
        },
        {
          name: 'Do you recomWhat types of creative talents can I find on MySpurr?mend Pay as you go or Pre pay?',
          content: '',
          showContent: false
        },
        {
          name: 'How does MySpurr protect my intellectual property?',
          content: '',
          showContent: false
        },
        {
          name: 'How do I contact MySpurr if I have a problem or question?',
          content: '',
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
