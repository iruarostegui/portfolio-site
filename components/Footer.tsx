export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="flex flex-row justify-stretch items-stretch w-full py-3 border-t border-[#777777]">
      <span className="text-xs leading-[2em] text-[#777777] font-normal">
        © {currentYear} No rights reserved
      </span>
      <span className="text-xs leading-[2em] text-[#777777] font-normal ml-auto">
        Who is Iru? Still figuring it out.
      </span>
    </footer>
  )
}

