import {APPLICATION_NAME, PAGES} from "../common/constants";
import logo from "../resources/img/logo.png";

export default function Header() {
    return (
        <header className="p-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/"
                       className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none pr-1">
                        <img
                            className="h-12"
                            src={logo}
                            alt={APPLICATION_NAME} />
                        <div className="font-['Open_Sans']">
                            <span className="px-1">heap</span>
                            <strong>overflow</strong>
                        </div>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href={PAGES.questions} className="nav-link px-2 link-body-emphasis">Questions</a></li>
                    </ul>

                    <form className="flex-1 mx-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="flex flex-row">
                        <div>
                            <a href="#" className="btn btn-outline-primary mx-1">
                                Log in
                            </a>
                        </div>
                        <div>
                            <a href="#" className="btn btn-primary">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
