import react, { ReactElement } from 'react';

type BaseLayoutProps = {
  Navigation: ReactElement,
  Content: ReactElement,
}

const BaseLayout = ({ Navigation, Content }: BaseLayoutProps) => (
  <main className="base-layout">
    <nav className="base-layout__navigation">{Navigation}</nav>
    <div className="base-layout__content">{Content}</div>
  </main>
);

export { BaseLayout };
