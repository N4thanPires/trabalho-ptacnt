export default async function Dashboard() {
    try {
        const users = await getUsers();
        
        return (
            <div>
                <Navbar />
                {users?.map((user, index) =>
                    <div key={index}>
                        <h1>{user.name} {user.password}</h1>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error("Erro ao obter usuários:", error);
        // Pode adicionar uma mensagem de erro na interface do usuário se necessário
        return (
            <div>
                <Navbar />
                <p>Erro ao obter usuários. Tente novamente mais tarde.</p>
            </div>
        );
    }
}
