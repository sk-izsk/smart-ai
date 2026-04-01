import React from "react";
import { dummyTestimonialData } from "../mockData";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial: React.FC = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">Loved by Creators</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
        {dummyTestimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            comment={testimonial.content}
            userInfo={{
              name: testimonial.name,
              title: testimonial.title,
              image: testimonial.image,
            }}
          />
        ))}
      </div>
    </div>
  );
};
