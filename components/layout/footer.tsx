export default function Footer() {
    return (
        <footer id="footer" className="h-20 text-muted-foreground bg-muted flex items-center justify-center text-sm mt-auto">
            {/*<div className="mt-auto mx-auto max-w-6xl px-7.5 py-4">*/}
                <p className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Logo+Name. All rights reserved.
                </p>
            {/*</div>*/}
        </footer>
    )
}