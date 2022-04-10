import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {


    const [categories, setCategories] = useState(['kirby super start']);

    return (
        <div>
            <h2 className="app-title">GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
                {
                    categories.map((category) => (
                        <GifGrid key={category} 
                        category={category}/>                    
                    ))
                }
        </div>
    );
    }

export default GifExpertApp;