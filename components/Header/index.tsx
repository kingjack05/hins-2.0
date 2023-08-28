export const Header = () => {
    return (
        <header className=" mx-auto flex max-w-[1200px] h-20">
            <div className="w-1/4"></div>
            <div className="w-2/4 flex justify-center items-center">
                <img src="/icons/clinical_fe.svg" className="w-10 mr-2" />
                <h1 className="prose-xl m-0">Clinical Note Templates</h1>
            </div>
            <div className="w-1/4 flex justify-end items-end">
                <a
                    className="btn btn-ghost rounded-none"
                    href="/api/auth/login"
                >
                    Login
                </a>
            </div>
        </header>
    )
}
