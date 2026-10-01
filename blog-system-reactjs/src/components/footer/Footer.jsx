export default function Footer() {
    return (
        <>
        {/* Footer Start */ }
        < div className = "container py-4 bg-secondary text-center" >
            <p className="m-0 text-white">
                ©{" "}
                <a className="text-white font-weight-bold" href="#">
                    Your Site Name
                </a>
                . All Rights Reserved. Designed by{" "}
                <a
                    className="text-white font-weight-bold"
                    href="https://htmlcodex.com"
                >
                    HTML Codex
                </a>
            </p>
        </div >
        {/* Footer End */ }
        </>
    )
}