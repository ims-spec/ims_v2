

export const ExSidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-md-3 sticky-sidebar bg-light p-3"
          style={{ position: 'sticky', top: 0, height: '85vh' }}
        >
          <h5>Меню</h5>
          <ul className="nav flex-column">
            <li className="nav-item">Пункт 1</li>
            <li className="nav-item">Пункт 2</li>
            <li className="nav-item">Пункт 3</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="col-md-9 p-4">
          <h1>Контент</h1>
          <p>Очень много контента...</p>
          <div style={{ height: '2000px' }} />
        </main>
      </div>
    </div>
  )
}
