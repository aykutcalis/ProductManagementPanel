import { useState, useEffect } from "react";
import "./App.css";
import ProductForm from "./components/productForm";
import ProductSearch from "./components/productSearch";
import { useTheme, IconButton } from "@mui/material";
import ProductValue from "./components/productValue";
import ProductList from "./components/ProductList";

function App({ toggleDarkMode }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className  = theme;
  }, [theme]);
 


  return (
   
      
    <div className="container is-fluid ">
      <button onClick={toggleTheme}>Karanlık Mod</button>
      <ProductForm />
      <ProductSearch />
      <ProductList />
      <ProductValue />
    </div>
  );
}

export default App;
