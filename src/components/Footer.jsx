function Footer() {
    return <footer className="page-footer blue accent-1">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://nastya-88.github.io/react-shop/">Repo</a>
            </div>
        </div>
    </footer>
}
export { Footer };