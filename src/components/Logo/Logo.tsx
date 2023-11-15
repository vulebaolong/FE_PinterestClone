import LogoIcon from "./LogoIcon";

function Logo() {
    return (
        <a href="/" className="hidden w-fit lg:block">
            <div className="flex flex-row items-center gap-1 px-3">
                <LogoIcon />
                <div
                    style={{
                        letterSpacing: "-1px",
                    }}
                >
                    <h1 className="font-semibold text-xl text-[#cc0000]">Pinterest</h1>
                </div>
            </div>
        </a>
    );
}
export default Logo;
