import React from "react";

// eslint-disable-next-line react/display-name
export const Textarea = React.forwardRef(({
  label,
  className,
  errorMessage,
  ...rest
}, ref) => {
  return (
    <label className="text-sm flex flex-col gap-2 w-full">
      {label && <span>{label}</span>}
      <textarea
        className={`px-2 bg-zinc-900 text-sm py-1 rounded focus:outline-none focus:ring-1 ${errorMessage ? 'focus:ring-red-500' : 'focus:ring-zinc-400'} ${className}`}
        autoFocus
        ref={ref}
        {...rest}
      />
      {errorMessage && (
        <span className="text-red-500">
          {errorMessage}
        </span>
      )}
    </label>
  )
})
