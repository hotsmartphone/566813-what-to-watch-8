import Footer from '../footer/footer';

function PageNotFound(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Page not found</h1>
      </header>

      <div className="page-content">
        <p>Sorry, but page not found<br />(error 404)</p>
        <a href="/">To main page</a>
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;
