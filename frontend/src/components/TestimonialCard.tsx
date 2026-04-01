import React from "react";
import { assets } from "../assets/assets";

interface RootProps {
  children: React.ReactNode;
}

interface RatingProps {
  rating: number;
}

interface CommentProps {
  comment: string;
}

interface UserInfoProps {
  name: string;
  title: string;
  image: string;
}

interface TestimonialCardProps {
  rating: number;
  comment: string;
  userInfo: UserInfoProps;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <div className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer">
      {children}
    </div>
  );
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <img
            key={index}
            className="w-4 h-4"
            alt="star"
            src={index < rating ? assets.star_icon : assets.star_dull_icon}
          />
        ))}
    </div>
  );
};

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return <p className="text-gray-500 text-sm my-5">"{comment}"</p>;
};

const UserInfo: React.FC<UserInfoProps> = ({ name, title, image }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={image} className="w-12 object-contain rounded-full" alt="" />
      <div className="text-sm text-gray-600">
        <h3 className="font-medium">{name}</h3>
        <p className="text-xs text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export const TestimonialCardRoot: React.FC<TestimonialCardProps> = ({
  rating,
  comment,
  userInfo,
}) => {
  return (
    <TestimonialCard.Root>
      <TestimonialCard.Rating rating={rating} />
      <TestimonialCard.Comment comment={comment} />
      <TestimonialCard.UserInfo {...userInfo} />
    </TestimonialCard.Root>
  );
};

export const TestimonialCard = Object.assign(TestimonialCardRoot, {
  Rating,
  Comment,
  UserInfo,
  Root,
});
