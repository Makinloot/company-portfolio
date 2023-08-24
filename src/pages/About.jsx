/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Contact from "../components/contact/Contact";

export default function About({ showContact, setShowContact }) {
  return (
    <div className="py-44">
      <div className="container">
        <motion.div
          variants={{
            active: { opacity: 1, display: "block" },
            inactive: { opacity: 0, display: "none" },
          }}
          animate={showContact ? "inactive" : "active"}
          className="about-wrapper min-h-[100vh] overflow-x-hidden text-blackPrimary flex flex-col items-center"
        >
          <motion.article
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[1000px] mx-auto"
          >
            <h3 className="capitalize font-circular my-4 text-4xl">
              about purple
            </h3>
            <p className="font-sofia text-base md:text-xl">
              Welcome to Purple Digital Marketing, where creativity meets
              strategy and results are painted in shades of success. Our
              narrative began with a vision – a vision that digital marketing is
              more than a transaction; it&#39;s a transformational journey. The
              name &quot;Purple&quot; was chosen as a representation of the
              synthesis between creative flair and strategic insight. The color
              purple signifies the perfect blend of passion and logic.
              Similarly, at Purple, we harmonize cutting-edge creativity with
              data- driven insights. Just as the color purple we represent
              creativity, wisdom, and uniqueness, we aim to infuse these
              qualities into every campaign we create. We balance creative
              brilliance with strategic thinking to marketing campaigns that not
              only catch the eye but also deliver real results for our clients.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[1000px] mx-auto my-16"
          >
            <h3 className="capitalize font-circular my-4 text-4xl">
              Our Approach:
            </h3>
            <div className="font-sofia text-base md:text-xl">
              <div>
                <strong>Strategic Innovation: </strong>
                <p className="inline">
                  We believe in a strategy that adapts and evolves. Our team of
                  experts combines deep industry insights with innovative
                  thinking to tailor strategies that resonate with your audience
                  and deliver results.
                </p>
              </div>
              <div className="my-4">
                <strong>Creative Excellence: </strong>
                <p className="inline">
                  Creativity is our core. From captivating visuals to engaging
                  content, we craft experiences that captivate hearts and minds,
                  leaving a lasting impression on your audience.
                </p>
              </div>
              <div className="my-4">
                <strong>Data-Fueled Decisions: </strong>
                <p className="inline">
                  Numbers speak volumes in the digital world. Our data analysts
                  and marketers collaborate to uncover actionable insights,
                  ensuring our strategies are grounded in evidence and optimized
                  for success.
                </p>
              </div>
              <div className="my-4">
                <strong>Collaboration and Transparency: </strong>
                <p className="inline">
                  We&#39;re not just here to work for you; we&#39;re here to
                  work with you. Transparent communication and collaboration are
                  key to building strong partnerships that drive exceptional
                  outcomes.
                </p>
              </div>
            </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[1000px] mx-auto"
          >
            <h3 className="capitalize font-circular my-4 text-4xl">
              join purple to rise
            </h3>
            <p className="font-sofia text-base md:text-xl">
              At Purple, we&#39;re not just about technology – we&#39;re about
              transformation. We invite you to join us in this journey of
              growth, innovation, and limitless possibilities. We combine
              creativity, expertise, and data-driven insights to create vibrant
              and effective online campaigns.
            </p>
            <p className="my-8 font-sofia text-base md:text-xl">
              Our mission is simple – to elevate your brand to new heights. We
              believe that every business has untapped potential waiting to be
              unleashed, and that&#39;s where our expertise comes into play. By
              combining innovative marketing approaches and data-driven
              strategies, we&#39;re here to make your brand stand out in the
              crowded marketplace. We understand that every business has its own
              story, goals, and challenges. Our mission is to help you tell that
              story effectively and navigate the digital landscape with
              confidence. Our team of experts is well-versed in a range of
              digital marketing disciplines, ensuring that we have the knowledge
              and skills to address your unique needs.
            </p>
            <p className="font-sofia text-base md:text-xl">
              As we introduce you to Purple, we invite you to embark on a
              transformative journey of growth and success.
            </p>
          </motion.article>
        </motion.div>
        <div className="container">
          <Contact active={showContact} setActive={setShowContact} />
        </div>
      </div>
    </div>
  );
}
