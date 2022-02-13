import { useState } from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
// import img from "../resources/Volunteering.svg";
// import img1 from "../resources/recycle-live.gif";
import img1 from "../resources/recycle-live-unscreen.gif";
import img4 from "../resources/green.jpg";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const titles = [
    "Building sustainability",
    1000,
    "Efficient plastic waste management",
    1000,
    "Providing waste diversion solutions",
    1000,
    "with workable commercial recycling services....",
    4000,
  ];

  const submit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="text-stone-600">
      <div className="flex flex-col lg:flex-row justify-evenly w-full bg-gradient-to-r from-rose-100  to-teal-50 py-10">
        <div className="lg:mt-20 mt-5 ml-5 px-3">
          <h1 className="mb-5 md:mb-3">
            <span className="text-green-400 text-5xl font-bold">
              A waste reclamation startup,
            </span>
          </h1>
          <div className="text-3xl pb-5 h-32 ">
            <Typical steps={titles} loop={Infinity} wrapper="p" />
          </div>
        </div>
        <img className="object-contain" src={img1} />
      </div>
      {/* Welcome */}
      <div className="-mt-5 rounded-t-3xl bg-white pt-10 shadow-2xl">
        <div className="relative md:px-10 max-w-5xl mx-auto text-center">
          {/* <img src={img} className="lg:w-96 object-contain" alt="" /> */}
          <h1 className="font-bold text-3xl">
            Creating a sustainable future for our earth
          </h1>

          <p className="p-10 text-justify">
            Davinchi Recycling Nigeria is a company in the plastics reclamation
            chain that is responding to the need of green environment and
            plastic manufacturers need to increase recycled plastics in their
            Products. Davinchi Recycle is a start up business dedicated to
            providing excellent quality granulated recycled plastic to the
            plastic handlers or recyclers (Thermoform) in a manner that
            generates fair and equitable returns for present and future owners,
            and superior value to our customers. We specialize in creating and
            offering a variety of well-sorted and granulated different recycled
            plastic grades. Davinchi Recycling will contribute to reduction in
            environmental degradation, increased employment in the green
            economy, and education to communities on the importance of
            recycling. Lagos and its environs is a flood prone area and Davinchi
            recycling will help solve the problem of flooding and environmental
            degradation (landfill, air pollution caused by incineration of
            plastic wastes) caused by waste plastic blocking waterways and
            drainages and are finally carried to water bodies. It will also help
            solve the problem of water pollution and save aquatic lives. As the
            provider of the locally sourced recycled plastic waste, Davinchi
            Plastic Recycling will be a key player for the development of
            locally shredded plastics of different size and color. We will
            engage closely with all the parties involved in the process,
            especially the collection points and community.
          </p>
        </div>
        {/* Services */}
        <div className=" bg-zinc-50 py-5">
          <div className=" max-w-5xl mx-auto px-2">
            <div className="py-5">
              {/* Heading */}
              <h1 className="font-bold text-center text-2xl mb-10 capitalize">
                Our services
              </h1>
              {/* Map through services */}
              <div className="container mx-auto items-center flex flex-col lg:flex-row lg:justify-between lg:items-start ">
                {services.map((service, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={variants}
                      className="w-80 md:w-96 lg:w-80 shadow-xl my-8 rounded-lg bg-white "
                    >
                      <img
                        className="object-contain w-full"
                        src={service.image}
                        alt=""
                      />
                      <div className="p-5">
                        <h1 className="text-xl font-semibold mb-3">
                          {service.heading}
                        </h1>
                        <p className="text-left">{service.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Contact us section */}
        <div
          className="relative py-10 md:py-20 "
          style={{ backgroundImage: `url('${img4}')`, backgroundSize: "cover" }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants2}
            className=" text-white py-5"
          >
            <div className="max-w-3xl mx-auto flex flex-col item-center justify-center">
              <div className="font-bold px-4 mb-5">
                <p className="text-center text-2xl mb-3">
                  Get in touch with us !
                </p>
                <p className="hidden md:block text-center">
                  <span>
                    Our team works beside you to solve your current waste
                    management challenges. We build customized waste collection,
                    recycling, and sustainability plans for businesses and
                    communities.
                  </span>
                  <span> Need a dumpster by tomorrow? We do that too.</span>
                </p>
                <p className="md:hidden font-bold text-center">
                  Our team will work beside you to solve your current waste
                  management challenges.
                </p>
              </div>
              {/* Contact us form */}
              <form
                onSubmit={submit}
                className="space-y-4 flex items-center flex-col text-black"
              >
                <input
                  type="text"
                  className="py-2 px-4 w-3/4 outline-none focus:ring-1 ring-green-800 rounded-md bg-gray-200 focus:bg-white"
                  placeholder="name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="email"
                  className="py-2 px-4 w-3/4 outline-none focus:ring-1 ring-green-800 rounded-md bg-gray-200 focus:bg-white"
                  placeholder="someone@email.com"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <textarea
                  className="w-3/4 px-4 py-3 rounded-md border outline-none focus:ring-2 ring-green-800 bg-gray-200 focus:bg-white "
                  type="textarea"
                  placeholder="Write your message"
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <button className="bg-green-600 hover:bg-green-700 rounded-md text-white p-3 outline-none focus:bg-green-900 focus-ring shadow-md">
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
const variants2 = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const services = [
  {
    heading: "Waste collection",
    body: "Transports of both hazardous and nonhazardous waste. We also incentivize people for bringing their platic waste for disposal",
    image:
      "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVjeWNsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    heading: "Recycling services",
    body: "Transports of both hazardous and nonhazardous waste. Loremipsum dolor sit amet consectetur, adipisicing elit. Enim,at.",
    image:
      "https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYXN0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    heading: " Destruction and recycling of waste",
    body: "Waste Documents Destruction: Includes documents that contain confidential information and all types of documents.",
    image:
      "https://media.istockphoto.com/photos/crushed-plastic-on-green-gloved-hand-reuse-of-plastic-polymer-beads-picture-id1317080753?b=1&k=20&m=1317080753&s=170667a&w=0&h=_9AQyU0WLHQUiS09cWQPDZ_A0DprAwCDeMTwVq4gm3w=",
  },
];
