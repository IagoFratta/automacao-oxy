//exemplo de utilização para geração de dados

export const generateRandomUser = () => {
    return {
        id: Math.floor(Math.random() * 1000),
        name: `User${Math.floor(Math.random() * 1000)}`,
        email: `user${Math.floor(Math.random() * 1000)}@example.com`,
    };
};