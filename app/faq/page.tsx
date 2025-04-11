"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Where does Lakobá coffee come from?",
    answer:
      "Our coffee is exclusively sourced from the highlands of Chiapas, Mexico, grown at an altitude of 1400 meters above sea level. This region was once the heart of the ancient Mayan civilization and provides ideal conditions for exceptional coffee cultivation.",
  },
  {
    question: "What makes Lakobá coffee special?",
    answer:
      "Lakobá coffee represents a unique combination of traditional Mayan cultivation methods and modern sustainable practices. Our beans benefit from the region's rich volcanic soil, ideal altitude, and perfect climate conditions. Each batch is carefully selected, processed, and roasted to bring out the unique character of this special region.",
  },
  {
    question: "How is Lakobá coffee processed?",
    answer:
      "Our coffee undergoes a meticulous process that honors both tradition and quality. After careful hand-picking, the beans are wet-processed (washed), which helps develop their clean, bright flavor profile. They are then sun-dried on raised beds before being carefully roasted in small batches to ensure optimal flavor development.",
  },
  {
    question: "What flavor profile can I expect from Lakobá coffee?",
    answer:
      "Lakobá coffee offers a complex flavor profile with notes of chocolate, caramel, and citrus, balanced by a pleasant acidity and a smooth, full body. The specific notes vary slightly between our different roasts, but all maintain the distinctive character of high-altitude Chiapas coffee.",
  },
  {
    question: "Is Lakobá coffee organic?",
    answer:
      "Yes, our coffee is certified organic. We work with farmers who use no chemical pesticides or fertilizers, relying instead on sustainable, traditional methods that protect both the environment and the quality of the coffee.",
  },
  {
    question: "How does Lakobá support the local Mayan communities?",
    answer:
      "A portion of all Lakobá profits is dedicated to preserving Mayan heritage and supporting indigenous communities in the Chiapas region. We work directly with local farmers, ensuring fair compensation and investing in community development projects, educational initiatives, and cultural preservation efforts.",
  },
  {
    question: "What is the best way to brew Lakobá coffee?",
    answer:
      "While Lakobá coffee can be enjoyed through various brewing methods, we recommend pour-over methods like Chemex or V60 to fully appreciate its complex flavor profile. For best results, use freshly ground beans, water at 195-205°F (90-96°C), and a medium grind size.",
  },
  {
    question: "How often do you ship coffee?",
    answer:
      "We ship coffee within 24-48 hours of roasting to ensure maximum freshness. All orders are processed within 1-2 business days and shipped via expedited delivery to preserve the quality of our coffee.",
  },
  {
    question: "Do you offer subscriptions?",
    answer:
      "Yes, we offer flexible subscription options that allow you to receive your favorite Lakobá coffee on a schedule that works for you. Subscribers also enjoy special discounts, early access to limited editions, and exclusive content about Mayan coffee culture.",
  },
  {
    question: "What is your commitment to sustainability?",
    answer:
      "Sustainability is at the core of our business. We use shade-grown cultivation methods that preserve forest canopies and biodiversity. Our packaging is eco-friendly and recyclable, and we continuously work to reduce our carbon footprint throughout our supply chain. Additionally, we invest in reforestation projects in the Chiapas region.",
  },
]

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <main className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gold-300 mb-6">Frequently Asked Questions</h1>
            <p className="text-gold-100 max-w-2xl mx-auto">
              Find answers to common questions about our coffee, sourcing practices, and commitment to Mayan heritage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gold-900/50">
                  <AccordionTrigger className="text-left text-lg font-light text-gold-300 hover:text-gold-500 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gold-100 pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gold-300 mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
