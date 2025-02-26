import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

export default function Modal({
  children,
  show = false,
  maxWidth = '2xl',
  closeable = true,
  onClose = () => {},
}) {
  const close = () => {
      if (closeable) {
          onClose();
      }
  };

  const maxWidthClass = {
      sm: 'sm:max-w-sm',
      md: 'sm:max-w-md',
      lg: 'sm:max-w-lg',
      xl: 'sm:max-w-xl',
      '2xl': 'sm:max-w-2xl',
      '3xl': 'sm:max-w-3xl',
      '4xl': 'sm:max-w-4xl',
      '5xl': 'sm:max-w-5xl',
      '6xl': 'sm:max-w-6xl',
      full: 'sm:max-w-full',
  }[maxWidth];

  return (
      <Transition show={show} leave="duration-200">
          <Dialog
              as="div"
              id="modal"
              className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-0"
              onClose={close}
          >
              <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
              >
                  <div className="absolute inset-0 bg-gray-500/75" />
              </TransitionChild>

              <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                  <DialogPanel
                      className={`relative mx-auto w-full ${maxWidthClass} transform overflow-hidden rounded-lg bg-white shadow-xl transition-all`}
                      style={{ height: '85vh' }} // Ajuste da altura
                  >
                      {children}
                  </DialogPanel>
              </TransitionChild>
          </Dialog>
      </Transition>
  );
}
