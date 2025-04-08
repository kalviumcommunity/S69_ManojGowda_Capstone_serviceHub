import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#0574B9]">About ServiceHub</h1>
      <p className="text-lg text-gray-700 mb-6">
        ServiceHub is a dynamic platform built to bridge the gap between clients seeking quality services and professionals eager to offer them. From legal experts and digital marketers to skilled tradespeople and accountants, ServiceHub empowers both service providers and users by offering a space for seamless discovery, interaction, and collaboration.
      </p>
      <h2 className="text-2xl font-semibold text-[#0574B9] mb-3">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        To simplify the way people connect with trusted professionals. We aim to create a reliable and transparent environment where users can easily find experts who meet their needs, and professionals can grow their reach and showcase their skills.
      </p>
      <h2 className="text-2xl font-semibold text-[#0574B9] mb-3">Who We Serve</h2>
      <p className="text-gray-700 mb-6">
        ServiceHub is for everyone—individuals looking for dependable services and professionals across various fields wanting to expand their client base. Our categories include:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-6">
        <li>Legal Services</li>
        <li>Digital Marketing</li>
        <li>Accounting</li>
        <li>Chartered Accountants</li>
        <li>Skilled Trade Professionals</li>
      </ul>
      <h2 className="text-2xl font-semibold text-[#0574B9] mb-3">Why Choose Us?</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Simple and intuitive user experience</li>
        <li>Verified professional profiles</li>
        <li>Smart filters to find the right fit quickly</li>
        <li>Free registration for professionals</li>
        <li>Transparent communication and support</li>
      </ul>
    </div>
  );
};

export default AboutPage;
