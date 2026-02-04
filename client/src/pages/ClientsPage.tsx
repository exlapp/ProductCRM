const clients = [
  {
    id: "1",
    name: "Иванов Иван",
    phone: "+79123456789",
    email: "ivanov@example.com",
    createdAt: "2024-05-10"
  }
];

export const ClientsPage = () => {
  return (
    <section>
      <header className="page-header">
        <div>
          <h2>Clients</h2>
          <p>Централизованный список клиентов с базовой фильтрацией.</p>
        </div>
        <button className="primary">Add client</button>
      </header>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Email</th>
              <th>Дата добавления</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
