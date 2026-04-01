import React from "react";

const footerItem = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact us", href: "#" },
  { name: "Privacy policy", href: "#" },
];

export const FooterCompany: React.FC = () => {
  return (
    <div className="flex-1 flex items-start md:justify-end gap-20">
      <div>
        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
        <ul className="text-sm space-y-2">
          {footerItem.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
        <div className="text-sm space-y-2">
          <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="flex items-center gap-2 pt-4">
            <input
              className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-primary w-24 h-9 text-white rounded cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
