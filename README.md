# Signals vs Redux Performance Benchmark

A comprehensive React application demonstrating the performance differences between **Preact Signals** and **Redux** state management solutions through interactive benchmarks and real-time visualizations.

## 🎯 Overview

This project provides side-by-side performance comparisons between Signals and Redux, showcasing how different state management approaches affect React application performance, re-render counts, and user experience.

**🔗 Live Demo**: [signals-vs-redux.netlify.app](https://signals-vs-redux.netlify.app)

## 🚀 Features

### 📊 Performance Benchmarks
- **Basic Comparison**: Single Signal vs Redux slice across multiple widgets
- **Multi-State Stress Test**: Hundreds of independent state slices running simultaneously  
- **Mixed Environment**: Performance impact when both solutions coexist
- **Interactive Mutation**: Real-time widget manipulation with live performance metrics

### 🔧 Interactive Controls
- **Dynamic Widget Count**: Scale from 1 to 1000+ widgets
- **Adjustable Intervals**: From 16ms (60fps) to custom update rates
- **Live Value Editing**: Modify individual widget values during runtime
- **Performance Monitoring**: Real-time FPS and render count tracking

### 🎨 Visual Feedback
- **Re-render Highlighting**: Visual indicators for component updates
- **Status Indicators**: Real-time sync status for each widget
- **Animated Progress**: Dynamic widgets showing state changes
- **Performance Metrics**: Built-in timing measurements

## 🏗️ Architecture

### 📁 Project Structure
```
src/
├── pages/                     # Demo routes
│   ├── signal/               # Pure Signals demo
│   ├── redux/                # Pure Redux demo  
│   ├── multi-signal/         # Multiple Signal widgets
│   ├── multi-redux/          # Multiple Redux slices
│   ├── signal-redux/         # Mixed environment test
│   └── incoming-signal/      # Interactive mutation demo
├── store/
│   ├── signal/               # Signal state management
│   ├── redux/                # Redux state management  
│   └── combinedState.ts      # Mixed state orchestration
└── providers/
    └── ReduxProvider.tsx     # Redux provider wrapper
```

### 🛠️ Tech Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS
- **State Management**: 
  - `@preact/signals-react` - Zero-render signals
  - `@reduxjs/toolkit` - Modern Redux with RTK
- **Build**: Vite, ESLint
- **Routing**: React Router DOM

## 🎮 Demo Routes

| Route | Description |
|-------|-------------|
| `/signal` | Pure Signals demo with multiple widgets |
| `/redux` | Pure Redux demo showing re-render overhead |
| `/multi-signal` | Hundreds of independent Signal widgets |
| `/multi-redux` | Hundreds of Redux slices (performance stress test) |
| `/signal-redux` | Mixed environment showing Redux impact on Signals |
| `/incoming-signal` | Interactive real-time widget value mutation |

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- Modern browser with React DevTools

### Installation
```bash
# Clone and install
git clone https://github.com/ChiragChrg/Signals-vs-Redux.git
cd Signals-vs-Redux
npm install  # or bun install

# Start development
npm run dev  # or bun dev
```

### 🔧 Recommended Browser Extensions
1. **[React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)** - Enable "Highlight updates when components render"
2. **[FPS Monitor](https://chromewebstore.google.com/detail/fps-extension/gdkkmimldhefhmmmlalioafomdlahcog)** - Track real-time rendering performance

## 📈 Performance Results

### ⚡ Signals Advantages
- **Zero Re-renders**: Direct DOM updates bypass React reconciliation
- **Granular Updates**: Only affected elements update, not component trees
- **Consistent 60fps**: Performance remains stable regardless of scale
- **Memory Efficient**: Minimal overhead for state subscriptions

### 🐌 Redux Limitations  
- **Component Re-renders**: `useSelector()` triggers full component updates
- **Performance Degradation**: Exponential slowdown with scale
- **Memory Overhead**: Extensive component tree reconciliation
- **Cascade Effects**: Single state change triggers hundreds of re-renders

### 📊 Benchmark Data
| Widget Count | Redux FPS | Signals FPS | Performance Gain |
|--------------|-----------|-------------|------------------|
| 100          | ~45fps    | 60fps       | +33%            |
| 300          | ~25fps    | 60fps       | +140%           |
| 500          | ~15fps    | 60fps       | +300%           |
| 1000+        | <10fps    | 60fps       | +500%+          |

## 🎯 Key Implementation Examples

### Signals (Zero Re-renders)
```tsx
// Direct DOM manipulation - no React re-renders
effect(() => {
    const value = widget?.metric.value || 0;
    if (barRef.current) {
        barRef.current.style.width = `${value}%`;
    }
});
```

### Redux (Component Re-renders)
```tsx
// Traditional pattern - triggers full component re-render
const widget = useSelector((state: RootState) => state[id]);
```

## 🛠️ Build Commands
```bash
npm run build     # Production build
npm run preview   # Preview build locally
npm run lint      # Code linting
```

## 🤝 Contributing
1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push and create Pull Request

## 📄 License
MIT License - Open source and free to use.

## 🔗 Resources
- **GitHub**: [ChiragChrg/Signals-vs-Redux](https://github.com/ChiragChrg/Signals-vs-Redux)
- **Preact Signals**: [@preact/signals-react](https://www.npmjs.com/package/@preact/signals-react)
- **Redux Toolkit**: [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)

---

> **💡 Pro Tip**: Enable React DevTools "Highlight updates when components render" to visualize the performance differences in real