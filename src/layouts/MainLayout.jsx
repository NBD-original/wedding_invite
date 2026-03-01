export default function MainLayout({ children }) {
    return (
      <div className="app">
        <main className="page">{children}</main>
      </div>
    );
  }
  