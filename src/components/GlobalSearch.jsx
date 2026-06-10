import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  CreditCard,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // Listener tombol Ctrl + K / Cmd + K
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const goTo = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <>
      {/* Tampilan Trigger Tombol Search di Header */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-[#FAFAFA] border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm text-gray-400 text-left outline-none hover:border-red-300 transition-colors flex items-center justify-between cursor-pointer"
      >
        <span>Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 bg-white px-1.5 font-mono text-[10px] font-medium text-gray-400">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Dialog Pop-up Isinya Sesuai Struktur Dokumen Resmi Shadcn */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => goTo("/")}>
              <LayoutDashboard />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => goTo("/customers")}>
              <Users />
              <span>Customers CRM</span>
            </CommandItem>
            <CommandItem onSelect={() => goTo("/spareparts")}>
              <Package />
              <span>Spareparts Inventory</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}