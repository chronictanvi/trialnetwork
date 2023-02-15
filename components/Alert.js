function Alert({ open, onClose, children }) {
  if (!open) return null;

  return (
    <Fragment>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Modal Title</h2>
            <button
              className="text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </Fragment>
  );
}

export default Alert;
