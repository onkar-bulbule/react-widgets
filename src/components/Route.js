import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const onLocationChanged = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popState", onLocationChanged, {
            capture: true,
        });

        return () => {
            window.removeEventListener("popState", onLocationChanged, {
                capture: true,
            });
        };
    }, []);
    return currentPath === path ? children : null;
};

export default Route;
