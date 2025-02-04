import aiChefLogo from "/images/aichef.webp"

export default function Header() {
    return (
        <header>
            <img src={aiChefLogo} alt="chef-logo"/>
            <h1 title="Chef" className="header-text">Chef Claude</h1>
        </header>
    )
}