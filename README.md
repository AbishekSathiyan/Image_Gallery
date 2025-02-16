# Image Gallery

A responsive image gallery built with **React, HTML, CSS, and JavaScript**. The gallery is designed to display images in a **grid layout** and adapt to different screen sizes.

## 🚀 Features
- 🎨 **Responsive Design** – Adjusts for desktop & mobile devices.
- 🖼️ **Grid Layout** – Displays images in a structured format.
- 🔍 **Hover Effects** – Smooth zoom animation on hover.
- 📱 **Mobile-Friendly** – Ensures images are square on smaller screens.

## 📂 Project Structure
```
Image_Gallery/
│-- public/              # Static assets
│-- src/
│   │-- components/      # Reusable components
│   │-- App.js           # Main component
│   │-- index.js         # Entry point
│-- package.json         # Dependencies & scripts
│-- README.md            # Project documentation
```

## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Image_Gallery.git
   cd Image_Gallery
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## 📌 Responsive Fixes
For mobile devices, the gallery ensures images **maintain a square aspect ratio** using CSS:
```css
@media (max-width: 768px) {
  .image-container img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1; /* Ensures square images */
  }
}
```

## 🤝 Contributing
Pull requests are welcome! Feel free to fork and improve the project.

## 📜 License
This project is **MIT Licensed**.

---

Let me know if you want any modifications! 🚀
