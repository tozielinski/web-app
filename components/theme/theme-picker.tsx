import {useTheme} from "next-themes";
import {FaSun, FaMoon, FaComputer} from "react-icons/fa6";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

export default function ThemePicker() {
    const {setTheme, theme} = useTheme();
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    id={'themePicker'}
                    aria-label={'Theme Picker'}
                    variant={'outline'}
                >
                    <FaSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <FaMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-0 pr-2">
                <DropdownMenuCheckboxItem checked={theme === "light"} onClick={() => {setTheme("light");}}><FaSun /></DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === "dark"} onClick={() => {setTheme("dark");}}><FaMoon /></DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === "system"} onClick={() => {setTheme("system");}}><FaComputer /></DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}