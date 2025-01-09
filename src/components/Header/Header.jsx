import './header.css';

export default Header;

function Header({ headTitle, input }) {
    return (
        <div className="header">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="header img"
                className={`header-img ${
                    input ? 'header-img-expand' : 'header-img-shrink'
                }`}
            />
            <h1 className={`header-text ${input? 'header-text-expand' : 'header-text-shrink'}`}>{headTitle}</h1>
        </div>
    );
}
