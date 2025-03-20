// "use client";
// import { Card, Button, Text, Title, Group, Container } from "@mantine/core";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import whatsappLogo from "../../public/whatsapp-logo.jpg";
// import instagramLogo from "../../public/instagram-logo.jpg";
// import metaLogo from "../../public/meta-logo.png";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen flex flex-col bg-[#14213d] text-white">
//       {/* Header */}
//       <header className="flex justify-between items-center px-6 py-4">
//         <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
//           Meta
//         </div>
//         <Button
//           variant="filled"
//           color="teal"
//           radius="xl"
//           size="lg"
//           onClick={() => router.push("/auth/login")}
//           className="cursor-pointer transition duration-300 ease-in-out"
//           style={{
//             backgroundColor: "#007bff",
//             borderRadius: "50px",
//             padding: "10px 20px",
//             color: "#fff",
//           }}
//           onMouseOver={(e) =>
//             (e.currentTarget.style.backgroundColor = "#0056b3")
//           }
//           onMouseOut={(e) =>
//             (e.currentTarget.style.backgroundColor = "#007bff")
//           }
//         >
//           Sign In
//         </Button>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-4 gap-6">
//         <Title order={1} className="text-5xl font-semibold">
//           Unlock the Power of Meta APIs for Business Growth
//         </Title>
//         <Text className="text-lg text-gray-300 max-w-2xl">
//           Leverage Meta’s cutting-edge APIs to accelerate business growth,
//           improve customer engagement, and streamline marketing efforts.
//         </Text>

//         {/* API Cards Container */}
//         <Container size="lg" className="flex flex-wrap justify-center gap-6">
//           {/* WhatsApp API Card */}
//           <Card
//             shadow="lg"
//             padding="lg"
//             radius="md"
//             className="w-[300px] h-[400px] flex flex-col justify-between transition duration-300 hover:shadow-xl"
//           >
//             <Card.Section className="h-[200px] relative overflow-hidden">
//               <Image
//                 src={whatsappLogo}
//                 alt="WhatsApp Logo"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </Card.Section>
// <Text align="center" weight={500} size="lg" color="teal" mt="sm">
//   WhatsApp Business API
// </Text>
// <Text color="dimmed" align="center" mt="xs">
//   Enhance customer relationships with automated messaging and secure
//   communication channels.
// </Text>
//             <Group position="center" mt="md">
//               <Button
//                 variant="filled"
//                 color="green"
//                 radius="xl"
//                 fullWidth
//                 onClick={() =>
//                   window.open(
//                     "https://www.whatsapp.com/business/api",
//                     "_blank"
//                   )
//                 }
//                 style={{
//                   backgroundColor: "#28a745",
//                   borderRadius: "20px",
//                   padding: "10px 20px",
//                 }}
//               >
//                 Learn More
//               </Button>
//             </Group>
//           </Card>

//           {/* Instagram API Card */}
//           <Card
//             shadow="lg"
//             padding="lg"
//             radius="md"
//             className="w-[300px] h-[400px] flex flex-col justify-between transition duration-300 hover:shadow-xl"
//           >
//             <Card.Section className="h-[200px] relative overflow-hidden">
//               <Image
//                 src={instagramLogo}
//                 alt="Instagram Logo"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </Card.Section>
//             <Text align="center" weight={500} size="lg" color="pink" mt="sm">
//               Instagram Business API
//             </Text>
//             <Text color="dimmed" align="center" mt="xs">
//               Manage content, analyze insights, and build meaningful connections
//               with your audience.
//             </Text>
//             <Group position="center" mt="md">
//               <Button
//                 variant="filled"
//                 color="pink"
//                 radius="xl"
//                 fullWidth
//                 onClick={() =>
//                   window.open(
//                     "https://developers.facebook.com/docs/instagram-api",
//                     "_blank"
//                   )
//                 }
//                 style={{
//                   backgroundColor: "#d6247b",
//                   borderRadius: "20px",
//                   padding: "10px 20px",
//                 }}
//               >
//                 Learn More
//               </Button>
//             </Group>
//           </Card>

//           {/* Meta API Card */}
//           <Card
//             shadow="lg"
//             padding="lg"
//             radius="md"
//             className="w-[300px] h-[400px] flex flex-col justify-between transition duration-300 hover:shadow-xl"
//           >
//             <Card.Section className="h-[200px] relative overflow-hidden">
//               <Image
//                 src={metaLogo}
//                 alt="Meta Logo"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </Card.Section>
//             <Text align="center" weight={500} size="lg" color="blue" mt="sm">
//               Meta Business API
//             </Text>
//             <Text color="dimmed" align="center" mt="xs">
//               Streamline operations, access insights, and integrate Meta’s tools
//               into your workflow.
//             </Text>
//             <Group position="center" mt="md">
//               <Button
//                 variant="filled"
//                 color="blue"
//                 radius="xl"
//                 fullWidth
//                 onClick={() =>
//                   window.open("https://developers.facebook.com/docs/", "_blank")
//                 }
//                 style={{
//                   backgroundColor: "#4267b2",
//                   borderRadius: "20px",
//                   padding: "10px 20px",
//                 }}
//               >
//                 Learn More
//               </Button>
//             </Group>
//           </Card>
//         </Container>
//       </main>

//       {/* Footer */}
//       <footer className="px-6 py-4 border-t border-gray-700 text-center text-gray-400">
//         <p>Created with ❤️ using Next.js | Powered by Meta APIs</p>
//       </footer>
//     </div>
//   );
// }

"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, Button, Text, Title, Group, Container } from "@mantine/core";
import Image from "next/image";
import whatsappLogo from "../../public/whatsapp-logo.jpg";
import instagramLogo from "../../public/instagram-logo.jpg";
import metaLogo from "../../public/meta-logo.png";
import messangerLogo from "../../public/messanger-logo.png";
export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-black text-white p-8 relative overflow-hidden">
      {/* Moving Dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Abstract Circles */}
      <motion.div
        className="absolute w-96 h-96 bg-gray-800 rounded-full blur-3xl"
        initial={{ x: "-30%", y: "-30%", opacity: 0 }}
        animate={{ x: "0%", y: "0%", opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ zIndex: 0 }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gray-700 rounded-full blur-3xl"
        initial={{ x: "50%", y: "50%", opacity: 0 }}
        animate={{ x: "20%", y: "20%", opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        style={{ zIndex: 0 }}
      />

      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="text-4xl font-extrabold text-white">MetaBoost </div>
        <Button
          classNames="px-6 py-3"
          onClick={() => router.push("/auth/login")}
          style={{
            backgroundColor: "#1f2937",

            borderRadius: "12px",
            color: "white",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4b5563")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#1f2937")
          }
        >
          Sign In
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <Title order={1} className="text-5xl font-bold text-white mb-6">
          Unlock the Power of Meta APIs
        </Title>
        <Text className="text-lg mb-12 text-gray-400 text-center">
          Leverage Meta’s cutting-edge APIs to accelerate business growth,
          improve customer engagement, and streamline operations.
        </Text>

        {/* API Card */}
        <Container className="flex flex-nowrap justify-center gap-8 overflow-x-auto mt-10">
          <Card
            shadow="lg"
            padding="lg"
            radius="md"
            style={{
              width: "320px",
              height: "400px",
              backgroundColor: "#1f2937",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated Circle Inside Card */}
            <motion.div
              className="absolute w-40 h-40 bg-gray-600 rounded-full blur-2xl"
              initial={{ x: "-50%", y: "-50%", opacity: 0 }}
              animate={{ x: "0%", y: "0%", opacity: 0.4 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{ zIndex: 0 }}
            />

            {/* Image Inside Card */}
            <Image
              src={whatsappLogo} // Update the path based on your project
              alt="WhatsApp Business API"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                alignSelf: "center",
                marginTop: "10px",
                borderRadius: "50%", // Optional for rounded image
              }}
            />

            <Text align="center" weight={500} size="lg" color="teal" mt="sm">
              WhatsApp Business API
            </Text>
            <Text color="dimmed" align="center" mt="xs">
              Enhance customer relationships with automated messaging and secure
              communication channels.
            </Text>

            <Group position="center" mt="md">
              <Button
                variant="filled"
                color="green"
                radius="xl"
                fullWidth
                onClick={() =>
                  window.open("https://www.whatsapp.com/business/api", "_blank")
                }
                style={{
                  backgroundColor: "#28a745",
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
              >
                Learn More
              </Button>
            </Group>
          </Card>

          <Card
            shadow="lg"
            padding="lg"
            radius="md"
            style={{
              width: "320px",
              height: "400px",
              backgroundColor: "#1f2937",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated Circle Inside Card */}
            <motion.div
              className="absolute w-40 h-40 bg-gray-600 rounded-full blur-2xl"
              initial={{ x: "-50%", y: "-50%", opacity: 0 }}
              animate={{ x: "0%", y: "0%", opacity: 0.4 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{ zIndex: 0 }}
            />

            {/* Image Inside Card */}
            <Image
              src={instagramLogo} // Update the path based on your project
              alt="WhatsApp Business API"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                alignSelf: "center",
                marginTop: "10px",
                borderRadius: "50%", // Optional for rounded image
              }}
            />

            <Text align="center" weight={500} size="lg" color="pink" mt="sm">
              Instagram Business API
            </Text>
            <Text color="dimmed" align="center" mt="xs">
              Manage content, analyze insights, and build meaningful connections
              with your audience.
            </Text>

            <Group position="center" mt="md">
              <Button
                variant="filled"
                color="pink"
                radius="xl"
                fullWidth
                onClick={() =>
                  window.open(
                    "https://developers.facebook.com/docs/instagram-api",
                    "_blank"
                  )
                }
                style={{
                  backgroundColor: "#d6247b",
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
              >
                Learn More
              </Button>
            </Group>
          </Card>

          <Card
            shadow="lg"
            padding="lg"
            radius="md"
            style={{
              width: "320px",
              height: "400px",
              backgroundColor: "#1f2937",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated Circle Inside Card */}
            <motion.div
              className="absolute w-40 h-40 bg-gray-600 rounded-full blur-2xl"
              initial={{ x: "-50%", y: "-50%", opacity: 0 }}
              animate={{ x: "0%", y: "0%", opacity: 0.4 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{ zIndex: 0 }}
            />

            {/* Image Inside Card */}
            <Image
              src={messangerLogo} // Update the path based on your project
              alt="Messenger API"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                alignSelf: "center",
                marginTop: "10px",
                borderRadius: "50%",
              }}
            />

            <Text align="center" weight={500} size="lg" color="blue" mt="sm">
              Messenger API
            </Text>
            <Text color="dimmed" align="center" mt="xs">
              Automate conversations, enhance customer support, and connect with
              your audience using Messenger.
            </Text>

            <Group position="center" mt="md">
              <Button
                variant="filled"
                color="blue"
                radius="xl"
                fullWidth
                onClick={() =>
                  window.open(
                    "https://developers.facebook.com/docs/messenger-platform",
                    "_blank"
                  )
                }
                style={{
                  backgroundColor: "#0084FF", // Messenger Blue
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
              >
                Learn More
              </Button>
            </Group>
          </Card>
        </Container>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        🚀 Empowering businesses with Meta APIs 🌐
      </footer>
    </div>
  );
}
