import React from "react";

interface Props {}

interface TitleProps {
  children: React.ReactNode;
}

export const TextInputCardTitle: React.FC<TitleProps> = ({ children }) => {
  return <div className="flex items-center gap-3">{children}</div>;
};

interface InputProps {
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const TextInputCardInput: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  label,
}) => {
  return (
    <>
      <p className="mt-6 text-sm font-medium">{label}</p>
      <input
        type="text"
        className="w-full p-2 px-3 mt-2 text-sm border border-gray-300 rounded-md outline-none"
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
    </>
  );
};

interface ContentProps {
  children: React.ReactNode;
}
export const TextInputCardContent: React.FC<ContentProps> = ({ children }) => {
  return <>{children}</>;
};

interface ButtonProps {
  children: React.ReactNode;
  fromColor: string;
  toColor: string;
}

export const TextInputCardButton: React.FC<ButtonProps> = ({ children, fromColor, toColor }) => {
  return (
    <button
      className={`w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[${fromColor}] to-[${toColor}] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer`}
    >
      {children}
    </button>
  );
};

interface RootProps {
  children: React.ReactNode;
  handleSubmit: (e: React.SubmitEvent) => void;
}

export const TextInputCardRoot: React.FC<RootProps> = ({ children }) => {
  return (
    <form className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
      {children}
    </form>
  );
};

export const TextInputCard = Object.assign(TextInputCardRoot, {
  Title: TextInputCardTitle,
  Input: TextInputCardInput,
  Content: TextInputCardContent,
  Button: TextInputCardButton,
});
