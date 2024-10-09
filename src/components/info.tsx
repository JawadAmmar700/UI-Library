import { Link, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import HighlightText from "./highlight-text";

const Info = () => {
  return (
    <div className="py-5 flex flex-wrap space-x-3 justify-center">
      <div className="flex items-center font-bold text-xs">
        <Phone className="h-4" />
        <HighlightText>+96176621277</HighlightText>
      </div>
      <div className="flex items-center font-bold text-xs">
        <Mail className="h-4" />
        <HighlightText>jawadammar000@gmail.com</HighlightText>
      </div>

      <div className="flex items-center font-bold text-xs col-span-2 ">
        <Link className="h-4" />
        <HighlightText>https://www.linkedin.com/in/jawad-ammar</HighlightText>
      </div>
      <div className="flex items-center font-bold text-xs col-span-2 ">
        <Link className="h-4" />
        <HighlightText>https://www.github.com/jawadammar700</HighlightText>
      </div>
      <div className="flex items-center font-bold text-xs  ">
        <MapPin className="h-4" />
        <HighlightText>Ain Anoub, Aley, Lebanon</HighlightText>
      </div>
    </div>
  );
};

export default Info;
