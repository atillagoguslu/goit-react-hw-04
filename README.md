# React Image Gallery

A modern, responsive image gallery application built with React and Vite, featuring integration with the Unsplash API for high-quality image browsing.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.5-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- **Dynamic Image Loading**: Fetch and display high-quality images from Unsplash
- **Infinite Scroll**: Load more images as you scroll
- **Search Functionality**: Search for specific images with keywords
- **Modal View**: Click on images to view them in a larger modal with additional details
- **Responsive Design**: Optimized for all screen sizes
- **Loading States**: Smooth loading indicators for better user experience
- **Error Handling**: Graceful error management and user feedback

## 🛠️ Built With

- **React** - UI Library
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API requests
- **React Modal** - Modal component
- **React Hot Toast** - Toast notifications
- **React Loader Spinner** - Loading animations

## 📦 Project Structure

```
src/
├── components/
│   ├── gallery/
│   │   ├── AnImageCard.jsx
│   │   └── AnImageCard.module.css
│   ├── header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   └── fetchers/
│       ├── getImages.js
│       └── searchImages.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Features in Detail

### Image Gallery

- Displays a grid of images from Unsplash
- Responsive layout adapting to screen size
- Lazy loading for optimal performance

### Search Functionality

- Real-time image search
- Debounced search input
- Clear search results

### Modal View

- Large image preview
- Photographer credits
- Image description
- Easy navigation

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for providing the image API
- React team for the amazing framework
- All contributors and maintainers

---

Made with ❤️ by [Your Name]
