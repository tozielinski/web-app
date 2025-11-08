import {Locale, useLocale} from 'use-intl';
import {useRouter} from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {DE, GB, IT} from 'country-flag-icons/react/3x2';
import {FaGlobe} from 'react-icons/fa6';

export default function LanguagePicker() {
    const locale = useLocale() as Locale;
    const router = useRouter();

    function handleLocaleChange(newLocale: Locale) {
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=strict`;
        router.refresh();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    id={'languagePicker'}
                    aria-label={'Language Picker'}
                    variant={'ghost'}
                >
                    <FaGlobe/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="min-w-0 pr-2 text-muted-foreground bg-muted"
            >
                <DropdownMenuCheckboxItem
                    checked={locale === "en"}
                    onClick={() => {handleLocaleChange('en');}}
                >
                    <GB
                        title={"United Kingdom"}
                        className="size-4"
                    />
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={locale === 'de'}
                    onClick={() => {handleLocaleChange('de');}}
                >
                    <DE
                        title={'Deutschland'}
                        className={'size-4'}
                    />
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={locale === 'it'}
                    onClick={() => {handleLocaleChange('it');}}
                >
                    <IT
                        title={'Italia'}
                        className={'size-4'}
                    />
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}