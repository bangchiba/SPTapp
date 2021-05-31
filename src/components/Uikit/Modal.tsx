import { useEffect } from 'react';

interface ModalProps {
  isShown: boolean;
  toggle: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { title, children, toggle, isShown } = props;

  useEffect(() => {
    if (isShown) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isShown])
  
  return (
      isShown ? (
        <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl absolute">
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">{title}</p>
        </div>
        <div className="flex flex-col px-6 py-5 bg-white">
          <div>{children}</div>
        </div>
        <div className="flex flex-row items-center justify-end p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <button className="mr-5" onClick={toggle}>Batal</button>
          <button className="px-4 py-2 text-white font-semibold bg-red-600 rounded">
            Simpan
          </button>
        </div>
      </div>
      ) : null
  )
}

export default Modal;
