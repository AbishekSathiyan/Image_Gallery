import React, { useState } from "react";

import emailjs from "emailjs-com";
import "./App.css";
import { FaLaptop, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import img1 from "./assets/img_1.jpg";
import img2 from "./assets/img_2.jpg";
import img3 from "./assets/img_3.jpg";
import img4 from "./assets/img_4.jpg";
import img5 from "./assets/img_5.jpg";
import img6 from "./assets/img_6.jpg";
import img7 from "./assets/img_7.jpg";
import img8 from "./assets/img_8.jpg";


const GalleryComponent = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const captions = [
    "Pranavan", "Survesh", "Maheshwaran", "Yuvan",
    "Kumudhini", "Karthika", "Kalarivan", "Thavapriya"
  ];

  return (
    <div className="gallery-container">
      <h1 className="heading">Abi Image Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`Image ${index + 1}`} />
            <p>{captions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_064phx6",
        "template_7utm1ap",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "snTHEuCIgnl90M1Jk"
      )
      .then((response) => {
        console.log("Message sent successfully", response);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send message", error);
        setStatus("Failed to send message. Try again!");
      });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-card">
        <h2 className="contact-form-title">Contact Me</h2>
        {status && <p className={status.includes("failed") ? "status-fail" : "status-success"}>{status}</p>}
        <form onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="6"></textarea>
          <button type="submit" className="contact-form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <GalleryComponent />
      <ContactForm />

      {/* Social Media Links */}
      <div className="social-media-icons">
        <a href="https://abisheksathiyan.github.io/Abishek_Portfolio/" target="_blank" rel="noopener noreferrer"><FaLaptop size={30} /></a>
        <a href="https://www.instagram.com/entabilogist_abi/" target="_blank" rel="noopener noreferrer"><FaInstagram  size={30}/></a>
        <a href="https://github.com/AbishekSathiyan/" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a>
        <a href="https://www.linkedin.com/in/abishek04" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a>
      </div>
    </div>
  );
}

export default App;
