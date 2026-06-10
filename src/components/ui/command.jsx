import * as React from "react"
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { FiSearch } from "react-icons/fi"
// Sesuaikan import cn jika letaknya berbeda, misal '@/lib/utils'
import { cn } from "@/lib/utils"

const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    // [V4 FIX]: Paksa manual warna latar putih dan text hitam
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-xl bg-white text-gray-950 border border-gray-100 shadow-md",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      {/* [V4 FIX]: Z-Index super tinggi, Z-50 minimal agar tidak tertutup header */}
      <DialogContent className="fixed left-[50%] top-[50%] z-[100] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-0 shadow-2xl duration-200 rounded-2xl overflow-hidden border border-gray-100 bg-white">
        <DialogTitle className="sr-only">Search Command</DialogTitle>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-2.5 [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  // [V4 FIX]: Paksa border bawah & padding yang rapi
  <div className="flex items-center border-b border-gray-100 px-3 bg-white" cmdk-input-wrapper="">
    <FiSearch className="mr-2 h-5 w-5 shrink-0 opacity-50 text-gray-400" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900",
        className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  // [V4 FIX]: Latar belakang list harus dipastikan putih
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden p-2 bg-white", className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm text-gray-500 bg-white" {...props} />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  // [V4 FIX]: Paksa styling warna text untuk judul group
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 bg-white [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-gray-400 [&_[cmdk-group-heading]]:uppercase",
      className
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-gray-100", className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  // [V4 FIX]: Paksa styling warna text saat item dipilih/hover
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-semibold text-gray-800 outline-none transition-colors data-[selected=true]:bg-gray-50 data-[selected=true]:text-gray-950 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 cursor-pointer",
      className
    )}
    {...props}
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-gray-400 font-mono", className)}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
}