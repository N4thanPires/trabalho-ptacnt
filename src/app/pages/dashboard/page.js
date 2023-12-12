import Navbar from '@/app/componentes/navbar';
import { getUsers } from '@/app/functions/handlerAcessAPI';
import Link from 'next/link';

import styles from './dash.css'; // Ajuste o caminho conforme necessário

export default async function Dashboard() {
    try {
        const users = await getUsers();

        return (
            <div>
                <Navbar />
                <div className={styles.userContainer}>
                    {users?.map((user, index) => (
                        <div key={index} className={styles.userCard}>
                            <Link href={`/pages/alterar/${user.id}`}>
                                <h1>{user.name} {user.email} {user.password}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error("Erro ao obter usuários:", error);

        return (
            <div>
                <Navbar />
                <p>Erro ao obter usuários.</p>
            </div>
        );
    }
}
