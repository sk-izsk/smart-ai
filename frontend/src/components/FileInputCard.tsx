interface TitleProps {
  children: React.ReactNode;
}

export const TextInputCardTitle: React.FC<TitleProps> = ({ children }) => {
  return <div className="flex items-center gap-3">{children}</div>;
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

interface FileInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  suffix?: React.ReactNode;
  accept: string;
}

export const FileInput: React.FC<FileInputProps> = ({ onChange, label, suffix, accept }) => {
  return (
    <>
      <p className="mt-6 text-sm font-medium">{label}</p>
      <input
        type="file"
        className="w-full p-2 px-3 mt-2 text-sm border border-gray-300 rounded-md outline-none text-gray-600"
        required
        onChange={onChange}
        accept={accept}
      />
      {suffix && <p className="text-xs text-gray-500 font-light mt-1">{suffix}</p>}
    </>
  );
};

interface RootProps {
  children: React.ReactNode;
  handleSubmit: (e: React.SubmitEvent) => void;
}

export const TextInputCardRoot: React.FC<RootProps> = ({ children, handleSubmit }) => {
  return (
    <form
      className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export const FileInputCard = Object.assign(TextInputCardRoot, {
  Title: TextInputCardTitle,
  FileInput: FileInput,
  Button: TextInputCardButton,
  Content: TextInputCardContent,
});
