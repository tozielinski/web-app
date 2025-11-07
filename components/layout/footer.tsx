export default function Footer() {
    return (
        <footer id="footer" className="h-20 bg-gray-900 text-gray-300 flex items-center justify-center text-sm mt-auto">
            {/*<div className="mt-auto mx-auto max-w-6xl px-7.5 py-4">*/}
                <p className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Logo+Name. All rights reserved.
                </p>
            {/*</div>*/}
        </footer>
    )
}