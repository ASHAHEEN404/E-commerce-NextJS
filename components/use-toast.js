import { useState } from "react";

export function useToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState({ title: "", description: "" });

  const toast = ({ title, description }) => {
    setMessage({ title, description });
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };

  return { toast, isVisible, message };
}
