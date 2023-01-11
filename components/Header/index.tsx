export const Header = () => {
    return (
        <header className="bg-primary-content flex h-20">
            <div className="w-3/4 flex items-center">
                <img src="/icons/clinical_fe.svg" className="w-10 mr-2" />
                <h1 className="prose-xl m-0">Clinical Note Templates</h1>
            </div>
            <div className="w-1/4 flex justify-end items-end">
                <button className="btn btn-ghost rounded-none">Sign In</button>
            </div>
        </header>
    )
}
