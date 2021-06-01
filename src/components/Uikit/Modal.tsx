import { useEffect } from "react";

interface ModalProps {
  isShown: boolean;
  toggle?: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { title, children, isShown } = props;

  useEffect(() => {
    if (isShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isShown]);

  return isShown ? (
    <div className="absolute justify-center align-middle flex w-2/4 flex-col items-center shadow-xl mx-auto border border-gray-300 bg-white">
      <div className="w-full justify-center">
        <div className="flex flex-row justify-between p-6  border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-800">{title}</p>
        </div>
        <div className="flex flex-col px-6 py-5 bg-white">
          <div>{children}</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
