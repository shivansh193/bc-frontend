import Image from "next/image"

import Container  from "./components/Container"
const Home=()=>{
  return(
    <div className="pt-[100px]">
      
    <Image src="/Header.jpg" alt="Hello" width={1900} height={600}/>
    <Container>
      <h1 className="text-4xl font-bold text-white mb-4">
        <em>What We Do: Revolutionizing Document Storage with Blockchain</em>
      </h1>
      <p className="text-lg text-gray-300">
        At DeDoci, we are at the forefront of a digital transformation - one that redefines how businesses and individuals safeguard their documents. Our mission is to empower you with a revolutionary blockchain-based document storage system, delivering unparalleled security, transparency, and accessibility.
      </p>
      <h2 className="text-2xl font-semibold text-white my-4">
        Secure Your Data with Blockchain Technology
      </h2>
      <p className="text-lg text-gray-300">
        Traditional document storage systems often fall victim to security breaches, data loss, and tampering. With our blockchain-based solution, your documents are shielded by the indomitable power of blockchain technology. Every document you store on our platform becomes immutable, resistant to tampering, and virtually impervious to unauthorized access.
      </p>
      <h2 className="text-2xl font-semibold text-white my-4">
        Experience True Decentralization
      </h2>
      <p className="text-lg text-gray-300">
        Gone are the days of relying on centralized storage providers and intermediaries. We put you in control. Our system operates on a decentralized network, ensuring that you, and only you, have full authority over your documents. Say goodbye to third-party oversight and welcome a new era of data sovereignty.
      </p>
      <h2 className="text-2xl font-semibold text-white my-4">
        Transparent, Time-Stamped Records
      </h2>
      <p className="text-lg text-gray-300">
        With [Your Company Name], transparency is paramount. Each document you upload is automatically time-stamped and cryptographically recorded on the blockchain, creating a verifiable history of your data. No more uncertainty about when a document was created or modified – the blockchain keeps an indisputable record.
      </p>
      <h2 className="text-2xl font-semibold text-white my-4">
        Effortless Accessibility
      </h2>
      <p className="text-lg text-gray-300">
        Retrieve your documents anytime, from anywhere. Our user-friendly interface ensures that accessing your stored documents is as easy as a few clicks. Whether you're at the office, on the go, or at home, your important files are just a login away.
      </p>
      <h2 className="text-2xl font-semibold text-white my-4">
        Join the Future of Document Storage
      </h2>
      <p className="text-lg text-gray-300">
        Embrace the future of document storage with [Your Company Name]. Our blockchain-based system is designed to empower businesses and individuals, offering unparalleled data security, complete control, and a level of transparency that was once unimaginable. Welcome to a world where your documents are truly yours.
        <br />
        <br />
        Unlock the potential of blockchain technology for document storage – start your journey with [Your Company Name] today.
      </p>
    </Container>
        </div>
  )
}
export default Home


