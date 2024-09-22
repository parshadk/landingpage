import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Integrations */}
        <div>
          <h3 className="font-bold mb-4">Integrations</h3>
          <ul>
            {[
              "Shopify",
              "Etsy",
              "eBay",
              "Amazon",
              "TikTok Shop",
              "PrestaShop",
              "BigCommerce",
              "Wix",
              "WooCommerce",
              "Squarespace",
              "Printify API",
              "Printify Pop-Up Store",
              "Shutterstock",
            ].map((item) => (
              <li key={item} className="mb-2 hover:text-green-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h3 className="font-bold mb-4">Discover</h3>
          <ul>
            {[
              "Blog",
              "Guides",
              "Products",
              "Etsy print-on-demand",
              "Shopify print-on-demand",
              "Woocommerce print-on-demand",
              "Wix print-on-demand",
              "Squarespace print-on-demand",
              "Make Your Own Shirt",
              "Brands",
              "Pricing",
              "Shipping Rates",
              "Mockup Generator",
            ].map((item) => (
              <li key={item} className="mb-2 hover:text-green-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Start selling */}
        <div>
          <h3 className="font-bold mb-4">Start selling</h3>
          <ul>
            {[
              "Custom T-shirts",
              "Custom Hoodies",
              "Custom Mugs",
              "Custom Socks",
              "Custom Backpacks",
              "Custom Branding",
              "Sell on Etsy",
              "Sell on Social Media",
              "Free T-shirt Designs",
              "Custom Products",
              "Custom All-Over-Print Hoodies",
              "Start a Clothing Line",
              "Start POD Business",
              "Bulk Orders",
              "Transferring To Printify",
            ].map((item) => (
              <li key={item} className="mb-2 hover:text-green-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Printify */}
        <div>
          <h3 className="font-bold mb-4">Printify</h3>
          <ul>
            {[
              "Print on Demand",
              "Print Providers",
              "Experts Program",
              "Printify Express Delivery",
              "Become a Partner",
              "About",
              "Printify Quality Promise",
              "Jobs",
              "Webinars",
              "Printing Profits Podcast",
              "Contact Us",
              "Affiliate",
              "Contact Sales",
              "POD Glossary",
              "Network Fulfillment Status",
              "Merchant Protection",
              "Security",
              "Sitemap",
            ].map((item) => (
              <li key={item} className="mb-2 hover:text-green-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600">
        <div className="container mx-auto px-4">
          <div className="mb-2">
            <a href="#" className="hover:text-green-500">
              Intellectual Property Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-green-500">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-green-500">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-green-500">
              Security
            </a>
          </div>
          <p>&copy; 2024 Printify, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
