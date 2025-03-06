import { createContext, useState } from "react";

export const SidBar = createContext();

export default function SidBarContext({ children }) {
   const [open, setOpen] = useState(false);  // تأكد من أن `setOpen` معرف هنا
   return (
      <SidBar.Provider value={{ open, setOpen }}> {/* هنا نقدم `open` و `setOpen` */}
         {children}
      </SidBar.Provider>
   );
}
