import {useTranslations} from "next-intl";

export function Hero() {
    const t = useTranslations('HeroSection');

    return (
        <section id="hero" className="relative w-full pt-10 md:pt-10 pb-5 md:pb-30">
            <div className="max-w-[540px] md:max-w-[860px] lg:max-w-[900px] mx-auto px-4">
                <div className="justify-center items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bold text-center">
                        {t("title")}
                    </h1>
                    <h2 className={'text-3xl md:text-4xl lg:text-5xl mt-5 text-center font-light italic'}>
                        {t("subtitle")}
                    </h2>
                    <p className={'text-2xl md:text-3xl lg:text-4xl mt-5 text-center whitespace-pre-line'}>
                        {t("text")}
                    </p>
                </div>
            </div>
        </section>
    )
}