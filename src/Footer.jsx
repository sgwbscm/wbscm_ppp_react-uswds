export default function Footer() {
  return (
    <footer className="usa-footer usa-footer--slim">
      <div className="grid-container usa-footer__return-to-top">
        <a href="#">Return to top</a>
      </div>
      <div className="usa-footer__primary-section">
        <div className="usa-footer__primary-container grid-row">
          <div className="mobile-lg:grid-col-8">
            <nav className="usa-footer__nav" aria-label="Footer navigation,">
              <ul className="grid-row grid-gap">
                <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a
                    className="usa-footer__primary-link"
                    href="https://portal.wbscm.usda.gov"
                    target="_blank"
                  >
                    WBSCM
                  </a>
                </li>
                <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a
                    className="usa-footer__primary-link"
                    href="tel:1-800-555-5555"
                    target="_blank"
                  >
                    877-WBSCM-4U or 877-927-2648
                  </a>
                </li>
                <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a
                    className="usa-footer__primary-link"
                    href="mailto:WBSCM.servicedesk@caci.com"
                    target="_blank"
                  >
                    WBSCM.servicedesk@caci.com{' '}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-lg:grid-col-4">
            <address className="usa-footer__address">
              <div className="grid-row grid-gap">
                <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div className="usa-footer__contact-info"></div>
                </div>
                <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div className="usa-footer__contact-info"></div>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="usa-footer__logo grid-row grid-gap-2">
            <div className="grid-col-auto">
              <img
                width="50px"
                height="50px"
                className="usa-footer__logo-img"
                src="/ppp/img/usa-icons/usda-symbol.svg"
                alt=""
              />
            </div>
            <div className="grid-col-auto">
              <p className="usa-footer__logo-heading margin-left-2">
                U.S Department Of Agriculture
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
