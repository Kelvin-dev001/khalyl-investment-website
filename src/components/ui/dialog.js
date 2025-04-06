import * as React from "react"

const DialogContext = React.createContext()

function Dialog({ children, ...props }) {
  const [open, setOpen] = React.useState(false)
  
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

const DialogTrigger = React.forwardRef(({ children, ...props }, ref) => {
  const { setOpen } = React.useContext(DialogContext)
  
  return React.cloneElement(children, {
    onClick: () => setOpen(true),
    ref,
    ...props
  })
})

const DialogContent = React.forwardRef(({ children, ...props }, ref) => {
  const { open, setOpen } = React.useContext(DialogContext)
  
  if (!open) return null
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div 
        ref={ref}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
        {...props}
      >
        {children}
        <button 
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
    </div>
  )
})

export { Dialog, DialogTrigger, DialogContent }