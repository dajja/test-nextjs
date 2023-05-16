export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>Navbar cua About</nav>
            <main>
                {children}
            </main>
        </>
    )
}
